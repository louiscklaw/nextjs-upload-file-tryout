import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Input, Stack, TextField, TextareaAutosize } from '@mui/material';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { QRCodeSVG } from 'qrcode.react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import prettyBytes from 'pretty-bytes';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import _ from 'lodash';
import toast, { Toaster } from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import RedoIcon from '@mui/icons-material/Redo';
import { useTheme } from '@emotion/react';

// import Link from '../../components/Link';
import Link from 'next/link';

import AttachFileIcon from '@mui/icons-material/AttachFile';
import { setup } from 'lib/csrf';

const toast_duration = 15 * 1000;

export default function SelectFileToUpload() {
  const router = useRouter();

  const { t } = useTranslation();
  const theme = useTheme();
  const [show_forwarding_page, setShowForwardingPage] = React.useState(false);

  const [browser_window, setBrowserWindow] = React.useState();

  const ErrSameFileNameNotify = ({ file_names }) =>
    toast.error(
      toast_up => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <Box>
            {t('Sorry but uploading a file with the same name not supported') +
              ' !!' +
              '(' +
              file_names.join(', ') +
              ')'}
          </Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(toast_up.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      { duration: toast_duration },
    );

  const ErrUploadFile = ({ err_message }) =>
    toast.error(
      toast_up => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <Box>{t('Sorry but error found, call louis') + '(err message:' + err_message + ')'}</Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(toast_up.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      { duration: toast_duration },
    );

  const initialValues = {
    selectedFiles: [],
    remarks: '',
  };

  const onSubmit = (values, helpers) => {
    const formData = new FormData();

    for (var i = 0; i < values.selectedFiles.length; i++) {
      formData.append('selectedFiles', values.selectedFiles[i]);
    }

    formData.append('remarks', values['remarks']);

    fetch(`/api/files/upload/`, { method: 'POST', body: formData })
      .then(response => response.json())
      .then(res_json => {
        if (res_json?.message) {
          ErrUploadFile({ err_message: res_json.message });
        } else {
          setShowForwardingPage(true);
          helpers.resetForm();

          console.log({ res_json });

          localStorage.setItem('dir_prefix', res_json['data']['dir_prefix']);

          router.push(`/upload_successful`);
        }
      })
      .catch(err => {
        ErrUploadFile({ err_message: err.message });
        console.log(err);
      })
      .finally(() => {
        helpers.setSubmitting(false);
      });
  };

  React.useEffect(() => {
    localStorage.setItem('dir_prefix', '');
  }, []);

  React.useEffect(() => {
    setBrowserWindow(window);
  }, []);

  if (show_forwarding_page)
    return (
      <>
        <Stack direction={'column'} alignItems={'center'}>
          <Stack direction={'row'} spacing={'1rem'}>
            <Box>{t('forwarding')}</Box>
            <Box>
              <RedoIcon />
            </Box>
          </Stack>

          <Stack>
            <Box paddingTop={'1rem'}>
              <Link href={'/'}>{t('Not forwarding? press here to back')}</Link>
            </Box>
          </Stack>
        </Stack>
      </>
    );

  return (
    <>
      <Toaster />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, setFieldValue, errors, ...props }) => (
          <Form encType="multipart/form-data">
            <input
              type="file"
              id="selectedFiles"
              name="selectedFiles"
              multiple
              onChange={event => {
                let input_files = event.target.files;
                let form_file_list = values['selectedFiles'].map(f => f.name);
                let different_files_list = [];

                let same_name_found = false;
                let file_with_same_name_list = [];

                for (var i = 0; i < input_files.length; i++) {
                  if (form_file_list.indexOf(input_files[i].name) > -1) {
                    same_name_found = true;
                    file_with_same_name_list.push(input_files[i].name);
                  } else {
                    different_files_list.push(input_files[i]);
                    form_file_list.push(input_files[i]);
                  }
                }
                console.log({ different_files_list, input_files, form_file_list });
                setFieldValue('selectedFiles', [...values['selectedFiles'], ...different_files_list]);

                if (same_name_found) ErrSameFileNameNotify({ file_names: file_with_same_name_list });
                event.target.value = '';
              }}
              style={{ display: 'none' }}
            />

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                {/* top */}
                <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} height={'100px'}>
                  <Typography variant="h4" color="text.secondary" gutterBottom>
                    {t('File upload')} <br />
                  </Typography>
                  <Typography variant="h6">({t('Max file size')} 100MB)</Typography>
                </Stack>
                {/* top end */}

                {/* bottom */}
                <Box>
                  <Stack
                    direction={['column', 'row']}
                    justifyContent={'space-between'}
                    spacing={'1rem'}
                    margin={'1rem'}
                    padding={'1rem'}
                  >
                    <Stack
                      direction={['column']}
                      width={['100%', '250px']}
                      maxWidth={['300px']}
                      justifyContent="center"
                      alignItems={'center'}
                      spacing={'2rem'}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => {
                          document.querySelector('#selectedFiles').click();
                        }}
                        sx={{ height: ['100px', values['selectedFiles'].length > 0 ? 'unset' : '250px'] }}
                        disabled={props.isSubmitting}
                      >
                        <Stack
                          direction={'column'}
                          alignItems={'center'}
                          spacing={'1rem'}
                          padding={'1rem'}
                          sx={{ fontSize: ['2rem', values['selectedFiles'].length > 0 ? '2rem' : '3rem'] }}
                        >
                          <FolderOpenIcon sx={{ fontSize: '3rem' }} />
                          <Typography variant="h1" fontSize={'1rem'}>
                            {t('Choose file to upload')}
                          </Typography>
                        </Stack>
                      </Button>
                      <Stack
                        direction={'column'}
                        spacing={'0.2rem'}
                        sx={{
                          width: '100%',
                          backgroundColor: values['selectedFiles'].length > 0 ? 'rgba(128,128,128,0.1)' : 'unset',
                          padding: '1rem',
                          borderRadius: '5px',
                        }}
                      >
                        {values['selectedFiles'].length > 0 ? (
                          <>
                            <Typography variant={'caption'} sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                              {t('File list')}:
                            </Typography>
                            <Box sx={{ borderTop: '1px solid rgba(32,32,32,0.3)' }}></Box>
                          </>
                        ) : (
                          <></>
                        )}

                        {values['selectedFiles'].map((f, i) => {
                          return (
                            <Box key={i}>
                              {i > 0 ? <Divider /> : <></>}
                              <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                paddingY={'1rem'}
                                spacing={'1rem'}
                              >
                                <Box>
                                  <AttachFileIcon />
                                </Box>
                                <Stack direction={'column'} spacing={'0.25rem'} sx={{ width: '200px' }}>
                                  <Typography color="primary" sx={{ wordBreak: 'break-all' }}>
                                    {f.name}
                                  </Typography>
                                  <Typography variant="caption" color="primary" fontWeight={'bold'}>
                                    {prettyBytes(f.size)}
                                  </Typography>
                                </Stack>
                                <Box width={'3rem'} height={'3rem'}>
                                  <IconButton
                                    aria-label="delete"
                                    color="primary"
                                    sx={{ backgroundColor: 'rgba(155, 156, 157,0.2)' }}
                                    onClick={() => {
                                      console.log('click on ' + i);
                                      setFieldValue(
                                        'selectedFiles',
                                        values['selectedFiles'].filter((_, f_i) => f_i != i),
                                      );
                                    }}
                                    disabled={props.isSubmitting}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Box>
                              </Stack>
                            </Box>
                          );
                        })}
                      </Stack>

                      <TextField
                        label="Remarks"
                        variant="outlined"
                        placeholder="leave your remarks here..."
                        onChange={e => (values['remarks'] = e.target.value)}
                        size="small"
                        sx={{ display: [values['selectedFiles'].length > 0 ? 'block' : 'none', 'none'] }}
                        fullWidth
                        rows={'3'}
                        maxRows={'15'}
                        multiline
                      />

                      <Stack
                        direction={['row']}
                        sx={{ width: '100%' }}
                        spacing={'1rem'}
                        justifyContent={'space-between'}
                      >
                        <Button
                          type={'reset'}
                          variant="contained"
                          color={'secondary'}
                          fullWidth
                          startIcon={<HighlightOffIcon />}
                          disabled={values['selectedFiles'].length < 1 || props.isSubmitting}
                        >
                          {t('cancel')}
                        </Button>
                        <Button
                          type={'submit'}
                          variant="contained"
                          fullWidth
                          startIcon={<CloudUploadIcon />}
                          disabled={values['selectedFiles'].length < 1 || props.isSubmitting}
                          color={'success'}
                        >
                          {t('upload')}
                        </Button>
                      </Stack>
                    </Stack>

                    <Box>
                      <Box
                        sx={{
                          borderLeft: '1px solid rgba(0,0,0,0.2)',
                          width: '10px',
                          height: '100%',
                          paddingLeft: '2rem',
                          marginLeft: '2rem',
                        }}
                      ></Box>
                    </Box>
                    <Stack
                      width={['250px']}
                      maxWidth={['300px']}
                      spacing={'1rem'}
                      margin={'1rem'}
                      padding={'1rem'}
                      display={['none', 'flex']}
                      alignItems={'center'}
                    >
                      <Stack
                        style={{
                          display: values['selectedFiles'].length > 0 ? 'none' : 'block',
                        }}
                        direction={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                      >
                        <Box>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {t('scan qr code and get this page using mobile')}
                          </Typography>
                        </Box>
                        <Box>
                          <QRCodeSVG
                            value={browser_window?.location.href}
                            width={'100%'}
                            height={'100%'}
                            fgColor={'rgb(65, 66, 68)'}
                          />
                        </Box>
                      </Stack>

                      <Box
                        width={'250px'}
                        sx={{
                          display: ['none', values['selectedFiles'].length > 0 ? 'block' : 'none'],
                        }}
                      >
                        <TextField
                          label="Remarks"
                          variant="outlined"
                          placeholder="leave your remarks here..."
                          onChange={e => (values['remarks'] = e.target.value)}
                          size="small"
                          rows={'10'}
                          maxRows={'15'}
                          multiline
                          fullWidth
                        />
                      </Box>
                    </Stack>
                  </Stack>
                </Box>

                {/* bottom end */}
              </CardContent>
            </Card>

            {/* <button type="submit">submit</button> */}
          </Form>
        )}
      </Formik>
    </>
  );
}

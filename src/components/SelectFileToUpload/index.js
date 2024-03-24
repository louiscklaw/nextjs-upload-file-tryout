import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Stack } from '@mui/material';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { QRCodeSVG } from 'qrcode.react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Formik, Field, Form } from 'formik';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import prettyBytes from 'pretty-bytes';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import _ from 'lodash';
import toast, { Toaster } from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import RedoIcon from '@mui/icons-material/Redo';

export default function SelectFileToUpload() {
  const { t } = useTranslation();
  const [show_forwarding_page, setShowForwardingPage] = React.useState(false);

  const COLOR_DANGER = '#c0392b';
  const COLOR_SUCCESS = '#16a085';

  const [browser_window, setBrowserWindow] = React.useState();

  const ErrSameFileNameNotify = ({ file_names }) =>
    toast(
      t => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <ErrorIcon sx={{ height: '2rem', width: '2rem', color: COLOR_DANGER }} />
          <Box>
            {'Sorry but uploading a file with the same name not supported !!' + '(' + file_names.join(', ') + ')'}
          </Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(t.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      { duration: 60 * 1000 },
    );

  const ErrUploadFile = ({ err_message }) =>
    toast(
      t => (
        <Stack direction="row" spacing={'0.5rem'} alignItems={'center'}>
          <ErrorIcon sx={{ height: '2rem', width: '2rem', color: COLOR_DANGER }} />
          <Box>{'Sorry but file with the same name not supported ' + '(' + err_message + ')'}</Box>
          <Box>
            <IconButton onClick={() => toast.dismiss(t.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      ),
      { duration: 9915000 },
    );

  const initialValues = {
    avatar: [],
  };

  const router = useRouter();
  const onSubmit = (values, helpers) => {
    const formData = new FormData();

    for (var i = 0; i < values.avatar.length; i++) {
      formData.append('avatar', values.avatar[i]);
    }

    fetch('/api/files/upload', { method: 'POST', body: formData })
      .then(response => response.json())
      .then(res_json => {
        setShowForwardingPage(true);
        helpers.resetForm();
        router.push('/upload_successful');
        localStorage.setItem('dir_prefix', res_json['data']['dir_prefix']);
      })
      .catch(err => {
        ErrUploadFile({ err_message: err.message });
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
            <Box>forwarding</Box>
            <Box>
              <RedoIcon />
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
              id="avatar"
              name="avatar"
              multiple
              onChange={event => {
                let input_files = event.target.files;
                let form_file_list = values['avatar'].map(f => f.name);
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
                setFieldValue('avatar', [...values['avatar'], ...different_files_list]);

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
                      width={['100%', '50%']}
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
                          document.querySelector('#avatar').click();
                        }}
                        sx={{ height: ['100px', values['avatar'].length > 0 ? 'unset' : '250px'] }}
                        disabled={props.isSubmitting}
                      >
                        <Stack
                          direction={'column'}
                          alignItems={'center'}
                          spacing={'1rem'}
                          padding={'1rem'}
                          sx={{ fontSize: ['2rem', values['avatar'].length > 0 ? '2rem' : '3rem'] }}
                        >
                          <FolderOpenIcon sx={{ fontSize: '3rem' }} />
                          <Typography>{t('Choose file to upload')}</Typography>
                        </Stack>
                      </Button>

                      <Stack direction={'column'} spacing={'0.2rem'} sx={{ width: '100%' }}>
                        {values['avatar'].map((f, i) => {
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
                                {/* 2 pick 1 */}

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
                                        'avatar',
                                        values['avatar'].filter((_, f_i) => f_i != i),
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

                      <Stack
                        direction={['row']}
                        justifyContent={'space-between'}
                        sx={{ width: '100%' }}
                        spacing={'1rem'}
                      >
                        <Button
                          type={'reset'}
                          variant="contained"
                          color={'secondary'}
                          fullWidth
                          startIcon={<HighlightOffIcon />}
                          disabled={values['avatar'].length < 1 || props.isSubmitting}
                        >
                          {t('cancel')}
                        </Button>
                        <Button
                          type={'submit'}
                          variant="contained"
                          fullWidth
                          startIcon={<CloudUploadIcon />}
                          disabled={values['avatar'].length < 1 || props.isSubmitting}
                          sx={{ backgroundColor: COLOR_SUCCESS }}
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
                      width={['50%']}
                      maxWidth={['300px']}
                      justifyContent={values['avatar'].length > 0 ? 'center' : 'flex-start'}
                      alignItems={'center'}
                      spacing={'1rem'}
                      margin={'1rem'}
                      padding={'1rem'}
                      display={['none', 'unset']}
                    >
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {t('scan qr code')}
                      </Typography>
                      <Box sx={{ margin: '2rem', width: '12rem', height: '15rem' }}>
                        <QRCodeSVG
                          value={browser_window?.location.href}
                          width={'100%'}
                          height={'100%'}
                          fgColor={'rgb(65, 66, 68)'}
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

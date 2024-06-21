---
title: 4. Accept Criteria
description: ''
tags: [reports, build history, build sessions, testing]
---

<!-- prompt:
I am working on a project about file-sharing web page, the function of this project is something like `fileshare.io`

- output your answer in simplified chinese.
- 請拓展和潤飾我的意思

```
### 4.1 功能标准

- 自動跳轉

  - 到 https://share.louislabs.com
  - 由於相容性關係, 以往發到 https://share.louislabs.com/upload 的請求, 會轉發到 https://share.louislabs.com
  - 因為保安理由, 發到 http:// 的請求會轉發到 https://

- 上傳文件 (TBA)

  - 桌面端上傳
  - 移動端上傳

- 下載文件 (TBA)

  - 桌面端下載
    - 由連結下載
  - 移動端下載
    - 由連結下載
    - 由 QR 碼下載

- Discord 信息傳送 (TBA)
  - 信息當中附有連結，可以給接收方快速前往下載
```
 -->

## 4.1 Functional Requirements

### 4.1.1 Automatic Redirection

When users visit the old URL (`https://share.louislabs.com/upload`) or use a non-secure `http` connection, they will be automatically redirected to the new URL, `https://share.louislabs.com`, ensuring they always access the correct page and enhancing website security.

### 4.1.2 File Upload

- Desktop Upload:

  - Allow users to upload files from their desktop computers or laptops.

- Mobile Upload:
  - Enable file uploads from smartphones or tablets. Provide a user-friendly interface for mobile users, considering their smaller screens and touch interactions.

### 4.1.3 File Download

- Desktop Download:

  - Via Link: Users should be able to right-click the download link and select "Save link as..." to save the file to their device.

- Mobile Download:

  - Via Link: Mobile users should be able to long-press the link to display an options menu and then select "Download link."
  - Via QR Code: Consider implementing a QR code scanning feature that allows users to scan a QR code with their camera to directly access the download page or file. This can enhance the user experience, especially when quick file sharing between devices is needed.

- Discord Message Sending:
  - The message includes a download link, allowing the recipient to quickly access the file. Discord integration is a nice feature for conveniently sharing files with friends or team members who use Discord. You may want to add information about the message format, such as whether it includes additional text, a custom message, or just the link.

## 4.2 Test Cases/Acceptance Criteria

### **Test Case 1**

| #   | Step          | Description                                                                                                                                   | Expected Result |
| --- | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 1   | Visit Website | User accesses the file-sharing webpage, e.g., `https://share.louislabs.com/upload`                                                            |                 |
| 2   | Select File   | User clicks the "Select File" button, a file selection window appears                                                                         |                 |
| 3   | Upload File   | User selects the file to share and clicks the "Upload" button. Upon successful upload, the page redirects to a link page with a 5-letter code |                 |

### **Test Case 2**

> Objective: This test will validate the functionality of the "Back" button on the file-sharing webpage.

| #   | Step           | Description                                                              | Expected Result        |
| --- | :------------- | :----------------------------------------------------------------------- | ---------------------- |
| 1   | Perform Test 1 | Ensure Test Case 1 is completed first to set up the testing environment. |                        |
| 2   | Click "Back"   | Click the "Back" button or key on the webpage.                           | Return to the homepage |

### **Test Case 3**

| #   | Step                  | Description                                                                                                      | Expected Result          |
| --- | :-------------------- | :--------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 1   | Perform Basic Testing | Complete basic functionality tests to ensure the webpage functions as expected, and all features are accessible. | Pass Test Case 1         |
| 2   | Click "Copy Link"     | Verify that the button functions correctly without errors or exceptions.                                         | Link copied to clipboard |
| 3   | Paste to Notepad      | Open Notepad or any text editor and paste the link to ensure it is intact.                                       | Link pasted successfully |

### **Test Case 4**

| #   | Step                            | Description                                                                                                      | Expected Result                      |
| --- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 1   | Perform Basic Testing           | Complete basic functionality tests to ensure the webpage functions as expected, and all features are accessible. | Pass Test Case 1                     |
| 2   | Click "Copy Carousell Link"     |                                                                                                                  | Link copied to clipboard             |
| 3   | Verify Link Copied to Clipboard | Open Notepad, paste the content, and verify the link.                                                            | Link pasted, starting with `ttps://` |

### **Test Case 5**

| #   | Step                                 | Description                                                                                                      | Expected Result              |
| --- | :----------------------------------- | :--------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| 1   | Perform Basic Testing                | Complete basic functionality tests to ensure the webpage functions as expected, and all features are accessible. | Pass Test Case 1             |
| 2   | Scan QR Code on File-Sharing Webpage | Ensure the webpage successfully generates a QR code and it can be scanned using a mobile device.                 |                              |
| 3   | Click the Link                       | Ensure mobile users can successfully access the webpage and download the file by scanning the QR code.           | File downloaded successfully |

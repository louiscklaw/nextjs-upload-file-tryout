---
title: Android Sign
description: This step signs your APK or AAB with the given Android keystore and exports a binary file compatible with Android devices.
tags: [android, mobile, sign]
---

import Screenshot from '@site/src/components/Screenshot';

# Android Sign

**Android Sign** step signs your _APK_ or _AAB_ with the given Android _keystore_ and exports a binary file compatible with Android devices.

:::info
This step follows the [**Android Build**](https://docs.appcircle.io/workflows/android-specific-workflow-steps#android-build) step to sign the unsigned build output if the project doesn't include a _keystore_. If your project includes a _keystore_, the build application step will generate a signed artifact. If you do not disable this step, your artifact will be unsigned and then re-signed using the _keystore_ selected in the **Configuration** or in this step.
:::

### Prerequisites

The workflow steps that need to be executed before running the **Android Build** workflow step, along with their respective reasons, are listed in the table below.

| Prerequisite Workflow Step                                                                         | Description                                                                                                                                |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Git Clone](https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone)                  | This step relies on the **Android Build** step and the **Git Clone** step is necessary for the **Android Build** step to run successfully. |
| [Android Build](https://docs.appcircle.io/workflows/android-specific-workflow-steps#android-build) | The app required for this step is generated by the **Android Build** (or alternative build steps).                                         |

:::caution
If a step other than the **Android Build** step is used to build an app, then the **Android Sign** step depends on this step.
:::

<Screenshot url='https://cdn.appcircle.io/docs/assets/android-workflow-components-android-sign_0.png' alt="image1" />

:::danger
To share the signed apps created as an output of this step or to view them on the **Download Artifacts** page, please ensure that the [**Export Build Artifacts**](https://docs.appcircle.io/workflows/common-workflow-steps/#export-build-artifacts) step is included in your workflow after this step.
:::

### Input Variables

For each component, specific input variables are required for its operation on your system. The input variables necessary for the **Android Sign** are as follows:

<Screenshot url='https://cdn.appcircle.io/docs/assets/android-workflow-components-android-sign_1.png' alt="image1" />

| Variable Name                   | Description                                                                                                                                                                                                                                                                        | Status   |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `$AC_APK_PATH`                  | The path of the _APK_ file. This path is automatically generated in the **Android Build** step. You may need to modify this input variable to provide a different path.                                                                                                            | Required |
| `$AC_AAB_PATH`                  | The path of the _AAB_ file. This path is automatically generated in the **Android Build** step. You may need to modify this input variable to provide a different path.                                                                                                            | Required |
| `$AC_ANDROID_KEYSTORE_PATH`     | _Keystore_ file can be selected in the **Configuration**. This value will be auto-generated depending on your _keystore_ file selection in [signing configuration on Appcircle](https://docs.appcircle.io/build/building-android-applications#signing).                            | Required |
| `$AC_ANDROID_KEYSTORE_PASSWORD` | Password for the selected _keystore_ file. This value will be auto-generated based on your _keystore_ file selection.                                                                                                                                                              | Required |
| `$AC_ANDROID_ALIAS`             | Alias name for the selected _keystore_ file. This value will be auto-generated depending on your **Configuration**                                                                                                                                                                 |
| `$AC_ANDROID_ALIAS_PASSWORD`    | Alias password for the selected _keystore_ file. This value will be auto-generated depending on your **Configuration**                                                                                                                                                             |
| `$AC_V2_SIGN`                   | Defaults to false. Set true if the signature should be done using apksigner instead of jarsigner. For more information, [Apps targeting Android 11 require APK Signature Scheme v2](https://developer.android.com/about/versions/11/behavior-changes-11#minimum-signature-scheme). | Optional |

### Output Variables

The outputs that can result from the operation of this component are listed as follows.

<Screenshot url='https://cdn.appcircle.io/docs/assets/android-workflow-components-android-sign_2.png' alt="image2" />

| Variable Name         | Description                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `$AC_SIGNED_APK_PATH` | Path for the signed _APK_ file output. If an _APK_ file is provided as input, the signed app will also be in _APK_ format.      |
| `$AC_SIGNED_AAB_PATH` | Path for the signed App Bundle file output. If an _AAB_ file is provided as input, the signed app will also be in _AAB_ format. |

:::tip
If both input value types (_AAB_ and _APK_) are provided, the same type of signed app will be generated for both.
:::

To access the source code of this component, please use the following link:

https://github.com/appcircleio/appcircle-android-sign-component.git
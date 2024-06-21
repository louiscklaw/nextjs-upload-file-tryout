---
title: 6. Roles and Permissions
description: This PRD outlines the roles and permissions for various pages and page elements in an application. It aims to define the access and functionality available to different user roles, ensuring a structured and secure system.
tags: [Access Control, User Roles, Page Permissions]
---

<!--
|     | 一级导航 | 页面            | 页面元素              | 分锖一管理员 | 分銷一运营人员 |
| --- | -------- | --------------- | --------------------- | :----------: | :------------: |
| 1   | 首页     | 首页            | -                     |      ✔️      |       ✔️       |****
| 2   | 客户管理 | 门店列表页      | -                     |      ✔️      |       ✔️       |
| 3   | 客户管理 | 门店列表页      | "编辑"按钮            |      ✔️      |       ✔️       |
| 4   | 客户管理 | 门店列表页      | "删除"按钮            |      ✔️      |       ✔️       |
| 5   | 客户管理 | 门店列表页      | "关联账号"按钮        |      ✔️      |       ✔️       |
| 6   | 客户管理 | 门店列表页      | "停用"按钮            |      ✔️      |       ✔️       |
| 7   | 客户管理 | 门店列表页      | 门店名称,是超链接形式 |      ✔️      |       ✔️       |
| 8   | 客户管理 | 门店列表页      | "创建门店"按钮        |      ✔️      |       ✔️       |
| 9   |          | 门店列表页      | -                     |      ✔️      |       ✔️       |
| 10  |          | 门店创建/编辑页 | -                     |      ✔️      |       ✔️       |
| 11  | 客户管理 | 账号列表页      | -                     |      ✔️      |       ✔️       |
| 12  | 客户管理 | 账号列表页      | "编辑"按钮            |      ✔️      |       ✔️       |
| 13  | 客户管理 | 账号列表页      | "删除"按钮            |      ✔️      |       ✔️       |
| 14  | 客户管理 | 账号列表页      | "创建账号"按钮        |      ✔️      |       ✔️       |
| 15  | 客户管理 | 对账管理        | -                     |      ✔️      |       ✔️       |
| 16  | 客户管理 | 发票管理        | -                     |      ✔️      |       ✔️       |
| 17  | 客户管理 | 预付款管理      | -                     |      ✔️      |       ✔️       |
-->

### 6.1 **Role and Permission Matrix**

> Objective:
>
> List out each page, list out each member's role, and the restrictions between them

| No. |     Page     |        Page Element        |      Restrictions       |
| :-: | :----------: | :------------------------: | :---------------------: |
|  1  | Upload Page  |       Upload Button        | No special restrictions |
|  2  | Success Page |        Back Button         | No special restrictions |
|  2  | Success Page | Copy Carousell Link Button | No special restrictions |
|  2  | Success Page |   Copy Share Link Button   | No special restrictions |
|  3  |  Error Page  |        Back Button         | No special restrictions |

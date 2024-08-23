---
title: "Proxmox Pve 유저 추가"
date: 2024-08-22
tags: [Server, Linux, Proxmox]
---

Proxmox VE에 유저를 추가하는 방법을 알아보자.

## Proxmox Pve 유저 추가

### 시스템 유저 추가

먼저, 새로운 유저를 추가하자. 

예를 들어, ggos3이라는 유저를 추가하려면 다음 명령어를 입력하면 된다

```bash
pveum user add ggos3@pve -comment "ggos3"
```

### 유저 비밀번호 설정

유저를 추가한 후에는 비밀번호를 설정해야 한다. 

`ggos3` 유저의 비밀번호를 설정하려면 다음 명령어를 입력하면 된다

```bash
pveum passwd ggos3@pve
```

### 그룹 추가

유저를 그룹에 추가하기 전에, 필요한 그룹을 생성해야 한다. 

예를 들어, `admin`이라는 그룹을 생성하려면 다음 명령어를 입력하면 된다

```bash
pveum group add admin -comment "System Administrators"
```

### 그룹 권한 설정

생성한 그룹에 필요한 권한을 부여하자. 

`admin` 그룹에 `Administrator` 역할을 부여하려면 다음 명령어를 입력하면 된다

```bash
pveum acl modify / -group admin -role Administrator
```

### 유저 그룹 설정

마지막으로, `ggos3` 유저를 `admin` 그룹에 추가하자. 이를 위해 다음 명령어를 입력하면 된다:

```bash
pveum user modify ggos3@pve -group admin
```
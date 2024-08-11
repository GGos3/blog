---
title: "Proxmox Kernel 버전 변경 (업그레이드 / 다운그레이드)"
date: 2024-08-11
tags: [Server, Linux, Proxmox]
---

Proxmox VE에서 사용하는 Kernel 버전을 변경하는 방법을 알아보자.

## Proxmox Kernel 버전 확인

먼저, `Proxmox VE`에서 현재 사용 중인 `Kernel` 버전을 확인해보자. 

명령어는 `Proxmox VE` Shell에서 실행하면 된다.

```bash
proxmox-boot-tool kernel list
```

### Kernel 버전 확인 결과 (단일)

아래와 같이, 현재 사용 중인 `Kernel` 버전을 확인할 수 있다.

`Automatically selected kernels`에 있는`Kernel`이 현재 사용 중인 `Kernel`이다.

```
Manually selected kernels:
None.

Automatically selected kernels:
6.8.4-2-pve
```

### Kernel 버전 확인 결과 (복수)

만약 `Kernel`이 여러 개 설치 되어 있다면, `Automatically selected kernels` 항목 아래에 설치된 `Kerner`들이 나열 된다.

`Pinned Kernel`에 있는 `Kernel`이 현재 `Proxmox VE`에서 사용 중인 `Kernel`이다.

예를 들어, 현재 `6.5.13-5-pve`를 사용 중인 경우는 아래와 같다.

```
Manually selected kernels:
None.

Automatically selected kernels:
6.5.13-5-pve
6.8.12-1-pve
6.8.4-2-pve

Pinned kernel:
6.5.13-5-pve
```

## Proxmox Kernel 버전 변경

### 변경할 Kernel 버전 확인

우선, 설치 가능한 Proxmox Kernel 버전을 확인해보자.

```bash
apt search proxmox-kernel
```

아래와 같이 설치 할 수 있는 `Proxmox Kernel`들이 나열된다

```bash
proxmox-kernel-6.2/stable 6.2.16-20 all
  Latest Proxmox Kernel Image

proxmox-kernel-6.2.16-10-pve/stable 6.2.16-10 amd64
  Proxmox Kernel Image

...

proxmox-kernel-helper/stable,now 8.1.0 all [installed]
  Function for various kernel maintenance tasks.

proxmox-kernel-libc-dev/stable 6.5.11-8 amd64
  Linux support headers for userspace development

```

만약 위와 같이 여러 버전의 `Proxmox Kernel`이 표시되지 않는다면, `PVE Source`가 추가되지 않은 것이다. 

이 경우, 먼저 `PVE Source`를 추가해 주어야 한다.

```bash
proxmox-kernel-6.8/now 6.8.4-2 all [installed,local]
  Latest Proxmox Kernel Image

proxmox-kernel-6.8.4-2-pve-signed/now 6.8.4-2 amd64 [installed,local]
  Proxmox Kernel Image (signed)

proxmox-kernel-helper/now 8.1.0 all [installed,local]
  Function for various kernel maintenance tasks.
```

`PVE Source`설정을 포함해 다른 기타 설정을 스크립트로 간편하게 설정하고 싶다면  아래 글을 참고하자

- [Proxmox-설치-후-설정](https://blog.ggos3.xyz/Proxmox-설치-후-설정)

### Kernel 설치

변경할 Kerner 버전을 확인했다면, 아래 명령어를 실행하여 `Kernel`을 설치한다.

```bash
apt install proxmox-kernel-6.5.13-5-pve-signed && 
apt install proxmox-headers-6.5.13-5-pve
```

여기서 `pve-signed`는 서명된 `Kernel`을 의미하며, 보안과 관련된 추가적인 검증이 이루어진다.

설치된 `Kernel`은 아래 명령어를 통해 다시 확인할 수 있다.

```bash
proxmox-boot-tool kernel list
```

### Kernel 버전 변경

이제, `Proxmox VE`에서 사용 중인 `Kernel` 버전을 변경해보자. 방법은 간단하다.

```bash
proxmox-boot-tool kernel pin 6.5.13-5-pve
```

이후 시스템을 재부팅하여 변경된 `Kernel`이 적용되도록 한다.

```bash
reboot
```

### 버전 변경 확인

재부팅 후, `Kernel` 버전이 변경되었는지 확인해보자.

```bash
proxmox-boot-tool kernel list
```
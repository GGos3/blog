---
title: "Proxmox Pinned Kernel이 동작하지 않는 문제 해결"
date: 2024-08-26
tags: [Server, Linux, Proxmox]
---

Proxmox VE에서 Pinned Kernel이 동작하지 않는 문제를 해결하는 방법에 대해 알아보자.

## Pinned Kernel 확인

먼저, 현재 설정된 Pinned Kernel을 확인해보자. 아래 명령어를 통해 Pinned Kernel의 상태를 확인할 수 있다.

```bash
proxmox-boot-tool kernel list
```

위 명령어를 실행하면, 현재 시스템에 설정된 커널 목록과 Pinned Kernel이 출력된다.

```bash
Manually selected kernels:
None.

Automatically selected kernels:
6.5.13-5-pve
6.8.12-1-pve

Pinned kernel:
6.5.13-5-pve
```

결과에서 보듯이, `Pinned kernel` 항목에 `6.5.13-5-pve`가 설정되어 있다. 

이는 현재 시스템이 `6.5.13-5-pve` 커널을 우선적으로 사용하도록 고정되어 있음을 의미한다. 

그러나, `reboot` 이후에도 Pinned Kernel이 적용되지 않는 문제가 발생할 수 있다. 

이런 경우, 다음 절차를 따라 문제를 해결할 수 있다.

## 문제 해결

만약 Pinned Kernel이 제대로 적용되지 않는다면, 아래의 명령어를 차례대로 실행해보자.

```bash
proxmox-boot-tool reinit
```

이 명령어는 Proxmox의 부트 로더를 재초기화하여, Pinned Kernel 설정을 다시 적용하는 역할을 한다. 

재초기화 후에는 설정이 반영되었는지 확인하기 위해 다음 명령어를 사용하자.

```bash
proxmox-boot-tool refresh
```

이 명령어는 부트 환경을 갱신하여, 설정된 Pinned Kernel이 정상적으로 적용되도록 한다. 

과정을 마쳤다면 시스템을 다시 부팅하여 Pinned Kernel이 제대로 동작하는지 확인해보자.

```bash
Linux ser8 6.5.13-5-pve #1 SMP PREEMPT_DYNAMIC PMX 6.5.13-5 (2024-04-05T11:03Z) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
```

위와 같이, 시스템이 `Pinned Kernel`로 정상적으로 부팅되었다면 문제가 해결된 것이다.
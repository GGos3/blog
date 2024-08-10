---
title: "Linux 환경에서 Docker 간편하게 설치하기"
date: 2023-03-11
tags: [Server, Docker, Linux]
image: /assets/img/[Server]-도커-간편하게-설치하기/thumbnail.png
---

Linux 환경에서 Docker를 간편하게 설치하는 방법을 알아보자.

## Docker 설치 및 권한 설정

### 1. Docker 설치
```bash
curl -L get.docker.com | sh
```

### 2. 사용자 권한 설정

Docker 명령어를 `sudo` 없이 사용하기 위해 사용자를 `docker` 그룹에 추가해야 함

```bash
sudo usermod -aG docker $USER
```

### 3. 현재 세션에서 권한 적용

아래 명령어를 이용해 세션을 재시작 할 필요 없이 바로 권한을 적용할 수 있다.

```bash
newgrp docker
```

## 설치 확인

설치를 전부 진행 했다면 명령어를 실행해 `docker`가 정상적으로 설치 되었는지 확인한다.

```bash
docker run hello-world
```

정상적으로 설치되었다면 아래와 같은 메시지가 출력된다.

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
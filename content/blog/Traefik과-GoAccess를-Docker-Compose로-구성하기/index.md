---
title: "Traefik과 GoAccess를 Docker Compose로 구성하기"
date: 2024-08-20
tags: [Server, Docker, Traefik]
---

`docker compose`환경에서 `traefik`의 `access.log`파일을 `goaccess`로 처리 하여 실시간 웹 로그 분석 대시보드를 구성 해보자

## 디렉터리 구성

먼저, 프로젝트의 디렉터리 구조를 다음과 같이 구성한다.

```bash
.
├── docker-compose.yml
├── logs
│   └── access.log
└── traefik.yml
```

- `docker-compose.yml`: docker compose 설정 파일로, Traefik과 GoAccess 컨테이너를 정의한다.
- `logs/access.log`: Traefik의 액세스 로그가 저장될 디렉터리이다.
- `traefik.yml` Traefik의 설정 파일로, 로그 파일 경로 및 기타 설정을 포함 한다.

## docker-compose.yml

`docker-compose.yml` 파일을 다음과 같이 구성한다. 이 파일은 Traefik과 GoAccess 두 개의 서비스로 이루어져 있다.

```yml
services:
  traefik:
    image: traefik
    container_name: traefik
    restart: unless-stopped
    labels:
      - traefik.enable=true
      - traefik.http.routers.traefik.rule=Host(`traefik.example.com`) && PathPrefix(`/api`) || Host(`traefik.example.com`) && PathPrefix(`/dashboard`)
      - traefik.http.routers.traefik.service=api@internal
    ports:
      - 443:443
      - 80:80
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./traefik.yml:/etc/traefik/traefik.yml
      - ./logs:/logs

  goaccess:
    image: 'xavierh/goaccess-for-nginxproxymanager:latest'
    container_name: goaccess
    restart: always
    ports:
      - 7880:7880
    environment:
      - TZ=Asia/Seoul
      - LOG_TYPE=TRAEFIK
      - EXCLUDE_IPS=127.0.0.1 # optional
    volumes:
      - ./logs:/opt/log
```
### 설정 설명

#### Traefik

- `traefik` 이미지를 사용하여 컨테이너를 생성한다.
- `labels`에 `example.com`으로 되어있는 도메인을 자신의 도메인으로 변경 해 주어야 한다.
- `access.log`를 `logs` 디렉터리에 저장하며, `traefik.yml`파일로 세부 설정을 제공한다.
- `443` 과 `80` 포트를 노출하여 HTTPS와 HTTP 트래픽을 처리한다.

#### GoAccess

- `goaccess`는Traefik의 로그를 실시간으로 분석하여 대시보드를 제공하는 역할을 한다.
- `7880` 포트를 통해 웹 브라우저에서 접근 가능한 대시보드를 제공한다.
- `logs` 디렉터리의 로그 파일을 읽어와 분석한다.

### GoAccess ENV

GoAccess 컨테이너의 환경 변수 설정은 다음과 같다

- `TZ`: 타임존을 설정한다. 여기서는 `Asia/Seoul`로 설정하였다.
- `LOG_TYPE`: 로그 파일의 타입을 지정한다. `TRAEFIK`을 사용하여 Traefik 로그 형식을 처리한다.
- `EXCLUDE_IPS`: 로그에서 제외할 IP를 설정한다. 만약 홈랩을 구성 중 이라면 `192.168.0.1-192.168.0.249`와 같이 홈랩 대역을 제외시킬 수 있다

## traefik.yml

Traefik의 설정 파일인 `traefik.yml`에서는 다음과 같이 `access.log` 파일 경로를 지정한다

```yml
accessLog:
  filePath: /logs/access.log
```

이 설정은 Traefik이 생성하는 모든 액세스 로그를 `/logs/access.log` 경로에 저장하도록 한다. 

이 로그 파일은 GoAccess에서 실시간으로 분석하게 된다.

## 실행

모든 설정이 완료 되었다면 다음과 같은 명령어를 통해 서비스들을 시작할 수 있다.

### docker compose up

```bash
docker compose up -d
```

### 대시보드 접근

- http://localhost:7880
- 위 URL로 접근 시 대시보드로 접근할 수 있다.
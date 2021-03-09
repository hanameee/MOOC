# Ch5 - System Configuration from the Graphical Interface

## Introduction and Learning Objectives

👩🏻‍🏫 **Learning Objectives**

- Apply system, display, and date and time settings using the *System Settings* panel.

- Track the network settings and manage connections using *Network Manager* in Linux.
- Install and update software in Linux from a graphical interface.

## System, Display, Date and Time Settings

https://wnw1005.tistory.com/44 여기 링크 참고해서 gnome-tweaks를 설치했다.

```bash
$ sudo apt install gnome-tweaks
```

아래와 같이, 일반 설정에서는 노출되지 않았던 설정들을 할 수가 있다.

<img src="README.assets/image-20210309000929868.png" alt="image-20210309000929868" style="zoom:50%;" />

### Network Time Protocol (NTP)

리눅스는 기본적으로 내부 timekeeping을 위해 UTC(Coordinated Universal TIme)를 사용한다. UTC는 GMT(Greenwich Mean Time)과 유사하지만 더 정확한 시간이다.

NTP(Network Time Protocol)은 인터넷 서버를 통해 로컬 타임을 설정할때 사용되는 가장 인기많고 믿을만한 프로토콜이다. 리눅스 배포판들에는 항상 작동하는 NTP setup이 되어있기때문에 사용자가 network time synchronization을 위해 별도의 설정을 할 필요가 없다.

만약 필요하다면 `/ect/ntp.conf` 에서 standard NTP config file을 수정해서 더 세부적인 설정을 할 수 있다.

## Network Manager

### Network Configuration

모든 리눅스 배포판들은 network configuration files가 있지만, 파일 형식이랑 위치는 배포판마다 다르다. 이 파일들을 일일히 수정하는 것은 복잡하기에 Network Manager를 사용해 다른 배포판들에서도 일관성 있게 네트워크 설정을 할 수 있다.

Network Manager은 사용가능한 네트워크들을 리스트하고 (유선/무선), 비밀번호를 관리하고, VPN을 세팅할 수 있다. 특별한 경우가 아니라면 Network Manager이 연결을 담당하게 하는 것이 좋다.

### Wired and Wireless Connections

**유선 연결**은 일반적으로 복잡한 수동 설정을 요하지 않는다. 하드웨어 인터페이스와 시그널이 자동으로 감지되어, Network Manager이 DHCP(Dynamic Host Configuration Protocol)에 기반해 실제 네트워크 설정을 한다.

DHCP를 사용하지 않는 static 설정의 경우에도, Network Manager을 통해 수동 설정을 쉽게 할 수 있다. 하드웨어가 지원한다면 이더넷 MAC(Media Access Control)주소도 변경할 수 있다.

[참고 - MAC 주소란?]

네트워크 카드의 unique한 hexadecimal number

**무선 연결**은 유선 연결과 달리 그냥 연결되진 않는다. Network Manager을 통해 사용가능한 무선 네트워크의 목록을 볼 수 있고, 알려진 무선 네트워크를 추가/수정/삭제하거나, (존재할 경우) 기본값으로 연결하고 싶은 네트워크를 설정할 수 있다.

### Mobile Broadband and VPN Connections

Network Manager을 통해 mobile broadband connection과 VPN 연결을 관리할 수 있다.
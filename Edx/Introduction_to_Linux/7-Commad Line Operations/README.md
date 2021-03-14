# Ch7 - Command Line Operations

## Introduction and Learning Objectives

👩🏻‍🏫 **Learning Objectives**

리눅스의 🌸꽃🌸 command line operations에 대해 배워보자.

- Use the command line to perform operations in Linux.
- Search for files.
- Create and manage files.
- Install and update software.

## Command-Line Mode Options

### Introduction to the Command Line

GUI는 쉬운 일을 더 쉽게 만들어주고, CLI(Command Line Interface)는 어려운 일들을 할 수 있게 만들어준다고 한다. CLI가 가지는 장점은 아래와 같다.

- GUI 오버헤드가 없다.
- Command Line에서 사실상 어떤 일이든지 할 수 있다.
- 자주 쓰이지만 잊어버리기 쉬운 일, 절차의 집합들에 대해 스크립트를 적용할 수 있다.
- 어디서든지 인터넷 상의 원격 머신에 접속할 수 있다.
- 메뉴를 찾아 헤매는 대신 command line에서 바로 graphical application을 실행할 수 있다.
- graphical tool은 배포판 간에 차이가 있지만, cli는 아니다. 배포판 간에 동일하다.

### Using a Text Terminal on the Graphical Desktop

터미널 에뮬레이터 프로그램은 마치 우리가 순수 text terminal을 통해 머신에 로그인하는 것처럼 데스크톱의 윈도우 내에서 terminal을 emulates 한다. 대부분의 터미널 에뮬레이터 프로그램은 multiple terminal sessions도 지원한다.

GNOME 데스크톱 환경에서는 기본적으로 윈도우에서 text-mode terminal을 emulate 하기 위해 **gnome-terminal** 앱이 사용된다.

다른 사용 가능한 터미널 프로그램은 아래와 같다.

- xterm
- rxvt
- konsole (default on KDE)
- terminator

### Some Basic Utilities

기초가 되는 명령어들에 대해 알아보자. 일단 아래 명령어들은 파일의 내용을 확인하기 위해 사용하는 명령어들!

|      |                           |                                                              |
| ---- | ------------------------- | ------------------------------------------------------------ |
| cat  | $ cat [옵션] [파일명(들)] | 파일 이름(들)을 인자로 받아서 터미널 화면에 그대로 뿌려준다. 2개 이상의 파일이름이 지정되면 모든 파일이 연결되어 보여진다. |
| head | $ head [파일명]           | 파일의 앞 부분부터 확인하는 명령어로, 기본적으로 파일의 앞부분부터 10행까지만 출력한다. |
| tail | $ head [tail]             | 파일의 뒷 부분부터 확인하는 명령어로, 기본적으로 파일의 마지막 부분부터 10행까지만 출력한다. 특정 파일에 계속 추가되는 모든 내용을 모니터링 할 수 있어 실무에서 유용하다. |
| man  | man [명령어]              | 각종 명령어, 프로그램의 사용법(manual)을 확인한다. 예를 들어 `rm` 명령어의 매뉴얼을 확인하고 싶다면 `man rm` 처럼 사용한다. 간단한 사용법을 사용할 때는 `rm --help` 도 가능! |

설명 출처: https://webdir.tistory.com/142

### The Command Line

Shell prompt에 입력되는 대부분의 인풋은 아래의 3가지 기본 요소를 가진다.

- Command: 실행하는 프로그램의 이름
- Options: 커맨드가 어떤 것을 실행할지에 대한 설정을 부여하는 옵션. 주로 `-` 이나 `--`로 시작함
- Arguments

물론 이 요소들 중 없는게 있을 수도, 다른 요소들이 있을 수도 있음.

### sudo

**sudo**는 유저가 root (superuser)의 보안 권한을 이용해 프로그램을 실행할 수 있게 해준다. 아래 사진처럼, 일반 유저로는 권한이 막힌 디렉토리에 대한 접근도 `sudo`를 이용하면 가능가능.

<img src="README.assets/image-20210313013535360.png" alt="image-20210313013535360" style="zoom:50%;" />

Ubuntu를 비롯해 최근의 리눅스 배포판에서는 설치 과정에서 sudo가 항상 설정되어 있다. 

### Switching Between the GUI and the Command Line

리눅스는 GUI를 임시적으로 혹은 영구적으로 제거할 수 있게 해준다. Linux production servers는 대개 GUI 없이 설치되고, 만약 GUI가 설치되었더라도 시스템 시작 중에는 런칭하지 않는다.

Production 서버에서 Graphical interface를 제거하는 것은 lean system을 유지하는 데에 도움이 된다.

### Virtual Terminals (VT)

참고 링크: https://jhnyang.tistory.com/51, https://dololak.tistory.com/329

가상 콘솔(가상 터미널)에 대해 알아BOZA.

멀티 유저 시스템인 리눅스는, 하나의 리눅스 서버에 다수의 사용자가 접속할 수 있다. 이에 리눅스는 로컬 컴퓨터에서 모니터를 사용해볼 수 있게 가상 콘솔을 제공한다.

실제 사용자가 사용하는 물리적 모니터는 하나지만, 논리적으로 여러 (보통 6개) 가상 콘솔을 제공해 주는 것이다.

VT는 commad line terminal window와는 다르다. commad line terminal window는 한번에 여러 창을 띄울 수 있지만, VT는 한번에 하나씩만 볼 수 있다.

여러개 VT 중 하나(주로 1번 혹은 8번)는 Graphical environment를 위해 예약되어 있다. Ubuntu의 경우 VT7이, CentOS/RHEL, openSUSE의 경우 VT 1이 GUI 를 위해 (X윈도우) 사용된다.

이 VT를 언제 사용하냐?🤔

Graphical Desktop에서 문제가 생겼을 때! 이 때는 text VTs로 이동해서 트러블슈팅을 할 수 있다. VT 간에 왔다갔다하는 방법은 `CTRL-ALT-function key`! 즉, VT6으로 변경하고 싶다면 `CTRL-ALT-R6`.

### Turning Off the Graphical Desktop

리눅스 배포판들은 Graphical Desktop을 키고 끌 수 있는 다양한 방법을 제공한다. 배포판들마다 방법이 조금씩 다르긴 하지만, 최근의 systemd-based 배포판들의 경우엔 `systemctl` 유틸리티로 GUI 데스크톱을 멈출 수 있다.

[멈추는 명령어]

```shell
$ sudo systemctl stop gdm
또는
$ sudo telinit 3
```

[재시작하는 명령어]

```shell
$ sudo systemctl start gdm
또는
$ sudo telinit 5
```


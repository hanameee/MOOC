# Ch3 - Linux Basics and System Startup

## Introduction and Learning Objectives

Linux boot process에 대해 논의 할 것임. Boot loader부터 GUI까지. Linux 설치 과정도 다룰 것.

👩🏻‍🏫 **Learning Objectives**


- Identify Linux filesystems.
- Identify the differences between partitions and filesystems.
- Describe the boot process.
- Install Linux on a computer.

## ⚡️ The Boot Process

리눅스의 부트 프로세스는 시스템을 초기화하기 위한 절차이다. 컴퓨터 전원이 처음 켜졌을 때부터, 유저 인터페이스가 완전히 작동하기까지 일어나는 모든 것을 포함한다.

<img src="https://courses.edx.org/assets/courseware/v1/b30efa6aaec0745af052a4507f062340/asset-v1:LinuxFoundationX+LFS101x+1T2020+type@asset+block/chapter03_flowchart_scr15_1.jpg" alt="The boot process" style="zoom:50%;" />

### BIOS (Basic Input Output System)

x86(인텔 32비트 이하 계열 제품명)-based Linux system을 시작하기 위해선 여러 단계가 필요하다.

먼저, 컴퓨터 전원이 켜지면 BIOS가 하드웨어(스크린, 키보드)를 초기화하고, 메인 메모리를 테스트한다. 이 과정은 POST (Power On Self Test) 라고도 불린다.

![BIOS](https://courses.edx.org/assets/courseware/v1/f02a193180acffca543bf8f69870cc79/asset-v1:LinuxFoundationX+LFS101x+1T2020+type@asset+block/LFS01_ch03_screen16.jpg)

BIOS 소프트웨어는 메인보드(마더보드)의 ROM 칩에 저장되어 있다.

이 BIOS 과정 이후의 부트 프로세스는 OS에 의해 컨트롤된다.

### MBR(Master Boot Record ) and Boot Loader

POST가 끝나면 시스템 컨트롤은 BIOS에서 boot loader로 이동한다.

boot loader은 주로 하드디스크의 (전통적인 BIOS/MBR system의 경우에는) boot sector이나 (최근의 EFI/UEFI system의 경우에는) EFI 파티션에 위치한다.

이 단계까지 머신은 mass storage media에 접근하지 않기에, 시간, 날짜, 주변 기기에 대한 정보는 CMOS 값으로부터 로드된다.

Linux에는 여러 boot loader들이 존재하는데, 가장 흔한 것들은 GRUB (GRand Unified Boot loader), ISOLINUX, DAS U-Boot 등이다.

Linux를 부팅할 때, 이 boot loader가 커널 이미지와 초기 RAM disk 또는 (시스템을 시작하기 위해 필수적인 파일들과 장치 드라이버들을 포함하는) 파일 시스템을 메모리(RAM)에 로드한다.

![Master Boot Record](https://courses.edx.org/assets/courseware/v1/b053b7b69e99a0c06ef0da7fd84236d7/asset-v1:LinuxFoundationX+LFS101x+1T2020+type@asset+block/LFS01_ch03_screen20.jpg)

[참고] 

[CMOS와 BIOS의 차이를 아는가?](http://forensic-proof.com/archives/181)

[[OS X의 기초상식] EFI란 무엇인가?](https://m.blog.naver.com/PostView.nhn?blogId=minkever&logNo=130085717297&proxyReferer=https:%2F%2Fwww.google.com%2F)



## Kernel, init and Services


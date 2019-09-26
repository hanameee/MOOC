# 1. Introduction to IT Support

## Program Introduction

- Program designed to teach the foundation skills in IT support.
- Content developed entirely by Googlers
-  Industry relevant courses : 
  - Technical support fundamentals
  - computer networking
  - operating systems
  - system administration and IT infrastructure services
  - IT security
- `8~10` hours / week > Certificate in 8 month

## What is IT?

Information Technology : The use of digital technology, like computers and the internet, to store and process data into useful information.

Digital Divide : Growing skills gap (People without digital literacy skills are falling behind)

## Course Introduction

By the end of this course ....

- Understand how computers work
- Grasp of the building blocks of IT

We are going to cover ...

- How computer hardware performs calculations
- Actually build a computer from the ground up
- How operating systems control and interact with hardware
- Take a look at the Internet and get a better understanding of how computers talk to each other.
-  How applications and programs tie all of this together, and let humans interact with these systems
-  Important lessons on problem-solving with computers



# 2. History of Computing

###2-1) From Abacus to Analytical Engine

`Computer` is a device that stores and processes data by performing calculations.        

By the end of this lesson ...

- you'll be able to identify some of the most major advances in the early history of computers. 

`Abacus (주판)`
컴퓨터의 가장 초기 형태로 500BC에 큰 숫자들을 계산하기 위해 발명됨.

`Mechanical calculator by Blaise Pascal`
17세기에 발명됨. 기어와 레버들을 이용해 자동으로 덧셈,뺄셈,곱셈,나눗셈 수행

`Analytical engine by Charles Babbage`
difference engine : mechanical calculator의 sophisticated ver.
Analytical engine : Punch card 를 활용해 difference engine 에서 원하는 수식을 pre-define 할 수 있도록 발전시킴.

*Punch cards : first binary system used for machines (for designing pattern on the fabric) - hole이 있으면 thread, 없으면 didn't thread

`Ada Lovelace` : machine이 비단 계산 외에 더 많은 일을 할 수 있다고 알아본 사람! Engine 을 위한 Algoritm을 처음 발명함.

Algorithm : a series of steps that solves specific problems.

= very first general purpose computing machine in history

### 2-2) Path to Modern Computers

World War 2가 되어서야 정부가 computing research에 돈을 퍼붓기 시작했다.
특히 Cryptography!
`Alan Turing`
Enigma machine... 암호 해독하기 위해 등등, 정부가 computation의 가능성을 알아보기 시작.

World War 2 이후, 20세기부터 기업들로부터 기술적 발전이 이뤄짐.

[New methods to store data in computers]
1950년까지만해도 punch cards가 데이터 저장을 저장하는 방식이었음.
1970,80년대부터는 Magnetic tape 등이 나오며 더 많은 데이터를 더 reliable한 매체에 저장할 수 있게 되었음. 

debugging = literally debugging :) (오류 나던게 ㄹㅇ 나방때문이었음)

`ENIAC` : one of the earliest forms of general purpose computers. 어마어마하게 컸다.

곧 전기전압을 컨트롤하기 위해 transistor를 사용하게 됨! Vacuum tubes와 거의 똑같은 기능을 수행하지만 더 작고 더 효율적임. 오늘날엔 작은 컴퓨터에 billions의 transistors 를 가질 수 있다.

`First Compiler by Admiral Grace Hopper` :  programming language (human readable) to machine code (binary) 

`Xerox Alto`  , `apple` , `IBM`- Personal computer

1980s : IBM personal computer w/ primitive ver. of OS called MS DOS (disk operating system) + with Microsoft Windows, it became dominant OS.

 Video games - computers are not only used in workplace/research institutions. can also be used for fun :)

GNU (open source) > set a foundation for the formation of Linux.

#3. Digital Logic

### 3-1) Computer Language

by the end of this lesson ...

- you'll understand what a computer calculates and how

Computer uses `Binary System` for communication = only talks in 1s and 0s

8 binary numbers = bits
group of 8 bits = byte (ex.10110011)

Each byte can store one character. 2^8 (=256) possible values

###3-2) Character Encoding

Character Encoding : is used to **assign our binary values to characters** so that we as humans can read them.

마치 사전과 유사하다! Tells computer to look up which human characters should be represented by a given binary value. (Lookup table)

Ex1) ASCII (=represents english alphabet, digits, punctuation marks)

Ex2) UTF8 = allows us to store a character in more than 1 byte! 이건 Unicode standard를 따른다.

Ex3) RGB = color을 represent 하기 위해 쓰인다 (각각 shade of color을 나타내는 3개의 Characters 사용)

### 3-3) Binary

컴퓨터는 어떻게 0과 1 신호를 받는가? 마치 Punch card에서 hole이 있고 없던 것처럼, 컴퓨터는 electricity via transistors, allowing electrical signals to pass through 하게 함.

Electric voltage가 있으면 1, 없으면 0이라고 인식한다.

Transistors 만으로는 복잡한 기능을 수행하기 힘들다. 이걸 도와주는 것이 Logic gates!

`Logic gates` :  allow our transistors to do more complex tasks, like decide where to send electrical signals depending on logical conditions.

### 3-4) How to Count in Binary

byte = 0~255 까지, 총 2^8개의 decimal number 표현 가능.


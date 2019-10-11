# Lesson 2: Starting Small

### 1. Defining the Viewport

기기별로 display size가 다른 만큼, 각각 다른 pixel density를 가지고 있다. 예를 들어, Chrombook pixel display는 2560*1700 pixel이지만, browser에서 window를 full width 를 주고 viewport width를 계산해보면 2560이 아니라 1280 pixel로 뜬다.

왜그럴까? 🧐



### 2. Pixels, pixels and moar pixels!

 Browser은 viewport를 계산할때 하드웨어의 물리적인 pixel (해상도)가 아니라, Device의 Independent Pixels = **DIP** 으로 계산한다!

DIPs = unit of measurement that relates pixels to a real distance [참고링크](http://blog.rightbrain.co.kr/?p=1036)

640px 가로길이를 가진 폰, DPR(device pixel ratio) = 2 면 dips viewport width는 320!



### 8. Setting the viewport

```html
<meta name = 'viewport' content = "width=device-width, initial-scale=1">
```

HTML의 `<head>` 부분에 위와 같은 meta viewport tag를 달아줘서 screen의 width를 DIP와 맞추게 할 수 있다. Initials-scale=1을 추가해주면 dip pixels와 css pixels를 1:1로 매칭해줄 수 있다. 
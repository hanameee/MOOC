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



### 10. Large Fixed Width Elements

CSS pixels는 devices에 따라 매우 다르기에, 하나의 viewport width에만 의존하면 안된다. 

 Absolute position이나, large css width는 특정 화면에서는 화면 밖으로 나가버리거나 안보일 수 있는 것! (overflowing the viewport)

따라서 absolute position보다는 가급적 relative positions 를 사용해야 한다.



### 11. Max-width on elements

Width를 명시할 때 relative units 를 사용하는 것이 좋다. CSS는 content가 container을 overflow하는 것을 허용하기에 아래처럼 max-width를 정해주는 습관을 들여야 이를 방지할 수 있다! (가로스크롤 방지)

```css
img, embed, object, video {
  max-width: 100%;
}
```

아래처럼 max-width 를 100%로 설정해두면 이게 width를 override 하기에 항상 responsive한 상태를 유지할 수 있다. (image will be kept contained within its container)

```css
<img id="owl">
#owl {
  width: 640px;
  max-width: 100%;
}
```

아주 작은 픽셀을 가진 이미지의 경우 (ex.logo) 125px 보다 작은 display는 없으므로 항상 responsive 할 것임!

```css
<img class="logo">
.logo {
  width: 125px;
}
```



### 13. Tap Target Sizes

우리 손꾸락은 10mm ( = 0.5inch = 40css pixels) 정도의 넓이를 가지고 있다.

따라서 버튼 혹은 a 태그들은 **최소한 48x48 pixels 이상의 크기 / 간격**을 두고 만드는 것이 좋다.

```css
nav a, button {
  min-height: 48px;
  min-width: 48px;
}
```

그냥 `height` 나 `width` 는 container보다 content가 클 경우 resize가 안되고 그냥 고정되어 버리기에, 최소한의 사이즈인  min을 써주는 것이 조금 더 안전하다! 



### 15. Start Small

다른 screen size에 맞는 페이지를 구성하기 위해서는 작게 시작하는 것이 좋다. 즉, 가장 작은 phone에 맞춰 디자인하고, 그 다음엔 tablet, 그 다음 laptop!

이유 1) Prioritize

작게 시작함으로써, 유저에게 어떤 것이 가장 중요한지 우선순위를 정할 수 있다. 

Key content 를 놓치지 않고 항상 포함시킬 수 있는 것.

이유 2) Performance

가장 작은 viewport 먼저 작업함으로써 퍼포먼스에 대해 자동으로 생각하게 된다. 
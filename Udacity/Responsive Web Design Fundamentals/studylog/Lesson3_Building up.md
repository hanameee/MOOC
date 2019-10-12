# Lesson 2: Starting Small



### 2. Basic Media Query

Media queries helps us to apply different css styles depending on device characteristics (width, height, DPI).

Media query를 통해 layout을 restruct 할 수 있다 :)



 ### 3. Adding a Basic Media Query-1

**첫번째 방법 : linked style sheet에 media attribute 추가하기**

```html
<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">
```

link에 `media` attribute를 추가하고, screen and (min-width: 500px) 를 주면 screen 이 500px (=breakpoint) 보다 클때만 해당 stypesheet가 applied 된다.

신경써야 할 media type은 `screen` 이랑 `print`! (만약 유저가 화면을 print 할 것으로 예상되는 경우)



### 4. Adding a Basic Media Query-2

**두번째 방법 : css에 @media 태그로 embed 하기**

```css
@media screen and (min-width: 500px) {
  body { background-color: green; }
}
```

Linked CSS

- many small HTTP requests

@media

- Few big HTTP requests

장단점을 비교해서 사용해야 한다.



### 5. Next Step Media Queries

Responsive web design에 가장 자주 사용되는 media quries는 `min-width` 와 `max-width` 이다.

```css
@media screen and (max-width: 500px) {
  .yes {
    opacity: 1;
  }
  .no {
    opacity: 0;
  }
}
```

500px보다 작을때는 yes, 500px보다 클때는 no



⚠️min-device-width 와 max-device-width 는 **discouraged**!

min-width는 browser window의 사이즈에 기반하고, min-device-width는 정말 display의 실제 width에 기반한다.
# Lesson 3: Buildling up



### 2. Basic Media Query

Media queries helps us to apply different css styles depending on device characteristics (width, height, DPI).

Media query를 통해 layout을 restruct 할 수 있다 :)



 ### 3. Adding a Basic Media Query-1

**첫번째 방법 : linked style sheet에 media attribute 추가하기**

```html
<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">
```

link에 `media` attribute를 추가하고, screen and (min-width: 500px) 를 주면 screen 이 500px 보다 클때만 해당 stypesheet가 applied 된다.

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



### 6. Breakpoints

Media query는 background color 같은 소소한 변화 외에도, Page의 전체 Layout을 짜는 데에 쓰일 수 있다!

페이지가 레이아웃을 바꾸는 지점을 바로 **BREAKPOINT** 라고 한다.

페이지에 따라 한개 혹은 여러개의 breakpoints 들이 있을 수 있다.



### 9. Picking Breakpoints

특정 기기, 상품, 브랜드명에 따라 breakpoint를 고른다면 유행에 따라 maintanence nightmare에 빠지게 될 것임. 다음 2년동안 어떤 기기가, 어떤 브랜드의 핸드폰을 사람들이 많이 쓸지 모르잖어!

따라서 올바르게 breakpoint를 정하는 방법은 **content를 보고 직접 찾아내는 것**.

We shouldn't choose breakpoints. Instead, we should find them using our content as a guide.



### 10. Picking Breakpoints

Flow를 보자면,

1) 일단 chrome dev tool을 켜고 가장 작게 width를 줄인다.
2) width를 서서히 늘여가면서 content 사이의 간격이 너무 넓어지거나 어색해지는 지점을 찾는다.
3) 해당 지점을 breakpoint로 삼고 layout을 변경한다

1~3을 반복!



예시를 보니 일반적으로 3개의 version을 가진다 = 2 breakpoints (small, medium, large)

Small > Medium으로 갈때 레이아웃이 크게 변하고, Medium > Large로 갈때는 content가 더 expand 하지 않도록 max-width를 고정시키고 margin만 키우는 식으로 많이 하는듯.



### 12. Complex Media Queries

```css
@media screen and (min-width: 500px) and (max-width: 600px) {
}
```

이렇게 작성하면 500<=width<=600 사이에 대해 css를 적용할 수 있다. (좀 더 정교!)



### 14. Grids

 가장 simple한 responsive design pattern 으로는 **Grid Fluid System**이 있다.

Examples: Bootstrap, 960 pixel grid layout system.

참고 링크: [HTML5rocks](https://www.html5rocks.com/en/tutorials/)

👩🏻‍💻**추가 학습 링크**

[960 Grid System을 사용한 웹 페이지 제작](https://spoqa.github.io/2012/11/20/about-grid-system.html)

[Building a Scrapbook Layout with CSS Grid](https://responsivedesign.is/news/2019/10/building-a-scrapbook-layout-with-css-grid/)

[Sass로 12단 그리드 시스템 만드는 법]([https://medium.com/fluosoup/sass%EB%A1%9C-12%EB%8B%A8-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B2%95-d2c7cf54c36](https://medium.com/fluosoup/sass로-12단-그리드-시스템-만드는-법-d2c7cf54c36)) : 원문 링크 [How to Create a 12 Column Grid System with Sass](https://inspirationalpixels.com/grid-system-with-sass/?source=post_page-----d2c7cf54c36----------------------)

[responsive grid system - materialize](https://materializecss.com/grid.html)



### 15. Flexbox Intro

Layout을 위해 사용할 수 있는 powerful한 tool! Flexbox를 활용하면 float 없이도 element들을 좌측/우측 정렬할 수 있다.

⚠️ 하지만 꼭 사용할때 **vendor prefixed version** 을 포함시키기! >> Q&A webkit 뭐람? 참고



### 16. Flexbox Container

1) display: flex;

일반적으로, div 는 한줄을 완전히 다 먹는다. (자동 줄바꿈)
하지만, div를 감싸는 container에 `display: flex` 를 선언하면? 자동으로 row 정렬된다. Flex의 디폴트 direction이 row이기 때문.

```css
.container {
    flex-wrap: wrap;
} 
```

2) Flex-wrap: wrap;

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```



[flexbox로 만들 수 있는 10가지 레이아웃](https://d2.naver.com/helloworld/8540176) - NAVER D2 article 


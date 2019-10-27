# Lesson 4: Common Responsive Patterns



### 1. Intro to Patterns

어떤 기기에도 잘 먹히는 (?) 이미 검증된 responsive pattern들이 있다. 대표적으로 4개!

- mostly fluid
- column drop
- layout shifter
- off canvas



### 2. Column Drop

1) 가장 작을 때 - 세로로 stacked
2) 그 다음 breakpoint - 2개 병렬, 하나 다음줄
3) 그 다음 breakpoint - 3 line layout > 특정 width 이상이 되면 width는 더 이상 증가하지 않고, 양 옆의 margin이 증가한다!

pseudo 코드

`breakpoint   ~ | 450 | 750 | ~`

```css
/* 가장 작은 width 부터 design! width: 100%로 두고 시작한다 */

.box {
    width: 100%;
    /* 강의에서는 height를 안줬는데 어떻게 되는걸까? */
    height: 300px;
}

@media screen and (min-width: 450px) {
  /* 첫번째 breakpoint에서는 25/75/100 */
}

@media screen and (min-width: 750px) {
  /* 두번째 breakpoint에서는 25/50/25 */
}
```

이렇게 디자인!



### 3. Mostly Fluid

Column drop과 유사하지만, 조금 더 grid스럽다! ( = 더 많은 컬럼과 breakpoints! )

제일 작을 때는 100%로 stacked 되어 있다가, width가 커질수록 grid가 나타나며, widest viewport를 찍은 후에는 width는 더이상 늘어나지 않고 양 옆에 margin이 추가된다.

```css
/* breakpoint 450 | 750  | 960 */

@media screen and (min-width: 450px) {
    .orange, .yellow {
        width: 50%
    }
}

@media screen and (min-width: 750px) {
    .red {
        width: 50%;
    }
    .yellow, .green, .blue {
        /* 옛날 browser들 중 calc 속성을 먹지 않는 애들을 위한 대비책 */
        width: 33.33%;
        width: calc(100%/3);
    }
}

@media screen and (min-width: 960px) {
    .container {
        width: 960px;
        /* margin-left: auto; margin-right: auto */
        margin: 0 auto;
    }
}
```

요런 식으로 줄 수 있겠지.



### 4. Layout Shifter

가장 responsive 한 pattern일 것임. viewport breakpoint 에 따라 order도 바뀐다! 앞서 배운 CSS order 속성을 사용한다.

![layout shifter](https://camo.githubusercontent.com/37191b03f10485e603f334c5054c748a9ae148bd/687474703a2f2f692e696d6775722e636f6d2f786e376a3373662e706e67)

이런 식으로 layout도 바뀌고, order도 바뀌는 것을 볼 수 있다.

**🔑 KEY TAKEAWAYS 🔑**
Element의 default order value 는 0이다. (약간 z-index같은 느낌이구만!)
따라서 -1을 주면 가장 처음에 위치하게 될 것임.

```css
/* breakpoints 500 | 600 */

@media screen and (min-width: 500px) {
    .red {
        width: 50%;
    }

    #container2 {
        width: 50%;
    }
}

@media screen and (min-width: 600px) {
    .red {
        width: 25%;
        order: 1;
    }

    #container2 {
        width: 50%;
    }

    .green {
        width: 25%;
        /* 가장 처음에 위치하도록! */
        order: -1;
    }

}
```



### 5. Off Canvas

Off canvas는 content를 수직으로 쌓는 대신, 덜 사용되는 컨텐츠를 (ex. navigation, app menus) off screen 에 표시하고, 화면이 충분히 클때만 표시한다.

보통 작은 화면에서는 햄버거 아이콘을 누르면 보이도록 되어있지!


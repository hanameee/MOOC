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






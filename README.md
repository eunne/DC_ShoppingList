# Coordinate solution

# 💣실행

![Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/webAIPs_coordinates.gif](Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/webAIPs_coordinates.gif)

## ✔️몇가지 요소가 필요할까?

처음엔 화면을 구현하기 위해 몇가지 요소가 필요한지 파악해본다.

- 수평선
- 수직선
- 그림
- 좌표

필요한 요소를 파악했다면 하나씩 만들어 나가보도록 하자.

# 구현

## 1. HTML: 필요한 요소 만들기

```jsx
<body>
  <!-- 구현하고싶은 요소 4가지 추가 -->

  <div class="line horizontal"></div>
  <div class="line vertical"></div>
  <img src="target.png" alt="target" class="target">
  
  <!-- 맨 처음 실행 시 보여지는 문구 -->
  <span class="coordinator">Aim your target!</span>
</body>
```

브라우저 상에 표현하고 싶은 요소들을 넣는다.

현재는 수평선, 수직선, 타켓그림, 좌표의 4가지 요소를 보여주고 싶으니 4가지 요소를 각각 HTML TAG로 작성한다.

### ✔️주의사항❗

```jsx
<head>
  ...
  <!-- js와 css를 연결시켜줘야함 -->
  <script src="main.js" defer></script>
  <link rel="stylesheet" href="style.css">
  <title>Aim your target!</title>
</head>
```

제대로 다 적은 것 같은데 화면에 css가 구동이 안돼서 대체 왜 안될까?

찾아보니 head에 js와 css를 연결해주는 코드를 넣어야 한다.

아, 어쩐지..

내가 js 코드창을 여러개 띄어놔도 어떻게 html이 내가 현재 작성하고 있는 js 코드창이 뭔지 알고 연결시켜서 화면에 보여주지? 라는 생각을 했는데 역시, 이런 연결코드가 존재했다.

참 코드는 직관적이고 정직한 것 같다.

### ✔️실행화면~~🏃🏽~~

![Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/index.png](Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/index.png)

아직 작성된 것이 내용밖에 없어서 글자와 이미지밖에 안 보인다.  이미지가 흰색인데 바탕화면이 흰색이어서 안보이지만, 위에 개발자모드로 확인해보면 target이라는 이미지가 들어가 있는 것을 확인해 볼 수 있다.

## 2. CSS 로 실제로 그림 그리기

```jsx
/* CSS로 그림그리기 */

body {
  background-color: #db2e4b;
}

.line {
  position: absolute;
  background-color: white;
}

.horizontal {
  position: absolute;
  /* 가로선을 그려야 하니, 가로는 100%를 주고, 세로는 선이니까 얇게 1px로 줄임 */
  width: 100%;
  height: 1px;
  /* 위에서 50% 떨어진 곳에 위치 */
  top: 50%;
}

.vertical {
  position: absolute;
  height: 100%;
  width: 1px;
  /* 왼쪽에서 50% 떨어진 곳에 위치 */
  left: 50%;
}

.target {
  position: absolute;
  top: 50%;
  left: 50%;
  /* img가 크로스선 중앙으로 오도록 조정
  translate(move to left, move to top) */
  transform: translate(-50%, -50%);
}

.coordinator {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(28%, 30%);
}
```

위에서 세팅해놓은 4가지 요소를 내가 원하는 모양과 위치에 나타내도록 한다.

### ✔️선을 그리자

```jsx
.horizontal {
  position: absolute;
  /* 가로선을 그려야 하니, 가로는 100%를 주고, 세로는 선이니까 얇게 1px로 줄임 */
  width: 100%;
  height: 1px;
}

```

선을 그릴 때, 처음에 큰 박스를 먼저 만들고 그 박스를 선으로 바꾼다고 생각하면 될 것 같다.

그래서 수평선(horizontal)은 가로로는 화면 전체를 차지하게 되니 100%로 두고

세로로는 얇게 표시만 되면 되니 원하는 픽셀만큼의 크기를 지정해주면 된다.

### ✔️원하는 곳에 위치시키자

```jsx
.horizontal {
  position: absolute;
  /* 가로선을 그려야 하니, 가로는 100%를 주고, 세로는 선이니까 얇게 1px로 줄임 */
  width: 100%;
  height: 1px;

  /* 위에서 50% 떨어진 곳에 위치 */
  top: 50%;
}
```

선을 그리고 원하는 곳에 해당 물체를 위치시키위 위해서 top, left를 사용한다.

브라우저 창 왼쪽 상단 모서리를 시작으로 해서 가로로는 left, 세로로는 top을 사용한다.

즉, (x, y) → (left, top)이라고 생각하면 된다.

브라우저 좌표 링크

### ✔️실행화면🏃🏽

![Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/css.png](Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/css.png)

브라우저 중앙에 각 선과 타켓이 위치하도록 만들었다.

아직 움직이지는 않고 마치 사진을 찍은 것 처럼 고정되어있을 뿐이다.

### 🤔 궁금증

근데 어차피 동적으로 만들면 꼭 저렇게 가운데 위치시키지 않아도 움직이게되면 결국 가운데로 오도록 되는거 오는거 아닌가? 왜 굳이 초기값을 저렇게 가운데에 위치하도록 세팅하는거지?

## 3. JS 동적으로 만들기

```jsx
//불러올 때 .(class)을 찍어야함!
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinator = document.querySelector(".coordinator");

//움직이도록 만들자
document.addEventListener("mousemove", mouseMove)

function mouseMove(event) {
  const x = event.clientX
  const y = event.clientY
  console.log(`${x}, ${y}`);

  //수평선에 연결, 수직으로 움직여야하니까 top, y좌표 연결
  // '좌표'에 연결해줘야하니까 그냥 y가 아니라 좌표로 입력해줄것!
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;

  //이미지연결
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  //좌표연결
  coordinator.style.left = `${x}px`;
  coordinator.style.top = `${y}px`;

  //좌표표시
  coordinator.innerHTML = `${x}px, ${y}px`;
}
```

이 파트는 HTML/CSS 와 JS를 연결시키는 코드가 들어가서 처음엔 조금 헷갈렸는데 지금은 어떤 원리로 작동되는지 대략 이해되는 것 같다.

### ✔️마우스 포인터를 따라 움직이게 해보자

```jsx
function mouseMove(event) {
  const x = event.clientX
  const y = event.clientY
  console.log(`${x}, ${y}`);

  //수평선에 연결, 수직으로 움직여야하니까 top, y좌표 연결
  // '좌표'에 연결해줘야하니까 그냥 y가 아니라 좌표로 입력해줄것!
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
```

마우스가 움직이는 이벤트를 불러와서 브라우저 상의 좌표를 표시하는 client에 연결시켜준다.

앞에서 말했듯이 left는 x, top은 y와 같으므로 움직이고 싶은 방향의 좌표를 연결시켜주면 된다.

### ✔️실행화면🏃🏽

![Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/webAIPs_coordinates%201.gif](Coordinate%20solution%205c384981ed9b434abf355ba070bc362a/webAIPs_coordinates%201.gif)

### 🤔 궁금증

그런데 찾아보니 querySelector와 getElementbyId 두가지 방법을 사용하던데 차이가 뭘까?

(내가 찾아봤을 때엔 주로 getElementby방법을 많이 사용하고있었다.) 

두 방법의 요약하면 다음과 같다.

- 구체적인 요소를 선택하고 싶다면? querySelector
- 빠르고 지원이 더 좋은 것은? getElementby

근데 내가 getElementby로 불러왔을 때, style.left가 적용되지 않았다. 해당 방법을 사용하면 style을 불러오는 방법이 다른 것일까? 

 

공부해보기로 한다.

# Feedback

### ✔️기능별로 방을 나눠주자 (html, css, js)

처음에 솔루션보기 전 내가 직접 코드를 작성해볼 때에는 html에 모든 요소를 다 집어넣었다.

하지만 한 바구니에 계란을 전부 담으면 안좋은 것 처럼 코드도 쪼개서 각 기능별로 방을 만들어서 보관해주는 것이 좋다. 최소 html, css, js로 나눠서 코드를 작성해주자.

### ✔️내가 작성한 코드와 비교해보자

글이 길어져서 따로 정리했다. 코드리뷰 보러가기

# References

- [getElementById VS querySelector](https://velog.io/@chloeee/getElementById-%EA%B7%B8%EB%A6%AC%EA%B3%A0-querySelector-%EC%B0%A8%EC%9D%B4%EC%A0%90)
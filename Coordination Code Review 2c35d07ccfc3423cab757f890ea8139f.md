# Coordination Code Review

solution에 한번에 넣으려니 너무 길어져서 따로 분리해서 비교하려 한다.

### Before

### After

```jsx
.coordinator {
	position: relative;
  width: 80px;
  height: 30px;
  background-color: #db2e4b;

}
```

```jsx
.coordinator {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(28%, 30%);
}
```

난 처음에 위에처럼 할 생각을 못했고, 라인은 js에서 유동적으로 만들어지는 것이라고 생각했기에 좌표를 상자를 만들었다.

처음에는 좌표를 만들어서 움직였다.

### Before

### After

```jsx
function mouseMove(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const XY = `${e.clientX}, ${e.clientY}`
      //coordinate of box
      coordinator.style.left = mouseX+20 + 'px';
      coordinator.style.top = mouseY+20 +  'px';
      coordinator.innerHTML = XY
    };
// 직접 좌표를 수정하는거 말고 
// 위(html에서) 처리할 수 있는건 없을까
```

```jsx
function mouseMove(event) {
  const x = event.clientX
  const y = event.clientY
  console.log(`${x}, ${y}`);

  //좌표연결
  coordinator.style.left = `${x}px`;
  coordinator.style.top = `${y}px`;

  //좌표표시
  coordinator.innerHTML = `${x}px, ${y}px`;
```

처음에 라인을 그릴 때, 나는 좌표로부터 라인이 뻗어나간다고 생각했다.

그래서 구글에서 "How to draw a line"을 검색했고 canvas라는 것을 통해 line을 그리는 기능을 발견했다.

```jsx
const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
		ctx.moveTo(`${pageXOffset-clientX},${pageYOffset-clientY}`)
    ctx.lineTo(`${e.clientX},${e.clientY}`)
    ctx.stroke();
```

이 방법을 사용해서 선을 그리려 했지만 선 자체가 그려지지 않았다.

(내가 시도했던 idea를 그림으로 그려서 올릴 것)

시작은 마우스포인터고 해당 포인터의 수평, 수직으로 뻗어나가려면 전체 페이지에서 브라우저페이지만큼의 좌표값을 뺀 곳까지 이동하면 선이 그려질 것이라 생각했지만 선이 안 그려지니 방법이 맞았는지 모르겠다.

근데 지금 생각해보니 좌표의 사방으로 그림이 그려져야하니까 저 방법으로 좌표를 찾는다면 위쪽만, 즉, 1사분면에만 그림이 그려질 것 같다.

따로 테스트 해봐야겠다.

(테스트 해본 것 올리기/코드, gif)

(실행화면)

혹시 내가 연결을 못해서 안 그려진게 아닐까, 내가 좌표를 잘못 찍은걸까?

대체 어떻게 라인을 그리는지 도저히 모르겠어서 이건 결국 구현하지 못했다.

그런데 솔루션을 보니까 이렇게 간단한거였다니..ㄷㄷ

너무 어렵게 생각하는게 아닐까?란 생각이 든다.

마우스 포인터의 좌표정보

screenX, Y 

clientX, Y 보이는 브라우저의 시작부터

pageX, Y 문서의 시작부터

offsestX, Y

### 기능별로 방을 나눠주자 (html, css, js)

처음에 솔루션보기 전 내가 직접 코드를 작성해볼 때에는 html에 모든 요소를 다 집어넣었다.

하지만 한 바구니에 계란을 전부 담으면 안좋은 것 처럼 코드도 쪼개서 각 기능별로 방을 만들어서 보관해주는 것이 좋다. 최소 html, css, js로 나눠서 코드를 작성해주자.
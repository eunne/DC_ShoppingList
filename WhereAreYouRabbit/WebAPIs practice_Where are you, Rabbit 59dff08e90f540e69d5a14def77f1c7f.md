# WebAPIs practice_Where are you, Rabbit??

<br/>

# 구현

두가지를 구현했다.


- 수평으로 스크롤링하는 토끼
![horizontal](img/rabbit_horizontal.gif)

- 수직으로 스크롤링하는 토끼
![vertical](img/rabbit_vertical.gif)


원래 예제는 수직이었는데 scrollIntoView에서 inline설정을 바꾸면 수평으로 이동한다고 해서 궁금해서 만들어봤다.
단, 수평으로 이동하기 위해서는 body에 그림이 줄바꿈되지 않도록 "white-space: nowrap;" 이라는 설정을 하나 넣어줘야 한다.


<br/>
<br/>
<br/>


# 기능목록
짧은 코드지만 습관들일 겸 html, css, js로 파일을 구분해서 작성했다.

<br/>

## 필요한 요소

- [x]  토끼를 찾는 버튼
- [x]  당근들
- [x]  토끼

<br/>
<br/>

## 필요한 기능

- [x]  토끼로 이동하는 버튼

    ```jsx
    const button = document.querySelector("button");

    button.addEventListener('click', (event) => {
    	...
    }
    ```

    addEventListener 메서드로 클릭할 때 이벤트가 발생하도록 했다.
    
    <br/>
    

- [x]  토끼의 좌표

    토끼의 좌표보다는 토끼 이미지를 보여주는 api를 사용하면 된다.

    좌표는 스크롤을 맨 처음으로 올리는데 사용했다.
    
    <br/>

- [x]  토끼까지 스크롤링

    ```jsx
    const rabbit = document.querySelector(".rabbit");

    button.addEventListener('click', (event) => {
      rabbit.scrollIntoView({block: "end", behavior: "smooth"});
    });
    ```

1. 토끼 클래스에 scrollIntoView를 연결시켜 바로 토끼가 있는 곳으로 이동하도록 했다.
2. scrollIntoView(true) : true로 설정되면 {block:"start", inline:"nearest"}가 기본값이다. 
3. 스크롤이 내려갈 때 동적으로 부드럽게 내려갔으면 해서 behavior: "smooth"라는 옵션을 추가해줬다.
4. block:"end"로 되면 어떤 일이 일어나는지 궁금해서 end로 설정했다.

    (이미지가 가장 아래에 배치됨)

<br/>
<br/>

## 추가기능

- [x]  다시 위로 되돌아가는 버튼

    ```jsx
    const reset = document.querySelector(".reset");

    reset.onclick = () => {
      window.scrollTo({top:0, behavior:"smooth"});
    };
    ```

    다시 상단으로 되돌아가는 버튼은 이벤트 핸들러 프로퍼티 방식인 onclick을 사용했다.

<br/>
<br/>
<br/>


# 코드리뷰

```jsx
img {
/* setting to one img for one line
   display: block;
   but I set "inline" to move horizontal*/
   display:inline;
   margin: 100px 0;
};
```

- 수직으로 만들 때 각 이미지가 한줄에 나오지 않게 하기 위해서 div태그를 이용했는데 img css에 "display: block;"을 넣어주면 각 라인마다 하나의 이미지만 나온다.

```jsx
body {
      background-color: pink;
      /* set a center option in body */
      text-align:center;
      white-space: nowrap;
    }
```

- body에다가 "text-align: center;"를 넣어주면 전체적으로 가운데정렬 되므로 각 태그마다 일일이 정렬해주지 않아도 된다.
- white-space를 넣으면 수평으로 스크롤링 된다.

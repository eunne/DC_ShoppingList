# WebAPIs practice_Where are you, Rabbit??

짧은 코드지만 습관들일 겸 html, css, js로 파일을 구분해서 작성했다.

# 기능목록

## 필요한 요소

- [x]  토끼를 찾는 버튼
- [x]  당근들
- [x]  토끼

## 필요한 기능

- [x]  토끼로 이동하는 버튼

    ```jsx
    const button = document.querySelector("button");

    button.addEventListener('click', (event) => {
    	...
    }
    ```

    addEventListener 메서드로 클릭할 때 이벤트가 발생하도록 했다.

- [x]  토끼의 좌표

    토끼의 좌표보다는 토끼 이미지를 보여주는 api를 사용하면 된다.

    좌표는 스크롤을 맨 처음으로 올리는데 사용했다.

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

## 추가기능

- [x]  다시 위로 되돌아가는 버튼

    ```jsx
    const reset = document.querySelector(".reset");

    reset.onclick = () => {
      window.scrollTo({top:0, behavior:"smooth"});
    };
    ```

    다시 상단으로 되돌아가는 버튼은 이벤트 핸들러 프로퍼티 방식인 onclick을 사용했다.

# 구현

GIT주소

- [ ]  소스코드 git에 업로드하기
- [ ]  readme페이지 만들기
- [ ]  git찍기

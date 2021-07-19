# Let's make Shopping list app

## 요소

1. 목록을 적는 창: [mozilla](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)
2. 적은 목록을 보여주는 창
3. 목록 삭제하기
4. 리스트에 들어가면 text창 내역 삭제하기

<br/>
<br/>

## 기능구현

### 1. 쇼핑리스트를 입력하는 창

- input 이라는 요소를 통해서 사용자가 텍스트를 적을 수 있는 창을 만들었다.
- 그 옆에 'Add'버튼을 만들었는데 button기능을 이용해서 가져왔는데 input에 submit이라는 기능이 있던데 button과 뭐가 다른걸까?

<br/>

### 2. 기재한 내용을 리스트에 추가하는 기능

```jsx
const add = document.querySelector("#add");
add.addEventListener("click", clickButton);

function clickButton(){
//추가되는 리스트가 한 줄 전체를 차지하도록 div태그로 넣었다.
  let temp = document.createElement('div');

//추가되는 모든 리스트에 공통된 css적용을 위해 class를 세팅해줬다.
  temp.setAttribute("class","alllist");

//각 리스트마다 고유아이디를 갖도록 만들었다. 이는 추후 삭제시에 필요하다.
  temp.setAttribute("id","addlist"+idx);

//input에 들어온 값을 HTML에 PRINT한다.
  temp.innerHTML = input.value;

//이 때에 삭제버튼도 함께 넣어준다.
  temp.innerHTML += "<button id='addbtn' onclick='remove("+idx+")'>X</button>";

//리스트 태그 아래에 자식노드로 추가하자.
  list.appendChild(temp);

//리스트에 들어가면 input창의 값을 지워주자
  input.value = '';

//그리고 인덱스값을 하나 더해주자
  idx++
}
```

<br/>

- 일단, input에 적은 내용을 어떻게 추가하는지를 찾아봤다.
보아하니 js에서 list태그 아래에 input의 값을 가져와서 넣어준다.
    
<br/>

- 대체 setAttribute의 기능은 무엇일까 고민했는데 setAttribute("key","value")로서 클래스와 클래스이름, 아이디와 아이디 이름, 이런 식으로 세팅하는데 매우 유용한 친구였다.

    예를들어, 리스트에 품목을 하나씩 추가할 때마다 이런 코드가 생성되는 것이다.

    ```jsx
    <div id='addlist0' class='alllist'>추가된 내용</div>
    ```

<br/>

   밑에는 실행화면

   ![addlist](/img/addlist.png)

<br/>

- 리스트에 추가하는 것은 createElement라는 api로 추가하는데 삭제는 어떻게 할까?

   요소 하나씩 삭제를 해야하는데 어떻게 하지? 라는 궁금증이 있었는데 바로 요소 하나를 추가할 때 마다 고유의 아이디를 만들어주는 것이었다.

   고유 아이디는 index순서대로 넣어주었다.

<br/>

 - 여러 요소를 넣으니 리스트가 너무 다닥다닥 붙어있어서 해당 리스트를 좀 띄어주고 싶었다.

   그래서 'alllist'라는 클래스를 만들어서 일정한 padding을 줘서 간격을 띄어줬다.

   (이 작업을 하면서 setAttribute에 대해 '아!! 이런거였구나!!'를 알게됨)
        
   <br/>
        

### 3. 엔터키를 누르면 기재한 내용이 리스트에 추가되도록 하는 기능

    ```jsx
    input.addEventListener("keyup", event => {
      if (event.keyCode === 13 ){
        clickButton();
        }
      }
    );
    ```

2번에서는 add버튼을 누르면 기재한 내용이 추가되지만, 엔터버튼을 통해서도 리스트에 추가되도록 하는 기능을 구현했다.

이 기능을 구현할 때, 내용이 리스트에 추가될 때 마다 고유의 인덱스를 갖기 때문에 '엔터키와 add버튼을 눌렀을 때 동작하는 함수'는 '하나'가 되어야 한다고 생각했다.

그래서 어떻게 하면 이 함수를 두가지 기능에 바인딩 할 수 있을까를 고민했다.
    
<br/>

### 첫번째 시도: onkeyup 어트리뷰트 방식

엔터키를 누르면 추가되는 이벤트를 찾아보니 'onkeyup' 이란 이벤트가 있었는데 대부분이 html의 태그 안에서 해당 기능이 발생하도록 작성했더라.


그래서 나도 처음에는 html태그 안에서 <onkeyup = "ClickButton()"> 으로 직접 해당 함수를 가져오는 방법을 해봤는데 이렇게 하니까 'enter'키가 아니라 키보드만 쳐도 내용이 막 추가가 됐다.

onkeyup기능을 '엔터키'로 한정시키려면 if (event.keyCode === 13 ) 라는 조건을 걸어줘야하는데 이걸 어떻게 걸어줄까..고민을 했다.

    ```jsx
    function enterkey() { 
    if (event.keyCode === 13 ){
        clickButton();
     }
    }
    ```

위와 같이 함수를 만들어서 onkeyup = "enterkey()"로 넣어봤지만 작동하지 않았다. 생각해보니 이런 어트리뷰트방식으로 쓰면 함수의 평가결과가 바인딩되기 때문에 clickButton과 같은 함수문 자체를 넣으면 실행이 안된다고 이벤트 핸들러를 공부할 때 배운게 생각났다.

 <br/>
    
### 두번째 시도: addEventListener 메서드

그래서, 꼭 onkeyup기능을 tag 안에서 수행 할 필요가 없단 생각이 들었다. 이벤트 핸들러가 어트리뷰트방식, 프로퍼티 방식, 메서드 방식이 있듯이 분명 해당 이벤트도 다른 방식이 있을거라 생각했다. 찾아보니 역시나였다.


그래서 위에서 addEventListener 메서드로 add버튼에 대한 기능을 바인딩시킨 것 처럼 onkeyup기능도 addEventListener 메서드에다가 바인딩 시켰다. 오오!!!! 작동이 된다!!!!

   <br/>
   <br/>
   
## 실행화면


그리하여 결론적으로 아래와 같이 구현했다. 아직 미완성이지만 오늘까지 구현한 기능을 기록으로 남겨본다.

내일 한번 위 코드를 '안보고' 어떻게 구현했었는지 떠올리면서 다시 작성해봐야겠다.

![shoppinglist](/img/shoppinglistv1.gif)

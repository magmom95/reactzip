![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=리액트%20정리%20&fontSize=90&animation=fadeIn&fontAlignY=38&desc=%20이성규&descAlignY=65&descAlign=90)

# 리액트 이것저것 정리 

📌 기업에서 웹앱을 사용하는 이유 

- UX가 뛰어나서 좋은 사용자경험을 제공

- HTML 관리가 편해짐

- 구매전환율도 높아짐

- 리액트 문법으로 iOS/Android 모바일 앱제작도 가능

- 서버개발자가 편해짐

---

✨ state를 쓰는이유

``` javascript
  let [기존내용, 바뀔내용] = useState('바뀔내용에 들어가는데이터')
```

- state는 변수 대신 쓰는 데이터 저장공간

- 웹이 App처럼 동작하게 만들고 싶어서 state에 데이터 저장을 함

- state에 데이터 저장해놓을시 💥HTML이 자동 렌더링됨💥 <- 즉 새로고침없이 스무스하게 변경

- 기존 var, let 에 데이터를 넣고 바인딩 혹은 변경하여도 자동 재렌더링 안됨

✔ 결론은 자주 바뀌는 중요한 데이터는 변수 말고 state로 저장해서 씀 

---
 
📐 제목을 바꾸기 위하여 함수를 용한 state를 변경

``` javascript
let [글제목, 글제목변경] = useState(['유튜브 추천', '룰루랄라', '라랄루룰']);
  
function 제목변경(){
    let 제목변경 = 글제목;  
    제목변경[0] = '유튜브 현재 추천' 
    글제목변경(제목변경); 
    
    <button onClick={ 제목변경 }>제목 바뀝니다.</button>
}
```

1. 글 제목이라는 state를 직접 수정할 수없으므로 복사본을 만듬

2. 글제목이라는 state의 복사본을 만들어 '제목 변경'라는 변수에 저장 

3. '제목 변경'의 0번째 데이터를 '유튜브 현재 추천'으로 변경

4. 그리고 그걸 글제목변경()함수 안에 넣어서 글제목 state를 변경

⚠ 그러나 위와 같이 코드를 짜면 작동이 되지 않는다.

<details markdown="1">
<summary>동작하지 않는 이유</summary>

✔ state를 복사할떄는 원래 자바스크립트 내에서 array나 object 자료형은 = 등호로 복사하시면 각각 별개의 자료형이 생성되는게 아니라 값을 공유함 

``` javascript
    var data1 = [1,2,3];
    var data2 = data1;
```
이런 식으로 사용하면 data1에 있던 자료를 data2에 복사한다는 뜻

근데 data1과 data2는 각각 [1,2,3]을 별개로 저장하는게 아니라 

data1과 data2는 똑같은 값을 공유

💢 data1을 변경하면 data2도 자동으로 변경됨 (참조임)

</details>

✔ 결론은 아래와 같이 코드를 짜면 동작이 가능하다 이떄 사용한 문법이 spread 이다.

<details markdown="1">
<summary>spread 문법이란?</summary>

``` javascript
    var data1 = [1,2,3];
    var data2 = [...data1];
```
그냥 data1에 있던 자료들을 괄호 벗긴담에 다시 array로 만들어주세요~ 라는 뜻

array를 이런 식으로 사용하면

완전 독립적인 array 복사본을 생성해주는 copy가 가능

object 자료형도 똑같이 가능

...[1,2,3] 이렇게 쓰면 그 자리에 1,2,3 이 남음 

⚠ 걍 괄호 벗기기용 연산자입니다.

</details>

✔ 결론은 아래와 같이 코드를 짜는 것

``` javascript
let [글제목, 글제목변경] = useState(['유튜브 추천', '룰루랄라', '라랄루룰']);
  
function 제목변경(){
    let 제목변경 = [...글제목]  /* 1. 기존 state에 카피본을 만들고 <-deepcopy를 함 <- spread 사용 */
    제목변경[0] = '유튜브 현재 추천' /* 2. 카피본에 수정사항 변경 */
    글제목변경(제목변경); /* 3. 변경함수에 () 집어넣기 */
    
    <button onClick={ 제목변경 }>제목 바뀝니다.</button>
}
```

📌 리액트에서 state를 수정하고 싶으면 보통 이런 패턴으로 코드를 짜므로 외우자 ‼

1. 수정하고 싶은 state의 deep/shallow 카피본을 하나 생성

2. 카피본을 입맛에 맞게 수정 

3. 카피본을 state변경함수()에 집어넣음 

⚠ 그러나 사본을 만드는건 reference 자료형들만 하면 됨 ( ex) array, object ) 문자, 숫자, true/false 이런건 필요없이 직접수정 가능! ⚠

---

🚩 HTML을 간략하게 줄이는 방법

``` javascript
  <div className='modal'>
        <h2>모달창</h2>
        <p>연습중이에요</p>
        <p>아하아하</p>
  </div>
```

이러한 코드로 HTML을 만든다고 가정하자 

``` javascript
  <div className='modal'>
        <h2>모달창</h2>
        <p>연습중이에요</p>
        <p>아하아하</p>
  </div>
  <div className='modal'>
        <h2>모달창</h2>
        <p>연습중이에요</p>
        <p>아하아하</p>
  </div>
  <div className='modal'>
        <h2>모달창</h2>
        <p>연습중이에요</p>
        <p>아하아하</p>
  </div>
```

보는거와 같이 같은 코드를 여러개 쓴다면 과연 효율적이지 않음

<details markdown="1">
<summary>HTML을 한단어로 줄여서 쓸 수 있는 방법?</summary>
📌 리액트의 Component 문법

</details>

``` javascript
function App() {

function Modal() {
  return(
    <div className='modal'>
        <h2>모달창</h2>
        <p>연습중이에요</p>
        <p>아하아하</p>
    </div>
  )
}

 return(
  <Modal/>
);
}

export default App;
```

1. function을 이용해서 함수를 하나 만듬

2. 그 함수 안에 return () 안에 원하는 HTML을 담음

3. 그럼 원하는 곳에서 <Modal></Modal> 이라고 사용했을 때 아까 축약한 HTML이 등장

✔ Component의 특징

1. Component 이름지으실 땐 영어대문자로 보통 시작

2. return () 안엔 태그들이 평행하게 여러개 들어갈 수 없음

평행하게 여러개의 태그를 쓰고 싶으면 <div>로 묶거나

의미없는 div를 쓰기 싫으시면 <> </> 이걸로 묶으면 됨

 
``` javascript
function EX(){
  return (
    <>
      <div>안녕</div>
      <div>안녕</div>
      <div>안녕</div>
    </>
  )
}
```

▲ fragments라는 문법 (의미없을때 <> </> 사용함)

3. component 위치는.. function App(){} 이것과 보통 나란히 만들어줍니다.

왜냐면 function App(){} (이것도 컴포넌트 생성문법)

보통 컴포넌트용 function 안에다가 컴포넌트용 function을 만들진 않음

4. component 안에 미리 만들어둔 component 집어넣기도 가능합니다.

``` javascript
function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <EX></EX>
    </div>
  )
}
function EX(){
  return ( <div> 안녕 </div> )
}
```

📌 어떤 HTML을 Component화 시키는게 좋은것인가?

- 사이트에 반복해서 출현하는 HTML 덩어리들은 Component로 만들어야 함

- 내용이 매우 자주 변경될 것 같은 HTML 부분을 잘라서 Component로 만들어야 함

- 다른 페이지를 만들고 싶다면 그 페이지의 HTML 내용을 하나의 컴포넌트로 만드는걸 추천 (그냥 좋을 뿐 필수는 아님)

- 또는 다른 팀원과 협업할 때 웹페이지를 컴포넌트 단위로 나눠서 작업을 분배할때 편함

✔ 즉 코드 재사용할 때, 기능별로 나눌 때 유지 보수할 때 사용하기 편함 

📌 Component의 단점

- <Modal>이라는 컴포넌트가 App(){} 안에 있는 state를 사용하고 싶을 때 그냥 바로 쓸 수 없음 props라는 문법을 이용해 state를 <Modal>까지 전해줘야 비로소 사용가능

  ---
  
  

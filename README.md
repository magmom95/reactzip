![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=리액트%20정리%20&fontSize=90&animation=fadeIn&fontAlignY=38&desc=%20이성규&descAlignY=65&descAlign=90)

# 리액트 이것저것 정리 

🎫 페이스북에서 리액트를 개발한 이유

- 보여 줄 view가 많아서 지들이 개발할 때 편할라고

---
<details markdown="1">
<summary>💄 SSR? CSR? </summary>

<br>

- SSR

![p1_ssr](https://user-images.githubusercontent.com/64140544/166455506-dc44cf04-5fb4-434e-a689-4fbb11405009.jpg)

- 클라이언트(브라우저)가 데이터를 요청하면 그림의 순서대로 브라우저=>프론트 서버=>백엔드 서버=>데이터베이스 를 거쳐 데이터베이스에서 데이터를 가져온 후 다시 브라우저에 데이터가 그려지는 형식

- CSR

![p1_csr](https://user-images.githubusercontent.com/64140544/166455508-cddaefbc-657a-4ed8-9e2c-e6c523a1def0.jpg)

- CSR은 react, vue 등의 SPA(Single Page Application)에서 쓰이는 기법으로, 서버에서 화면을 구성했던 SSR 방식과 달리 클라이언트에서 화면을 구성

- SPA의 경우 첫 화면에 들어가게 되면, 그림의 1번처럼 데이터를 제외한 화면을 그리는 코드들이 프론트 서버에서 다운받아짐 (데이터를 제외한 코드들은 js파일에 한번에 번들되어 오기때문에 번들된 이 파일을 처음에 다운받는데 시간이 꽤 걸릴 수 있음 이것이 CSR방식의 단점=> 초기 진입속도가 SSR에 비해 느림/ code splitting이라는 기능으로 어느정도 해결 가능)

- 화면을 그리는 코드는 다운받았지만 아직 데이터를 다운 받은 상태가 아님 CSR의 경우 클라이언트의 요청이 발생하면 필요한 데이터만 백엔드 서버에 요청하여 데이터만 받아 옴

---

</details>

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

⚠ 그러나 위와 같이 코드를 짜면 작동이 되지 않

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

✔ 결론은 아래와 같이 코드를 짜면 동작이 가능하다 이떄 사용한 문법이 바로 spread 

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

⚠ 걍 괄호 벗기기용 연산자

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

3. component 위치는.. function App(){} 이것과 보통 나란히 만들어 

왜냐면 function App(){} (이것도 컴포넌트 생성문법)

보통 컴포넌트용 function 안에다가 컴포넌트용 function을 만들진 않음

4. component 안에 미리 만들어둔 component 집어넣기도 가능

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

- <Modal>이라는 컴포넌트가 App(){} 안에 있는 state를 사용하고 싶을 때 그냥 바로 쓸 수 없음 props라는 문법을 이용해 state를 <Modal>까지 전해줘야 비로소 사용 가능

---
  
🎨 자식이 부모의 state를 가져다 쓰고 싶다면?
  
![image](https://user-images.githubusercontent.com/64140544/146533608-cdb998e6-e87d-433e-963a-ec96890d97b4.png)

- App이라는 컴포넌트안에 <Modal> 이라는 컴포넌트를 만들었다 가정 (부모 자식 과정)

- App은 부모 컴포넌트고 Modal은 자식 컴포넌트일때 자식 컴포넌트가 부모 컴포넌트 안에 있던 state를 공통으로 쓸 수 있을까?
  
``` javascript
  function App (){
  let [글제목, 글제목변경] = useState(['유튜브 추천', '룰루랄라', '라랄루룰']);
  return (
    <div>
      ...
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목 { 글제목[0] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
  
```
  
<details markdown="1">
<summary>그렇다면 어떤 것을 사용해야하는가?</summary> 
<br>
✔ props : 자식이 부모의 state를 가져다쓰고 싶을때 사용하는 문법
<br><br>
props를 사용하는 방법은?
  
- <자식컴포넌트 전송할이름={state명}>
  
- 자식컴포넌트 선언하는 function 안에 파라미터를 하나 만들어주면 됨
  
``` javascript
  function App (){
  let [글제목, 글제목변경] = useState(['유튜브 추천', '룰루랄라', '라랄루룰']);
  return (
    <div>
      ...
      <Modal 글제목={글제목}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.글제목[0] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
  
```
  
▲ 두가지 스텝을 밟아주시면 props로 원하는 state를 전송가능

1. <Modal 전송할이름={state명}> 이렇게 원하는 state를 적어주시면 전송이 됨

2. 그리고 function Modal(props){} 이렇게 Modal 함수 소괄호 내에 파라미터를 하나 추가

3. 그럼 이제 props.전송할이름 이렇게 쓰시면 전송된 props를 사용 가능

</details>

참고1) props는 <Modal 이런거={이런거}  저런거={저런거}> 이렇게 10개 100개 1000개 무한히 전송이 가능

참고2) props라는 파라미터엔 전송한 모든 props 데이터가 들어가 있음 props.글제목 이런 식으로 원하는 것만 꺼내서 쓰면 됨

참고3) props 전송할 땐 꼭 {} 중괄호로 전송해야하는건 아님

  <Modal 글제목={변수명}> 이렇게 변수명을 넣고싶으면 중괄호

<Modal 글제목="유튜브 추천"> 이렇게 일반 텍스트를 전송하고 싶으면 따옴표 써도 됨
  
---
  
📐 반복되는 div를 줄일려면?
  
<details markdown="1">
<summary>어떤 것을 사용해야하는가?</summary> 
<br>
✔ map : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수의 반환값(결과값)으로 새로운 배열을 생성 
  
<br>
<br>
  
  ![image](https://user-images.githubusercontent.com/64140544/147236374-c3621c11-df57-4bd5-b916-ac4e3aba0f09.png)
  

  이때 원본 배열은 변경 X
</details>
  
---

🏴 import(가져오기) && export(내보내기) 를 쓰는 이유?

- React를 개발하다보면 파일이 커지면 언젠가 파일을 여러 개로 분리해야 할 때 
  
- 만약 App.js 파일 하나의 코드가 천줄, 만줄이라고 하면 코드를 파악하느라 시간을 다쓰게 되어 코드를 수정하기가 많이 어려워 질 때 

---
  
<details markdown="1">
<summary>여러가지 페이지를 만들려면?</summary>
<br>
✔ 라우팅
<br><br>

- 리액트는 SPA (Single Page Application) 방식으로써, 여러개의 페이지를 사용하며, 새로운 페이지를 로드하는 기존의 MPA 방식과 달리
새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가짐

⚠ MPA (Multi Page application) 방식이란?
  
- 로그인.html 페이지와 회원가입.html가 별도로 나눠져 있고 페이지를 이동하는 방식
  
🎨 SPA 방식이란?
  
- 오직 하나의 html 페이지 안에서 로그인과 회원가입에 대한 데이터 js 파일을 가지고 사용자가 회원가입 버튼을 눌렀을 때, 회원가입에 대한 데이터 자료를 렌더링하는 방식
   
‼ 즉, 둘의 차이는 단순하게 현재의 페이지를 완전히 다시 로드해서 새로 구성을 하느냐

아니면 필요한 데이터만 가지고 와서 재로드 없이 렌더링하느냐의 차이

```shell
npm install react-router-dom@5
yarn add react-router-dom@5
```

둘 중에 하나로 다운로드 받은 후

index.js 에 
  
```javascript
  import { BrowserRouter } from 'react-router-dom';

(... 중략)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```
📌 BrowserRouter란?
  
- HTML5의 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경할 수 있도록 해줌 (즉, 페이지 변경으로 인한 깜빡거림 X)
또, 현재 주소에 관련된 정보를 props로 조회 및 사용이 가능하도록 만들어 줌

- BrowserRouter 는 라우팅을 리액트가 아니라 서버에게 요청할 수도 있어서 위험 
  
- 그래서 나온 hashRouter 는 라우팅을 보다 안전하게 해줌
  
💥 즉 리액트 라우터를 사용하는 이유는
  
- 여러 페이지들이 존재하는 서비스를 만들 때 필요
  
- url 주소나 특정상태에 따라서 view를 나누기 위해서 사용 
 
```javascript
  <div>
      <Route path="/이동할 주소" component={출력할 컴포넌트}/>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
  </div>
```
📌 라우터의 Link 태그, Switch 태그, history 역할?
  
```javascript
    <a href="localhost:3000/about">
```
- a 태그를 사용하면 될까?

- Route를 사용하는 이유는 현재 페이지에서 상태를 유지하면서 바뀐 주소에 따라 바뀐 화면만 보이고 싶을 뿐인데, a태그를 사용할 경우, 상태가 전부 날아감 
  또 기존의 렌더링된 컴포넌트를 다 날려버리고 처음부터 렌더링이 진행됨

✔ 정답은 X Link를 사용해야한다

- Link 컴포넌트는 클릭하면 다른 주소로 이동하는 과정에서 페이지를 새로 불러오지 않고 유지한 상태에서 History API만을 사용하여 페이지의 주소만 변경 (새로운 페이지를 안부름)
      
- Link 컴포넌트는 한마디로 a의 상속버전이라고 봐도 무방한데, 컴포넌트 자체로는 a로 이뤄져 있지만, 추가적으로 페이지 전환을 방지하는 기능 

  
```javascript
  <div>
    <Link to='이동할주소'>내용</Link>
  </div>
```
 
- 코드를 작성한 의도는 에러가 발생했을 때 <PageNotFound> 컴포넌트를 보여주고 싶은데, 실제로 실행시켜보면 에러가 발생하지 않음에도 불구하고 해당 컴포넌트가 어떠한 URL에도 렌더링 됨
  
- 그 이유는 리액트의 라우터가 path 를 매칭시킬 때 값이 없기 때문에 무조건적으로 렌더링을 시킴

```javascript
  <div>
     <Route exact path="이 주소를 입력해야만 나옴">
  </div>
```

- exact 를 사용하면 이 주소만 쳐야 웹 페이지가 나오지만 하나 하나 설정하기 귀찮 
    
- 따라서, 이 문제를 해결하기 위해 <Switch> 가 등장한다. <Switch> 는 첫번째로 매칭되는 path 를 가진 컴포넌트를 렌더링 시킨다. 이것이 exact path (이 주소를 쳐야만 나옴) 와 다른 점은 첫번째 매칭만 본다는 것
      
```javascript
  <div>
    <Switch>
      <Route path="/이동할 주소" component={출력할 컴포넌트}/>
      <Route path="/" component={Home}  />
      <Route path="/about" component={About} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
```
- 위와 같이 <Route> 들을 <Switch> 로 감싸주면 에러가 발생했을 때 <PageNotFound> 가 나오게 되는데, 이는 첫번째로 매칭하는 path 값이 위에서 전부 없었기 때문임
</details>

---
      
✨ 함수 선언식과 표현식의 차이점
    
- 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않음
    
---
    
🤳 Lifecycle & Hook ?
    
- Hook이란 갈고리 즉! 중간중간에 무언가 나오게 (?) 할때 사용 

![image](https://user-images.githubusercontent.com/64140544/151591272-a5feb969-fe18-40e2-a870-219706ea82f3.png)

```javascript
class Detail extends React.Component {
  componentDidMount(){
    //Detail 컴포넌트가 Mount 되고나서 실행할 코드
  }
  componentWillUnmount(){
    //Detail 컴포넌트가 Unmount 되기전에 실행할 코드
  }
}
```
    
1. 컴포넌트 첫 등장 후 실행할 코드 (componentDidMount())

2. 다른페이지로 넘어간다든지 등의 사유로 컴포넌트가 사라지기 전 실행할 코드 (componentWillUnmount())

🎉 useEffect 훅이란?

- 위에껀 class 형식이고 useEffect는 functon컴포넌트 안에 넣음 
    
```javascript
(Detail.js 파일)

function Detail(){

  let [ alert, alert변경 ] = useState(true);
  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
  });
  
  return (
    <HTML많은곳/>
    {
      alert === true
      ? (<div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>)
      : null
    }
  )
}
    
```

1. 근데 미리 페이지 상단에서 useEffect를 import 

2. useEffect() 를 사용함

3. 그리고 안에 콜백함수를 집어넣음

4. 콜백함수 안에는 Detail 컴포넌트가 첫 등장하고나서 실행하고싶은 코드를 적으면됨

---
    

    
❤ REDUX를 쓰는 이유?

<details markdown="1">
<summary>📌 셋팅</summary>
  
1. index.js에 ```<Provider>```를 import 함

2. state 값공유를 원하는 컴포넌트를 감싸면 됩니다.

3. ```createStore```를 import 해오신 다음 사용법에 의해 ```state```를 만들어 ```let store```라는 변수에 저장을 한다 가정하고
    
4. ```<Provider store={store}>``` 이렇게 store를 등록하면 이제 Provider로 감싼 컴포넌트는 전부 store안에 있던 값을 props없이 공유 가능합니다.

💥 이제 Provider로 감싼 컴포넌트는 전부 store안에 있던 값을 props없이 공유 가능
  
---
   
</details>
  
✔ props 전송 없이도 모든 컴포넌트들이 state를 사용할 수 있게 만들어줌
    
- 컴포넌트가 매우 깊숙히 있다면 state전달하려고 props 100번 써야되고 귀찮은데 redux를 이렇게 셋팅해주시면 props 100번 쓸 필요가 없이 바로 꺼낼 수 있음

---

<details markdown="1">
<summary>⚠ redux로 state 데이터를 수정하는 방법</summary>

1. reducer 함수를 만들고 그곳에 데이터 수정하는 방법을 정의

2. 그리고 원하는 곳에서 dispatch() 라는 함수를 써서 reducer에게 수정해달라고 요청
  
✔ 즉!
  
1. state 데이터의 수정방법을 index.js에다가 미리 정의해놓고 (일명 reducer)

2. index.js에게 수정좀 해달라고 요청 

🎉 여기서 reducer는 function 안에 

1. state 초기값과

2. state 데이터 수정방법이 잔득 들어있는 함수

```javascript
  
(index.js)

function reducer(){
  return [{id : 0, name : '예시', quan : 2}]
}
  
function reducer(state = 기본state, 액션){
  if (액션.type === '추가') {
    
    let copy = [...state];
    copy[0].quan++;
    return copy

  } else if (액션.type === ''){

    let copy = [...state];
    copy[0].quan--;
    return copy

  } else {
    return state
  }
  
}
  
let store = createStore(reducer);
  
```

보는것처럼 
  
1. 따로 state 변수를 만들고

2. 그걸 reducer에 default 파라미터 문법으로 집어넣어도 됨
  
```javascript
<button onClick={()=>{ props.dispatch({type: '추가'}) }}> + </button>
<button onClick={()=>{ props.dispatch({type: '감소'}) }}> + </button>
```
  
---
  
</details>

‼ 무조건 redux를 쓰는것이 아님 오히려 소규모 사이트면 필요없음 

✔ 대규모 사이트들에서 데이터를 한 눈에, 한 곳에 관리할 수 있어서 씀

- redux는 결론적으로 state 관리가 용이 === 상태관리가 용이
 
---
  
<details markdown="1">
  
<summary>⚠ reducer가 여러개 필요한다면?</summary>
 
```javascript
  
let store = createStore( combineReducers({reducer, reducer2}) )
  
```
  
- combineReducers() 라는 함수를 하나 'redux'에서 import 하고

- combineReducers() 안에 모든 리듀서를 object 형식으로 작성

---

</details>
  
💥 만약 reducer가 2개이상이면 데이터 형식이 달라질수 있으므로 주의해야함

<details markdown="1">

<summary>⚠ 혹시나 데이터가 제대로 되있는지 확인하려면?</summary>

- state를props화 해주는 함수(test) 를 사용하요 콘솔창에 출력하면됨
  
```javascript
  
function Cart(props){
  return (
    ...
  )
}

function test(state){
  console.log(state);
  return {
    state : state,
  }
}
export default connect(test)(Cart)
  
```
  
---
  
</details>

<details markdown="1">

<summary>⚠ 데이터를 실어보내려면?</summary>

- dispatch를 사용하면 됨
  
```javascript
  
 (Detail.js)

function Detail(props){
  return (
    <HTML많은곳/>
    <button onClick={()=>{ 
  
      props.dispatch({type : '항목추가', payload : {id : 2, name : '새로운상품', quan : 1} }) 

    }}>주문하기</button>
  )
}
  
```

- dispatch 요청을 할때 추가 된 데이터를 함께 실어서 보냄 그리고 state에 추가 됨
  
- dispatch 할 때 안에 type말고 payload(가제)라는 항목을 만들고 redux store로 전달할 데이터를 작성가능
  
```javascript
  
function Cart(props){
  return (
    ...
  )
}

function test(state){
  console.log(state);
  return {
    state : state.reducer,
    state2 : state.reducer2
  }
}
export default connect(test)(Cart)
  
```

- 보는 것 처럼 수정을 하면 오류가 수정 됨

📌 전송한 데이터를 출력하거나 가져다 쓰려면
  
```javascript
  
(index.js)

let 기본state = [{id : 0, name : '멋진신발', quan : 2}];

function reducer(state = 기본state, action){

  if (action.type === '항목추가') {

    let copy = [...state];
    copy.push(action.payload);
    return copy;

  } else if (action.type === '수량증가'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (action.type === '수량감소'){
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else {
    return state
  }
}
  
```
  
- reducer(state, action) {} 이렇게 적은 부분에서의 action이라는 파라미터는

그냥 dispatch() 소괄호 안에 들어있던 모든게 들어있음
  
---
  
</details>
  
---

📐 useSelector Hook
  
``` javascript
  function test(state){
  console.log(state);
  return {
    state : state.reducer,
    state2 : state.reducer2
  }
}
export default connect(test)(Cart)
```
  
이 코드를 useSelector Hook을 아래와 같이 바꿀 수 있음
  
``` javascript
import { useSelector } from 'react-redux';

function Cart(props) {
  let state = useSelector((state) => state )
  console.log(state.reducer)
  
  (생략)
} 
```
1. useSelecotr()라는 함수를 import 
  
2. useSelector() 안에 콜백함수에 redux state에 변수에 저장해서 씀

- 콜백함수 안에는 파라미터 하나 입력가능한데 그건 자동으로 store (reducer 합친거)가 됨 

- 그럼 (state) => state.reducer 이런 식으로 쓰면 조금 상세하게 state를 원하는 것만 가져옴

- 아무튼 state 쉽게 가져오고 싶으면 쓰면됨
  
---
  
📐 useDispatch Hook
  
``` javascript
import { useSelector, useDispatch } from 'react-redux';

function Cart(props) {
  let state = useSelector((state) => state )
  let dispatch = useDispatch()
  
  (생략)
} 
```

그럼 이제 props.dispatch()로 state 수정요청 날리던걸

dispatch() 만으로 간단하게 사용할 수 있음
  
---
  
📌 다시 한번 redux 쓰는 이유
  
![image](https://user-images.githubusercontent.com/64140544/152136186-f5bfa0eb-c428-47be-8629-6d757f96a169.png)
  
1. 모든 컴포넌트가 props 없이도 state를 꺼내 쓸수 있음
 
2. state 버그 관리가 용이 (reducer로 미리 정의 dispatch()를 이용해서 reducer에 state를 수정 요청)
 
```javascript
  
(index.js)

let 기본state = [{id : 0, name : '멋진신발', quan : 2}];

function reducer(state = 기본state, action){

  if (action.type === '항목추가') {

    let copy = [...state];
    copy.push(action.payload);
    return copy;

  } else if (action.type === '수량증가'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (action.type === '수량감소'){
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else {
    return state
  }
}
  
```

- 여기서 나오는 ```action```은 중앙 저장소에 저장된 ```state```에 "무슨" 동작을 할 것이지 적어놓는 객체 ```action```에는 ```type``` 이 필수로 필요합니다. (type 공식문서에서 권장)

- ```Dispatch```는 위에서 action Creater로 return 해준 ```action```을 파라미터로 받아서 ```store```의 ```reducer```에게 넘겨주는 역할을 해주는 열차 
  
- ```store```는 모든 컴포넌트에서 사용할수 있는 Global State를 저장해놓는 저장소

- ```state```는 엄격하게 관리해야하므로 ```dispatch```라는 함수를 통해서만 ```state``에 접근 가능 

- store의 값을 변화 시키기 위해서 ```action```이 필요 ```action```을 ```action creater```가 만들고 그걸 ```dispatch```열차가 ```store```의 ```reducer```에게 ```action```을 전달해주면 reducer가 ```action```의 ```type```을 보고 행동을 해줌 

![image](https://user-images.githubusercontent.com/64140544/152989611-8946a545-55ef-45cc-a0d4-297c6717bc21.png)
  
![image](https://user-images.githubusercontent.com/64140544/152989682-1bcc507f-f704-47ef-83ed-948955666e24.png)

1. 컴포넌트에서 action을 정의

2. action을 dispatch로 담아 reducer에게 전달

3. state를 변경하기 전 기존 state를 새로운 정보가 담길 newstate에 복사하고 정보를 변경

4. reducer가 newstate를 리턴하면 newstate가 store내 state가 됨 그리고 앞으로 이 state가 사용
---
  
📌 useEffect가 작동하는 몇가지 조건
  
1. 페이지가 처음 렌더링 되고 난 후 <b>무조건</b>
  
2. useEffect에 배열로 지정한 useState의 값이 변경되면 실행 됨
  
✔ useEffect는 렌더링, 혹은 변수의 값 혹은 오브젝트가 달라지게 되면 그것을 인지하고 업데이트 해주는 함수
  
- 결론 렌더링 혹은 값, 오브젝트의 변경에 따라 어떠한 함수 혹은 여러 개의 함수들을 동작 가능
  
---

📌 react에서 if문 쓰는 법
  
1. if/ else 문
  
``` javascript
function Component() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } 
  return null;
} 
```

- else와 중괄호 없이도 가능
  
2. 삼항연산자
  
``` javascript
function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  )
} 
```
  
3. && 연산자
  
``` javascript
function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  )
} 

function Component() {
  return (
    <div>
      {
        1 === 1 && <p>참이면 보여줄 HTML</p>
      }
    </div>
  )
}
  
- 왼쪽 조건식이 true면 오른쪽 JSX가 그 자리에 남고 왼쪽 조건식이 false면 false가 남음

4. switch / case    

``` javascript
function reducer(state, action){
  
  switch (action.type) {
    case '수량증가' :
      return 수량증가된state;
    case '수량감소' : 
      return 수량감소된state;
    default : 
      return state
  }

} 
```
  
5. 오브젝트 자료형을 응용한 enum
  
``` javascript
function Component() {
  var 현재상태 = 'info';
  return (
    <div>
      {
        { 
           info : <p>상품정보</p>,
           shipping : <p>배송관련</p>,
           refund : <p>환불약관</p>
        }[현재상태]
      }

    </div>
  )
} 
```

- 마지막에 object{} 뒤에 [] 대괄호를 붙여서 "key값이 현재상태인 자료를 뽑겠습니다" 라는 의미

- 그럼 이제 현재상태라는 변수의 값에 따라서 원하는 HTML을 보여줌

- 만약 위쪽 보기 코드 ```var``` 현재상태가 ```info```면 info 에 저장된 <p>태그가 ```refund```이면 refund 항목에 저장된 <p>태그가 나옴 
  
---

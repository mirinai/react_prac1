import logo from './logo.svg';
import './App.css';
import React,  {useState} from 'react';//일부만 업데이트

//html 코드를 쓰려면 return() 안에 쓰기
//css를 쓰려면 위에 보이는 것처럼 import
// class -> className : 자바스크립트에 이미 class라는 명령어가 있어서 className을 쓴다.
// - 표시는 뺄셈으로 다루기 때문에 대문자로 쓰기
//font-size => fontSize
// 변수를 쓸 때는 {} 씀
// style은 object 자료형으로 쓰기
// return()안에 가장 바깥에는 하나의 태그만

// 리액트 : 변수가 바뀌면 화면이 바뀌는 usestate(웹페이지를 다시 불러올 필요가 없음)
// import React,  {useState} from 'react';
// 리액트는 화면에 보여줄 값을 '변수'에 넣지 않고 'state'에 보관함
// 변수는 값이 바뀌어도 화면에 반영되지 않지만, useState라는 것을
// 쓰면 값이 바뀌면 화면도 따라서 바뀜(데이터바인딩)
// 따라서 바뀔만한 값은 useState로 보관하고 안 바뀔 값은 변수에 보관함

//App 컴포넌트
function App() {
  //여기에 자바스크립트 쓸 수 있음
  let var1='Nuclear Reactor Institute';
  //html안에서 쓰려면 {}가 있어야 함
  let var2="Do not put this mark"
  let [value,setValue] = useState('서버에서 바로바로 받는 값')
  //value : 변수

  let [title, setTitle] = useState(["Warning3","Warning2","Warning1"])
  let [date, setDateTime] = useState(["2024.04.13","2024.04.02","2024.03.15"])

  let  [score, setScore]=useState([0,0,0])
  //useState로 false [modal, setModal]
  let [modal, setModal]=useState(false)
  //모달창이 열릴 때 
  let [curIdx,setCurIdx]=useState(0) //

  function upScore0(){
    setScore(function(){
      let src=[...score]//score 배열을 나눈다. 그리고 다시 배열로 만듦
      src[0]+=1;
      return src;
    })
  }
  return (
    //return 안에는 html코드가 들어감(자바스크립트 쓰려면 {}가 있어야 함)
    <div className="App">
      <div className="black-nav">
        <img src={logo} width={'100px'} height={'100px'}></img>
        <br></br>
        <h4 style={{color:'yellow',  fontSize:'20px'}}>{var1}</h4>
      </div>
      <h4 style={{fontSize:'16px',color:'red'}}>{value}</h4>
    
    
      {
        //useState값을 바꾸려면 뒤에 있는 변수를 쓰기
        // 버튼을 누르면 setValue로 값을 바꿈
      }

      {/*
        리액트에서 {}안의 반복문은 for이 아니라 map으로 한다
        왜냐하면 for(){}에서 중괄호가 중복되기 때문에 map으로 함
        배열.map()

        list 클래스를 3번 되풀이

        중괄호 안에서 반복문 쓰기 -> map
        title의 갯수만큼 되풀이


        map 가장 바깥의 태그에 구분할 수 있는 key를 적기
      */
        title.map(function(element, idx){
          return(
            <div className='list' key={idx}>
              <h1 onClick={()=>{
                setCurIdx(idx)
                setModal(true)
              }
              }>{element} : {var2} <span onClick={(e)=>{
                //자바스크립트에서 배열요소를 고치려면 분해한 다음 바꾸고 다시 합쳐야함
                e.stopPropagation();
                upScore0()
                setScore(()=>{
                  let src = [...score]
                  src[idx]+=1;
                  return src
                })
              }}>☢</span> {score[idx]} Bq</h1>
              <p>날짜 : {date[idx]}</p>
            </div>
          )
        })
      }

      
      <button onClick={()=>{setValue("joy")}}>state값을 바꾸기</button>
      <div className='list'>
        <h1 onClick={()=>setModal(true)}>{title[0]} : {var2} <span onClick={(e)=>{
          //자바스크립트에서 배열요소를 고치려면 분해한 다음 바꾸고 다시 합쳐야함
          e.stopPropagation();
          upScore0()
        }}>☢</span> {score[0]} Bq</h1>
        <p>날짜 : {date[0]}</p>
      </div>

      
        {/*
        부분만 떼고 싶다 ==> 컴포넌트로 만들기
        modal값이 false면 안보이게, true면 보이게
        if랑 for이 {}를 쓰네?
        리액트{} 안에서는 if와 for이 쓸 수 없음 ==> 중복때문에
        if는 삼항연산자로,
        for는 map으로 제공...
        삼항연산자
        조건식 ? 맞으면_실행될_코드 : 틀리면_실행될_코드
        3 > 1 ? true : false

        modal 상태가 true면 <Modal/> 컴포넌트   적용,  false면 아무것도 없게

        다른 컴포넌트에 값을 넘겨줄 때는 props라는 것을 적용함
       */
        modal===true ? <Modal idx={curIdx} title={title} date={date}/> : null
       }
      

    </div>
    
  );
  // return (
    // <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        {/* <a */}
          {/* className="App-link" */}
          {/* href="https://reactjs.org" */}
          {/* target="_blank" */}
          {/* rel="noopener noreferrer" */}
        {/* > */}
          {/* Learn React */}
        {/* </a> */}
      {/* </header> */}

    // </div>
    
  // );
}


export default App;
//modal 컴포넌트 분리
// 코드가 길어지면 따로 함술로 나눠서 '컴포넌트'로 만들어준다
// return() 안에 html태그를 쓰기
// 쓰고자 하는 곳에 <함수이름/>
// 컴포넡트로 쓸 함수는 대문자 시작, 일반함수는 소문자로 하기

function Modal(props){
  return(
    <>
      <div className='modal'>
        <h2>{props.title[props.idx]}</h2>
        <p>{props.date}</p>
        <p>kuwasii naiyou</p>
      </div>  
    </>
  )
}

//리액트 빌드(리액트앱 배포)
// npm run build
// build라는 폴더가 만들어지고 그 안의 내용들을 배포하면 됨
## React의 문법

(1) import
-> 모듈을 불러오는 경우

(2) export
-> 다른 모듈에서 import하여 사용하도록 하기위한 방법
-> 단 한개만 사용할 수 있음.
-> 내보낼 대표값이므로 메인에 해당하는 값을 고려.

// import (usestate, component) from "react';
--> React.Component 기재하지 않아도
Component로 표기 가능

// es6의 export
--> export의 종류
[ 1. Named exports , 2. Default exports ]

(3) Component
-> React.Component를 확장(extends)해서
컴포넌트를 만드는 것

(4) render
-> 컴포넌트의 UI에 대한 설명을 반환하는 기능
-> HTML DOM을 렌더링하여 사용자에게 보여주는 역할
// HTML DOM은 가상 DOM을 의미,,
-> 마운트 될때, state에 변화가 일어나
DOM의 리렌더링 필요

// react UI라이브러리
react-dom UI라이브러리를 출려하는 역할 수행

-> React 0.14 버전이 도입후,
-> React는 1. core 라이브러리 , 2. DOM adapter

// 마운트란?
--> 저장 장치에 접근할 수 있는 경로를 디렉터리 구조에
편입시키는 작업

## JSX

1. Javascript + XML -> 기존 바자스크립트의 확장 문법
2. 바벨의 JSX 로더를 통해 native javascript로 변경..

-- 함수 호출로 변환
---> type, props, children을 의미..

(1) 낙타표기법
--> 각 단어의 첫 문자를 대문자로 표기
--> 맨 처음 문자는 소문자로 표기

(2) 태그를 반드시 닫혀야 합니다.
--> 닫히지 않으면 Failed to compile 에러가 발생
페이지가 로드되지 않습니다.

(3) 단일 루트 노드
-> 리액트 텀포넌트는 단일 루트 노드만 렌더링 가능
-> 반드시 하나의 엘리먼트로 감사져 있어야 함.
// 이것은 자바 스크립드의 특징

// 만일 단일 루트 노드를 지원되지 않는 경우
Fragment를 사용가능
<Fragment><div></div></Fragment>

(4) javascript 동적 값 할당은 { }
-> 자바스크립트의 객체를 JSX내 사용시 { } 사용.

// let, const == block scope
// 함수 단위 scope var

//--> 스코프란?
참조 대상 식별자
(다른 코드가 자신을 참조할 수 있는 거)
를 찾아내기 위한 규칙

(5) 조건부 렌더링
-> JSX 내부에서 조건부 렌더링할 때
삼항 연산자 or AND연산자를 사용하여 if 불가능
-> 즉시 실행 함수(IIFE)를 사용해야 한다.

{(() => {
if (value === 1) return <div>둘</div>;
})()}
이름은 화살표 함수
--> this.arguments, super 개념이 없는 익명 함수

(6) 공백 출력 == {" "} of &nbsp

(8) style과 className
-> JSX에서는 객체 형태로 인라인 스타일을 작성해줘야 함.

[ inlinestyle ]
const style = {
backgroundColor: 'black',
padding: '16px'
color: 'white'
fontSize: '36px'
}

<div style={style}>안녕하세요!</div>;

[CSS]
.App{
background: black;
color: aqua;
font-size: 36px;
padding: 1rem;
font-weight: 600;
}

정리:
--> Vue OR Angular 역시
React도 개발자를 위한 확장 프로그램 제공

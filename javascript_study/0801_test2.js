//스코프(Scope) : 유효범위, 작성된 코드를 둘러싼 환경으로 어떤 변수들에 접근할 수 있는지 정의, 전역변수와 지역변수로 생각하면 쉬운데 자바스크립트는 "Function-level scope(함수 레벨 스코프)"를 사용.
//대부분의 언어는 변수 선언이 코드 블록 단위로 유효하지만(Block-level scope), 자바스크립트에서는 함수 블록 내에서 선언된 변수는 함수 블록 내에서만 유효(Function-level scope). 다른 프로그래밍의 경우 if나 for문 안에서 선언된 변수들은 중괄호 밖에서는 사용할 수 없지만, 자바스크립트는 중괄호밖에서도 변수 사용 가능.
//단, if문 안에서 const나 let으로 변수를 선언하면 다른 언어들처럼 참조하지 못함. 

// ***const 와 let은 블록레벨 스코프, var은 함수레벨 스코프***

//유효 범위 체인(Scope Chain) : 함수 안에 함수가 있는 경우. 한 변수가 특정 함수 내부에서 정의되면 그 함수 밖에서는 존재하지 않는 것처럼 보임. 외부에서는 안에 있는 함수의 변수를 참조할 수 없지만, 안에 있는 함수에서는 외부의 변수 사용 가능.
var a = 1;
function outer() {
	var b = 2;
	console.log(a); // 1
	
	function inner() {
		var c = 3;
		console.log(b);
		console.log(a); //inner안에서 상위 스코프인 a,b 사용 가능
	}
	inner();  // 2 1
}
outer();
//console.log(c);  // c is not defined

//렉시컬 스코프(Lexical scope) : 함수를 어디서 호출하는지는 어떤 스코프에 선언하였는지에 따라 결정.
var text = 'global';
function foo() {
	console.log(text);
}
function bar() {
	var text = 'bar';
	foo();
}
bar(); //globla 출력.
//만약 text 바꾸고 싶다면 전역변수인 text 값을 바꿔주면 됨. 
var text = 'global';
function foo() {
	console.log(text);
}
function bar() {
	text = 'bar'; //전역변수인 text 값을 바꿔줌.
	foo();
}
bar();

//호이스팅 : 끌어 올리기. 함수에서 변수를 선언할 때 어떤 위치에 있든 함수의 시작위치로 끌어 올리는 현상. 단, 선언부분만 위로 끌어올리고 값을 대입하는 부분은 위치 그대로 있음.
function foo() {
	console.log(a);  // undefined
	var a = 100;
	console.log(a);  // 100
}
foo(); //다른 언어들은 오류가 떠야하지만 호이스팅을 통해 a 선언을 함수 제일 위에서 해주어서 에러 없이 undefined출력.

//클로저 : 외부 함수의 실행이 끝나고 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근할 수 있는 구조. 함수별로 선언된 지역 변수들은 호출될 때마다 같은 값으로 초기화되지만 함수를 호출할 때 이전에 쓰던 값을 유지하고 싶을 때 클로저 사용.
var num = 1;
function foo() {
	var num = 2;
	
	function bar() {
		console.log(num);
	}
	return bar; //foo 함수가 리턴되어 사라진 후 내부 함수 bar가 생성되지만 여전히 내부함수인 bar가 foo의 지역변수에 접근할 수 있음.
}

var baz = foo();
baz();
//이때 내부함수인 bar가 클로저 함수가 됨.
function f(arg) {
	var n = function() {
		return arg; 
	}
	arg++;
	return n; //n은 함수 f의 범위에 있는 것을 참조하기 때문에 함수 f에서 모든 처리가 끝나고 나서야 함수 n이 처리.
}
var m = f(123); 
//console.log(m()); //124. 


function f() {
    var a = [];
    var i;
	
    for(i = 0; i < 3; i++){
      a[i] = function() {
        return i;
        }
    }
    return a;
  }
  
  var b = f();

  console.log( b[0]() ); 
  console.log( b[1]() ); 
  console.log( b[2]() ); 
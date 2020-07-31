//함수 : function 이란 키워드 사용함. 함수의 반환값에 대한 자료형은 명시 안해도됨.
//여러 값을 반환하고 싶다면 배열이나 객체 형태로 반환.
//함수가 하나의 데이터로 취급.
function sum(a,b){
	var c=a+b;
	return c;
} //다른 이름의 변수로 함수를 할당하고 사용 가능
var add=sum;
typeof add; //function
add(1,2);

//delete 키워드 사용 시 메모리 공간에 할당된 객체의 속성 삭제. 단 객체 자체를 삭제할 순 없음.
var student={
	name:'groom',
	age : 20
}
console.log(student.name);
delete student.name; //delete 연산 성공 true 
console.log(student.name); //undefined
delete student; //delete 연산 실패 false
delete not_exist; //존재하지 않는 속성이라 아무런 연산하지 않음. true
console.log(student.age);

//익명함수(이름을 붙여주지 않아도 되는 함수) : 앞으로 다시 사용할 일이 없는 함수일 때 사용
var f=function(a){
	return "This is anonymous function!";
};
console.log(f());

//콜백함수
function one() {
  return 1;
}
//var two = function () {
  //return 2;
//}
function invoke_and_add(a, b) {
  return a() + b();
}

invoke_and_add(one, function(){
	return 2;
}); //인자로 넘겨주는 동시에 익명 함수를 생성하여 전달.


//익명 함수로 제곱값 출력하기
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var f = function(a){
	return a*a;
};

rl.on("line", function(line) {
	console.log(f(line));
	rl.close();
}).on("close", function() {
	process.exit();
});

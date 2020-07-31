//자바스크립트는 변수를 선언할 때 별도로 자료형 명시x, 입력되는 값에 의해 자료형 판별
//변수나 객체 선언시 'var' 사용, 내장형 객체 Number, String, Boolean, Array

var int_data=1;
var float_data1=Number('1.0'); //Number : 숫자와 관련된 모든 자료형
var float_data2=new Number('4.1254');
typeof int_data //"number"
typeof float_data1; //"number"
typeof float_data2; //"object"

console.log((255).toString(10)); //10진수
console.log((255).toString(16)); //16진수
console.log((255).toString(8)); //8진수
console.log((255).toString(2)); //2진수

var character1='a';
var character2="b";
var string1="Double Quotations"; //string은 문자열 값을 가짐. 큰따옴표 작은따옴표 모두 사용 가능
var string2='Single Quotation Anyway';
var string3=new String("String Object");

typeof string1;
// "string"

typeof string3;
// "object"

string2[4]; //4번째
// "l"

console.log(string2.charAt(4));
// "l"
console.log(string3[1]);
//"t"
console.log(string1.length); //길이
// 17
console.log(string1.toUpperCase()); //전체대문자
// "DOUBLE QUOTATIONS"
console.log(string2.toLowerCase()); //전체소문자
// "single quotation anyway"

console.log(string3.indexOf('g'));
// 5
console.log(string3.indexOf('x'));
// -1

var result1=new Boolean(); //참과 거짓 구별 true or false, 따옴표 사용x
var result2=true;

typeof result1; //object
typeof result1.valueOf(); //boolen
console.log(Boolean("test"));
// true
console.log(Boolean(""));
// false
console.log(Boolean({}));
// true


var array1=[1,2,3];
var array2=new Array(1,2);
array2.push(3);

var array3=new Array(3);
array3;
typeof array1; // "object"
array1.toString(); //toString : 숫자 타입을 문자 타입으로 변환.
array1.valueOf(); //valueOf는 배열의 구성요소를 문자열 형태로 돌려주는 역할을 수행합니다. 즉, 배열의 값이 문자열이 아닌 경우 문자로 반환해야 할 시 사용
array1.length; //3
array1.length=5;
array1; //[1,2,3] undefinedx2
console.log(array2.push("new1")); //4
console.log(array2.push("new2")); //5
array2;
array2.pop();
console.log(array2);
array3 = new Array(4, 2, 1, 3, 0);
console.log(array3.sort()); //sort : 정렬
// [0, 1, 2, 3, 4]
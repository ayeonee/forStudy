//기본문법
var a=1;
b=2;
//2
console.log("a: "+a);
console.log("b: "+b);

var c=3, d=10;
var str1="Hello";
var str2="World!";
var str3=null;

str4="daa";
console.log("c: "+c);
console.log("d: "+d);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

//연산자
a=b+1;
a=b-1;
a=b*d;
a=a/10;
a++;
a;
a--;
a;
console.log(a);

str3=str1+"헬롱";
console.log(str3);
str3=str3+str2;
console.log(str3);

//비교연산자
var a=2, b=1, c=6, d=8;
console.log(a>b);
console.log(b>=c);
console.log(c<=10);
console.log(d<10);

//논리연산자
console.log(true&&false);
console.log(false||true);
console.log(!false);

//조건연산자
var a=1, b=2;

(a>b)? (console.log("a is bigger than b")):(console.log("a is smaller than b"));
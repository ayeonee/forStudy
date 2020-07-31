//조건문
var a=1;
var result=' ';
if(a>2){
	result='a is greater than 2';
}
else if(a==2){
	result='a is 2';
}
else {
	result='a is smaller than 2';
}

console.log(result);

//switch
switch(a){
	case 1:
		result='Number 1';
		break; //안해주면 아래 케이스도 실행하니 주의.
	case 2:
		result='Number 2';
		break;
	default:
		result='I do not know what number';
		break;
}
console.log(result);

//조건문 실습 - 양수 구별하기
/*const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	if(line > 0)
		console.log('양수');
	else if(line==0)
		console.log('0');
	else
		console.log('음수');
	rl.close();
}).on("close", function() {
	process.exit();
});*/

//조건문 실습 - 자판기
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	line=Number(line); //line 데이터 값이 string이어서 number로 바꾸어줌.
	
	switch(line){
		case 200:
			console.log("웰치스");
			break;
		case 300:
			console.log("코코팜");
			break;
		case 500:
			console.log("아이스티");
			break;
		default:
			console.log(line);
			break;
	}
	rl.close();
}).on("close", function() {
	process.exit();
});
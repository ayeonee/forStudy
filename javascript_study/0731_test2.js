//반복문
var array=new Array();
for(var i=0; i<10; i++){
	array.push(i);
}
console.log(array.toString());

//for-in 문 : 배열의 원소들이나 객체를 쉽게 탐색할 수 있도록 해줌.
var a=['a', 'b', 'c', 'x', 'y', 'z'];
var result = '';
for(var i in a){
	result += 'index: '+ i + ', value: '+a[i]+'\n';
}
console.log(result);

//while
var i=0;
while (i<10){
	i++;
}

//do-while : do 구문 뒤에 코드 블록이 위치. 조건문이 거짓이더라도 최소 한번은 do 블록이 실행
var i=0;
do{
	i++;
}while(i<10)
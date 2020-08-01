//객체 지향에서 대상의 특성은 객체의 속성(Propterty), 대상의 동작은 객체의 메소드(Method)
//클래스=붕어빵틀=하나의 템플릿처럼 사용, 객체=인스턴스=붕어빵
//자바스크립트에서 함수의 첫 글자를 대문자로 설정하면 객체로 선언한 것.
//객체를 선언하는 함수면 첫 글자를 대문자로, 일반 함수라면 첫 글자를 소문자로.
var Soccerplayer = function(){};
Soccerplayer.prototype={
	name:String,
	age:Number,
	height:Number,
	weight:Number,
	position:String,
	team:String
};
var parkjisung=new Soccerplayer();
parkjisung.name="Park ji sung";
parkjisung.age=31;
parkjisung.height=178;
parkjisung.weight=70;
console.log(parkjisung);
//클래스 개념이 자바스크립트에는 존재하지 않음. 프로토타입(prototype)이라는 표현법으로 객체가 생성."축구 선수라는 객체를 재사용하여 이것을 하나의 프로토타입으로서 밑바탕에 깔고 박지성이라고 불리는 새로운 객체를 생성한다."
//집합(Aggregation) : 여러 객체를 하나의 새로운 것으로 구성
//상속 : 클래스 대신 프로토타입 사용
function Man(){
	this.name="Anonymous";
	this.gender="Man";
	this.Run=function(){
		return this.name+"is running!";
	}
	this.Sleep=function(){
		return this.name+"is sleeping!"
	}
}

function Soccerplayer(){
	this.base=new Man();
	this.name="Anonymous Soccer Player";
	this.Run=function(){
		return this.base.Run();
	};
	this.Pass=function(){
		return this.name+"is passing to other player!";
	};
}

Soccerplayer.prototype=new Man(); //SoccerPlayer는 Man으로부터 상속받아 생성
var player=new Soccerplayer();

console.log(player.name);
console.log(player.gender);
console.log(player.Run());
//console.log(player.Pass());
console.log(player.Sleep());

//생성자 : 객체를 생성할 때 최초로 호출되는 함수
function SoccerPlayer(){
	this.position = "Forward";
}
var VanPersie=new SoccerPlayer();
VanPersie.position; //Forward

//생성자 함수 : 새로운 객체를 만들 때 초깃값을 전달하여 생성할 수 있음.
function SoccerPlayer(name, position){
	this.name=name;
	this.position=position;
	this.whatIsYourName=function(){
		return "My name is "+this.name;
	}
	this.whatIsYourPosition=function(){
		return "My position is "+this.position;
	}
}
var player=new SoccerPlayer("Park Ji Sung", "Wing Forward");
console.log(player.whatIsYourName());
console.log(player.whatIsYourPosition());

console.log(player instanceof SoccerPlayer); //instanceof연산자 : 특정 객체가 어던 생성자를 이용하여 만들어졌는지 테스트.
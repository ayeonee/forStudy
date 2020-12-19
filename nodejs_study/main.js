var fs=require("fs");
fs.readFile('./hello.txt', encoding='utf-8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data+" Node.js!");
});

var EventEmitter=require("events").EventEmitter;
var evt=new EventEmitter();

evt.on("helloNode",function(str){
    console.log("Hello! "+str);
});

setTimeout(function(){
    evt.emit("helloNode","Node.js");
},2000); //setTimeout=기본 메소드, 밀리세컨드 단위로 그 시간만큼이 지난 후에 특정 함수를 콜백으로 실행시킬 수 있게 해줌.
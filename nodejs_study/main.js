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

var EventEmitter=require('events');
var custom_event=new EventEmitter(); 
//이벤트 핸들러 연결(addlistener, on 메서드 중 아무거나)
custom_event.on('call',function(){
    console.log('이벤트 콜');
});
custom_event.emit('call');
custom_event.removeAllListeners(); //모든 이벤트 핸들러 제거
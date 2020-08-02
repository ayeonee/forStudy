//웹서버를 통한 Hello Node.js!
/*var server = require('http');
server.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type' : 'text/plain'
	});	
	res.end("Hello im ayeon node.js! \n");
}).listen(3000);

console.log('Server is running at goorm.io');	
*/

//파일을 읽어서 Hello Node.js!
/*var fs=require("fs");
fs.readFile('./hello.txt', encoding = 'utf-8', function(err,data){
	if(err){
		throw err;
	}
	console.log(data+"Node.js!");
});*/

//비동기 이벤트를 이용한 Hello Node.js!
var EventEmitter=require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str){
	console.log("Hello! "+str);
});

setTimeout(function(){
	evt.emit("helloNode", "Node.js");
},3000); //밀리세컨드 단위로 그 시간이 지난만큼 특정 함수를 콜백으로 실행시킬 수 있게 함.
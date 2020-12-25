var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var path=require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    //루트페이지로 접속시 chat.pug렌더링
    res.render('chat');
});

var count=1;
//채팅방 접속 시 1
io.on('connection', function(socket){
    console.log('user connected: ', socket.id); //id는 자동 생성되는 영어와 숫자를 사용하는 문자열
    var name="익명"+count++;    //처음 접속햇을 때 익명1, 익명2..
    socket.name=name;           //닉네임이 변경될 때 비교해주기 위한 값, 현재 닉네임을 넣어줌
    io.to(socket.id).emit('create name', name); //서버가 해당 socket id에만 이벤트를 전달. 채팅방에 접속한 유저마다 닉네임이 다르기 때문에 각 유저에게만 닉네임이 보여주기 위해 create name이라는 이벤트 발생시켜줌.
    io.emit('new_connect',name);

    //채팅 접속이 끊어졌을 때 2
    socket.on('disconnect', function(){
        console.log('user disconnected: '+socket.id+' '+socket.name);
        io.emit('new_disconnect', socket.name);
    });

    //메세지를 보냈을 때 3
    socket.on('send message', function(name, text){
        var msg=name+' : '+text;
        if(name!=socket.name)
            io.emit('change name',socket.name, name);
        socket.name=name;
        console.log(msg);
        io.emit('receive message', msg);
    });
});

http.listen(3000, function(){
    console.log('server on..');
})
var express=require('express');
var app=express();
var http=require('http').Server(app);
var io = require('socket.io')(http);    
var path = require('path');

//view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('main',{title:'온라인 빙고 게임',username:
    req.query.username});
});

var users={};           //사용자 지정 객체
var user_count=0;       //현재 접속한 사용자 수
var turn_count=0;       //누구의 차례인지 기록

io.on('connection', function(socket){
    console.log('user connected : ', socket.id);

    socket.on('join', function(data){
        //사용자의 이름을 가져와서 소켓의 사용자 이름으로 설정
        var username=data.username;
        socket.username=username;

        //사용자 객체 생성하여 이름과 턴 값 설정.
        users[user_count]={};
        users[user_count].id=socket.id;
        users[user_count].name=username;
        users[user_count].turn=false;
        user_count++;
        
        //사용자 목록 업데이트하라고 update_users라는 이벤트 전송.
        io.emit('update_users',users,user_count);
    });

    socket.on('game_start',function(data){
        //game_started 이벤트 발생 시켜 모든 사용자에게 게임 시작 알림.
        socket.broadcast.emit("game_started", data);
        //trun true로 바꿈.
        users[turn_count].turn=true;
        //해당 사용자의 순서 알려줌.
        io.emit('update_users',users);
    });

    socket.on('select',function(data){
        socket.broadcast.emit("check_number",data);
        //현재 사용자 턴 종료시킴.
        users[turn_count].turn=false;
        turn_count++;

        if(turn_count>=user_count){
            turn_count=0;
        }
        //다음 사용자 턴 true로 바꿔줌.
        users[turn_count].turn=true;

        io.sockets.emit('update_users',users);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected : ', socket.id, socket.username);
        //users배열에서 현재 소켓의 아이디와 같은 값을 사용자를 삭제.
        for(var i=0; i<user_count; i++){
            if(users[i].id==socket.id)
                delete users[i];
        }

        user_count--;
        io.emit('update_users',users, user_count);
    });
});

http.listen(3000,function(){
    console.log('server on..');
})
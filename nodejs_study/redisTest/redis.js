var redis=require('redis');
var client=redis.createClient();
client.on('error', function(err){
    console.log('Error'+err);
});

//값을 저장(일반, 해쉬테이블)
client.set('String Key', 'String value', redis.print);
client.hset('Hash Key', 'HastTest 1', '1', redis.print);
client.hset(['Hast Key', 'HastTest 2', '2'], redis.print);

//값 가져옴
client.get('String Key', function(err, replay){
    console.log(reply.toString());
});

//해시 테이블의 값 가져옴
client.hkeys('Hash Key', function(err,replies){
    console.log(replies.length+' replies:');
    replies.forEach(function(reply, i){
        console.log(' '+i+' : '+reply);
    });
});

//키값으로 배열 형태를 얻음
client.hgetall('Hash Key', function(err, obj){
    console.dir(obj);
});
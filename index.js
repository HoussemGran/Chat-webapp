const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/index.html')

});


io.on('connection',(socket)=>{

    console.log('user connected');

    socket.on('chat message',(data)=>{

        console.log(data.user + " - "+data.msg);
        io.emit('chat message',data);
    });


});


http.listen(3000,()=>{
    console.log('server in now on port 3000');
});

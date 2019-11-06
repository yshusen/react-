let http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html:charset = utf-8'});
    let allData='';
    req.on('data',function (chunk) {//Buffer
        allData+=chunk;
    });
    req.on('end',function () {
        console.log(allData);
    });
    res.end('1');
}).listen(3001,()=>{
    console.log('服务器已启动');
});
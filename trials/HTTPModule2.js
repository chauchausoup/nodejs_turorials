var http=require('http');
var url = require('url');
var fs = require('fs');


http.createServer((req,res)=>{

    var pathname =url.parse(request.url).pathname;

    console.log(`Request for ${pathname} is received`);

    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err)
            res.writeHead(404,{'Content-Type':'text/html'});
        }else{

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8080);


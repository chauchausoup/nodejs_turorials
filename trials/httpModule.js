var http=require('http');
var url = require('url');


http.createServer((req,res)=>{

    //adding an HTTP header
    res.writeHead(200,{'Content-Type':'text/html'});

    // making it more query optimized
    var q =url.parse(req.url,true).query;
    var txt = q.year+ " " + q.month
    res.end(txt);

}).listen(8080);

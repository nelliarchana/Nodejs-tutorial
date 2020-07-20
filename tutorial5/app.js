const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {   
        res.write('Hello world from nodejs');
        res.end();
    }
    else{
        res.write('some other domain');
        res.end();
    }

});
server.listen(3000);

//serving static files with http and file system module.
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type':'text/html'});
    readStream.pipe(res);
}).listen(3000);

// json file
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200,{'Content-type':'application/json'});
    readStream.pipe(res);
}).listen(3000);

//image file
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/tree.png');
    res.writeHead(200,{'Content-type':'image/png'});
    readStream.pipe(res);
}).listen(3000);
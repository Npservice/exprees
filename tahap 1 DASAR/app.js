const http = require('node:http');
const fs   = require('fs');
http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/html',
    });
    const url =req.url;
    if(url === '/about'){
       fs.readFile('./about.html', (err,data)=>{
           if(err){
                res.writable(404);
                res.write('ERROR: file not found');
            }else{
                res.write(data);
            }
            res.end();
       });

    }else if (url === '/contact'){
        fs.readFile('./index.html', (err, data)=>{
            if(err){
                res.writable(404);
                res.write('ERROR: file not found');
            }else{
                res.write(data);
            }
            res.end();
        });

    }
    })
    .listen(3000,()=>{
    console.log('server is listening on port 300');
    });

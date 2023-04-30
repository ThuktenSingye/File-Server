//  to create file server 
// import the neccessary module
const server = require('http')
const fs = require('fs')
const url = require('url')

// create server

server.createServer((req, res) =>{
    var q= url.parse(req.url, true)
    var path ='.' + q.pathname
    switch(path){
        case './':
            fs.readFile('./index.html', (err, data)=>{
                if (err){throw err}
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data)
                return res.end
            })
            break
        case './about':
        case './contact-me':
            fs.readFile(path+'.html', (err, data)=>{
                if (err){throw err}
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data)
                return res.end
            })
            break
        default:
            fs.readFile('./404.html', (err, data)=>{
                if (err){throw err}
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data)
                return res.end
            })
            break

    }
   
}).listen(8080, ()=>{
    console.log("Server is running on localhost:8080")
})
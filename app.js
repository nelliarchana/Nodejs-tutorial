const fs = require('fs');
// const readStream = fs.createReadStream('./ex.txt','utf8');
// const writeStream = fs.createWriteStream('ex2.txt');
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// })

// reading large text file
// fs.readFile('./large.txt','utf8',(err,file)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(file);
// })

// reading file chunk by chunk
// const readStream = fs.createReadStream('./large.txt','utf8');
// readStream.on('data',(chunk)=>{
//     console.log(chunk);
// });

// pipe ,compress
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./ex.txt','utf8');
// const writeStream = fs.createWriteStream('ex2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);

const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./ex2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);



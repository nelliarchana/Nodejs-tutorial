 const fs = require('fs');
// // create a file
fs.writeFile('example.txt',"this is an example of filesystem",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file created successfully");
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else
                console.log(file)
        })
    }
})

// renaming a file 
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully renamed!');
})

// appending data to file
fs.appendFile('example2.txt','Some data is appended',(err)=>{
    if(err)
        console.log(err);
    else
        console.log("successfully appended data to the file.");
})

//deleting file

fs.unlink('example.txt',(err)=>{
    if(err)
        console.log(err)
    else
        console.log('successfully file is deleted ');
})

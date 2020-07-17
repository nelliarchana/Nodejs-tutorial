
// creating a folder and a file inside it
var fs = require('fs');
fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err)
    else{
        fs.writeFile('./tutorial/example.txt','hii ,this is archana',(err)=>{
            if(err)
                console.log(err);
            else{
                console.log("successfully created file!!");
            }
        })
    }
})

//removing directory
fs.rmdir('sample',(err)=>{
    if(err)
        console.log(err)
    else{
       console.log("successfully deleted folder!!");
         }
});

//deleting more than 1 file inside a directory
fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("successfully deleted a file..");
                }
            })
        }
    }
})

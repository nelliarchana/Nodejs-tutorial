var EventEmitter = require('events');
var eventEmitter = new EventEmitter();

eventEmitter.on('temp',(a,b)=>{
    console.log('tutorial event has occured');
    console.log(a+b);
});
eventEmitter.emit('temp',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let p = new Person('archh');
let n = new Person('nelliii');
p.on('name',()=>{
    console.log("my name is "+p.name);
});
n.on('name',()=>{
    console.log("my name is "+n.name);
})
p.emit('name');
n.emit('name');
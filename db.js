const  mongoose  = require("mongoose");

const url ="mongodb://localhost:27017/borject2"

const db=mongoose.connection;

mongoose.connect(
    url,
    { useNewUrlParser: true },
    ()=>{
    console.log('conncetion');
    }

);


db.on('error',(err)=>{
    console.log(err.message+'mongo not run');
})

db.on('work',work=>{
    console.log("mongo is run");
})



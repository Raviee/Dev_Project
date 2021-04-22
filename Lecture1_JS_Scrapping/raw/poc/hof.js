function getFirstName(fullName){
    return fullName.split(" ")[0];
}

function getLastName(fullName){
    return fullName.split(" ")[1];  
}

// let rval=getFirstName("Ravi Gautam");
// rval=getLastName("Ravi Gautam");
// console.log(rval);

function greeter(fullName,cb){
    let message=cb(fullName);
    console.log("Hi "+ message);
}

greeter("Ravi Gautam",getFirstName);
greeter("Ravi Gautam",getLastName);
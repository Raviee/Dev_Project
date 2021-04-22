//function are also variable in javascript
//pass a variable as a parameter to the fucntion 
// pass a function as a parameter to function 
function myfunc(param){

    console.log(param);
    let rval=param();
    console.log(rval);
}
// myfunc(10);
// myfunc("hari");
// myfunc(true);
// myfunc([1,2,3,4,5]);
//smaller function is a callback function  => a function that is passed to another function and could be called by it
myfunc(function smaller(){
    let a=10;
    a++;
    console.log("i am function passed to myfunc");
    return a;

})
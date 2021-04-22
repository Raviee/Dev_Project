console.log("Hello All:)");
let varname;
varname=10;
varname="I'm in roorkee";
console.log(varname);
let number =21;
for(let i=2;i*i<=number;i++){
    if(number%i==0){
        console.log("Number is not prime");
        return;
    }
}
console.log("Number is prime");
//Anagram programming//

/*function ana(a,b){
let len1=a.length;
let len2=b.length;
if(len1!==len2){
	document.write("Invalid value");
}
let str1=a.split("").sort().join("");
let str2=b.split("").sort().join("");
if(str1==str2){
	document.write("true");
}
else{
	document.write("false");
}
}

ana("hello","olelh");*/

//duplicate//

/*let arr=['ram',"chandru","ram","jamuna","chandru","rani","rani"];
let mt=[];
arr.forEach((c)=>{
if(!mt.includes(c)){
mt.push(c);
}
});
console.log(mt)*/

//Factorial//
var fu=()=>{
var x,y;
x=document.getElementById("text").value;
y=1;
for(i=1;i<=x;i++){
y=y*i;
}
document.getElementById("hi").innerHTML = "The factorial of the number " + x + " is: " + y ;
}




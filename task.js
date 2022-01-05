//large number//

/*var a=45;
var b=20;
var c=20;
if(a>b && a>c){
	console.log("a is large");
}
else if(b>c){
	console.log("b is large");
}
else{
	console.log("c is large")
	
}*/
//Even number//

/*var num=100;
for(let i=1;i<=num;i++){
	if(i % 2 ===0) 
	{
		console.log(i + "  Even numbers");
}
}*/

//Aarry in reverse orders//

/*let arr=[1,2,3,4,5,6,7,8,9,10];
let arr1=["a","b","c","d","e","f","g","h"];
console.log(arr  , arr1.reverse());*/

//Palindrom//

function polindrom(){
	ramGet="";
	chandruInput=document.getElementById("text").value;
	x=chandruInput.length;
	
	for(var i=x; i>=0; i--){
		ramGet=ramGet+chandruInput.charAt(i);
		document.write(ramGet+"<br>");
	}
	if(ramGet===chandruInput){
    alert(ramGet +"  is a polindrom");
	}
else{
alert(ramGet+"   is a not polindrom")
}
	
	
}
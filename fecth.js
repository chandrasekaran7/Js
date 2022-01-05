fetch('https://api.spacexdata.com/v4/launches')
.then(res=>res.json())
.then((json)=>{
	console.log(json);

let x=document.getElementById("table");
for(i=0; i<json.length; i++){
 var row=x.insertRow(i);
 var cell0 =row.insertCell(0);
  var cell1 =row.insertCell(1);
   var cell2 =row.insertCell(2);
   cell0.innerHTML = json[i].date_local;
   cell1.innerHTML = json[i].details;
   cell2.innerHTML = json[i].date_unix;
}
});
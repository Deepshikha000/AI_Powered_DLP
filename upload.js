function uploadFile(){

let file=document.getElementById("file").files[0];

if(!file){

alert("Select File");

return;

}

let formData=new FormData();

formData.append("file",file);

fetch("http://127.0.0.1:5000/upload",{

method:"POST",

body:formData

})

.then(response=>response.json())

.then(data=>{

document.getElementById("result").innerHTML=data.message;

})

.catch(error=>{

console.log(error);

});

}
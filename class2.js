let box=document.querySelectorAll(".box");
let output=document.querySelector(".output");
let extra=document.querySelector("#extra");

const disablebox=()=>{
    for(let val of box){
        val.disabled=true;
    }
}

const remove=()=>{
    if(output.innerHTML.length>0){
    
output.innerText=output.innerHTML.slice(0, -1);
    }
    else if(output.innerHTML.length<9){
        box.value.disabled=false;
    }

else
{
    alert("No digits left");
}
}


box.forEach((val)=>{
val.addEventListener("click",()=>{
 output.innerText+=val.innerText;
 if(output.innerText.length>9){
    disablebox();
    alert("“Maximum 10 digits allowed”");
 }
    })
});

extra.addEventListener("click",()=>{
remove();
});
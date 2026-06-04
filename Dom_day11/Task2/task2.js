let GetSumbtn = document.querySelector("#sumbtn")
GetSumbtn.addEventListener("click",()=>{
    let val1=Number(document.querySelector("#val1").value)
    let val2=Number(document.querySelector("#val2").value)
    let para=document.querySelector("#para")
    para.textContent=`sum is ${val1+val2}`
    document.querySelector("#val1").value=""
    document.querySelector("#val2").value=""
})
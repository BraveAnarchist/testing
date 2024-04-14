const container =document.querySelector("#wrapper");
const h1Ele=document.createElement("h1");
const pEle=document.createElement("p");
const iEle=document.createElement("input");
const bEle=document.createElement("button");
const h2Ele=document.createElement("h2");

container.style.cssText="display:flex;flex-direction:column;align-items:center;width:47%;background:#ffffff;margin:50px auto;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);"

h1Ele.innerText="Age Calculator";
pEle.innerText="Enter your date of birth";
bEle.innerText="Calculate Age";
iEle.type="date";

h1Ele.style.cssText="text-align:center;font-weight:bolder;font-size:38px";
pEle.style.cssText="text-align:center;font-weight:bold;font-size:18px;margin-top:0px;margin-bottom:15px";
iEle.style.cssText="width:50%;height:30px;padding-left:10px;padding-right:10px;border:1px solid #ccc";
bEle.style.cssText="margin-top:11px;padding:8px 20px;border-radius:7px;background:#007bff;color:white;border:none"

bEle.addEventListener("click",(e)=>{
    const dob=iEle.value;
    if(dob.length==0)
        alert("Please enter your birthday");
    else{
        const today = new Date();
        const birthDate = new Date(dob);
        console.log(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        h2Ele.innerText=`Your age is ${age} years old`;
    }
});

container.append(h1Ele,pEle,iEle,bEle,h2Ele);
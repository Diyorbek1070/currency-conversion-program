let Form = document.querySelector(".form")
let amountEl=document.querySelector(".amount-money");
let listEl=document.querySelector(".money-list");
let moneytypesEl1=document.querySelector(".money-types_money1");
let moneytypesEl2=document.querySelector(".money-types_money2");
let moneytypesEl3=document.querySelector(".money-types_money3");
let workingEl = document.querySelector(".working");
let moneyEl = document.querySelector(".money");
let amountHadingEl=document.querySelector(".amount-money__heading");
let resultHeadingEl = document.querySelector(".result__heading");



amountEl.addEventListener("click",()=>{
    if(listEl.style.display=="block"){
        listEl.style.display="none";
    }
    else{
       listEl.style.display="block";
    }
})
 
moneytypesEl1.addEventListener("click", ()=>{
    amountHadingEl.innerHTML="Yevro";
    listEl.style.display="none";
})
moneytypesEl2.addEventListener("click", ()=>{
    amountHadingEl.innerHTML="Rubl";
    listEl.style.display="none";
})
moneytypesEl3.addEventListener("click", ()=>{
    amountHadingEl.innerHTML="Dolar";
    listEl.style.display="none";
})

workingEl.addEventListener("click", (e)=>{
    e.preventDefault();
    if(amountHadingEl.innerHTML== "Yevro"){
      resultHeadingEl.innerHTML = ((moneyEl.value) * 12000);
    }
    else if(amountHadingEl.innerHTML=="Rubl"){
      resultHeadingEl.innerHTML = ((moneyEl.value) * 168); 
    }
    else{
        resultHeadingEl.innerHTML = ((moneyEl.value) * 11000);
    }
})







const BASE_URL=
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropDowns= document.querySelectorAll('.space-container select');
const btn= document.querySelector('.submit button');
const fromCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const msg= document.querySelector(".msg");

for(let select of dropDowns){
    for(currCode in countryList){
        let newOption= document.createElement('option');
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name=="from" && currCode=="USD"){
            newOption.selected="selected";
        }
        else if(select.name=="To" && currCode=="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event)=>{
        updateFlag(event.target);
    })
}


const updateFlag= (element)=>{
    let index= element.selectedIndex;
    let val= element.options[index].text;
    let flag= val.substring(0,val.length -1);
    let newsrc="https://flagsapi.com/"+flag+"/flat/64.png";
    let img = element.parentElement.querySelector("img");
    img.src=newsrc;
    }

    const updateExchange= async ()=>{
        let amount= document.querySelector('input');
        let amountval= amount.value;
        let URL= `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let response= await fetch(URL);
        let data= await response.json();
        let rate= data[toCurr.value.toLowerCase()];

        let finalAmnt= rate*amountval;
        msg.innerText=`${amountval} ${fromCurr.value} = ${finalAmnt} ${toCurr.value}`;
    }

    window.addEventListener("load",()=>{
        updateExchange();
    })

    btn.addEventListener("click",async (ev)=>{
        ev.preventDefault();
       updateExchange();
    })


   
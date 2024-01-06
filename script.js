const dropDowns= document.querySelectorAll('.space-container select');


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
    console.log(flag);
    let newsrc="https://flagsapi.com/"+flag+"/flat/64.png";
    let img = element.parentElement.querySelector("img");
    img.src=newsrc;
    }

var  birthdate = document.querySelector(".dob-input");
var luckyNumber = document.querySelector(".lucky-number-input");
var checkBtn = document.querySelector(".check-btn");
var ouput =document.querySelector(".output-div");


checkBtn.addEventListener('click', function getvalues(){
    let dob = birthdate.value.replaceAll("-","");
    let luck = luckyNumber.value;

    let sum = calculateSum(dob);
    if(sum&&luck){
    compareValues(sum, luck);
    }else{
        ouput.innerText="Enter Both Feilds";
    }
});

function compareValues( total, number){
    if(total % number===0){
        console.log("hi");
        ouput.innerText="Yehh! Your Birthday is lucky!";
    }else{

        ouput.innerText="Sorry your birthday is not lucky. So sad!";
    }
}


function calculateSum(date){
    let sum = 0;
    for(var i=0; i<date.length; i++){
        sum = sum + Number(date.charAt(i)); 
    }
    return sum;
}

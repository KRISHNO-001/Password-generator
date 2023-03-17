const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");
const slider = document.querySelector("#sliderRange");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const passwordLength = document.querySelector("#passwordLength");
const allcheckcount = document.querySelectorAll("input[type=checkbox]")
const copyBtn = document.querySelector("#cpyBtn");
const cpyMsgText = document.querySelector("[data-cpmsg]");
const getIndicator =document.querySelector("#indicator")

let checkCount = 0;
let password = "";
let PswdLen = 10;
const symbols = "`!@#$%^&*()_-+=>':.,/[|]{*}\"~?;<";

handleSlider();


function handleSlider() {

    slider.value = PswdLen;
    passwordLength.innerText = slider.value;
    slider.addEventListener('input', () => {
        passwordLength.innerText = slider.value;
        PswdLen = slider.value;
    })

}


function handleCheckBox() {
    checkCount = 0;
    allcheckcount.forEach((checkbox) => {

        if (checkbox.checked)
            checkCount++;

    });
    console.log(checkCount);
}
allcheckcount.forEach((checkbox) => {

    checkbox.addEventListener('change', handleCheckBox);

});
async function copier()
{  
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        cpyMsgText.innerText ="Copied";
        

    }
    catch(e)
    {
        cpyMsgText.innerText = "Failed";
    }

    cpyMsgText.classList.add("active");
    setTimeout(()=>{cpyMsgText.classList.remove("active")
    },2000);
   
}
copyBtn.addEventListener('click',()=>{

    if(passwordDisplay.value)
        copier();

  })
/* console.log(checkCount); */

function getRandInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;


}
function getRandomNumber() {
    return getRandInt(0, 10);
}

function getUppercase() {

    return String.fromCharCode(getRandInt(65, 91));

}

function getLowercase() {

    return String.fromCharCode(getRandInt(97, 123));
}

function getRandSymbol() {

    const rand = getRandInt(0, symbols.length);
    return symbols.charAt(rand);


}
function setIndicator(color)
{
   getIndicator.style.backgroundColor = color;
   getIndicator.style.transition = "all 1s";
   let strOutline = '2px' + color;
   getIndicator.style.outline = strOutline;

}
function calcStrength()
{
    let isLower = false;
    let isUpper = false;
    let isSymbol = false;
    let isNumber = false;
    if(lowercaseCheck.checked) isLower = true;
    if(uppercaseCheck.checked) isUpper = true;
    if(symbolCheck.checked) isSymbol = true;
    if(numberCheck.checked)  isNumber = true;
    
    if(isLower && isNumber && isSymbol && isUpper && PswdLen >=10){
        setIndicator("#0f0");
    }else if(isLower && isNumber && isSymbol && PswdLen >=6 && PswdLen <=8){

        setIndicator("#F87B05");

    } 
    else{
          setIndicator("#FFFF00");
    }
}

function shuffler(password)
{   let n =password.length;
    for(let i=n-1;i>0;i--)
    {
        const j = Math.floor(Math.random() * (i+1));
        const temp =password[j];
       password[j] = password[i];
        password[i] = temp;
    }
    let str ="";
    password.forEach((el) => {str += el} );

    return str;
    
}
function generatePassword() {
    if (checkCount == 0) return;
    if (PswdLen < checkCount) {
        PswdLen = checkCount;

        handleSlider();
    }

    else {
        password = "";
       
        let funCArr = [];
        if(uppercaseCheck.checked) funCArr.push(getUppercase);
        if(lowercaseCheck.checked) funCArr.push(getLowercase);
        if(numberCheck.checked) funCArr.push(getRandomNumber);
        if(symbolCheck.checked) funCArr.push(getRandSymbol);
        for(let i=0;i<funCArr.length;i++)
            password += funCArr[i]();
         for(let i=0;i<PswdLen - funCArr.length;i++)   
         {
            let randIndx = getRandInt(0,funCArr.length);
            password += funCArr[randIndx]();
         }

            password = shuffler(Array.from(password));
            passwordDisplay.value = password;
            calcStrength();
    }
}


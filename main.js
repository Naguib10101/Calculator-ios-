let inputValue = document.querySelector('input'); 
let clear = document.querySelector('.clear'); 
let flag = false; 
let addOperator = (data) => { 
    if(data === '+' || data === '-' || data === '*' || data === '/') flag = false;
    else{
        if(flag) {  
            inputValue.value = ''; 
            flag = false;
        } 
    }
    if(inputValue.value.length !== 12)
        inputValue.value += data; 
    clear.innerHTML = "C"; 
} 
let clearDisplay = () =>{ 
    inputValue.value = ""; 
    clear.innerHTML = "AC"; 
} 
let PercentageCalc = () =>{ 
    let result = inputValue.value / 100; 
    inputValue.value = result; 
}; 
let calculateOperator = () =>{ 
    try{ 
    let result = eval(inputValue.value); 
    inputValue.value = (result % 1 === 0) ? result : result.toPrecision(12); 
    flag = true; 
    } 
    catch{ 
        alert("Invalid Input"); 
        inputValue.value = 0
    } 
} 
let toggleOperator = () => inputValue.value = (inputValue.value * -1); 
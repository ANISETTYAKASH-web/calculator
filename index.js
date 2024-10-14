const calculator = document.querySelector('.calculator');
//console.log(calculator);
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');
keys.addEventListener('click',e=>{
  if(e.target.matches('button'))
{
//code
const key = e.target;
//console.log(key);
const action = key.dataset.action;
if(action=='add'||action=='sub'||action=='mul'||action=='divide')
{
  console.log('operator');
}
if(!action)
{
  console.log('number');
}

if(action=='decimal') {console.log('decimal');}
if(action=='clear') {console.log('clear');}
if(action=='equal') {console.log('equal');}
const keyContent = key.textContent;
const displayedNum = display.textContent;
if(!action)
  {
    if(displayedNum==='0') display.textContent=keyContent;
    else display.textContent = displayedNum+keyContent;
  }
  if(action==='decimal') display.textContent=displayedNum+'.';
  if(action==='add'||action==='sub'||action==='mul'||action==='divide')
    {
      calculator.dataset.firstValue=displayedNum;
      calculator.dataset.operator=action;
      calculator.dataset.previousKeyType='operator';
    }
    const previousKeyType = calculator.dataset.previousKeyType;
    if(!action)
    {
      if(displayedNum==='0'||previousKeyType==='operator') display.textContent = keyContent
      else display.textContent = displayedNum+keyContent;
    }
    if(action==='equal')
    {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum
      display.textContent = calculate(firstValue,operator,secondValue);
    }
    
}});
function calculate(num1,op,num2)
{
  let result= '';
  if(op==='add') result= parseFloat(num1)+parseFloat(num2);
  if(op==='sub') result = parseFloat(num1)-parseFloat(num2);
  if(op==='mul') result=parseFloat(num1)*parseFloat(num2);
  if(op==='divide') result=parseFloat(num1)/parseFloat(num2);
  return result;
}


const calculator = document.querySelector('.calculator');
//console.log(calculator);
const keys = calculator.querySelector('.calculator__keys');
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

}});
const display = document.querySelector('.calculator__display');
keys.addEventListener('click',e=>{
   if(e.target.matches('button')){
      const key = e.target;
      console.log(key + "akshj");
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;
      if(!action)
      {
        if(displayedNum==='0') display.textContent=keyContent;
        else display.textContent = displayedNum+keyContent;
      }
      if(action==='decimal') display.textContent=displayedNum+'.';
   }
})


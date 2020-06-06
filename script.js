var display=document.getElementById('display_screen');
var buttons=document.getElementsByClassName('numbers');
var operand1=0;
var operand2=null;
var operator=null;
function isOperator(value){
  return value =="+" || value=='-' || value=='*'  || value=="/";
}
for(var i=0;i<buttons.length;i++){
  buttons[i].addEventListener('click',function(){
    var value = this.getAttribute('data-value');
    var text = display.textContent.trim();
    if(isOperator(value)){
     operand1=parseFloat(text); 
      operator=value;
      display.textContent="";
    }else if(value=="ac"){
      display.textContent="";
    }
    else if(value=="."){
      if(text.length && !text.includes('.')){
        display.textContent=text+'.';
      }
      else if(value =="%"){
        operand1=parseFloat(text);
        operand1=operand1/100;
        display.textContent=operand1;
      }
    }
    else if(value =='='){
     operand2=parseFloat(text);
      var result=eval(operand1+' '+operator+' '+operand2);
      if(result){
        display.textContent=result;
        operand1=result;
        operand2="null";
        operator=null;
      }
    }
    else{
      display.innerText += value;
    }
  });
}

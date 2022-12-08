var val1 = 0;
var  val2 = 0;
var oper = '';

//set clicked number to the textfield
function clicked(number){
  switch(number){

    //check the operation: add, minus, multiplication & division
    case "multiply":
        val1 = getClickedNumber();
        clearField();
        oper = 'x';
        setValuesToUpperfield();
        break;
    
    case "minus":
        val1 = getClickedNumber();
        clearField();
        oper = '-';
        setValuesToUpperfield();
        break;

    case "divide":
        val1 = getClickedNumber();
        clearField();
        oper = '/';
        setValuesToUpperfield();
        break;

    case "add":
        val1 = getClickedNumber();
        clearField();
        oper = '+';
        setValuesToUpperfield();
        break;

    case "equals":
        val2 = getClickedNumber();
        calculate(val1, val2, oper);
        break;

    case "C":
        clearField();
        break;
    
    case "dot":
        dotEntered();
        break;

    case "del":
        deleteFromLastIndex();
        break;
    
    default:
        //else do this if its just a number
        addToField(number);
        break;
                 
  }

}

function calculate(value1, value2, operator){
    
    document.getElementById("secondary-field").value = ""+value1+" "+operator+" "+value2;

    if(operator=='+'){
        document.getElementById("primary-field").value = ""+(parseFloat(value1)+parseFloat(value2));
    }else if(operator=='-'){
        document.getElementById("primary-field").value = ""+(parseFloat(value1)-parseFloat(value2));
    }else if(operator=='/'){
        document.getElementById("primary-field").value = ""+(parseFloat(value1)/parseFloat(value2));
    }else if(operator=='x'){
        document.getElementById("primary-field").value = ""+(parseFloat(value1)*parseFloat(value2));
    }
}

function dotEntered(){
    var existValue = document.getElementById("primary-field").value;

    if(existValue == '0'){
        enterThisValueToField('0.');

    }else if(existValue == '0.'){
         enterThisValueToField('0.');

    }else if(existValue == ''){
        enterThisValueToField('0.');
        
    }else {
        addToField('.');
    }
    
}

function getClickedNumber(){
    var clcked = document.getElementById("primary-field").value;

    return clcked;
}

function clearField(){
    document.getElementById("primary-field").value = "0";
    document.getElementById("secondary-field").value = "";
}

function addToField(theNum){
    var exi = document.getElementById("primary-field").value;

    //set values
    if(exi == '0.'){
        document.getElementById("primary-field").value = "0."+theNum;
    }else if(exi == '0'){
        document.getElementById("primary-field").value = ""+theNum;
    }else{
        document.getElementById("primary-field").value = exi+""+theNum;
    }
    
}

function setValuesToUpperfield(){
    document.getElementById("secondary-field").value = val1+" "+oper+" ";
}

function resetUpperField(){
    document.getElementById("secondary-field").value = "";
}

function enterThisValueToField(theValue){
    document.getElementById("primary-field").value = ""+theValue;
}

function deleteFromLastIndex(){
    var valueInp = document.getElementById('primary-field').value;

    let leng = valueInp.length;

    if(leng>=1){
        //proceed to deleting
        document.getElementById('primary-field').value = valueInp.slice(0, leng-1);
        
    }else{
        //alert('you cant continue with deleting');
    }
}

// //update timer on startup
// setInterval("ale();", 1000);
// var num = 10;
// //function showing timer in seconds in introduction
// function ale(){
//     num--;
//     var itm = document.getElementById("start-timer");
//     itm.innerHTML = "Starts in: "+num+" secs"
// }
 function showOperation(typeOfOperation){

    var notification = document.getElementById("op");
    notification.innerHTML = typeOfOperation;
    //hide banner for type of operation after 5seconds
    setTimeout("hideOperation();", 5000);
 }

 //hide banner showing type of operation
 function hideOperation(){
    var notification = document.getElementById("op");
    notification.innerHTML = '';
 }
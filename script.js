const display = document.getElementById("display");

function append(pass){

    display.value += pass;
}

function clears(){
    display.value = "";
}

function equal(){
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Sorry po dili siya mao!"
    }
}

function del(){
     display.value = String(display.value).slice(0,-1);
}

function percent(){

    
    display.value = display.value/100;
}
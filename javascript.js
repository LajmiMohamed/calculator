var x;
var y;
var v1;
var op;
var v2;
function myClick(x){
     document.getElementById("button1").value+=x;

}
function myClickres(){
    document.getElementById("button1").value="";
}

function opr(x){
   v1=  document.getElementById("button1").value;
   document.getElementById("button1").value="";
   op=x;
   
   

}

function myClickegal(){
v2=document.getElementById("button1").value;

switch (op){
case '-':
    document.getElementById("button1").value=v1*1-v2*1;
    break;
case '+':
    document.getElementById("button1").value=v1*1+v2*1;
    break;
case '*':
    document.getElementById("button1").value=v1*1*v2*1;
    break;
case '/':
    document.getElementById("button1").value=v1*1/v2*1;
    break;
        

}



}
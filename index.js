var el=document.getElementById("myBtn");

if(el)
{
    document.getElementById("myBtn").addEventListener("click", myfunction);
}

function myfunction(){
    var x=document.getElementById("inputArea").value;

    var ctrw = (x.split(" ").length);
    var ctrc=x.length;

    // alert("Number of words in the string is " + ctrw  + " and the number of characters in the string is " + ctrc);

    document.getElementById("op1").innerHTML = "Number of characters in the string is " + ctrc;
    document.getElementById("op2").innerHTML = "Number of words in the string is " + ctrw;

}
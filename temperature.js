function convert_to_Celsius(){
    let x = document.getElementById("mytext_from").value;
    let fahrenheit = (x*9/5) + 32;
    document.getElementById("mytext_to").innerHTML = fahrenheit + " celsius";
    document.getElementById("final").innerHTML = "To Celsius :";
}
function convert_to_fahrenheit(){
    let x = document.getElementById("mytext_from").value;
    let celsius = (x - 32) *5/9 ;
    document.getElementById("mytext_to").innerHTML = celsius + " fahrenheit";
    document.getElementById("final").innerHTML = "To Fahrenheit :"
}
function restart(){
    document.getElementById("mytext_from").innerHTML = "";
    document.getElementById("mytext_to").innerHTML ="";
}
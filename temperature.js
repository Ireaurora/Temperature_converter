function convert_to_Celsius(){
    let x = document.getElementById("mytext_from").value;
    let fahrenheit = (x*9/5) + 32;
    document.getElementById("mytext_to").value = fahrenheit;
    document.getElementById("unit").value = "Celsius";
}
function convert_to_fahrenheit(){
    let x = document.getElementById("mytext_from").value;
    let celsius = (x - 32) *5/9 ;
    document.getElementById("mytext_to").value = celsius;
    document.getElementById("unit").value = "Fahrenheit"
}
function restart(){
    document.getElementById("mytext_from").value = "";
    document.getElementById("mytext_to").value ="";
}
/* Function not used 
function GetSelectedItem(el)
{
    var e = document.getElementById(el);
    var strSel = "The Value is: " + e.options[e.selectedIndex].value + " and text is: " + e.options[e.selectedIndex].text;
    alert(strSel);
}
*/
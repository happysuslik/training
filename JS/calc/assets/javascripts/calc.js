/**
 * Created by hio on 28.09.2015.
 */
/**
 * Created by hio on 28.09.2015.
 */
window.addEventListener('load', function(){
    var out = 0;
    document.getElementById("out").innerHTML = "Output: " + out;

    document.getElementById("sum").addEventListener("click", function(e){
        sum();
        e.stopPropagation();
    }, false);
    document.getElementById("min").addEventListener("click", function(e){
        min();
        e.stopPropagation();
    }, false);
    document.getElementById("multiply").addEventListener("click", function(e){
        multiply();
        e.stopPropagation();
    }, false);
    document.getElementById("divide").addEventListener("click", function(e){
        divide();
        e.stopPropagation();
    }, false);
    val1();
    val2();

}, false);


function sum() {
    val1();
    val2();
    var value = val1() + val2();
    out(value);
}
function min() {
    val1();
    val2();
    var value = val1() - val2();
    out(value);
}
function multiply() {
    val1();
    val2();
    var value = val1() * val2();
    out(value);
}
function divide() {
    val1();
    val2();
    var value = val1() / val2();
    out(value);
}

function val1() {
    input1 = document.getElementById("val1");
    input1.addEventListener("keypress", function(e){
        if (e.keyCode != 8 && ( e.charCode < 48 || e.charCode > 57))
            e.preventDefault();
    }, true);
    var val1 = parseInt(input1.value);
    return val1;
}


function val2() {
    input2 = document.getElementById("val2");
    input2.addEventListener("keypress", function(e){
        if (e.keyCode != 8 && ( e.charCode < 48 || e.charCode > 57))
            e.preventDefault();
    }, true);
    var val2 = parseInt(input2.value);
    return val2;
}

function out(value) {
    var out = document.getElementById("out");
    if (Number.isNaN(value)) {

    } else {
        out.innerHTML = "Output: " + value;
    }
}
let result = ""
function giatri(input) {
    let a = document.getElementById(input).value;
    result += a;
    document.getElementById('result').innerHTML = result;
}
function daura() {
    let b = eval(result)
    document.getElementById("result").innerHTML = b;
    result = b;
}
function xoa() {
    document.getElementById("result").innerHTML = 0;
    result = ""
}

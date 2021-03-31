
function fn1(){
    var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    var c = document.getElementById('num3').value;
    var x1 = document.getElementById('output1')
    var x2 = document.getElementById('output2')
    var delta = Math.pow(b ,2) - 4*a*c
    if(delta > 0) {
        x1.innerHTML = "<div class='output1'>X1 ="+ (-b + Math.sqrt(delta))/2*a + '</div>';
        x2.innerHTML = "<div class='output2'>X2 ="+ (-b - Math.sqrt(delta))/2*a + '</div>'
    } else if (delta = 0) {
        x1.innerHTML = "<div class='output1'>X1 ="+ -b /(2*a) + '</div>';
    }
    else {
        x1.innerHTML = 'delta < 0';
        x2.innerHTML = "delta < 0";
    }
}

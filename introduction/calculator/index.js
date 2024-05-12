function display(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}

function clr() {
    document.getElementById("result").value = "";
}

function myFunction(event) {
    if (
        event.key == '0' || event.key == '1' || event.key == '2' ||
        event.key == '3' || event.key == '4' || event.key == '5' ||
        event.key == '6' || event.key == '7' || event.key == '8' ||
        event.key == '9' || event.key == '.' || event.key == '+' ||
        event.key == '-' || event.key == '*' || event.key == '/'
    ) {
        display(event.key);
    } else if (event.key == 'Enter') {
        solve();
    }
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        solve();
    }
}

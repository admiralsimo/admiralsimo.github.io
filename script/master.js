
function Hi() {
    var attValue = document.getElementById("password").getAttribute('type');
    if (attValue == "password") {
    state = false
    }
    else if (attValue == "text") {
    state = true
    }
    if (!state) {
        document.getElementById('password').setAttribute('type', 'text')
    }
    else if (state) {
        document.getElementById('password').setAttribute('type', 'password')
    }
}
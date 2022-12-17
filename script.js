let string = document.querySelector('#numberWeight').value;
document.querySelector('.submitNumberWeight').onclick = function() {
    let numbers = [];
    let string = document.querySelector('#numberWeight').value;
    string = string.split(',')
}
if (string.trim().length == 0 || string == null || parseInt(string).length < string.length) alert('error')
for (let i = 0; i < string.length; i++) {

    if (string[i] <= 10 && string[i] >= 1) {

    }
}
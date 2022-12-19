let weight = document.querySelector('.weight')
    document.querySelector('.submitNumberWeight').onclick = function() { 
    let string = document.querySelector('#numberWeight').value;
    let numbers = [];
    if (string == null || string.trim().length == 0) alert('error')

    else {
        string = string.split(',')
        for (let i = 0; i < string.length; i++) {
        if (parseInt(string[i]) <= 10 && parseInt(string[i]) >= 1) {
        numbers.push(string[i])
        
    }
}
    console.log(numbers)
    numbers.forEach(el => {
        weight[el].style.display = 'block';
    })
}
}

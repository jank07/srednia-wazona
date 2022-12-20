let weight = document.querySelector('.weight')
    document.querySelector('.submitNumberWeight').onclick = function() { 
        let string = document.querySelector('#numberWeight').value;
        let numbers = [];
        if (string == null || string.trim().length == 0) {
            alert('error')
        }

        else {
            string = string.split(',')
            for (let i = 0; i < string.length; i++) {
                string[i] = parseInt(string[i])
                if (string[i] <= 10 && string[i] >= 1) {
                    numbers.push(string[i])
            
        }
        }
        console.log(numbers)
        numbers.forEach(num => {
            console.log(num);
            num = parseInt(num);
            weight.at(num).style.display = 'block';
        })
        const arr2 = [1, 2, 3]
        arr2.forEach (el => {

        })
    }
}


    

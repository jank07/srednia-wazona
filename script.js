document.querySelector('.submitNumberWeight').onclick = function() { 
        let weight = document.querySelectorAll('.weight');
        // let weights = {}; 
        // for(let i = 1; i <= 10; i++) {
        //     weights["weight" + i] = document.querySelector('.weight' + i)
        // }

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
            // weight[num].style.display = 'block';
            console.log(weights[num]);
        })
        
    }
}


    

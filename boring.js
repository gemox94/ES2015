'use strict';

function fibonacci(number){
    if(number==0 || number==1){
        return number;
    }
    else{
        return fibonacci(number-1) + fibonacci(number-2);
    }
}

function exponential(number,limit){
        if(limit == 0) {
            return 1;
        } else {
            return number * exponential(number, limit - 1);
        }
}

const boring = (operation, number, limit) => {
    number = Number(number);
    limit = Number(limit);

    if(operation == 'fibonacci'){
        for (var i = 1; i <= number; i++) {
        console.log(fibonacci(i));
        }
    }
    else{
        console.log(exponential(number,limit));
    }
}

boring(process.argv[2],process.argv[3],process.argv[4]);
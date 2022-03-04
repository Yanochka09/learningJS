function simpleNumber(number){
    let result = [];
    let sieve = [];

    for(let i = 2; i < number; ++i){
        if (!sieve[i]){
            result.push(i);
        for(let j = i << 1; j <= number; j +=i ){
            sieve[j] = true;
        }
        }
    }
    return result;
}

  console.log(simpleNumber(100));
  
  
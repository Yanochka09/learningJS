function fakeStr(test){
    let testArrs = test.split("");
    return testArrs.map(function(testArr){
    if (testArr >= 5){
        return "1";
    } else if (testArr < 5){
        return "0";
    }
    }).join("");
}

    
    console.log(fakeStr('45385593107843568')); // '01011110001100111'
    console.log(fakeStr('509321967506747')); // 101000111101101
    
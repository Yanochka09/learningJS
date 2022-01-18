// task 1

function sum(value1, value2){
	return value1 + value2
}

sum(4,7) // output 11



function subtract(value1, value2){
	return value1 - value2
}

subtract(15, 18) // output -3



function multiply(value1, value2){
	return value1 * value2
}

multiply(5,5) // output 25



function divide(value1, value2){
	return value1 / value2
}

divide(49,7)  // output 7

// end task 1

// task 2

function squareOfSumOne(a, b){
	return a * a + 2 * a * b + b * b
}

(squareOfSumOne(2, 3)) // output 25



function squareOfSum(a, b){
	return a * a + 2 * a * b + b * b
}

(squareOfSum(1, 10)) // output 121

// end task 2

// task 3

function finalGrade(exam, projects) {
	if (exam>90) {
		return 100
	}
	if (projects>10) {
		return 100
	}
	if (exam>75,projects>=5) {
		return 90
	}

	if (exam>50,projects>=2) {
		return 75
	}

	if (exam<50,projects<2) {
		return 0
	}
}

// end task 3











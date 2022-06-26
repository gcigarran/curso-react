const setResultElement = result => {
    document.getElementById("result").value = isNaN(result) ? operationError() : result
}

const getOperand = anId => {
    return parseFloat(document.getElementById(anId).value)
}

const firstOperand = () => {
    return getOperand("firstNumber")
}

const secondOperand = () => {
    return getOperand("secondNumber")
}

const add = () => {
    setResultElement(firstOperand() + secondOperand())
}

const subtract = () => {
    setResultElement(firstOperand() - secondOperand())
}

const multiply = () => {
    setResultElement(firstOperand() * secondOperand())
}

const divide = () => {
    setResultElement(firstOperand() / secondOperand())
}

const operationError = () => {
    console.error("Operation error")
}
function setInsuranceValue() {
    var insuranceTypeValue = document.getElementById("insuranceType").value
    var insuranceValue = document.getElementById("insuranceValue")

    switch(insuranceTypeValue) {
        case "1": 
            updateElementInnerHtmlWith(insuranceValue, "$ 500"); 
            break;
        case "2": 
            updateElementInnerHtmlWith(insuranceValue, "$ 1000"); 
            break;
        case "3": 
            updateElementInnerHtmlWith(insuranceValue, "$ 1500"); 
            break;
    }
}

function updateElementInnerHtmlWith(anElement, aValue) {
    anElement.innerHTML = aValue
}

function documentValueFrom(anId) {
    return document.getElementById(anId).value
}

function selectedOptionTextFrom(anId) {
    var element = document.getElementById(anId)

    return element.options[element.selectedIndex].text
}

function onFormSubmitted() {
    var name = documentValueFrom("firstName")
    var surname = documentValueFrom("lastName")
    var dni = documentValueFrom("dni")
    var email = documentValueFrom("email")
    var phone = documentValueFrom("phoneNumber")
    var insuranceType = selectedOptionTextFrom("insuranceType")
    var insuranceValue = document.getElementById("insuranceValue").innerHTML
    
    console.log(name,surname,dni,email,phone,insuranceType, insuranceValue)
}

setInsuranceValue()

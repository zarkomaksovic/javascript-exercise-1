function calculate(age) {
    // elements to work with
    age = document.getElementById("input").value;
    let output = document.getElementById("output");
    let alertField = document.getElementById("js-alert");
    let select = form.select;
    var country = select[select.selectedIndex].innerHTML;
    let retirementAge = select[select.selectedIndex].value;

    // CONDITIONS
    
    if (age == "") {
        // user input empty
        false;
    } else if (age > 100) {
        // user age over 100
        alertField.innerHTML = "Invalid number, enter numbers from 18 to 99";
        output.value = "";
    } else if (age > retirementAge && age < 100) {
        // user already retired
        alertField.innerHTML = alertField.innerHTML = "Retirement age in " + country
            + " is " + retirementAge + " years." + "</br>"
            + "You should be retired for " + (age - retirementAge)
            + " years";
        output.value = "";
    } else if (age == retirementAge) {
        // retire age equal to user age
        alertField.innerHTML = alertField.innerHTML = "Retirement age in " + country
            + " is " + retirementAge + " years." + "</br>"
            + "Congratulations!! You deserve it!";
        output.value = "Retired!";
        output.style.backgroundColor="#a2c5ab"
    } else if (age < 18) {
        // user under age limit
        alertField.innerHTML = alertField.innerHTML = "Retirement age in " + country
            + " is " + retirementAge + " years." + "</br>"
            + "You are too young to think of retirement!"
        output.value = "";
    } else {
        // calculate age
        alertField.innerHTML = "Retirement age in " + country
            + " is " + retirementAge + " years." + "</br>"
            + "Keep up the god work! You'll rest later!";
        let calc = retirementAge - age;
        output.value = (" " + calc + " ");
        output.style.backgroundColor="#a2c5ab"
    }
}
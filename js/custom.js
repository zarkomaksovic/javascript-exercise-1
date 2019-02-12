function calculate(age) {

    age = document.getElementById("input").value;
    let output = document.getElementById("output");
    let retirementAge = 65;
    let alertField = document.getElementById("js-alert");
    if (age > 100) {
        alertField.innerHTML = "Invalid number, enter numbers from 18 to 99";
        output.value = "";
    } else if (age > 65 && age <= 100) {
        alertField.innerHTML = "You should be retired for " + (age - retirementAge) + " years";
        output.value = "";
    } else if (age == 65) {
        alertField.innerHTML = "Congratulations!! You deserve it!";
        output.value = "Retired!";
    } else if (age < 18) {
        alertField.innerHTML = "You are too young to think of retirement!"
        output.value = "";
    }
    else {
        alertField.innerHTML = "Keep up the god work! You'll rest later!";
        let calc = retirementAge - age;
        output.value = (" " + calc + " ");
    }
}
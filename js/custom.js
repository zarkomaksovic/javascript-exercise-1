function calculate(age) {

    var age = document.form.input.value;
    var retirementAge = 65;
    var alertField = document.getElementById("js-alert");
    if (age > 100) {
        alertField.innerHTML = "Invalid number, enter numbers from 18 to 99";

    } else if (age > 65 && age <= 100) {
        alertField.innerHTML = "You should be retired for " + (age - retirementAge) + " years";
        document.form.output.value = "";
    } else if (age == 65) {
       alertField.innerHTML = "Congratulations!! You deserve it!";
       document.form.output.value = "Retired!";
    } else if(age<18){
        alertField.innerHTML= "You are too young to think of retirement!"
        document.form.output.value = "";
    }
     else {
        alertField.innerHTML="Keep up the god work! You'll rest later!";
        var calc = retirementAge - age;
        document.form.output.value = calc;
    }
}
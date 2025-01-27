const enteredDate = prompt("Enter your date of birth (YYYY-MM-DD):"); 
const today = new Date();
const inputDate = new Date(enteredDate);


if (inputDate.toString() === "Invalid Date") {
    console.log("Invalid date");
} else if (inputDate > today) {
    console.log("Invalid date");
} else {
    console.log("Valid date of birth.");
}

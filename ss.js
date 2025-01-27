const email = prompt("Enter your email:"); 

if (email.endsWith("@gmail.com")) {
    console.log("Valid email");
} else {
    console.log("Not a valid email ID");
}
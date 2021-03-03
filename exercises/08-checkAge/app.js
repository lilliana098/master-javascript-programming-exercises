function checkAge(name, age) {
    // your code here
    //return age >= 21?  "Welcome, " + name + "!" : "Go home, " + name + "!";
    return age >= 21 ? `Welcome, ${name}!` : `Go home, ${name}!`;
}

console.log(checkAge('Adrian', 22));
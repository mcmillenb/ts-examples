// ./examples/greeting.ts
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greet('Brian', new Date());

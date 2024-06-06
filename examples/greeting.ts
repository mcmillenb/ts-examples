// ./examples/greeting.ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

greet('Brian', new Date())

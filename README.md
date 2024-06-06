# Typescript Examples

Referencing https://www.typescriptlang.org/docs/handbook

## The Basics

- TS is a superset of JS, meaning TS understands all JS syntax and then adds to it
- TS isn't run in the browser, so there needs to be a compilation step to get from TS to JS (using `tsc` compiler)
- TS can also provide "syntactic sugar" and features not yet available in current JS
- Non-exception Failures (like Property 'foo' does not exist on type '{ bar: string }')
- TS errors are a lot of times complaining about the symptom and not the problem
- Example of a file being converted from TS to JS
  ```ts
  // ./examples/greeting.ts
  function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`)
  }

  greet('Brian', new Date())
  ```

  ```bash
  $ npx tsc ./examples/greeting.ts
  ```

  ```js
  // ./examples/greeting.ts
  function greet(person, date) {
      console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
  }
  greet('Brian', new Date());
  ```
- The strictness is configurable, and different people use different feature-sets for different use cases
- `string`, `number`, and `boolean` are the primative types
- Arrays can be denoted like `string[]` or like `Array<string>`
- You can explicitly specify the type of variables like `let name: string = 'Brian'`, but for primative types, TS is smart enough to infer that `let name = 'Brian'` means `name` will be a string
- functions have types and parameters and the returned value are always `any` by default
  - but you can specify param types after the param name like `function addItem(item: string)`
  - and you can specify return type after the closing paren of the params `function speak(): string`
- `any` means "this could be anything, so don't try and check it"
- `unknown` means "this could be anything, so you'll need to narrow it down"

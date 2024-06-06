/**
 * Typescript Examples
 *
 * Referencing https://www.typescriptlang.org/docs/handbook
 */

/**********************************************************/
/** The Basics ********************************************/
/**********************************************************/

/**
 * TS is a superset of JS, meaning TS understands all JS syntax and then adds to it
 */
console.log('CATS')
const cats = ['Boo', 'Jinx'];
for (let cat in cats) {
  console.log(cat)
}
const boo = cats.find(cat => cat === 'Boo')
console.log(`We love ${boo}`)

/**
 * TS can also provide "syntactic sugar" and features not yet available in current JS
 */
function sealed<T extends Function>(constructor: T): T | void {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@sealed
class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name
  }
}

/**
 * Non-exception Failures are errors that won't throw an exception in JS, but TS has decided you should know about
 *
 * (TS errors are a lot of times complaining about the symptom and not the problem)
 */
const recipe = { apple: 1 };
recipe.carrot = 2; // seems a little unhelpful here

const charlie = { isIlliterate: true };
charlie.isilliterate = false; // seems more helpful here


/**
 * The strictness is configurable, and different people use different feature-sets for different use cases
 */
// look at ./tsconfig.json

/**
 * `string`, `number`, and `boolean` are the primative types
 */
let myString: string;
let myNumber: number;
let myBoolean: boolean;

myString = 'hello';
myString = 100; // TS doesn't like it

myNumber = 101010;
myNumber = true;

myBoolean = true;
myBoolean = 'test';

/**
 * Arrays can be denoted like `string[]` or like `Array<string>`
 */
let myArray: string[];

myArray = ['test'];
myArray = 'test';
myArray = [true];

/**
 * You can explicitly specify the type of variables like `let name: string = 'Brian'`, but for primative types, TS is smart enough to infer that `let name = 'Brian'` means `name` will be a string
 */
let firstName: string = 'Brian';
firstName = true; // both of these have errors,
let lastName = 'McMillen';
lastName = true; // because TS knows both are strings not booleans

/**
 * functions have types and parameters and the returned value are always `any` by default
  */
function foo(bar) { // param and return value both have `any` type
  return bar;
}

function addItem(item: string) { // specify param types like this
  console.log(item)
}

function speak(): string { // specify return type like this
  return 'hello!'
}

function repeat(text: string): string { // both together
  return text;
}

/**
 * functions that return promises
 */
async function getFavoriteNumber(): Promise<number> {
  return 26;
}

/**
 * anonymous functions can be inferred
 */
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
  console.log(s.toUpperCase())
})
names.forEach(s => s.toUpperCase())

/**
 * `any` means "this could be anything, so don't try and check it"
 */
let myAny: any
myAny = true
myAny = 'test'
myAny = 101010
repeat(myAny)
myAny.toUpperCase()
myAny.madeUpMethod()

/**
 * `unknown` means "this could be anything, so you'll need to narrow it down"
 */
let myUnknown: unknown
myUnknown = true
myUnknown = 'test'
myUnknown = 101010
repeat(myUnknown)
myUnknown.toUpperCase()
myUnknown.madeUpMethod()


/**
 * Object types
 */
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

/**
 * Optional Properties
 */
function printName(obj: { first: string; last?: string }) {
  console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

/**
 * Union Types
 */
function printId(id: number | string) {
  console.log(id.toUpperCase());
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

/**
 * Type Aliases
 */
type Point = {
  x: number;
  y: number;
};

type TimestampedPoint = Point & {
  timestamp: Date
}

function printPoint(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  console.log("The coordinate's timestamp is " + pt.timestamp)
}
printPoint({ x: 100, y: 100 });

/**
 * Interfaces
 */
interface Coordinate2D {
  x: number;
  y: number;
}

interface Coordinate3D extends Coordinate2D {
  z: number;
}

interface Coordinate3D {
  id: number;
}

function print3DPoint(coord: Coordinate3D) {
  console.log("The coordinate's x value is " + coord.x);
  console.log("The coordinate's y value is " + coord.y);
  console.log("The coordinate's z value is " + coord.z);
}

// useful for setting Window globals
interface Window {
  Vue: any
}

/**
 * Type Assertions
 * Fully trusting the author to be correct about the type being asserted
 */
const myCanvasA = document.getElementById('canvasA')
const myCanvasB = document.getElementById('canvasB') as HTMLCanvasElement
const myCanvasC = <HTMLCanvasElement>document.getElementById('canvasC')

const x = 'hello'
const y = x as number // TS knows this is probably wrong
const z = x as unknown as number

/**
 * Literal Types
 */
const constantString = 'yo'
constantString

// more helpful in unions
function positionText(s: string, alignment: 'left' | 'right' | 'center') {
  console.log(s, alignment)
}
positionText('test', 'left')


/**
 * Enums
 */
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

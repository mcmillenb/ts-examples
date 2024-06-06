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


/**********************************************************/
/** Everyday Types ****************************************/
/**********************************************************/

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

/**********************************************************/
/** Narrowing *********************************************/
/**********************************************************/

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

/**
 * `typeof` type guards
 */
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

/**
 * truthiness checking
 */
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

/**
 * equality narrowing
 */
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();

  } else {
    console.log(x);
    console.log(y);
  }
}

/**
 * type predicates
 */
type Fish = { swim: Function };
type Bird = { fly: Function };

const pet = {} as Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/**
 * the `never` type
 */
type Circle = { kind: 'circle', radius: number }
type Square = { kind: 'square', sideLength: number }
// type Triangle = { kind: 'triangle', sideLength: number }
type Shape = Circle | Square // | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

/**********************************************************/
/** Generic Types *****************************************/
/**********************************************************/

/**
 * "Hello World" of Generics
 */

function identity(arg: any) {
  return arg;
}

function identityWithTypes<Type>(arg: Type): Type {
  return arg
}

const me = 'me';

const me1 = identity(me)
const me2 = identityWithTypes(me)
const me3 = identityWithTypes<string>(me)

let myIndentityA: <T>(arg: T) => T = identityWithTypes
let myIndentityB: { <T>(arg: T): T } = identityWithTypes

interface IdentityFn<T> {
  (arg: T): T;
}
let myIndentityC: IdentityFn<number> = identityWithTypes

let me4 = myIndentityC(me)

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

/**
 * class generics
 */

class BeeKeeper {
  hasMask: boolean = true;
}
class ZooKeeper {
  nametag: string = "Mikle";
}
class MyAnimal {
  numLegs: number = 4;
}
class Bee extends MyAnimal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends MyAnimal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends MyAnimal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

/**
 * real-ish world example
 */

interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
  }
  const data: T = await response.json();
  return data;
}

async function fetchUsers(): Promise<User[]> {
  const url = "https://jsonplaceholder.typicode.com/users";
  return fetchData<User[]>(url);
}

async function fetchPosts(): Promise<Post[]> {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetchData<Post[]>(url);
}

(async () => {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);

    const posts = await fetchPosts();
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
})();

/**
 * The `keyof` operator
 */
type PointInSpace = { x: number; y: number };
type P = keyof PointInSpace;
function usePointInSpace(point: P) {
  if (point === "x") {
    console.log(point)
  } else {
    console.log(point)
  }
}

/**
 * The `typeof` operator (in the type context)
 */

console.log(typeof "Hello world") // this is javascript

let s = 'hello'
let n: typeof s; // this is typescript

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
  return { x: 10, y: 3 };
}
type F = ReturnType<f>;


/**
 * Indexed Access Types
 */

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];


/**
 * Mapped Types
 */
type Horse = { neigh: boolean }

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
  dan: { neigh: true }
};

/**
 * Predefined Utility Types
 */

// Partial<Type>: Constructs a type with all properties of Type set to optional.
interface Dog {
  name: string;
  age: number;
}
const partialDog: Partial<Dog> = { name: "John" };

// Required<Type>: Constructs a type with all properties of Type set to required.
interface Rat {
  name?: string;
  age?: number;
}
const requiredRat: Required<Rat> = { name: "John", age: 30 };

// Readonly<Type>: Constructs a type with all properties of Type set to readonly.
interface Whale {
  name: string;
  age: number;
}
const readonlyWhale: Readonly<Whale> = { name: "John", age: 30 };
readonlyWhale.name = "Jane";

// Record<Keys, Type>: Constructs a type with a set of properties Keys of type Type.
type WhaleRecord = Record<string, Whale>;
const people: WhaleRecord = {
  whale1: { name: "John", age: 30 },
  whale2: { name: "Jane", age: 25 }
};

// Pick<Type, Keys>: Constructs a type by picking a set of properties Keys from Type.
interface Fox {
  name: string;
  age: number;
  address: string;
}
type FoxNameAndAge = Pick<Fox, "name" & "age">;
const fox: FoxNameAndAge = { name: "John", age: 30 };

// Omit<Type, Keys>: Constructs a type by omitting a set of properties Keys from Type.
interface Emu {
  name: string;
  age: number;
  address: string;
}
type EmuWithoutAddress = Omit<Emu, "address">;
const emu: EmuWithoutAddress = { name: "John", age: 30 };

// ReturnType<Type>: Constructs a type consisting of the return type of function Type.
interface Bat {
  name: string;
  age: number;
}
function getBat(): Bat {
  return { name: "John", age: 30 };
}
type BatType = ReturnType<typeof getBat>;
const bat: BatType = { name: "John", age: 30 };

// InstanceType<Type>: Constructs a type consisting of the instance type of a constructor function Type.
class Frog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
type FrogInstance = InstanceType<typeof Frog>;
const frog: FrogInstance = new Frog("John", 30);

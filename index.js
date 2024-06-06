/**
 * Typescript Examples
 *
 * Referencing https://www.typescriptlang.org/docs/handbook
 */
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
/**********************************************************/
/** The Basics ********************************************/
/**********************************************************/
/**
 * TS is a superset of JS, meaning TS understands all JS syntax and then adds to it
 */
console.log('CATS');
var cats = ['Boo', 'Jinx'];
for (var cat in cats) {
    console.log(cat);
}
var boo = cats.find(function (cat) { return cat === 'Boo'; });
console.log("We love ".concat(boo));
/**
 * TS can also provide "syntactic sugar" and features not yet available in current JS
 */
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Animal = function () {
    var _classDecorators = [sealed];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Animal = _classThis = /** @class */ (function () {
        function Animal_1(name) {
            this.name = name;
        }
        Animal_1.prototype.getName = function () {
            return this.name;
        };
        return Animal_1;
    }());
    __setFunctionName(_classThis, "Animal");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Animal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Animal = _classThis;
}();
/**
 * Non-exception Failures are errors that won't throw an exception in JS, but TS has decided you should know about
 *
 * (TS errors are a lot of times complaining about the symptom and not the problem)
 */
var recipe = { apple: 1 };
recipe.carrot = 2; // seems a little unhelpful here
var charlie = { isIlliterate: true };
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
var myString;
var myNumber;
var myBoolean;
myString = 'hello';
myString = 100; // TS doesn't like it
myNumber = 101010;
myNumber = true;
myBoolean = true;
myBoolean = 'test';
/**
 * Arrays can be denoted like `string[]` or like `Array<string>`
 */
var myArray;
myArray = ['test'];
myArray = 'test';
myArray = [true];
/**
 * You can explicitly specify the type of variables like `let name: string = 'Brian'`, but for primative types, TS is smart enough to infer that `let name = 'Brian'` means `name` will be a string
 */
var firstName = 'Brian';
firstName = true; // both of these have errors,
var lastName = 'McMillen';
lastName = true; // because TS knows both are strings not booleans
/**
 * functions have types and parameters and the returned value are always `any` by default
  */
function foo(bar) {
    return bar;
}
function addItem(item) {
    console.log(item);
}
function speak() {
    return 'hello!';
}
function repeat(text) {
    return text;
}
/**
 * functions that return promises
 */
function getFavoriteNumber() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 26];
        });
    });
}
/**
 * anonymous functions can be inferred
 */
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) { return s.toUpperCase(); });
/**
 * `any` means "this could be anything, so don't try and check it"
 */
var myAny;
myAny = true;
myAny = 'test';
myAny = 101010;
repeat(myAny);
myAny.toUpperCase();
myAny.madeUpMethod();
/**
 * `unknown` means "this could be anything, so you'll need to narrow it down"
 */
var myUnknown;
myUnknown = true;
myUnknown = 'test';
myUnknown = 101010;
repeat(myUnknown);
myUnknown.toUpperCase();
myUnknown.madeUpMethod();
/**
 * Object types
 */
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
/**
 * Optional Properties
 */
function printName(obj) {
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
function printId(id) {
    console.log(id.toUpperCase());
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
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
function printPoint(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    console.log("The coordinate's timestamp is " + pt.timestamp);
}
printPoint({ x: 100, y: 100 });
function print3DPoint(coord) {
    console.log("The coordinate's x value is " + coord.x);
    console.log("The coordinate's y value is " + coord.y);
    console.log("The coordinate's z value is " + coord.z);
}
/**
 * Type Assertions
 * Fully trusting the author to be correct about the type being asserted
 */
var myCanvasA = document.getElementById('canvasA');
var myCanvasB = document.getElementById('canvasB');
var myCanvasC = document.getElementById('canvasC');
var x = 'hello';
var y = x; // TS knows this is probably wrong
var z = x;
/**
 * Literal Types
 */
var constantString = 'yo';
constantString;
// more helpful in unions
function positionText(s, alignment) {
    console.log(s, alignment);
}
positionText('test', 'left');
/**
 * Enums
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
/**********************************************************/
/** Narrowing *********************************************/
/**********************************************************/
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
/**
 * `typeof` type guards
 */
function printAll(strs) {
    if (typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
/**
 * truthiness checking
 */
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
/**
 * equality narrowing
 */
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
var pet = {};
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
/**********************************************************/
/** Generic Types *****************************************/
/**********************************************************/
/**
 * "Hello World" of Generics
 */
function identity(arg) {
    return arg;
}
function identityWithTypes(arg) {
    return arg;
}
var me = 'me';
var me1 = identity(me);
var me2 = identityWithTypes(me);
var me3 = identityWithTypes(me);
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch data from ".concat(url, ": ").concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "https://jsonplaceholder.typicode.com/users";
            return [2 /*return*/, fetchData(url)];
        });
    });
}
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "https://jsonplaceholder.typicode.com/posts";
            return [2 /*return*/, fetchData(url)];
        });
    });
}
(function () { return __awaiter(_this, void 0, void 0, function () {
    var users, posts, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetchUsers()];
            case 1:
                users = _a.sent();
                console.log("Users:", users);
                return [4 /*yield*/, fetchPosts()];
            case 2:
                posts = _a.sent();
                console.log("Posts:", posts);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error:", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();

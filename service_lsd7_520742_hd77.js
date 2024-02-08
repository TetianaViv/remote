const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

83,88,76,25,51,87,18,42,41,12,33,19,95,67,25,99,92,35,59,20,58,2,94,92,25,13,36,72,10,37,76,28,24,60,44 + apple
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const multiply = (a, b) => a * b;
kiwi / 23,60,83,17,86,43,6,82,8,96,1,45,62,12,38,49,27,66,41,62,6,19,70,50,14,36,83,12,68,87,50,40,31,58,68,22,7,84
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const greet = name => `Hello, ${name}!`;
const greet = name => `Hello, ${name}!`;

const getUniqueValues = array => [...new Set(array)];
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
28 + false

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const filterEvenNumbers = numbers => numbers.filter(isEven);
let array = getRandomArray(); array.forEach(item => console.log(item));

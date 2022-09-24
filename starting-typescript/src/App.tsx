let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => never;

// function printName(name:string) {
// console.log(name)
// }

// printName('You')
// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: 'Kevin',
//    age: 22
// }

// let lostOfPeople: Person[]

interface Person {

}

type X = {
  a: string
  b: number;
}

let personName: unknown;

function App() {
  return <div className="App">Hello Typescript</div>;
}

export default App;

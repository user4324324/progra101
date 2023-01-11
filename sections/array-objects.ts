export interface Person {
    name: string;
    age: number;
    isActive: boolean;

}

let Daniel: Person = {
    name: 'Daniel',
    age: 15,
    isActive: false
};

let jose: Person = {
    name: 'Jose',
    age: 27,
    isActive: false
};

let valeria: Person = {
    name: 'Valeria',
    age: 18,
    isActive: false
}

let people: Person[] = [ Daniel, jose, valeria]

console.log(people);

for ( let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}


// CODE here for your Lambda Classes

class Person{
    constructor(props){
        this.personName = props.name;
        this.personAge =props.age;
        this.personLocation =props.location;
    }
    speak(){
        return `Hello my name is ${this.personName}, I am from ${this.personLocation}`
    }
}

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37
})

console.log(fred);
console.log(fred.speak());

class Instructor extends Person{
    constructor(instructorProps){

    }
}

// Python
// class Foo:
//   def __init__(self, name, age):
//     self.name = name
//     self.age = age  
// 
// x = Foo()

// function Person(name, age) {
//     this.name = name
//     this.age = age

//     this.greet = () => {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }
// const person = new Person('Matt', 51)
// // person.name = 'Matt'
// // person.age = 52

// // console.log(typeof person)
// person.greet()

class Rectangle {
    #width
    #height

    constructor(width, height) {
        this.#width = width
        this.#height = height
    }

    get width() { return this.#width }
// ssetter
    set width(value) {
        if (typeof value === 'number') {
            this.#width = value
        } else {
            // Raise an exception
        }
    }

// getter
    get area() {
        return this.#width * this.#height
    }
}

// Python
// class Square(Rectangle):

class Square extends Rectangle {
    constructor(size=5) {
        super(size, size)
    }
}

const rect = new Square(size=20)
console.log(rect.area)
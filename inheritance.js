// Object.create()

const wolf = {
  howl: function () {
    console.log(this.name + ': awoooooooo')
  }
}

const dog = Object.create(wolf, {
  woof: {
    value: function () {
      console.log(this.name, ': woooofffff')
    }
  }
})

const jack = Object.create(dog, {
  name: { value: "Jack the dog" }
})


jack.howl()


// Constructor Function

const { inherits } = require("node:util")
//
// function Wolf(name) {
//   this.name = name;
// }
//
// Wolf.prototype.howl = function () {
//   console.log(this.name + ": awooooooo")
// }
//
// function Dog(name) {
//   Wolf.call(this, name + 'the dog')
// }
//
//
// Dog.prototype.woof = function () {
//   console.log(this.name + ": woooofff")
// }
//
//
// inherits(Dog, Wolf)
//
// const socrat = new Dog("Socrat")

// Class-Syntac constructors

class Users {
  constructor(name, age, dob, id) {
    this.name = name
    this.age = age
    this.dob = dob
    this.id = id
  }
}
class Wolf {
  constructor(name) {
    this.name = name
  }
  howl() {
    console.log(this.name + ": awoooooooo")
  }
}


class Dog extends Wolf {
  constructor(name) {
    super(name + "the dog")
  }
  woof() {
    console.log(this.name + ": woooooooof")
  }
}


const boogie = new Dog("Boogie")
boogie.howl()
















var person = {
  name: 'Bob',
  age: 30,
  isEmployed: false,
  sayName: function() {
    console.log('hi, my name is ' + this.name)
  },
  address: {
    streetName: 'anywhere rd',
    houseNum: '12341',
    city: 'KeyStone',
    state: 'AB'
  }
}

console.log(person.address.state)

person.isEmployed = true
person.shoeSize = 12
person.sayName()

delete person.age

console.log(person)

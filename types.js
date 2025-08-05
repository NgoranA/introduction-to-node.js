const a = null;
const b = undefined;
const c = 42;
const d = 9009909098098908909809n;
const e = "Hello, Wanji";
const f = true;
const g = Symbol("unique");


console.info(typeof a);
console.info(typeof b);
console.info(typeof c);
console.info(typeof d);
console.info(typeof e);
console.info(typeof f);
console.info(typeof g);

const student = Object.freeze({
  name: "Ngoran",
  age: 70,
  address: {
    street: "Rue 7933",
    city: "Yaounde",
    locality: "Yaounde VI"
  }
}
)
// BUG : cannot work because we have frozen the object
student.address.street = "Rue 7943"

const object = {
  id: 999,
  fn: function () {
    console.log(this.id)
  }
}

object.fn()


const object2 = {
  id: 2,
  fn: object.fn()
}


object2.fn()





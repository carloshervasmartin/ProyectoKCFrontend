
/* Exercise 1. Objects */

const input1 = {
    name: 'test account',
    firstName: 'test',
    orders: [{
      productId: 'product-1',
      price: 20,
      storeLocale: 'nl',
    },
    {
      productId: 'product-2',
      price: 11,
      storeLocale: 'es',
    }],
    billing: {
      address: 'castellana 41',
      city: 'madrid',
      paymentMethod: {
        'credit-card': '4242424242424242',
      },
    },
  };
  

const solution = input1.billing.paymentMethod['credit-card']
console.log("------------ EXERCISE 1 ------------ \n")
console.log(solution)

if (solution === "4242424242424242") {
  console.log("\n Congratulations! You've passed the exercise 1. ✅ \n")
} else {
  console.log("\n You've failed the exercise 1. ❌ \n")
}

/* Exercise 2. Map */

/*Based on the input object we want to have only the orders without the price info and with the locale at the end of the productId.*/


const input2 = {
  name: 'test account',
  firstName: 'test',
  orders: [{
    productId: 'product-1',
    price: 20,
    storeLocale: 'nl',
  },
  {
    productId: 'product-2',
    price: 11,
    storeLocale: 'es',
  },
  {
    productId: 'product-3',
    price: 8,
    storeLocale: 'en',
  }],
  billing: {
    address: 'castellana 41',
    city: 'madrid',
    paymentMethod: {
      'credit-card': '4242424242424242',
    },
  },
};

// add you solution here


let copia = {...input2}
delete copia.price; 
delete copia.storeLocale;

const solucion = copia.orders.map( function(elemento) {
  elemento.price = undefined;
  delete elemento.price;
  elemento.productId = elemento.productId + '-' + elemento.storeLocale;
  elemento.storeLocale = undefined;
  delete elemento.storeLocale;
  return elemento;
});


const expected = [{
  productId: 'product-1-nl',
},
{
  productId: 'product-2-es',
},
{
  productId: 'product-3-en',
}]

console.log("------------ EXERCISE 2 ------------ \n")
console.log(solucion)
console.log(expected)

if (solucion === expected) {
  console.log("\n Congratulations! You've passed the exercise 2. ✅ \n")
} else {
  console.log("\n You've failed the exercise 2. ❌ \n")
}

/* Exercise 3. filter 
Based on the input object we want to have the same object but only the orders with a price greater than 10. */


const input3 = {
  name: 'test account',
  firstName: 'test',
  orders: [{
    productId: 'product-1',
    price: 20,
    storeLocale: 'nl',
  },
  {
    productId: 'product-2',
    price: 11,
    storeLocale: 'es',
  },
  {
    productId: 'product-3',
    price: 8,
    storeLocale: 'en',
  }],
  billing: {
    address: 'castellana 41',
    city: 'madrid',
    paymentMethod: {
      'credit-card': '4242424242424242',
    },
  },
};

// add you solution here

const aux = input3.orders.filter( elemento => elemento.price > 10)
input3.orders = aux

const expected3 = {
  name: 'test account',
  firstName: 'test',
  orders: [{
    productId: 'product-1',
    price: 20,
    storeLocale: 'nl',
  },
  {
    productId: 'product-2',
    price: 11,
    storeLocale: 'es',
  }],
  billing: {
    address: 'castellana 41',
    city: 'madrid',
    paymentMethod: {
      'credit-card': '4242424242424242',
    },
  },
};

console.log("------------ EXERCISE 3 ------------ \n")
console.log(input3)
console.log(expected3)

if (input3 === expected3) {
  console.log("\n Congratulations! You've passed the exercise 3. ✅ \n")
} else {
  console.log("\n You've failed the exercise 3. ❌ \n")
}




/* Exercise 4. map & filter

Based on the input object we want to have the name of the order productIds with a price greater 
than 10, and separated by commas. */


const input4 = {
  name: 'test account',
  firstName: 'test',
  orders: [{
    productId: 'product-1',
    price: 20,
    storeLocale: 'nl',
  },
  {
    productId: 'product-2',
    price: 11,
    storeLocale: 'es',
  },
  {
    productId: 'product-3',
    price: 8,
    storeLocale: 'en',
  }],
  billing: {
    address: 'castellana 41',
    city: 'madrid',
    paymentMethod: {
      'credit-card': '4242424242424242',
    },
  },
};

// add you solution here

const expected4 = 'product-1, product-2';

console.log("------------ EXERCISE 4 ----------- \n")

const solucion4 = input4.orders.filter( elemento => elemento.price > 10).map(elemento => elemento.productId).join(', ')

console.log(solucion4)
console.log(expected4)
if (solucion4 === expected4.toString()) {
  console.log("\n Congratulations! You've passed the exercise 4. ✅ \n")
} else {
  console.log("\n You've failed the exercise 4. ❌ \n")
}

/* Exercise 5. reduce

Based on the input object we want the total price of the orders, and include them in the object. */

const input5 = {
  name: 'test account',
  firstName: 'test',
  orders: [{
    productId: 'product-1',
    price: 20,
    storeLocale: 'nl',
  },
  {
    productId: 'product-2',
    price: 11,
    storeLocale: 'es',
  },
  {
    productId: 'product-3',
    price: 8,
    storeLocale: 'en',
  }],
  billing: {
    address: 'castellana 41',
    city: 'madrid',
    paymentMethod: {
      'credit-card': '4242424242424242',
    },
  },
};

// add you solution here

const expected5 = {
  totalPrice: 39,
  name: 'test account',
  firstName: 'test',
  orders: [{
    productId: 'product-1',
    price: 20,
    storeLocale: 'nl',
  },
  {
    productId: 'product-2',
    price: 11,
    storeLocale: 'es',
  },
  {
    productId: 'product-3',
    price: 8,
    storeLocale: 'en',
  }],
  billing: {
    address: 'castellana 41',
    city: 'madrid',
    paymentMethod: {
      'credit-card': '4242424242424242',
    },
  },
};

console.log("------------ EXERCISE 5 ----------- \n")
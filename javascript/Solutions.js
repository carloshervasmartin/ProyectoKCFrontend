
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
console.log(solution)

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

const copia = input2

const solucion = copia.orders.map( function(elemento) {
  elemento.productId = elemento.productId + '-' + elemento.storeLocale
  delete elemento.price
  delete elemento.storeLocale
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

console.log(solucion)
console.log(expected)

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

const aux = input3.filter(function(elemento) {
  return elemento.price > 10
});

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

console.log(aux)
console.log(expected3)
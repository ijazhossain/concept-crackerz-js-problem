/* 
Suppose you want to create a shopping cart where it will calculate the total price of the products added. Implement a function totalCost that will take an array of objects where each object will have two properties: name and price. The function totalCost will take the array of objects as a parameter and return the total price of the products added to the shopping cart.
Test Cases:
Case 1: totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ])
Output: 1000

Case 2: totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}])
Output: 13000
*/
const totalCost = (products) => {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        const price = products[i].price;
        totalPrice = totalPrice + price;

    }
    return totalPrice;
};
var result = totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200 }, { name: 'Fresh Sugar', price: 300 }]);
console.log(result);
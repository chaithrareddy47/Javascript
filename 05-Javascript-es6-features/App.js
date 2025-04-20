// destructuring

const restaurant = {
    location: "Via angelo Tavanti 23, firenze, Italy",
    
    categories: ["Italian", "Pizzeria", " Vegetarian", "Organic"],
  
    startMenu: ["Facaccia", "brushchetta", "Garlic", "Bread", "Caprese Salad"],
  
    mainMenu: ["pixxa", "pasta", "risotoo"],
  
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex] ]
    }
};

let [first, , second] = restaurant.categories;
console.log(first , second);

// chanfing values
 [first, second] = [second, first]
console.log(first, second);


const [stater, maincourse] = restaurant.order(2, 2)
console.log(stater, maincourse);






const arr = [1, 2, 3];

const [a, b, c] = arr;
console.log(a, b, c);

console.log(arr);

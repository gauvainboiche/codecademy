const menu = {
  _meal: "",
  _price: 0,
  
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log('Please enter a valid string for the meal.');
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    } else {
      console.log('Please enter a valid number for the price.');
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return(`Today's Special is ${this._meal} for ${this._price}€ !`);
    } else {
      return(`Meal or price was not set correctly.`)
    }
  }
};

menu.meal = "Enchiladas";
menu.price = 15;
console.log(menu.todaysSpecial);

menu.meal = "Hamburger savoyard";
menu.price = 18;
console.log(menu.todaysSpecial);

menu.meal = "Camembert au four";
menu.price = "15";
console.log(menu.todaysSpecial); // change the name of the plate but not the price

menu.meal = true;
menu.price = "Canard laqué";
console.log(menu.todaysSpecial); // doesn't change the name nor the price
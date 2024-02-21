class Grocery {
    constructor(categories, name, price) {
      this.categories = categories;
      this.name = name;
      this.price = price;
    }
    
    getCalculatedTotal() {
      return this.price * 1.1; // Return the total price with tax
    }
  }
  
  let grocery1 = new Grocery("Fish", "Mackerel", 100);
  let grocery2 = new Grocery("Fish", "Grounded Crayfish", 249);
  
  // Calculate the total price for each item
  console.log(Total price for grocery1: $${grocery1.getCalculatedTotal().toFixed(2)});
  console.log(Total price for grocery2: $${grocery2.getCalculatedTotal().toFixed(2)});
  
  // Calculate the total price for all items added up
  let totalPriceForAllItems = grocery1.getCalculatedTotal() + grocery2.getCalculatedTotal();
  console.log(Total price for all items: $${totalPriceForAllItems.toFixed(2)});
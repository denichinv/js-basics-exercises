function orders(product, quantity) {
  let productPrice = 0;
  let result = 0;

  switch (product) {
    case "coffee":
      productPrice = 1.5;
      result = productPrice * quantity;
      break;
    case "coke":
      productPrice = 1.4;
      result = productPrice * quantity;
      break;
    case "water":
      productPrice = 1;
      result = productPrice * quantity;
      break;
    case "snacks":
      productPrice = 2;
      result = productPrice * quantity;
      break;
  }
  console.log(result.toFixed(2));
}

orders("water", 5);

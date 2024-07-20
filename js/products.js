// Function to filter products by price range
function filterProductsByPrice(products, minPrice, maxPrice) {
  // TODO: Filter the products to return only products within the price range
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice )
}

// Function to map products to their display text

function getProductsDisplayText(products) {
    // TODO: Level 1: Map each product to its display format `name - description - $price
    // let display = products.map( product => `${product.name} -- ${product.description} = $${product.price}`)
    // TODO: Level 2: Map each product to follow the following HTML structure:
          // <h4> <a href='#'>[name]</a> - $ [price] </h4>
          // <p>  [description] </p>
          let display =  products.map( product => `<h4> <a href = '$'>${product.name} </a> -  $${product.price}</h4>
           <p> ${product.description} </p>`)
          // TODO: Level 3: add discount image after each discounted product:
          if (products.filter(product => product.discount === true)) {
            let display =  products.map( product => `<h4> <img src='./images/discount.png' width=30/> <a href = '$'>${product.name} </a> -  $${product.price}</h4>
           <p> ${product.description} </p>`)
          }
          else {
            let display =  products.map( product => `<h4> <a href = '$'>${product.name} </a> -  $${product.price}</h4>
           <p> ${product.description} </p>`)
          }
    //  Add the following tag to the header <img src='./images/discount.png' width=30/>
    return display
  }


// Function to calculate the total price
function calculateTotalPrice(selectedProducts) {
  
    // TODO: Level 1: use reduce method to calculate the total price and return it
    let totalCalculation = selectedProducts.reduce((total,selectedProducts) =>  total + selectedProducts.price , 0) ;
    // TODO: Level 2: round the total to only to decimals for example 12.3333 should be 12.33
    totalCalculation = totalCalculation.toFixed(2)
    
    return totalCalculation
}

// Function to get product by its id
function getProductById(products, productID) {
  // TODO: FIX this function to return the product object that has the same id as productID variable
  // products.filter((products, productID) => { products === productID} )
  return products[0];
}


// Filter products by name
function searchForProductsByName(products, searchText) {
  let searchTextLowerCase = searchText.toLowerCase()
  // TODO: Level 1: filter products by name to match search teXt
  let searchFilter = products.filter(product => {
    return product.name.toLowerCase().includes(searchTextLowerCase)
  })
  // TODO: Level 2: enhance the search so that it contains search text
  // TODO: Level 3: match different cases(upper or lower) 
  return searchFilter
}

// Function to filter products that have discount
function getProductsWithDiscounts(products) {
  // TODO: Filter Products that are on discount.
  return products.filter(product => product.discount === true);
}

// Function to sort products from lowest price to highest (ASC)
function sortProductsByPriceLowToHigh(products) {
  // TODO: Sort products by price lowest to highest
  return products.sort((a,b) => a.price - b.price) 
}

// Function to sort products from highest price to lowest (DESC)
function sortProductsByPriceHighToLow(products) {
  // TODO: Sort products by price highest to lowest
  return products.sort((a,b) => b.price - a.price)
}


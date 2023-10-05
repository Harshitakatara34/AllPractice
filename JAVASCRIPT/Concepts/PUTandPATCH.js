PUT
// Real-Time Example: Imagine you have a RESTful API for managing products in an online store. 
// You want to update the details of an existing product. You send a PUT request with the full
//  product information, including the changes, to the product's unique URL, like https://api.example.com/products/123.
//   The server takes the entire request payload and replaces the existing product data with it. 
//   If the product with ID 123 doesn't exist, a new one is created with the provided data.





PATCH
// Continuing with the online store example, let's say you want to change the price of an existing product 
// without altering its other attributes. You send a PATCH request to the product's URL 
// (https://api.example.com/products/123) with just the changes you want to make, like {"price": 29.99}. 
// The server applies this change to the existing product, updating only the specified attribute (price) 
// and leaving the rest of the product data unchanged.



// PUT as a full replacement and PATCH as a partial update
function login(){

    var product=prompt("Please enter product name:");
    var quantity=prompt("Quantity:");
    var price=prompt("How much would you like to pay for this prodcut? (Enter numeric value without special characters or commas.)");
    var subtotal=price*quantity;
    var tax=subtotal*.11;
    var total=subtotal+tax;
    var shipping=(8.89)

    document.write(`
    <h1>Order Summary</h1>
    <p> <b>Item:</b> ${product} (in stock)</p>
    <p> <b>Price:</b> $${price}</p>
    <p> <b>Qty:</b> ${quantity}</p>
    <p> <b>Subtotal:</b> $${subtotal}
    <br>
    <b>Taxes:</b> $${tax}
    <br>
    <b>Shipping:</b> $${shipping}</p>
    <b>TOTAL=</b> $${total+shipping}
   
    `)
    
}


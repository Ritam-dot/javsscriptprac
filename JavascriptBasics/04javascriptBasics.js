

// Discount Persentage

var listprice = 799;

var sellPrice = 199;

var discountPersentage = ((listprice-sellPrice) / listprice) * 100;

console.log(discountPersentage);

var displayDiscountPersentage = Math.round(discountPersentage);

console.log(displayDiscountPersentage);

var result = listprice > sellPrice;

console.log(typeof result);


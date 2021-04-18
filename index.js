// exercise: hey kiddo

const checkingAge = function(age) {
    return age >= 18;
};

const adultsOnly = function(age) {
    const checkingAdult = checkingAge(age);
    if (checkingAdult === true) {
        return "Hello there";
    }
    else{
        return "Hey kiddo";
    }
};

console.log(adultsOnly(18));
console.log(adultsOnly(5));


// exercise: VAT calculations

const calculationMultiplyingVat = function(vatPercentage) {
    const vatAmount = vatPercentage / 100 + 1;
    return vatAmount;
};

const calculationPriceWithVat = function(baseprice, vatPercentage) {
    const priceWithVat = baseprice * calculationMultiplyingVat(vatPercentage);
    return priceWithVat;
};

console.log(calculationPriceWithVat(1000, 21));
console.log(calculationPriceWithVat(2, 9));

//exercise 2: VAT calculations


const calculationVatAmount = function(priceInclVat, basePrice) {
    return priceInclVat - basePrice;
};

const calculationPriceWithoutVat = function(priceInclVat, vatPercentage) {
    const basePrice = priceInclVat / calculationMultiplyingVat(vatPercentage);
    const vatAmount = calculationVatAmount(priceInclVat, basePrice);
    const arrayVat = [basePrice, vatAmount];
    return arrayVat;
};

console.log(calculationPriceWithoutVat(1210, 21));
console.log(calculationPriceWithoutVat(2.18, 9));
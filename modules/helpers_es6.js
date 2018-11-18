const taxRate = 0.13;

// const couponCodes = ['BLACKFRIDAY', 'FREESHIP', 'HOHOHO'];

function formatPrice(price) {
    // .. do some formatting
    return formattedPrice;
}

function addTax(price) {
    return price * (1 + taxRate);
}

function discountPrice(price, percentage) {
    return price * (1 - percentage);

}

function privateFunction() {
    console.log("this function is private and not available outside module- because does not export anywhere");
}

const helloWorld = () => {
    return "hello world as module";
}

// export all at once

export {
    taxRate,
    formatPrice,
    addTax,
    discountPrice,
    helloWorld

}
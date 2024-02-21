
const { sum, clearDuplicates } = require('./arrayUtils');

const numbers = [1, 2, 3, 4, 5, 5, 4, 6];
console.log('Original Array:', numbers);
console.log('Sum of Array:', sum(numbers));
console.log('Array without duplicates:', clearDuplicates(numbers));

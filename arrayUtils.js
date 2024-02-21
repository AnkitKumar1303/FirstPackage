
function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  function clearDuplicates(array) {
    return array.filter((item, index, self) => self.indexOf(item) === index);
  }
  
  module.exports = { sum, clearDuplicates };
  
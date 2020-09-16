const palindrome = str => {
  let x = str.split(' ').join('')
  let reverseX = x.split('').reverse().join('');
  return reverseX === x;
}

console.log(palindrome("a man a plan a canal panama"))

module.exports = {
  palindrome
}

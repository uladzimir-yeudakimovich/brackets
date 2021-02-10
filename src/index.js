module.exports = function check(str, bracketsConfig) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (count < 0) return false;
      if (str[i] === bracketsConfig[j][0]) {
        count += 1;
      } else if (str[i] === bracketsConfig[j][1]) {
        count -= 1;
      }
    }
  }
  return count === 0;
}

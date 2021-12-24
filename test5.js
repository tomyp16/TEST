/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];
let n = words.length;
function commonPrefixUtil(str1, str2) {
  let result = "";
  let n1 = str1.length,
    n2 = str2.length;
  // Compare str1 and str2
  for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
    if (str1[i] != str2[j]) {
      break;
    }
    result += str1[i];
  }

  return result;
}
function result(words, n) {
  let prefix = words[0];
  for (let i = 1; i <= n - 1; i++) {
    prefix = commonPrefixUtil(prefix, words[i]);
  }
  return prefix;
}
let ans = result(words, n);
if (ans.length > 0) {
  console.log(ans);
} else {
  document.write("There is no common prefix ");
}

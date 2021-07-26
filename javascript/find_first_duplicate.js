function findFirstDuplicate(arr) {
  // type your code here
  let uniques = []

  for (const element of arr){
    if (uniques.includes(element)){
      return element
    }
    uniques.push(element)
  }

  return -1
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));


}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
 * initialize an empty array called 'uniques'
 * 
 * iterate through the input array:
 *    if the value is already in uniques, return the value
 *    else push the value to uniques
 * 
 * return -1 if no duplicate found during iteration
 * *************************************************
 * I started my solution with an empty array that
 * would receive each element from the input array.
 * If I add the condition at first, I will know there 
 * is an element in the array that is repeated.
 * Lastly, if the iteration ends and there were no
 * duplicates, the return value will be -1
*/
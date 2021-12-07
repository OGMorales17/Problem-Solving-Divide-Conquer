/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, 
 * write a function called countZeroes, which returns the number of zeroes in the array
 * 
 * Time Complexity: O(log N)
 * 
 * countZeroes([1,1,1,1,0,0]) // 2
 */


const findFirst = (arr, low = 0, high = arr.length - 1) => {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            return findFirst(arr, mid + 1, high)
        }
        return findFirst(arr, low, mid - 1)
    }
    return -1;
}

const countZeroes = (arr) => {
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;
    return arr.length - firstZero;
}

module.exports = countZeroes
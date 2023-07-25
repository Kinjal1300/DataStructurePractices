
function BinarySearch(arr, target) {
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    let mid = Math.ceil((start + end) / 2);

    while (start <= end) {
        if (arr[mid] === target) { return mid; }

        if (arr[start] <= arr[mid]) {
            if (target <= arr[mid] && target >= arr[low]) {
                end = mid - 1;
            }
            else {
                start = mid + 1
            }
        }
        else {
            if (target >= arr[mid] && target <= arr[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1
            }
        }
    }
    return -1;
}


let nums = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let target = 8;

console.log(BinarySearch(nums, target));
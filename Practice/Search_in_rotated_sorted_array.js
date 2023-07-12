// Declare pivot fucntion
// declare binarysearch function


function getPivot(arr, size) {

    let start = 0;
    let end = size - 1;
    let mid = Math.ceil((start + end) / 2);


    while (start < end) {
        if (arr[mid] >= arr[0]) {
            start=mid+1;
        }
        else
        {
            end = mid;
        }
        mid = Math.ceil((start + end) / 2);
    }
    return start;
}




function binarySearch(arr, size,e, key) {

    let start = 0;
    let end = e;
    let mid = Math.ceil((start + end) / 2);


    while (start <= end) {
        if (arr[mid] == key) {
            return mid;
        }

        // Go to right part
        if (key > arr[mid]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }

        mid = Math.ceil((start + end) / 2);
    }
    return -1;
}

function srarr() {
    let arr = [7,8,1,3,5];
    let n = 5
    let k = 8;
    let pivot = getPivot(arr,n);
    if(k>= arr[pivot] && k <=arr[n-1])
    {
        // BS on sec line
        return binarySearch(arr,pivot,n-1,k);
    }
    else
    {
        return binarySearch(arr, 0,pivot-1,k);
    }
}
let ans = srarr();
console.log(ans);
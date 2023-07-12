// Inshort small number from array -> return index of that elements

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

let array = [7,9,1,2,3];
let ans = getPivot(array,5);

console.log(ans)
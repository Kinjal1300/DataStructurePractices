
// Get larget & sec larget elements

let arr = [2,3,4,5,96,23,89,300];

let largest = arr[0];
let sec = -1

for(let i=1;i<arr.length;i++)
{
    if(arr[i] > largest)
    {
        sec = largest;
        largest = arr[i];
    }
}
console.log("largest...",largest);
console.log("sec...",sec);

// ----------------------------------------------------------------------------
// ROTATE elements by d places

function printArray(arr,n,d)
{
    let p = 1;
        while (p <= d) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
        }
  
       return arr;
}
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d=2; //number of times rotating the array
 
// Function calling
console.log(printArray(arr, n,d));


// -------------------------------------------------------------------------------------

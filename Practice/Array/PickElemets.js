
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
// Input: arr[] = { 10, 5, 2, 7, 1, 9 }, k = 15
// Output: 4
// Explanation: The sub-array is {5, 2, 7, 1}.
// -------------------------
// JS code for the above approach
 
// function to find the length of longest
// subarray having sum k
function lenOfLongSubarr(arr, N,  K)
{
 
    // Variable to store the answer
    let maxlength = 0;
 
    for (let i = 0; i < N; i++) {
 
        // Variable to store sum of subarrays
        let Sum = 0;
 
        for (let j = i; j < N; j++) {
            
                
 
            // Storing sum of subarrays
            Sum += arr[j];
 
            // if Sum equals K
            if (Sum == K) {
                
 
                // Update maxLength
                maxlength = Math.max(maxlength, j - i + 1);
            }
        }
    }
 
    // Return the maximum length
    return maxlength;
}
 
// Driver Code
// Given input
let arr = [ 10, 5, 2, 7, 1, 9, 1,2,1,2 ];
let n = arr.length;
let k = 15;
 
// Function Call
console.log( "Length = " , lenOfLongSubarr(arr, n, k));

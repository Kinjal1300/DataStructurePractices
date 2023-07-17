
let n = 5;


function isSorted(arr,n)
{
   if(n === 0 || n === 1) 
   {
       return true;
   }
   if(arr[0] > arr[1])
   {
      return false;
   }
   else
   {
        let ans = isSorted(arr+1,n-1)
        return ans;
   }
   
   
}

let arr = [2,3,4,5,6,7];
console.log(isSorted(arr,arr.length))
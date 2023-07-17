
function binarySearch(arr,s,e,k)
{
    // ele not found
     if(s>e)
     {
         return false;
     }
     
     let mid = s + (e-s)/2;
     // ele found
     if(arr[mid] === k)
     {
         return true;
     }
     

     if(arr[mid] < k)
     {
       return  binarySearch(arr,mid+1,e,k);
         
     }
     else
     {
       return  binarySearch(arr,s,mid-1,k);
     }
 
   
}

let arr = [2,3,4,5,6,7];
let k= 3;
console.log(binarySearch(arr,0,arr.length,k))
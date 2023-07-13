
function binarySearch(n) {

    let start = 0;
    let end = n;
    let mid = Math.ceil((start + end) / 2);

   let ans = -1;
    while (start <= end) {
       
       let sq = mid * mid;
       if(sq === n)
       {
           return mid;
       }
       
       if(sq < n)
       {
           ans = mid;
           start = mid + 1;
       }
       else
       {
           end = mid -1;
       }
        mid = Math.ceil((start + end) / 2);
    }
    return ans;
}

let ans = binarySearch(8);
console.log(ans);
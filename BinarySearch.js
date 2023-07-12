function binarySearch(arr,size,key) {
    
    let start = 0;
    let end = size - 1;
    let mid  = Math.ceil((start + end)/2);

    
    while(start <= end)
    {
        if(arr[mid] == key)
        {
            return mid;
        }
        
        // Go to right part
          if(key > arr[mid])
            {
                start = mid + 1;
            }
            else
            {
                
                end = mid - 1;
            }
          
    mid = Math.ceil((start+end)/2);
    }

    return -1;
}

let array = [5,10,20,21,45];
let ans = binarySearch(array,5,45);

console.log(ans)
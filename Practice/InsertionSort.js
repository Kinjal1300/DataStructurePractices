// Insertion Sort 

const arr = [44,5,7,8,9,4,29];
let n = arr.length;

for(let i=1;i<=n;i++)
{
    let temp = arr[i];
    let j=i-1;
    for(;j>=0;j--)
    {
        if(arr[j] > temp)
        {
            arr[j+1] = arr[j];
        }
        else
        {
            break;
        }
        
    }
    console.log(j + " temp --"+temp);
    arr[j+1] =temp;
}


console.log(arr);
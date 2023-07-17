// GCD

function getGCD(a,b)
{
    if(a===0) { return b }
    if(b===0) { return a } 
    
    while(a!==b)
    {
        if(a>b)
        {
            a=a-b;
        }
        else
        {
            
            b=b-a;
        }
    }
    return a;
}

console.log(getGCD(72,24))
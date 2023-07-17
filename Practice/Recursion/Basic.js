

let n = 5;


function fact(n)
{
    if(n===0) { return 1;  }
    let chooti = fact(n-1);
    let badi = n * chooti;
    return badi;
}

console.log(fact(n))
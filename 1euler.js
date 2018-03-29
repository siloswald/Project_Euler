function euler_01()
{
    var sum = 0, x = 1000;
    
    while (x --)
{
if ( x % 3 === 0 ||  x % 5 === 0 )
{
    sum += x;
    }
}
return sum;
}
console.log(euler_01(1000))


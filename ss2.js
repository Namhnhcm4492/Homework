/*
// Bai 1:
let N = Number(prompt("Input N: "));
let evensum = 0;
let oddsum = 0;
let i=1
for (i = 1;i <= N; i++){
    if (i % 2 ){
        evensum += i;
    }
else {
    oddsum += i;
}
}

console.log("The sum of even numbers:", evensum);
console.log("The sum of odd numbers:", oddsum);
//Bai2: 
let N = Number(prompt(" Input N: "));
if (N < 2){
    console.log( false );
} // Nếu N < 2 thì không phải số nguyên tố => false
else {
    let i =2;
    let a = true;  
    while ( i < N)
    {
        if (N % i == 0) // Nếu 2<= i < N mà N chia hết cho i thì N ko phải STN
        {
            a=false; // Gán biến a false và thoát khỏi vòng lặp
            break; // 
        }
        i++; 
    }
    if (a == true) {console.log(true);} 
    else {console.log(false);}
    }

// Bai 3:
let N = Number(prompt('Input N = '));
let list = " ";
if (N <2 )
{
    console.log(" Don't exist a prime number less 2 ");
}
else 
{   
    for(let i = 2; i <= N; i++)
    {   
        let a = 0;
        for (let j=1; j <= i; j++)
        {
            if ( i % j == 0)
            {
                a += 1 ;
            }
        }
    if ( a==2 ) 
    {
        list+= String(i); 
        if (i<N) {list += ", "};
    }
    }
    list = list.substring(0,list.length-2); // Cắt 2 phần tử cuối (space và ,) của chuỗi list
    console.log(`The list of prime numbers less or equal ${N}:`,list);
}

//Bai 4:
let N = Number(prompt(" Input N = "));
let sum = 0;
let Fib = 0;
if (N == 1 || N == 2 )
{
        a = 1;
}
else if (N == 0)
{ a = 0; }
let a1 = 1, a2 = 1;
for (let i = 3; i <= N ; i++)
{
    a = a1 + a2;
    a1 = a2;
    a2 = a;
}
console.log(` The ${N}nbth number is:`, a);

//Bai 5:
let sum =0;
let i = 0;
while(i >= 0)
{
    let N = Number(prompt(" Input N = "));
    if (N >= 0 )
    {
        sum += N;
        i++;
    }
    else 
    {
        break;
    }
} 
console.log("The sum of positive numbers entered = ", sum)
// Bai 6: 
let string = prompt(" Input a string: ");
x = string.length ;
loop = true ; 
for( i = 0; i <= x/2; i++)
{
    if (string [i] !== string[x-i-1])
    {
        loop = false;
        break;
    }
}
if (loop) {console.log(" Symmetry ");}
else { console.log(" not Symmetry");}
//Bai 7:
let M = Number(prompt("Input M = "));
    N = Number(prompt("Input N = "));
for (i = 1; i <= M; i++)
{
    for(j = 1; j <= N; j++)
    {
    document.write("*");
    }
    document.write("<br/>");
}
 
// Bai 8:
for (i = 0; i <= 25; i++ )// Có nhiều nhất 25 con chó 
{
    if ( 4*i +2*(36-i) == 100 ) // cho 4 chan, ga 2 chan 
    {break;}
}
console.log("Dogs:",i);
console.log("Chickens:",36-i);
*/
// Bai 9:
// Bai 9:
let a1= Number(prompt(" Input a1 ="));
let a2= Number(prompt(" Input a2 ="));
let b1= Number(prompt(" Input b1 ="));
let b2= Number(prompt(" Input b2 ="));
let c1= Number(prompt(" Input c1 ="));
let c2= Number(prompt(" Input c2 ="));
// a1*x + b1*y = c1
// a2*x + b2*y = c2 
det = a1*b2 - a2*b1;
let x = (c1*b2 - c2*b1) / det;
    y = (a1*c2 - a2*c1) / det;
console.log(`The roots of the set of equation are x,y = ${x}, ${y}`);

















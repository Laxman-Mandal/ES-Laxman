let x = 90;
let y = 90;
let x1 = x++;
let y1 = ++y;
console.log(x, y, x1, y1);

//unary operators ++, --, !
let z = !x;
console.log(z);
if (x % 2 == 0)

    console.log("x is even");
else
    console.log("x is odd");
// find if number is even and odd
let iseven = x % 2 == 0;
iseven = x & 1 == 0;
//x=8
//1000&001 = 000= 0 
let p = x << 1;
//5 = 101 << 1
//1010
let q = y >> 1;
let r = ~iseven;
console.log(p);
console.log(q);
console.log(r);
//comparision
let s = x === '90';
console.log(s);
s = x !== '90';
s = x <= '90';
//logical
let t = s && ss; //anything
console.log(t);
t = false && anything
t = s || ss;
t = true || ss;
const u = x ? ? "bishnu"; //nullish (null or undefined) coalescing operater
let v = x === 90 ? 45 : 89;
console.log(v);
let w = x++ + 45 >> 2 <= 34 ^ 4 & 9;
console.log(w);
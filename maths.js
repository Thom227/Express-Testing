// module.exports = {
//     sum: (a, b) => a + b,
//     substract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b,
// }

// module.exports = {
//     factorial: (a) => {
//         b == 2
//         for(a == a; (a / b) = 1; b++) {
//             if ((a / b) != 1) {
//                 console.log("Not a factorial");
//             } else(console.log(a + "!"));
//         }

//     } 
// };

// factorial(120);

console.log("Hello");

const factorial = (num) => {
    let fact = 1;
    while (num > 1) {
        fact++;
        num /= fact;

        if (num == 1) return fact + "!";
    }

    return "NONE";
}

console.log(factorial(24));

module.exports = factorial;



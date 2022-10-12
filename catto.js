
const catto = (num) => {
    for(let i = 1; i < 35; i++) {
        if (i === num) {continue}

        if(i % 10 === 1 && i !== 11) {
            console.log(i + "st");
        } else if(i % 10 === 2 && i !== 12){
            console.log(i + "nd");            
        } else if(i % 10 == 3 && i !==13) {
            console.log(i + "rd");     
        } else console.log(i + "th");
    }
};
console.log(catto(30));

module.exports = catto;

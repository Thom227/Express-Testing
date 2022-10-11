
const catto = (num) => {
    for(let i = 1; i < 35; i++) {
        if (i === num) {continue}

        let numEnd = (i%10);
        if(numEnd == 1) {
            console.log(i + "st");
        } else if(numEnd == 2){
            console.log(i + "nd");            
        } else if(numEnd == 3) {
            console.log(i + "rd");     
        } else console.log(i + "th");
    }
};
console.log(catto());

module.exports = catto;

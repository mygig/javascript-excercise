/**
 * Write a JavaScript program to get the current date.
 */
class Prob3 {
    constructor() {
        this.dd = (new Date().getDate() < 10) ? '0' + new Date().getDate() : new Date().getDate();
        this.yy = new Date().getFullYear();
        this.mm = (new Date().getMonth() < 10) ? '0' + new Date().getMonth() : new Date().getMonth();
    }
    getCurrentDate1() {
        console.log(`${this.mm}-${this.dd}-${this.yy}`);
    }
    getCurrentDate2() {
        console.log(`${this.dd}-${this.mm}-${this.yy}`);
    }
    getCurrentDate3() {
        console.log(`${this.mm}/${this.dd}/${this.yy}`)
    }
    getCurrentDate4() {
        console.log(`${this.dd}/${this.mm}/${this.yy}`);
    }
}

const prob = new Prob3();
prob.getCurrentDate1();
prob.getCurrentDate2();
prob.getCurrentDate3();
prob.getCurrentDate4();
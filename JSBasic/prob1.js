/**
 *  Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday. 
Current time is : 10 : 30 : 38 PM
 */

class Prob {
    getToday() {
        // get the day based on date
        let day = new Date().getDay();
        let weekday;
        switch (day) {
            case 0:
                weekday = 'Sunday';
                break;
            case 1:
                weekday = 'Monday';
                break;
            case 2:
                weekday = 'Tuesday';
                break;
            case 3:
                weekday = 'Wednesday';
                break;
            case 4:
                weekday = 'Thursday';
                break;
            case 5:
                weekday = 'Friday';
                break;
            case 6:
                weekday = 'Saturday';
                break;
        }
        console.log(`Today is ${weekday}`);
    }
    getCurrentTime(){
        let hh = new Date().getHours();
        let mm = new Date().getMinutes();
        let ss = new Date().getSeconds();
        let suffix = (hh>=12) ? 'PM':'AM';
        console.log(`Current time is ${hh-12}:${mm}:${ss} ${suffix}`);
    }
}

let prob = new Prob();
prob.getToday();
prob.getCurrentTime();
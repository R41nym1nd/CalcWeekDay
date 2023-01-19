const btn = document.getElementById('calc');
const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};
const GetDate = () => {
    let day = document.getElementById('day-n').value; // get day (number=1-31)
    let month = document.getElementById('month-n').value; // get month (number=00-11)
    let year = [document.getElementById('year-n').value]; // get year (object)
    year = year.toString(); // convert year to a processable value for the Date() function
    
    let date = [year, month, day]; // assing the values to an array

    return date;
};
btn.addEventListener('click', () => {
    let date = GetDate();

    let weekDay = new Date(...date); // get the date with spread operator

    let day = document.getElementById('result').innerHTML = days[weekDay.getDay()]; // calculate and obtain the week day

    return day;
});
document.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("calc").click();
    }
});
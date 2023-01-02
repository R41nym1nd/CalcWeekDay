const days = {
    0: "DOM",
    1: "LUN",
    2: "MAR",
    3: "MIÉ",
    4: "JUE",
    5: "VIE",
    6: "SÁB",
};

function Has366(yyyy) {
    if (!(yyyy % 4 == 0)) {
        return false;
    } else if (!(yyyy % 100 == 0)) {
        return true;
    } else if (yyyy % 400 == 0) {
        return true;
    } else {
        return false;
    };
}
function CodeMonth(month, bi) {
    let code;
    switch (month) {
        case 'ENE':
            if (bi == 0) {
                code = 0;
            } else {code = 6;};
            break;
        case 'FEB':
            if (bi == 0) {
                code = 3;
            } else {code = 2;};
            break;
        case 'MAR':
            code = 3;
            break;
        case 'APR':
            code = 6;
            break;
        case 'MAY':
            code = 1;
            break;
        case 'JUN':
            code = 4;
            break;
        case 'JUL':
            code = 6;
            break;
        case 'AUG':
            code = 2;
            break;
        case 'SEP':
            code = 5;
            break;
        case 'OCT':
            code = 0;
            break;
        case 'NOV':
            code = 3;
            break;
        case 'DEC':
            code = 5;
            break;
    };
    return code;
};
function CodeYear(yy) {
    let code = [...`${yy}`].map(c => parseInt(c));
    return code;
}
function FirstTwoDigits(arr) {
    let d1, d2, digits;
    let ftd = arr.slice(0, 2);
    ftd = ftd.toString();
    d1 = ftd.slice(0, 1);
    d2 = ftd.slice(2);
    digits = d1 + d2;
    return digits;
}
function LastTwoDigits(arr) {
    let d1, d2, digits;
    let ltd = arr.slice(2);
    ltd = ltd.toString();
    d1 = ltd.slice(0, 1);
    d2 = ltd.slice(2);
    digits = d1 + d2;
    return digits;
}
function GetCenturyConstant(yy) {
    let yyy = yy / 1;
    let kk;
    if (yyy % 4 == 0) {
        kk = 6;
    } else if ((yyy - 1) % 4 == 0) {
        kk = 4;
    } else if ((yyy - 2) % 4 == 0) {
        kk = 2;
    } else {
        kk = 0;
    };
    return kk;
}
function CalculateWeekDay(){
    let n = document.getElementById('day-n').value;
    let month = document.getElementById('month-sigla').value;
    let year = [document.getElementById('year-n').value];
    year = year.toString();

    let b = (Has366(year)) ? 1:0; // 1 yes - 0 not
    let m = CodeMonth(month, b); // month number
    let y = LastTwoDigits(CodeYear(year)); // last two digist of the year
    let k = GetCenturyConstant(FirstTwoDigits(CodeYear(year))); // century constant

    let yc = Math.floor(y/4); 
    
    let r = (n + m + y + yc + k) % 7;
    console.info(days[r]);
    return document.getElementById('result').innerHTML = days[r];
}
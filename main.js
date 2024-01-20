let T3 = document.querySelector('.T3'),
    T4 = document.querySelector('.T4'),
    T6 = document.querySelector('.T6'),
    secondEle = document.querySelector('.second'),
    i = 0;

setInterval(changeTimers, 128);

function changeTimers(){
    i++;
    changeTimer(T3,3,i);
    changeTimer(T4,4,i);
    changeTimer(T6,6,i);
    secondEle.innerHTML = i;
}

function changeTimer(timerEle, radix, num) {
    timerEle.querySelector('.svg-timer-count').innerHTML = ('000' + convertRadix(num, radix)).slice(-3);
}

function convertRadix(num, radix) {
    let mod = num % radix,
        division = Math.floor(num / radix);
    if (division === 0){
        return mod.toString();
    } else {
        return convertRadix(division, radix) + mod.toString();
    }
}
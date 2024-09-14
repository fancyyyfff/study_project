


var hourInput = document.querySelector('.re-clock-page').querySelector('.hour'),
    minuteInput = document.querySelector('.re-clock-page').querySelector('.minute'),
    secondInput = document.querySelector('.re-clock-page').querySelector('.second'),
    start = document.querySelector('#re-start'),
    reset = document.querySelector('#re-over'),
    pause = document.querySelector('#re-stop'),
    startKey = true,
    pauseKey = false,
    resetKey = false,
    timer;




minuteInput.addEventListener('focus', function () {
    if (this.value == "00") {
        this.value = '';
        this.style.color = '#fff';
    }
});

minuteInput.addEventListener('blur', function () {
    if (this.value == '') {
        this.value = "00";
        this.style.color = '#fff';
    }
})


secondInput.addEventListener('focus', function () {
    if (this.value == "00") {
        this.value = '';
        this.style.color = '#fff';
    }
});

secondInput.addEventListener('blur', function () {
    if (this.value == '') {
        this.value = "00";
        this.style.color = '#fff';
    }
})


hourInput.addEventListener('focus', function () {
    if (this.value == "00") {
        this.value = '';
        this.style.color = '#fff';
    }
});

hourInput.addEventListener('blur', function () {
    if (this.value == '') {
        this.value = "00";
        this.style.color = '#fff';
    }
})

start.addEventListener('click', function () {
    if (startKey) {
        startTimer();
    }
}, false);

reset.addEventListener('click', function () {
    if (resetKey) {
        window.location.reload();
    }
}, false);

pause.addEventListener('click', function () {
    if (pauseKey) {
        pauseTimer();
    }
}, false);

function startTimer() {
    timer = setInterval(judge, 1000);

    startKey = false;
    pauseKey = true;
    resetKey = true;

    secondInput.setAttribute('disabled', 'disabled');
    minuteInput.setAttribute('disabled', 'disabled');
    hourInput.setAttribute('disabled', 'disabled');
    secondInput.style.color = '#fff';
    minuteInput.style.color = '#fff';
    hourInput.style.color = '#fff';
    // 注意disabled 和 readonly 的区别
}

function pauseTimer() {
    clearInterval(timer);

    pauseKey = false;
    startKey = true;
}

function judge() {
    //1.输入的值正常时
    console.log(secondInput.value);
    console.log(minuteInput.value);
    console.log(hourInput.value);

    if (secondInput.value >= 0 && secondInput.value < 60 && minuteInput.value < 60 && minuteInput.value >= 0 && hourInput.value >= 0) {
        if (secondInput.value != 0) {
            secondInput.value--;
        } else {
            if (minuteInput.value != 0) {
                minuteInput.value--;
                secondInput.value = 59;
            } else {
                if (hourInput.value != 0) {
                    hourInput.value--;
                    minuteInput.value = 59;
                    secondInput.value = 59;
                } else {
                    clearInterval(timer);
                    window.alert('Time out!!!');
                    window.location.reload();
                }
            }
        }
    } else if (secondInput.value < 0 || minuteInput.value < 0 || hourInput.value < 0) {
        // 2.有输入框中输入的值小于0
        if (secondInput.value < 0) {
            secondInput.value = ' 00 ';
        }
        if (minuteInput.value < 0) {
            minuteInput.value = ' 00 ';
        }
        if (hourInput.value < 0) {
            hourInput.value = ' 00 ';
        }
        judge();
    } else {
        // 3.当存在输入框的值大于等于60
        if (secondInput.value >= 60) {
            minuteInput.value++;
            secondInput.value -= 60;
        }
        if (minuteInput.value >= 60) {
            hourInput.value++;
            minuteInput.value -= 60;
        }
        judge();
    }
}


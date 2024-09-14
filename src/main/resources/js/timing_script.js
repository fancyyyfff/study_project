window.addEventListener("load", () => {

    const front = document.querySelector('#front');
    const upside = document.querySelector('#upside');
    const page = document.querySelector('.clock-page');
    const re_page = document.querySelector('.re-clock-page');
    front.addEventListener('click', () => {
        page.style.display = 'block';
        re_page.style.display = 'none';
        front.style.color = '#000000';
        upside.style.color = '#585251';
    })
    upside.addEventListener('click', () => {
        page.style.display = 'none';
        re_page.style.display = 'block';
        front.style.color = '#585251';
        upside.style.color = '#000000';
    })




    var timerInterval; // 用于存储计时器的引用
    var startTime; // 记录计时器开始的时间
    var elapsedTime = 0; // 记录经过的时间

    var hourtxt = document.querySelector('.clock-page').querySelector('.hour');
    var minutetxt = document.querySelector('.clock-page').querySelector('.minute');
    var secondtxt = document.querySelector('.clock-page').querySelector('.second');

    var start = document.querySelector('.clock-page').querySelector('#start');
    var stop = document.querySelector('.clock-page').querySelector('#stop');
    var over = document.querySelector('.clock-page').querySelector('#over');
    function startTimer() {
        startTime = Date.now() - elapsedTime; // 计算开始时间，减去已经经过的时间
        start.disabled = true;
        timerInterval = setInterval(updateTimer, 1000); // 每秒更新一次计时器
    }

    function pauseTimer() {
        clearInterval(timerInterval); // 清除计时器
        start.disabled = false;
    }

    function resetTimer() {
        clearInterval(timerInterval); // 清除计时器
        elapsedTime = 0; // 重置经过的时间
        start.disabled = false;
        // 重置计时器显示
        secondtxt.textContent = "00";
        minutetxt.textContent = "00";
        hourtxt.textContent = "00";
    }

    function updateTimer() {
        var currentTime = Date.now(); // 获取当前时间
        elapsedTime = currentTime - startTime; // 计算经过的时间

        // 将经过的时间转换为时分秒格式
        var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // 格式化时间，保证时、分、秒始终是两位数
        var hour = (hours < 10 ? "0" : "") + hours;
        var minute = (minutes < 10 ? "0" : "") + minutes;
        var second = (seconds < 10 ? "0" : "") + seconds;

        // 更新计时器显示
        hourtxt.textContent = hour;
        minutetxt.textContent = minute;
        secondtxt.textContent = second;
    }

    start.addEventListener("click", startTimer);
    stop.addEventListener("click", pauseTimer);
    over.addEventListener("click", resetTimer);
})


/*按钮变化*/
var change = [];
change[0] = document.querySelectorAll('#study');
change[1] = document.querySelectorAll('#work');
change[2] = document.querySelectorAll('#read');
change[3] = document.querySelectorAll('#sport');
change[4] = document.querySelectorAll('#other');
const task = document.querySelectorAll('#task');
/*隐藏按钮和文字提醒*/
task[0].style.visibility = 'hidden';
task[1].style.visibility = 'hidden';
for (var i = 0; i < 5; i++) {
    change[i][1].style.visibility = 'hidden';
    change[i][2].style.visibility = 'hidden';
}
/*学习*/
change[0][0].onclick = function () {
    task[0].style.visibility = 'visible';
    task[1].style.visibility = 'visible';
    for (var j = 0; j < 5; j++) {
        change[j][1].style.visibility = 'hidden';
        change[j][2].style.visibility = 'hidden';
    }
    change[0][1].style.visibility = 'visible';
    change[0][2].style.visibility = 'visible';
}
/*工作*/
change[1][0].onclick = function () {
    task[0].style.visibility = 'visible';
    task[1].style.visibility = 'visible';
    for (var j = 0; j < 5; j++) {
        change[j][1].style.visibility = 'hidden';
        change[j][2].style.visibility = 'hidden';
    }
    change[1][1].style.visibility = 'visible';
    change[1][2].style.visibility = 'visible';
}
/*阅读*/
change[2][0].onclick = function () {
    task[0].style.visibility = 'visible';
    for (var j = 0; j < 5; j++) {
        change[j][1].style.visibility = 'hidden';
        change[j][2].style.visibility = 'hidden';
    }
    change[2][1].style.visibility = 'visible';
    change[2][2].style.visibility = 'visible';
}
/*运动*/
change[3][0].onclick = function () {
    task[0].style.visibility = 'visible';
    for (var j = 0; j < 5; j++) {
        change[j][1].style.visibility = 'hidden';
        change[j][2].style.visibility = 'hidden';
    }
    change[3][1].style.visibility = 'visible';
    change[3][2].style.visibility = 'visible';
}
/*其他*/
change[4][0].onclick = function () {
    task[0].style.visibility = 'visible';
    for (var j = 0; j < 5; j++) {
        change[j][1].style.visibility = 'hidden';
        change[j][2].style.visibility = 'hidden';
    }
    change[4][1].style.visibility = 'visible';
    change[4][2].style.visibility = 'visible';
}
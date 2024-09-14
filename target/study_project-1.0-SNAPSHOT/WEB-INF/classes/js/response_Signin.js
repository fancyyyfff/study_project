const btns = document.querySelectorAll('button');
const error = document.querySelectorAll('.error');
axios.defaults.baseURL = 'http://localhost:8080/study_project_war';
// axios.defaults.baseURL = 'http://localhost:80/study_project_war';

// axios.defaults.baseURL = 'http://localhost:63342/study_project_war';



error[2].style.bottom = '103px';
error[3].style.bottom = '103px';
error[4].style.bottom = '103px';
// error[2].style.visibility = 'visible';

//登录请求
btns[0].onclick = function () {
    var TEL = document.querySelector('#login_Telephone');       //获取电话号码
    var tel = TEL.value;
    var PSW = document.querySelector('#login_password');        //获取密码
    var password = PSW.value;
    var judge = true;

    //判断号码是否合法
    if (tel.length !== 11)                         //号码长度错误  
    {
        judge = false;
        console.log("tel length error!");
    }
    else {
        for (var i = 0; i < tel.length; i++)       //号码不为数字
            if (tel[i] < '0' || tel[i] > '9') {
                judge = false;
                console.log("Not only number!");
            }
    }
    if (judge === false) {                          //提示号码不合法
        error[1].style.visibility = 'hidden';
        error[0].style.visibility = 'visible';
        return;
    }

    //发送用户信息
    axios.put('/users', {
        username: tel,
        psword: password
    })
        .then(function (response) {
            //判断密码是否正确
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999){
                alert("账号不存在 或 系统繁忙，请重试！");
                return ;
            }
            if (Data.code == 10011) {
                window.location.href = "../page/mainPage.html";      //跳转至主页
                console.log(tel);
                //设置cookie
                $.cookie('username', tel, { path: '/' });
                // var user = $.cookie('username');
                // console.log(user);
            }
            else {
                TEL.value = "";
                PSW.value = "";
                error[0].style.visibility = 'hidden';
                error[1].style.visibility = 'visible';
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

//注册请求
btns[3].onclick = function () {
    var TEL = document.querySelector('#register_Telephone');       //获取电话
    var tel = TEL.value;
    var PSW = document.querySelector('#register_password');        //获取第一行密码
    var password = PSW.value;
    var PSW2 = document.querySelector('#register_password2');      //获取第二行密码
    var password2 = PSW2.value;

    var judge = true;

    //判断号码是否合法
    if (tel.length !== 11) {                         //号码长度错误  
        console.log("tel length error!");
        judge = false;
    }
    else {
        for (var i = 0; i < tel.length; i++)         //号码不为数字
            if (tel[i] < '0' || tel[i] > '9') {
                judge = false;
                break;
            }
    }
    if (judge === false) {
        error[2].style.visibility = 'hidden';
        error[4].style.visibility = 'hidden';
        error[3].style.visibility = 'visible';
        return;
    }

    //判断密码是否合法
    if (password.length < 6) {                       //密码长度太短
        console.log("password length error!");
        error[3].style.visibility = 'hidden';
        error[4].style.visibility = 'hidden';
        error[2].style.visibility = 'visible';
        return;
    }
    else if (password !== password2) {                //两次密码不同
        console.log("Comfirm password error!");
        error[2].style.visibility = 'hidden';
        error[3].style.visibility = 'hidden';
        error[4].style.visibility = 'visible';
        return;
    }

    //发送注册信息
    axios.post('/users', {
        username: tel,
        psword: password
    })
        .then(function (response) {
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999){
                alert("请求失败，请重试！");
                return ;
            }
            if (Data.code == 10021) {
                alert("注册成功！");
                // document.querySelector('.success').style.visibility = 'visible';
                setTimeout(function(){
                    window.location.href = "../page/index.html";      //跳转至登录页面
                },500)
            }
            else {
                TEL.value = "";
                PSW.value = "";
                PSW2.value = "";
                error[2].style.visibility = 'hidden';
                error[3].style.visibility = 'hidden';
                error[4].style.visibility = 'hidden';
                alert("账号已存在");
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}
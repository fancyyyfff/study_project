var time1;    //自设的目标日期
var user = $.cookie('username');
let k = 0, Data_load, Data_load2;
let pssw;
axios.defaults.baseURL = 'http://localhost:8080/study_project_war';
let reset_psword_box = document.querySelector('.reset_password_box');
reset_psword_box.style.visibility = 'hidden';
// axios.defaults.baseURL = 'http://localhost:80/study_project_war';
// axios.defaults.baseURL = 'http://localhost:63342/study_project_war';


//根据四个不同的文字段跳转到对应的页面
$('.pro-txt').on('click', function () {
    var id = $(this).attr('id');
    if (id == "t1") window.open('../page/crriculum.html');
    else if (id == "t2") window.open('../page/timing.html');
    else if (id == "t3") window.open('../page/pro_index.html');
    else if (id == "t4") window.open('../page/sharing.html');
})

//根据四个不同的图片跳转到对应的页面
$('.pro-svg').on('click', function () {
    var id = $(this).attr('id');
    if (id == "s1") window.open('../page/crriculum.html');
    else if (id == "s2") window.open('../page/timing.html');
    else if (id == "s3") window.open('../page/pro_index.html');
    else if (id == "s4") window.open('../page/sharing.html');
})

//设置天数倒计时
function set_interval(end_time) {
    //当前的日期
    var now = new Date();
    var time1 = end_time.split('T');
    var time2 = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    //计算和设置天数
    var interval = (Date.parse(time1[0]) - Date.parse(time2)) / 86400000;
    $('.count-days').text(interval);
}

//获取数据
window.onload = function () {
    console.log('ready');
    //获取倒计时
    axios.put('/counts/' + user)
        .then(function (response) {
            console.log(response.data);
            Data_load = response.data;
            if (Data_load.code == 59999) {
                alert("请求失败，请重试！");
                return;
            }
            if (Data_load.code == 20070) {
                alert("获取失败，请重试");
                return;
            }
            Data_load = Data_load.data;
            if (Data_load.fin !== null)                           //截止日期不为空，则设置倒计时天数更新
                setInterval(set_interval(Data_load.fin), 1000);    //每隔一秒
            if (Data_load.task !== null) $('.insert').text(Data_load.task);
        })
        .catch(function (error) {
            console.log(error);
        })

    //获取待办列表
    axios.get('/assignments/' + user)
        .then(function (response) {
            console.log(response.data);
            Data_load2 = response.data;
            if (Data_load2.code == 59999) {
                alert("请求失败，请重试！");
                return;
            }
            if (Data_load2.code == 20040) {
                alert("获取失败，请重试");
                return;
            }
            Data_load2 = Data_load2.data.assignmentList;
            console.log(Data_load2);
            if (Data_load2!== null)
                for (k of Data_load2) {
                    Insert(k.content,k.finish);
                }
        })
        .catch(function (error) {
            console.log(error);
        })

    //获取头像呢称
    axios.get('/peos/'+user)
        .then(function(response){
            console.log(response.data);
            Data_load2 = response.data;
            if (Data_load2.code == 59999){
                alert("请求失败，请重试~");
                return ;
            }
            if (Data_load2.code == 30010){
                alert("发送失败，请重试~");
                return ;
            }
            Data_load2 = Data_load2.data;
            //头像
            if (Data_load2.id == 1){
                show_avatar.src = "../image/avatar1.png";
                main_avatar.src = "../image/avatar1.png";
            }
            else if (Data_load2.id == 2){
                show_avatar.src = "../image/avatar2.png";
                main_avatar.src = "../image/avatar2.png";
            }
            //昵称
            if (Data_load2.alias !== null){
                nickName.value = Data_load2.alias;
                show_nickName.innerHTML = Data_load2.alias;
            }
            pssw = Data_load2.psword;
            console.log(pssw);
        })
}

$('#form-submit').on('click', function () {
    //倒计时的日期
    var date = $('#form-time').val();
    time1 = date.split('T')[0];
    var Text = $('.insert').text();
    if (date != "") {                                      //截止日期不为空，则设置倒计时天数更新
        setInterval(set_interval(time1), 1000);
    }

    //发送请求，保存日期和目标
    axios.post('/counts', {
        fin: date,
        task: Text,
        username: user
    })
        .then(function (response) {
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999) {
                alert("请求失败，请重试！");
                return;
            }
            if (Data.code == 20060) alert("添加失败，请重试！");
            else console.log('dating success!');
        })
        .catch(function (error) {
            console.log(error);
        })
})

// function todoList(){
//     var List = document.querySelectorAll('.dutyList');
//     var chi = List[0].children()
// }

$('#save').on('click', function () {
    const duty = document.querySelectorAll('.dutyContent');
    const check = document.querySelectorAll('#check');
    let savelist = [];
    for (k = 0; k < duty.length; k++)
        savelist.push({
            finish: check[k].checked,
            content: duty[k].innerText
        })
    savelist = savelist.reverse();
    console.log(savelist);
    axios.post('/assignments', {
        username: user,
        assignmentList: savelist
    })
        .then(function (response) {
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999) {
                alert("请求失败，请重试！");
                return;
            }
            if (Data.code == 20030) alert("添加失败，请重试！");
            else console.log('dating success!');
        })
        .catch(function (error) {
            console.log(error);
        })
})

//发送头像昵称
sub_message.addEventListener('click',() => {
    console.log('send nickname');
    axios.put('/peos',{
        username: user,
        alias: nickName.value,
        id: judge
    })
        .then(function(response){
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999){
                alert("请求失败，请重试~");
                return ;
            }
            if (Data.code == 30020){
                alert("发送失败，请重试~");
                return ;
            }
            console.log("Nickname success");
        })
        .catch(function(error){
            console.log(error);
        })
})

//修改密码
var error = document.querySelectorAll('.error');
// error[1].style.visibility = 'visible';
$('.set').on('click',function(){
    var input_password = document.querySelectorAll('.input_password');
    // console.log(input_password[0]);
    // console.log(pssw);
    console.log(input_password[0],input_password[1],input_password[2]);
    if (input_password[1].value.length < 6){
        error[1].style.visibility = 'visible';
        error[0].style.visibility = 'hidden';
        error[2].style.visibility = 'hidden';
        error[3].style.visibility = 'hidden';
    }
    else if (input_password[2].value !== input_password[1].value){
        console.log('wrong Reset');
        error[2].style.visibility = 'visible';
        error[0].style.visibility = 'hidden';
        error[1].style.visibility = 'hidden';
        error[3].style.visibility = 'hidden';
    }
    else if (pssw !== input_password[0].value){
        console.log('wrong Original');
        console.log(pssw,input_password[0].value);
        error[0].style.visibility = 'visible';
        error[2].style.visibility = 'hidden';
        error[1].style.visibility = 'hidden';
        error[3].style.visibility = 'hidden';
    }
    else if (input_password[1].value == "" || input_password[2].value == ""){
        console.log("empty password");
        error[3].style.visibility = 'visible';
        error[2].style.visibility = 'hidden';
        error[1].style.visibility = 'hidden';
        error[0].style.visibility = 'hidden';
    }
    else {
        axios.post('/peos',{
            username: user,
            psword:input_password[1].value
        })
            .then(function(response){
                console.log(response.data);
                var Data = response.data;
                if (Data.code == 59999){
                    alert("请求失败，请重试~");
                    return ;
                }
                if (Data.code == 30010){
                    alert("发送失败，请重试~");
                    return ;
                }
                console.log("Reset success");
                // setTimeout(function(){
                //     document.querySelector('.success').style.visibility = 'visible';
                // },500)
                set_password.style.visibility = 'hidden';
            })
            .catch(function(error){
                console.log(error);
            })
    }
})
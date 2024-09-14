// let Title = document.querySelectorAll('.writeOutTitle');
let process_title = document.querySelectorAll('.process_title');
// let process_title = $('.process_title');
let content = $(".writeplace");
let k=0,Data_load,str;
// const writeplaces = document.querySelectorAll(".writeplace");
var user = $.cookie('username');

axios.defaults.baseURL = 'http://localhost:8080/study_project_war';
// axios.defaults.baseURL = 'http://localhost:80/study_project_war';

// axios.defaults.baseURL = 'http://localhost:63342/study_project_war';


// //请求 页面文本数据
// document.addEventListener('DOMContentLoaded',function(){
//     axios.get('/routes/'+user)
//         .then((response) => {
//             console.log(response.data);
//             let Data_load = response.data;
//             if (Data_load.code == 10050){
//                 alert("获取失败，请重试！");
//                 return ;
//             }
//             console.log("pro_index get success!");
//             Data_load = Data_load.data;
//             //返回的data是集合
//             for (const k of Data_load){
//                 console(k);
//                 if (1 <= k.id <= 5) process_title[k.id - 1].innerHTML = "<p>" + k.target +"</p>";
//                 else writeplaces[k.id - 6].innerText = k.content;
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// })

window.onload = function () {
// window.addEventListener("load",() =>{
    axios.get('/routes/'+user)
        .then((response) => {
            console.log(response.data);
            Data_load = response.data;
            if (Data_load.code == 59999){
                alert("获取失败，请重试！");
                return ;
            }
            console.log("pro_index get success!");
            Data_load = Data_load.data;
            //返回的data是集合
            // process_title[Data_load[0].id - 1].innerHTML = '<p>' + Data_load[0].target + '</p>';
            // process_title[Data_load[1].id - 1].innerHTML = '<p>' + Data_load[1].target + '</p>';
            // process_title[Data_load[2].id - 1].innerHTML = '<p>' + Data_load[2].target + '</p>';
            // process_title[Data_load[3].id - 1].innerHTML = '<p>' + Data_load[3].target + '</p>';
            // process_title[Data_load[4].id - 1].innerHTML = '<p>' + Data_load[4].target + '</p>';
            // content[Data_load[5].id - 6].innerHTML = Data_load[5].content;
            // content[Data_load[6].id - 6].innerHTML = Data_load[6].content;
            // content[Data_load[7].id - 6].innerHTML = Data_load[7].content;
            // content[Data_load[8].id - 6].innerHTML = Data_load[8].content;
            // content[Data_load[9].id - 6].innerHTML = Data_load[9].content;
            for (k=0; k<Data_load.length; k++){
                // str = $('<p></p>').html(Data_load[k].target);
                if (1 <= Data_load[k].id <= 5 && Data_load[k].target !== null)
                    process_title[Data_load[k].id - 1].innerHTML = '<p>' + Data_load[k].target + '</p>';
                else if (6 <= Data_load[k].id <= 10 && Data_load[k].content !== null){
                    writeplaces[Data_load[k].id - 6].innerHTML = Data_load[k].content;
                }

            }
        })
        .catch(function (error) {
            console.log(error);
        })
// })

}

//textarea 格式转换
function textTo(str) {
    var reg = new RegExp("\n", "g");
    var regSpace = new RegExp(" ", "g");
    str = str.replace(reg, "<br>");
    str = str.replace(regSpace, "&nbsp");
    return str;
}

//发送 文本框内容
$(".save").on('click',function () {
    var id = $(this).attr('id'), index = 0;
    //获取文本框 编号和内容
    if (id == "s6") index = 6;
    else if (id == "s7") index = 7;
    else if (id == "s8") index = 8;
    else if (id == "s9") index = 9;
    else if (id == "s10") index = 10;
    var val = textTo(writeplaces[index - 6].value);

    console.log(index, val);
    // writeplaces[index-1].value = "";              //删除对应文本框内容
    //发送请求
    axios.put('/routes', {
        id: index,
        content: val,
        username: user
    })
        .then(function (response) {
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999 || Data.code == 10040) alert("添加失败，请重试！");
            else console.log("save text success!");
        })
        .catch(function (error) {
            console.log(error);
        })
})

//发送标题内容
$(".titleSub").on('click',function () {
    var id = $(this).attr('id'), index = 0;
    //获取".titleSub"编号和内容
    if (id == "s1") index = 1;
    else if (id == "s2") index = 2;
    else if (id == "s3") index = 3;
    else if (id == "s4") index = 4;
    else if (id == "s5") index = 5;
    var val = writeOutTitle[index - 1].value;
    console.log(index, val);
    writeOutTitle[index-1].value = "";
    //发送请求
    axios.post('/routes', {
        id: index,
        target: val,
        username:user
    })
        .then(function (response) {
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999 || Data.code == 10030) alert("添加失败，请重试！");
            else console.log("save title success!");
        })
        .catch(function (error) {
            console.log(error);
        })
})
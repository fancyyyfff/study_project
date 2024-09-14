const share = document.querySelectorAll('textarea');
var things = {}
var user = $.cookie('username');
let k = 0, Data_load;
let Button = '<svg t="1697375099341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4914" width="20" height="20"><path d="M567.024534 149.331607m60.339779 60.339778l199.422968 199.422969q60.339779 60.339779 0 120.679557l-184.941421 184.941422q-60.339779 60.339779-120.679558 0l-199.422968-199.422969q-60.339779-60.339779 0-120.679557l184.941421-184.941422q60.339779-60.339779 120.679558 0Z" fill="#707070" p-id="4915"></path><path d="M557.653333 256l211.2 213.333333-302.08 298.666667H346.88l-151.466667-151.466667L557.653333 256m0-85.333333a85.333333 85.333333 0 0 0-60.586666 24.746666L135.253333 554.666667a85.333333 85.333333 0 0 0 0 120.746666L311.466667 853.333333h190.293333l327.253333-327.253333a85.333333 85.333333 0 0 0 0-120.746667l-211.2-211.2A85.333333 85.333333 0 0 0 557.653333 170.666667z" fill="#707070" p-id="4916"></path><path d="M332.8 768m42.666667 0l469.333333 0q42.666667 0 42.666667 42.666667l0 0q0 42.666667-42.666667 42.666666l-469.333333 0q-42.666667 0-42.666667-42.666666l0 0q0-42.666667 42.666667-42.666667Z" fill="#707070" p-id="4917"></path></svg><br>';
axios.defaults.baseURL = 'http://localhost:8080/study_project_war';


// axios.defaults.baseURL = 'http://localhost:63342/study_project_war';


// axios.defaults.baseURL = 'http://localhost:63342/study_project_war';


function textTo(str) {
    var reg = new RegExp("\n", "g");
    var regSpace = new RegExp(" ", "g");
    str = str.replace(reg, "<br>");
    str = str.replace(regSpace, "&nbsp");
    return str;
}

//获取全部
window.onload = function () {
    console.log('onload success!');
    axios.get('/enjoys')
        .then(function (response) {
            console.log(response.data);
            Data_load = response.data;
            if (Data_load.code == 59999) {
                alert("请求失败，请重试！");
                return;
            }
            if (Data_load.code == 10080) {
                alert("获取失败！");
                return;
            }
            Data_load = Data_load.data;
            if (Data_load !== null)
                for (k of Data_load) {
                    Insert(k);
                }
        })
        .catch(function (error) {
            console.log(error);
        })
}

//发送全部
// window.onbeforeunload = function(){
//     things[len] = share.length-1;
//     for(var i=1;i<share.length;i++)
//       things[i-1] = share[i];
//     axios.post('/enjoys',{
//         things: things,
//         username: user
//     })
//     .then(function(response){
//         console.log(response.data);
//         var Data = response.data;
//         if (Data.code == 10070) alert("发送失败！");
//         else console.log("sharing send success!");
//         alert("确认？");
//     })
//     .catch(function(error){
//         crossOriginIsolated.log(error);
//     })
// }

$("#submit").on("click", function () {
    if ($("#content").val() !== "") {
        var val = textTo(document.querySelector('#content').value);
        Insert(val);
        // var line = $("<div class='line'></div>").html("<textarea>" + val + "</textarea>");
        // var del = $("<i class='fas fa-eraser' id='delete_button'></i><br>");
        // line.append(del);
        // $(".board").prepend(line.hide().fadeIn());
        // textarea.value = "";
        // del.click(function () {
        //     var p = $(this).parent();
        //     Index =  $(p).index();
        //     alert(Index);
        //     p.fadeOut(function () {
        //         p.remove();
        //     })
        //     // axios.delete('/enjoys/' + str(Index))
        //     //     .then(function (response) {
        //     //         console.log(response.data);
        //     //         // var Data = response.data;
        //     //         // if (Data.code == 10070) alert("发送失败！");
        //     //         // else console.log("delete send success!");
        //     //     })
        // })

        //发送请求
        axios.post('/enjoys', {
            username: user,
            things: val
        })
            .then(function (response) {
                console.log(response.data);
                var Data = response.data;
                if (Data.code == 59999) {
                    alert("请求失败，请重试！");
                    return;
                }
                if (Data.code == 10070) alert("发送失败！");
                else console.log("sharing send success!");
            })
            .catch(function (error) {
                crossOriginIsolated.log(error);
            })
    }
})

function Insert(content) {
    var line = $("<div class='line'></div>").html("<textarea>" + content + "</textarea>");
    var del = $("<button id='delete_button'></button>").html(Button);
    line.append(del);
    $(".board").prepend(line.hide().fadeIn());
    share[0].value = "";
    // del.click(function () {
    //     var p = $(this).parent();
    //     var Index = $(p).index();
    //     p.fadeOut(function () {
    //         p.remove();
    //     })
    //     axios.delete('/enjoys/' + str(Index))
    //         .then(function (response) {
    //             console.log(response.data);
    //             // var Data = response.data;
    //             // if (Data.code == 10070) alert("发送失败！");
    //             // else console.log("delete send success!");


    //         })
    // })

}

//删除分享板上的内容
$(document).on('click', '#delete_button', function () {
    var p = $(this).parent();
    var Index = $(p).index();
    p.fadeOut(function () {
        p.remove();
    })
    console.log(Index.toString());
    axios.delete('/enjoys/' + Index.toString())
        .then(function (response) {
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999) {
                alert("请求失败，请重试！");
                return;
            }
            if (Data.code == 10070) alert("发送失败！");
            else console.log("delete send success!");
        })
})
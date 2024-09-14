const classin = document.querySelectorAll('#classin');
var user = $.cookie('username');
let k = 0, Data_load;
// axios.defaults.baseURL = 'http://localhost:8080/study_project_war';

axios.defaults.baseURL = 'http://localhost:80/study_project_war';

// axios.defaults.baseURL = 'http://localhost:63342/study_project_war';


//请求 课程表数据
window.onload = function () {
    console.log('ready');
    axios.get('/courses/' + user)
        .then(function (response) {
            console.log(response.data);
            Data_load = response.data;
            if (Data_load.code == 59999){
                alert("请求失败，请重试！");
                return ;
            }
            if (Data_load.code == 20020) {
                alert("获取失败，请重试！");
                return;
            }
            console.log('crriculum get success!');
            Data_load = Data_load.data.courseList;
            console.log(Data_load);
            if (Data_load !== null)
                for (k of Data_load)
                    if (k.course !== null)
                        classin[k.id].value = k.course;
        })
        .catch(function (error) {
            console.log(error);
        })
}

//发送 课程表数据
window.onbeforeunload = function () {
    var things = [];
    var dat = {}, num = 0;
    for (var i = 0; i < 49; i++) {
        dat = {
            id: i,
            course: classin[i].value
        }
        things.push(dat);
    }
    console.log(things);
    axios.post('/courses', {
        courseList: things,
        username: user
    })
        .then(function (response) {
            console.log(response.data);
            var Data = response.data;
            if (Data.code == 59999) {
                alert("请求失败，请重试！");
                return;
            }
            if (Data.code == 20010) alert("添加失败，请重试！");
            else console.log('crriculum add success!');

        })
        .catch(function (error) {
            crossOriginIsolated.log(error);
        })
        .finally(function(){

        })
    alert("stop");
}

//监听
// function onVisibilityChange(){
//     if (!document[this.hiddenProperty]){
//         console.log('show');
//     }
//     else console.log('hidden');
// }

// function addVisibilityListener(){
//     var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkiHidden' in document ? 'webkiHidden' : 'mozHidden' in document ? 'mozHidden' : null ;
//     var VisibilityChangeEvent = hiddenProperty.replace(/hidden/i,'visibilitychange');
//     document.addEventListener(VisibilityChangeEvent,onVisibilityChange,false);
//     console.log("addVisibilityListener  successful!");
// }

// function removeVisibilityListener(){
//     var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkiHidden' in document ? 'webkiHidden' : 'mozHidden' in document ? 'mozHidden' : null ;
//     var VisibilityChangeEvent = hiddenProperty.replace(/hidden/i,'visibilitychange');
//     document.removeEventListener(VisibilityChangeEvent,onVisibilityChange,false);
//     console.log("removeVisibilityListener  successful!");
// }
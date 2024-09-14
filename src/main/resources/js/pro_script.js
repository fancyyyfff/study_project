const edits = document.querySelectorAll(".edit");
let writeplaces = document.querySelectorAll(".writeplace");
const writeOutTitle = document.querySelectorAll('.writeOutTitle');

//记得给多元素添加时间要利用foreach()循环遍历
edits.forEach(edit => {
    //有多个元素就嵌套循环
    writeplaces.forEach(writeplace => {
        edit.addEventListener("click", () => {
            if (writeplace.readOnly == true) {
                writeplace.style.border = "solid 1px gray";
                writeplace.style.cursor = "text";
                writeplace.readOnly = false;
            } else {
                writeplace.style.border = "none";
                writeplace.style.cursor = "default";
                writeplace.readOnly = true;
            }
        });
    })
})


const notes = document.querySelectorAll(".note");
const title = document.querySelectorAll('.process_title');

const step = document.querySelectorAll(".step");
const line_process = document.querySelector(".line-process");
notes[0].style.display = 'block';


$(".step").not(".step:first").on("click", function () {
    var $this = $(this);
    var index = $this.index();
    for (var i = 0; i < notes.length; i++) {
        notes[i].style.display = 'none';
    }
    if ($(this).hasClass('active')) {
        $(this).nextAll().removeClass("active");
        for (var i = step.length - 1; i > index; i--) {
            title[i].style.color = '#baa4a4';
        }
        title[index].style.color = '#e2e2e4';
        line_process.style.width = (25 * index) + '%';
        notes[index].style.display = 'block';

    } else {
        $(this).addClass('active');
        $(this).addClass("active").prevAll().addClass("active");
        // title[index].style.color = '#444';
        for (var i = 0; i <= index; i++) {
            title[i].style.color = '#e2e2e4';
        }
        line_process.style.width = (25 * index) + '%';
        notes[index].style.display = 'block';
    }
})



$(".step:first").on("click", function () {
    for (var i = 0; i < notes.length; i++) {
        notes[i].style.display = 'none';
    }
    var $this = $(this);
    var index = $this.index();
    line_process.style.width = 3 + "%";
    $(this).nextAll().removeClass("active");
    notes[0].style.display = 'block';
    for (var i = step.length - 1; i > index; i--) {
        title[i].style.color = '#baa4a4';
    }
})


//设置标题内容
$(".titleSub").click(function(){
    var id = $(this).attr('id') , index = 0;
    //获取标题编号
    if (id == "s1") index = 1;
    else if (id == "s2") index = 2;
    else if (id == "s3") index = 3;
    else if (id == "s4") index = 4;
    else if (id == "s5") index = 5;
    var val =  writeOutTitle[index-1].value;
    title[index-1].innerHTML = "<p>" + val +"</p>";               //更新对应标题值
})

$(".delete").click(function(){
    var id = $(this).attr('id') , index = 0;
    //获取删除键对应的文本框编号
    if (id == "d1") index = 1;
    else if (id == "d2") index = 2;
    else if (id == "d3") index = 3;
    else if (id == "d4") index = 4;
    else if (id == "d5") index = 5;
})
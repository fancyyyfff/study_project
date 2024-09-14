const cat_first = document.querySelector('.cat-first');
const cat_second = document.querySelector('.cat-second');
const svg_box = document.querySelector('.todo_svg');
let Button = '<svg t="1697375099341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4914" width="25" height="25"><path d="M567.024534 149.331607m60.339779 60.339778l199.422968 199.422969q60.339779 60.339779 0 120.679557l-184.941421 184.941422q-60.339779 60.339779-120.679558 0l-199.422968-199.422969q-60.339779-60.339779 0-120.679557l184.941421-184.941422q60.339779-60.339779 120.679558 0Z" fill="#707070" p-id="4915"></path><path d="M557.653333 256l211.2 213.333333-302.08 298.666667H346.88l-151.466667-151.466667L557.653333 256m0-85.333333a85.333333 85.333333 0 0 0-60.586666 24.746666L135.253333 554.666667a85.333333 85.333333 0 0 0 0 120.746666L311.466667 853.333333h190.293333l327.253333-327.253333a85.333333 85.333333 0 0 0 0-120.746667l-211.2-211.2A85.333333 85.333333 0 0 0 557.653333 170.666667z" fill="#707070" p-id="4916"></path><path d="M332.8 768m42.666667 0l469.333333 0q42.666667 0 42.666667 42.666667l0 0q0 42.666667-42.666667 42.666666l-469.333333 0q-42.666667 0-42.666667-42.666666l0 0q0-42.666667 42.666667-42.666667Z" fill="#707070" p-id="4917"></path></svg>';

svg_box.addEventListener('mouseover', () => {
    cat_first.style.display = 'none';
    cat_second.style.display = 'block';
})

svg_box.addEventListener('mouseout', () => {
    cat_second.style.display = 'none';
    cat_first.style.display = 'block';
})


function textTo(str) {
    var reg = new RegExp("\n", "g");
    var regSpace = new RegExp(" ", "g");
    str = str.replace(reg, "<br>");
    str = str.replace(regSpace, "&nbsp");
    return str;
}

//待办事项，鼠标悬停，则悬浮显示（避免文本过长）
$(document).on('mouseover', '.dutyContent', function () {
    $(this).attr('title', $(this).html());
})

//“提交”按钮设置新的代办事项
$("#submit").on("click", function () {
    if ($("#content").val() !== "") {
        var val = textTo(document.querySelector('#content').value);
        Insert(val);
        // var dutyContent = $("<div class='dutyContent'></div>").html(val);
        // var dutyList = $("<div class='dutyList'></div>");
        // $(".board").prepend(dutyList.hide().fadeIn());
        // var checkbox = $("<input type='checkbox' id='check'>");
        // var del = $("<i class='fas fa-eraser'></i><br>");
        // del.click(function () {
        //     var p = $(this).parent();
        //     p.fadeOut(function () {
        //         p.remove();
        //     })
        // })
        // dutyList.append(checkbox);
        // dutyList.append(dutyContent);
        // dutyList.append(del);
        // $(".inputDuty").val("");
    }
})

//添加待办事项
function Insert(content) {
    var dutyContent = $("<div class='dutyContent'></div>").html(content);
    var dutyList = $("<div class='dutyList'></div>");
    $(".board").prepend(dutyList.hide().fadeIn());
    var checkbox = $("<input type='checkbox' id='check'>");
    var del = $("<button id='delete_button'></button>").html(Button);
    dutyList.append(checkbox);
    dutyList.append(dutyContent);
    dutyList.append(del);
    $(".inputDuty").val("");
}

//待办右侧“删除”按钮
$(document).on('click', '#delete_button', function () {
    var p = $(this).parent();
    var Index = $(p).index();
    p.fadeOut(function () {
        p.remove();
    })
})

//“清除”按钮，清空待办
$("#delete").on("click", function () {
    // $('#content').val("");
    $('.board').html("");
})

$('.todo_svg').on("mouseover", () => {
    $('.todolist').css('display', 'block');
})

$('.todo_svg').on("mouseout", () => {
    $('.todolist').css('display', 'none');
})

$('.todolist').on("mouseover", function () {
    $(this).css('display', 'block');
})

$('.delete-board').on('click', () => {
    $('.todolist').css('display', 'none');
})


const top_labels = document.querySelectorAll('.top-label');
const produce = document.querySelectorAll('.produce');
top_labels.forEach(top_label => {
    top_label.addEventListener('mouseover', function () {
        var $this = $(this);
        var index = $this.index();
        for (var i = 0; i < top_labels.length; i++) {
            top_labels[i].style.color = '#81808093';
        }
        this.style.color = '#444';
        for (var i = 0; i < produce.length; i++) {
            produce[i].classList.add('disappear');
        }
        produce[index - 1].classList.remove('disappear');
    })
})

const tab = document.querySelector('.tab');
const header = document.querySelector('.header');
const body = document.body;
function removeClass() {
    for (var i = 0; i < top_labels.length; i++) {
        tab.className = 'tab';
        todolist.className = 'todolist';
    }
    for (var i = 0; i < top_labels.length; i++) {
        header.className = 'header';
    }
}
bodyBg = ['#b38184', '#f7e4bc', '#b7d1a2', '#fff0b8'];
top_labels[0].addEventListener('mouseover', () => {
    removeClass();
    body.style.backgroundColor = bodyBg[0];
    tab.classList.add('tab-first-color');
    header.classList.add('header-first-color');
    todolist.classList.add('todolist-first');
})
top_labels[1].addEventListener('mouseover', () => {
    removeClass();
    body.style.backgroundColor = bodyBg[1];
    tab.classList.add('tab-second-color');
    header.classList.add('header-second-color');
    todolist.classList.add('todolist-second');

})
top_labels[2].addEventListener('mouseover', () => {
    removeClass();
    body.style.backgroundColor = bodyBg[2];
    tab.classList.add('tab-third-color');
    header.classList.add('header-third-color');
    todolist.classList.add('todolist-third');

})
top_labels[3].addEventListener('mouseover', () => {
    removeClass();
    body.style.backgroundColor = bodyBg[3];
    tab.classList.add('tab-forth-color');
    header.classList.add('header-forth-color');
    todolist.classList.add('todolist-forth');
})


const formEvent = document.querySelector('#event');
formEvent.addEventListener('focus', function () {
    if (this.value == "Fill The Event") {
        this.value = "";
        this.style.color = 'black';
    }

})

formEvent.addEventListener('blur', function () {
    if (this.value == "") {
        this.value = "Fill The Event";
        this.style.color = 'gray';
    }

})


const form_submit = document.querySelector('#form-submit');
const form_delete = document.querySelector('#form-delete');
const timer_form = document.querySelector('.Timer-form');
const todolist = document.querySelector('.todolist');
const insertDiv = document.querySelector('.insert');
const timer_btn = document.querySelector('.Timer');
const cancel_form = document.querySelector('.cancel_form');
const form_time = document.querySelector('#form-time');
timer_btn.addEventListener('click', () => {
    timer_form.style.display = 'block';
    todolist.style.display = 'none';
})

cancel_form.addEventListener('click', () => {
    timer_form.style.display = 'none';
})

form_submit.addEventListener('click', () => {
    if (formEvent.value != "Fill The Event") {
        insertDiv.innerHTML = formEvent.value;
    }
    timer_form.style.display = 'none';
    todolist.style.display = 'block';
})

form_delete.addEventListener('click', () => {
    formEvent.value = "Fill The Event";
    formEvent.style.color = 'gray';
    insertDiv.innerHTML = "";
})


const nickName = document.querySelector('#nickName');
const show_nickName = document.querySelector('#show-nickName');
const sub_message = document.querySelector('.sub-message');
const avatar1 = document.querySelector('#avatar1');
const avatar2 = document.querySelector('#avatar2');
const main_avatar = document.querySelector('#main-avatar');
sub_message.addEventListener('click', () => {
    if (nickName.value.replace(/\s*/g, "") != "") {
        show_nickName.innerHTML = nickName.value;
    }
    if (nickName.value.replace(/\s*/g, "") == "") {
        show_nickName.innerHTML = "NameLess";
    }
    if (judge == 1) {
        show_avatar.src = "../image/avatar1.png";
    }
    else if (judge == 2) {
        show_avatar.src = "../image/avatar2.png";
    }
    set_avatar.style.display = 'none';
    choose_avatar.style.display = 'none';

})

const setAvatar = document.querySelector('.setAvatar-img');
const choose_avatar = document.querySelector('.choose-avatar');
setAvatar.addEventListener('click', () => {
    choose_avatar.style.display = 'block';
})

var judge = 0;
avatar1.addEventListener('click', () => {
    main_avatar.src = "../image/avatar1.png";
    choose_avatar.style.display = 'none';
    judge = 1;
})

avatar2.addEventListener('click', () => {
    main_avatar.src = "../image/avatar2.png";
    choose_avatar.style.display = 'none';
    judge = 2;
})

const show_avatar = document.querySelector('#show-avatar');
const set_avatar = document.querySelector('.set-avatar');
show_avatar.addEventListener('click', () => {
    set_avatar.style.display = 'flex';
})

const cancel_avatar = document.querySelector('.cancel_avatar');
cancel_avatar.addEventListener('click', () => {
    set_avatar.style.display = 'none';
    choose_avatar.style.display = 'none';
})

const cancel_reset = document.querySelector('.cancel_reset');
const set_password = document.querySelector('.set_password_box');
cancel_reset.addEventListener('click', () => {
    set_password.style.display = 'none';
})

const reset_password = document.querySelector('.reset_password');
reset_password.addEventListener('click', () => {
    set_password.style.display = 'flex';
})

const reset_password_box = document.querySelector('.reset_password_box');
show_avatar.addEventListener('mouseover', () => {
    reset_password_box.style.display = 'block';
})
reset_password_box.addEventListener('mouseover', () => {
    reset_password_box.style.display = 'block';
})

show_avatar.addEventListener('mouseout', () => {
    reset_password_box.style.display = 'none';
})
reset_password_box.addEventListener('mouseout', () => {
    reset_password_box.style.display = 'none';
})
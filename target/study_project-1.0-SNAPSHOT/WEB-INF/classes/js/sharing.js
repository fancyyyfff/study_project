//textarea高度自动撑开
const textarea = document.querySelector('textarea');
// textarea.addEventListener('input', (e) => {
//     textarea.style.height = '30px';
//     textarea.style.height = e.target.scrollHeight + 'px';
// })

$("#delete").on("click", function () {
    textarea.value = "";
})
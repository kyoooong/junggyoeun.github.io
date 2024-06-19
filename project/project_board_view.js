window.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById("title");
    let writer = document.getElementById("writer");
    let content = document.getElementById("content");

    let postNum = window.localStorage["currentPost"];
    let post = window.localStorage[postNum].split("#%#");

    title.textContent = post[0];
    writer.textContent = post[1];
    content.textContent = post[2];
})

let gotolist = document.getElementById("gotolist");

gotolist.addEventListener("click", function() {
    window.localStorage.removeItem("currentPost");
    window.location.href = "./project_board_list.html";
});
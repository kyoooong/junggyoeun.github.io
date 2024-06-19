let postButton = document.getElementById("postButton");

// 화면 로드 될때 쿠키에 있는 유저 정보 불러오기
window.addEventListener("DOMContentLoaded", function() {
    let user = document.getElementById("user");
    let userInfo = getLoginInfo();
    if (userInfo == null) {
        user.textContent = "익명사용자";
    } else {
        user.textContent = userInfo[0];
    }
})

// 포스트 버튼 눌렀을 때 함수
postButton.addEventListener("click", function() {
    let title = document.getElementById("title");
    let user = document.getElementById("user");
    let content = document.getElementById("content");

    // 로컬 스토리지에 포스트 저장하기 
    let newPostNum = (window.localStorage["postNum"] == null) ? 1 : Number(window.localStorage["postNum"]) + 1;
    let key = "post" + newPostNum;
    let value = title.value + "#%#" + user.textContent + "#%#" +content.value;
    window.localStorage[key] = value;
    window.localStorage["postNum"] = Number(newPostNum);

    // 현재 포스트 지정하기
    window.localStorage["currentPost"] = "post" + newPostNum;
    window.location.href = "./project_board_view.html";
});
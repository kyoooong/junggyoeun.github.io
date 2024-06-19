window.addEventListener("DOMContentLoaded", function() {
    // 모든 post 정보 가져오기 & 화면으로 리스트 뿌리기
    let postNum = Number(window.localStorage["postNum"]);
    for(let i = 1; i <= postNum; i++) {
        let localStr = window.localStorage["post" + i];
        while (localStr == null) {
            i++;
            localStr = window.localStorage["post" + i];
        }
        let postVal = localStr.split("#%#");
        
        let title = postVal[0];
        let writer = postVal[1];

        let tbody = this.document.getElementById("tbody");
        let row = this.document.createElement("tr");
        row.id = "post" + i;
        row.addEventListener("click", gotoView);
        let td1 = this.document.createElement("td");
        td1.textContent = title;
        let td2 = this.document.createElement("td");
        td2.textContent = writer;

        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
    }
});


// 각 행 클릭했을 때 그 게시물로 이동하는 함수
function gotoView(e) {
    let postKey = e.target.parentElement.id;
    localStorage.setItem("currentPost", String(postKey));
    window.location.href = "./project_board_view.html";
}

let writeButton = document.getElementById("write");

writeButton.addEventListener("click", function() {
    let userInfo = getLoginInfo();
    if (userInfo == null) {
        alert("게시판 글 작성은 회원만 가능합니다. 회원가입 페이지로 이동합니다.");
        window.location.href = "./project_join.html";
    } else {
        window.location.href = "./project_board_write.html";
    }
});
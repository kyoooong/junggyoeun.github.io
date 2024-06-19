function setCookie (name, value, expireDate) {
    let cookieStr = name + "=" + escape(value) + ((expireDate == null)?";":("; expires=" + expireDate.toUTCString()));
    document.cookie = cookieStr;
    console.log("cookie: " + document.cookie.toString());
}

function UserJoin (id, email, pw) {
    let value = id + "::" + email + "::" + pw;
    let expire = new Date();
    expire.setTime(expire.getTime() + (365*24*3600*1000));
    console.log(value);
    setCookie("userInfo", value, expire); 
}

function getCookie (name) {
    let pairs = document.cookie.split(";");
    for(let i=0; i<pairs.length; i++){
        let pair = pairs[i].trim();
        let unit = pair.split("=");
        if(unit[0] == name)
            return unescape(unit[1]);
    }
    return null;
}

function getUserInfo (inputID, inputPW) {
    let val = getCookie("userInfo").split("::");
    if(inputID == val[0] && inputPW == val[2]) {
        return val;
    } else {
        return null;
    }
}

function getLoginInfo() {
    if(getCookie("userInfo") == null)
        return null;
    let val = getCookie("userInfo").split("::");
    return val;
}
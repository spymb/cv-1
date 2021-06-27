let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/* 来画一个太极吧
 * 首先准备一个div
 */
#taiji{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 然后把div变成一个圆 */
#taiji{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 太极阴阳一黑一白 */
#taiji{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 太极双鱼，加上鱼头和鱼眼~ */
#taiji::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#taiji::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 最后让太极转起来吧 */
#taiji{
    animation: taijiRotate 500ms infinite linear;
}
`;
let string1 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string1 += "<br>";
        } else if (string[n] === " ") {
            string1 += "&nbsp;";
        } else {
            string1 += string[n];
        }
        html.innerHTML = string1;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 5);
};

step();
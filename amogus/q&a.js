const text = document.getElementById("dialog")
const image = document.getElementById("decal")
const button = document.getElementById("button")
const root = document.documentElement

let count = 0
let i = 0
let display = ""
button.innerHTML = "? ? ?"

button.onclick = function() {
    i = 0
    text.innerHTML = ""
    button.style.display = "none"
    count += 1
    changeDisplay(count)
    typeWriter()

    if (count == 7) {
        confetti.start(2000)
    }
    if (count >= 11) {
        confetti.start(2000, 500, 1000)
    }

    setTimeout(function() {button.style.display = "flex"}, display.length * 200)
}

typeWriter = () => {
    text.innerHTML += display.charAt(i)

    if (i++ != display.length) {
        setTimeout(typeWriter, 200)
    }
}

function changeDisplay(seq) {
    if (seq == 1) {
        image.src = "character/Greet.png"
        display = "你好!~"
        button.textContent = "你好"
    }
    if (seq == 2) {
        image.src = "character/Thinking.png"
        display = "你知道今天是什麼日子嗎？"
        button.textContent = "當然"
    }
    if (seq == 3) {
        image.src = "character/Cheer.png"
        display = "沒錯就是國際婦女節!"
        button.textContent = "呃..."
    }
    if (seq == 4) {
        image.src = "character/Thinking.png"
        display = "還有其他節日？"
        button.textContent = "嗯"
    }
    if (seq == 5) {
        image.src = "character/Cheer.png"
        display = "哦對!...還有國際焙香花生巧克力節!"
        button.textContent = "*亮刀*"
    }
    if (seq == 6) {
        image.src = "character/Holup.png"
        display = "修但幾勒!好了我不玩了"
        button.textContent = "*瞪*"
    }
    if (seq == 7) {
        image.src = "character/Cheer.png"
        display = "生日快樂🎉"
        button.textContent = "好哦"
    }
    if (seq == 8) {
        image.src = "character/Normal.png"
        display = ". . . . . ."
        button.textContent = "就這樣?"
    }
    if (seq == 9) {
        image.src = "character/Normal.png"
        display = "對...沒了。"
        button.textContent = "操你媽個B💢"
    }
    if (seq == 10) {
        image.src = ""
        display = ""
        button.textContent = "🎊"
    }
    if (seq > 10) {
        image.src = "character/Cheer.png"
        display = ""
        button.textContent = "🎊"
        document.body.style.background = "rgb(" + (Math.floor(Math.random() *256)) + "," + (Math.floor(Math.random() *256)) + "," + (Math.floor(Math.random() *256))
    }
}
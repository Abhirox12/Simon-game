let btn = document.querySelector(".start")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")
let win = document.querySelector(".win")
let lose = document.querySelector(".lose")
let body = document.querySelector("body")
let result = document.querySelector(".result")
let boxes = document.querySelectorAll(".box")
let clicksound = document.querySelector(".clicksound")
let gameoversound = document.querySelector(".gameoversound")
let Winningsound = document.querySelector(".Winningsound")
let clicked = 0;
let arr = [];
let storeArr = []
let level = 1;
let score = 0;
let h3 = document.querySelector("h3")
// btn.addEventListener("click", colorGen)


function colorGen() {
    storeArr = []
    clicked += 1;
    console.log(`no of times click ${clicked}`)

    function generate() {
        let rando = Math.floor(Math.random() * 4 + 1);
        if (rando == 1) {
            return red;
        } else if (rando == 2) {
            return green;
        }
        else if (rando == 3) {
            return blue;
        }
        else if (rando == 4) {
            return yellow;
        }
    }
    arr.push(generate());
    function Trigger(el) {
        el.classList.remove('animation');
        void el.offsetWidth; // Force reflow to restart animation
        el.classList.add("animation");

        el.addEventListener('animationend', function handleAnimationEnd() {
            el.classList.remove('animation');
            el.removeEventListener('animationend', handleAnimationEnd);
        });
    }
    arr.forEach((el, index) => {
        setTimeout(() => {
            Trigger(el)
        }, index * 500);
    })
    console.log(arr);
    return arr

}
let buttons = [red, green, blue, yellow]
buttons.forEach(button => {
    button.addEventListener("click", inp)
    button.addEventListener("click", inputclicksound)

});
function inp() {
    this.classList.remove('animation');
    void this.offsetWidth; // Force reflow to restart animation
    this.classList.add("animation");

    this.addEventListener('animationend', function handleAnimationEnd() {
        this.classList.remove('animation');
        this.removeEventListener('animationend', handleAnimationEnd);
    });
    // console.log(red)
    // return red;
    storeArr.push(this)
    console.log(storeArr)

    let i = storeArr.length - 1;
    let total = score;
    if (storeArr[i] !== arr[i]) {
        if (storeArr.length > arr.length) {
            result.innerText = `please start the game first`;
        }
        else {

            body.classList.remove("LosingAnimation")
            void this.offsetWidth;
            body.classList.add("LosingAnimation")
            // resetGame();
            lose.style.display = "flex";
            result.innerText = `Wrong! Game Over. Your Score is ${total}`;

            gameover()
            arr = [];

            return;
        }
    }

    if (storeArr.length === arr.length) {
        result.innerText = `congratulations you won level ${level}`
        win.style.display = "flex";
        level += 1;
        score += 1;
        h3.innerText = `Level ${level}`;
        Winning()

        // setTimeout(colorGen, 4000); // move to next level
    }

}
function inputclicksound() {
    clicksound.play().catch(err => console.warn('Audio play failed:', err));
}



function gameover() {
    setTimeout(() => {
        gameoversound.play().catch(err => console.warn('Audio play failed:', err));
    }, 1000);
}

function Winning() {
    setTimeout(() => {
        Winningsound.play().catch(err => console.warn('Audio play failed:', err));
    }, 1000);
}
btn.addEventListener("click", function () {
    arr = [];
    level = 1;
    score = 0;
    h3.innerText = `Level ${level}`;
    result.innerText = "";
    colorGen();
})
function restart() {
    level = 1;
    score = 0;
    h3.innerText = `Level ${level}`;
    result.innerText = "";
    // score = 0;
    setTimeout(() => {
        colorGen()
    }, 1000);
    //   arr = [];

    lose.style.display = "none";
}
function nextlevel() {
    setTimeout(() => {
        colorGen()
    }, 1000);


    win.style.display = "none";
}
function reset() {
    win.style.display="none";
     level = 1;
    score = 0;
    h3.innerText = `Level ${level}`;
    result.innerText = "";
}
function exit() {
    lose.style.display="none";
     level = 1;
    score = 0;
    h3.innerText = `Level ${level}`;
    result.innerText = "";
}
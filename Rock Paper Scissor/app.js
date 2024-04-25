const data = document.querySelectorAll('.container');
var result_c = document.getElementById('r-cont');
var result = document.getElementById('result');
var infoBox = document.getElementById('info-box');
var info = document.getElementById('info');
var c_score = document.getElementById('C-score');
var u_score = document.getElementById('U-score');
var comp_s = 0;
var user_s = 0;

data.forEach((ele) => {
    ele.addEventListener('click', () => {
        clickId = ele.getAttribute('id');
        console.log("Clicked", clickId);
        var U_choice = clickId;
        game(U_choice);

    })
})

function game(User) {
    const opts = ['rock', 'paper', 'scissors'];
    isWinning = false;
    randNum = Math.floor(Math.random() * 3);
    C_choice = opts[randNum];
    console.log("Computer ", C_choice)
    if (C_choice === User) {
        result.innerText = "Draw";
        result.style.color = "black";
        result_c.style.backgroundColor = "#FFFAB7";
        infoBox.style.visibility = "visible";
        info.innerHTML = "<p>You choosed <b> " + User + "</b></p><p>Computer choosed <b> " + C_choice + "</b>";
    }
    if (C_choice === "rock") {
        if (User === "paper") {
            result.innerText = "You won!!";
            result.style.color = "black";
            result_c.style.backgroundColor = "#90D26D";
            infoBox.style.visibility = "visible";
            info.innerHTML = "<p>You choosed <b> " + User + "</b></p><p>Computer choosed <b> " + C_choice + "</b>";
            user_s++;
            updScore(user_s);
        }
        if (User === "scissors") {
            result.innerText = "You lost!!";
            result.style.color = "black";
            result_c.style.backgroundColor = "#E72929";
            infoBox.style.visibility = "visible";
            info.innerHTML = "<p>You choosed <b> " + User + "</b></p><p>Computer choosed <b> " + C_choice + "</b>";
            comp_s++;
            updScore(comp_s);
        }
    }
    if (C_choice === "paper") {
        if (User === "rock") {
            result.innerText = "You lost!!";
            result.style.color = "black";
            result_c.style.backgroundColor = "#E72929";
            infoBox.style.visibility = "visible";
            info.innerHTML = "<p>You choosed <b> " + User + "</b></p><p>Computer choosed <b> " + C_choice + "</b>";
            comp_s++;
            updScore(comp_s);
        }
        if (User === "scissors") {
            result.innerText = "You won!!";
            result.style.color = "black";
            result_c.style.backgroundColor = "#90D26D";
            infoBox.style.visibility = "visible";
            info.innerHTML = "<p>You choosed <b> " + User + "</b></p><p>Computer choosed <b> " + C_choice + "</b>";
            user_s++;
            updScore(user_s);
        }
    }
    if (C_choice === "scissors") {
        if (User === "rock") {
            result.innerText = "You won!!";
            result.style.color = "black";
            result_c.style.backgroundColor = "#90D26D";
            infoBox.style.visibility = "visible";
            info.innerHTML = "<p>You choosed <b> " + User + "</b></p><p>Computer choosed <b> " + C_choice + "</b>";
            user_s++;
            updScore(user_s);
        }
        if (User === "paper") {
            result.innerText = "You lost!!";
            result.style.color = "black";
            result_c.style.backgroundColor = "#E72929";
            infoBox.style.visibility = "visible";
            info.innerHTML = "<p>You choosed <b> " + User + "</b></p><p>Computer choosed <b> " + C_choice + "</b>";
            comp_s++;
            updScore(comp_s);
        }
    }
}

const updScore = () =>{
    c_score.innerText=comp_s;
    u_score.innerText=user_s;
}
updScore();
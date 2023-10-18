const user_score = document.getElementById('score');
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const input = document.getElementById('input');
const Max_Score = document.getElementById('Max_score');

gameStart();

let maxscore = JSON.parse(localStorage.getItem("Max_Score"));
if (!Max_Score) {
    maxscore = 0;
}
console.log(maxscore)
Max_Score.innerHTML = maxscore;
score = 0;
localStorage.setItem("score", JSON.stringify(score));
updateLocalStorage();

function gameStart() {


    let rand_1 = Math.floor(Math.random() * 9) + 1;
    let rand_2 = Math.ceil(Math.random() * 9);



    num1.innerText = rand_1;
    num2.innerText = rand_2;
    let ans = rand_1 * rand_2;
    let max = false;

    const submit = document.getElementById('button');
    submit.onclick = () => {

        // this will insure if you didn't enter any value it will simply return 
        if (input.value === '') {
            console.log("nothing")
            gameStart();
            return;
        }

        let userAns = +input.value; // + to convert the input into the string
        if (userAns === ans) {
            score++;
            if (maxscore < score) {
                max = true;
                maxscore = score;
            }
            updateLocalStorage();   // updating the score in the local storage
        }
        else {
            score--;
            updateLocalStorage();
        }

        if (max) {
            Max_Score.innerText = maxscore;
            max = false;
        }
        user_score.innerText = score;
        input.value = '';
        input.autofocus;
        gameStart();
    }

    function updateLocalStorage() {
        localStorage.setItem("score", JSON.stringify(score));
        localStorage.setItem("Max_Score", JSON.stringify(maxscore));
    }
}

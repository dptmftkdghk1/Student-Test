import {qnaList} from './data.js';

let indexnum = 1;
let resultsum = [0,0,0,0,0];

const q = document.querySelector("#qna").firstElementChild;
const btnList = document.querySelectorAll("button");
const statusletter = document.querySelector("body").firstElementChild;
const statusbar = document.querySelector(".status-bar-width");
const backbtn = document.querySelector("#backbtn");

console.log(backbtn);


q.innerText = qnaList[indexnum-1].q;
btnList.forEach((btn,index) => {
    btn.innerText = qnaList[indexnum-1].a[index].answer;
});

function answerplus(e, index){
    if(e === 9){
        return;
    }else{
        for(let i= 0; i<qnaList[e-1].a[index].type.length; i++){
            ++resultsum[qnaList[e-1].a[index].type[i]];
        }

        q.innerText = qnaList[e].q;

        btnList.forEach((btn,index) => {
            btn.innerText = qnaList[e].a[index].answer;
        })
    }
}


function resultscore() {
    let maxIndex = 0;
    console.log(resultsum);
    console.log(Math.max(...resultsum));
    maxIndex = resultsum.indexOf(Math.max(...resultsum))
    window.location.href=`result.html?maxIndex=${maxIndex}`;
}


btnList.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if(indexnum === 9){
            resultscore();
            return;
        }else{
            answerplus(indexnum, index);
            ++indexnum;
            statusletter.innerHTML = indexnum + "/9";
            statusbar.style.width = 100 / 9 * indexnum + "%";
        }
          
    });
})

backbtn.addEventListener("click", () => {
    if(indexnum > 1){
        indexnum--;
        console.log(indexnum);
        q.innerText = qnaList[indexnum-1].q;

        btnList.forEach((btn,index) => {
            btn.innerText = qnaList[indexnum-1].a[index].answer;
        });

        statusletter.innerHTML = indexnum + "/9";
        statusbar.style.width = 100 / 9 * indexnum + "%";
    }else{
        window.location.href="../index.html"
    }

});

    













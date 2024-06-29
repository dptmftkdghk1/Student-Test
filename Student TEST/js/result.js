import { infoList } from './data.js';
const url = 'https://student-of.netlify.app/';

const params = new URLSearchParams(window.location.search);
const maxIndex = params.get('maxIndex');

const [name, desc] = document.getElementById("result-info").querySelectorAll("p");
const title = document.getElementById("result-info").querySelector("span");
const imgDiv = document.getElementById("result").querySelector("div");

console.log(name);
console.log(title);
console.log(desc);
console.log(imgDiv);

let resultImg = document.createElement('img');
resultImg.src = `../img/${infoList[maxIndex].title}.jpg`;
resultImg.alt = infoList[maxIndex].title;
resultImg.classList.add('img-fluid');
imgDiv.appendChild(resultImg);

name.innerText = infoList[maxIndex].name;
title.innerText = `<${infoList[maxIndex].title}>`;
desc.innerText = infoList[maxIndex].desc;

//카카오톡 공유 구현 - 대학생 유형 테스트
Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
        title: '대학생 유형 테스트',
        description: infoList[maxIndex].desc,
        imageUrl: `${url}img/${resultImg.alt}.jpg`,
        link: {
            mobileWebUrl: `${url}display/result.html?maxIndex=${maxIndex}`,
            webUrl: `${url}/display/result.html?maxIndex=${maxIndex}`,
        },
    },
    buttons: [
        {
            title: '결과확인하기',
            link: {
                mobileWebUrl: `${url}display/result.html?maxIndex=${maxIndex}`,
                webUrl: `${url}display/result.html?maxIndex=${maxIndex}`,
            },
        },
    ],
});




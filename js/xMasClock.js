const clock = document.querySelector("#clock");


const DAY = 1000*60*60*24;
const HOUR = 1000*60*60;
const MIN = 1000*60;
const SEC = 1000;


function toXmas() {
    const date = new Date();
    const thisXmas = new Date(date.getFullYear(), 11, 25, 0, 0, 0);
    let diffDate;
    if (thisXmas < date){
        thisXmas.setFullYear(thisXmas.getFullYear()+1);
        diffDate = thisXmas.getTime() - date.getTime();
    } else {
        diffDate = thisXmas.getTime() - date.getTime(); 
    }
    const diffday = padding(Math.floor(diffDate / DAY));
    const diffhour = padding(Math.floor((diffDate-diffday*DAY) / HOUR));
    const diffmin = padding(Math.floor((diffDate-diffday*DAY-diffhour*HOUR) / MIN));
    const diffsec = padding(Math.floor((diffDate-diffday*DAY-diffhour*HOUR-diffmin*MIN) / SEC));
    
    clock.innerText = `${diffday}d ${diffhour}h ${diffmin}m ${diffsec}s`;

}


function padding(time){
    return String(time).padStart(2, "0");
}

toXmas();
setInterval( toXmas, 1000 );




// 내가 겪은 문제
// 1. setinterval 안 됨->setinterval이 아니라 date 선언 문제였음
// 2. 날짜 구하기 -> 이거 시발 개복잡함;
// 3. 조건문 thisXmas 년도 +1 하는 부분 첨에 thisXmas.setFullYear +=1로 했음
// 4. 날짜 선언 시 Date('December 23, 2024 00:00:00') 이런 식으로 가능
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// document.querySelector("#todo-form input");과 같음
const toDoList = document.getElementById("todo-list");

let toDos = [];


// 두 번째 함수에 있음
function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDo: 순회하는 요소
    li.remove();
    saveToDos();
}
// 지울 때 실제 일어나는 일: 빼고 싶은 아이템을 빼고 새 array를 만든다
// filter 함수 사용 : 유지할 항목에 대해 true를 반환하는 함수를 전달하기
// 삭제 당시 li의 id도 얻으므로, 이걸 이용해서 sexyfilter 만들기



//세 번째 실행
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}


// 두 번째 실행
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

// 첫 번째 실행
function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem("todos");


// JSON.parse로 다시 array로 변경해서 toDos에 저장 후 출력
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
 


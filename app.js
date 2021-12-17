const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(input.value);
  add();
});


function add(){
  let todoText = input.value;
  if(todoText){
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
    saveDate();
  }
}

function saveDate() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(lst => {
    todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

/* アジェンダ */ 

//30:00__1.フォームの値を取得

//42:00__14.条件分岐

//47:00__16.ローカルストレージに保存

//53:30__19.liタグの情報を全て取得

//56:00__22.ローカルストレージに保存

//58:55__23.ローカルストレージからデータを呼び出す
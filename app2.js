const form = document.getElementById("form"); //1.フォームタグの値を取得
const input = document.getElementById("input"); //2.インプットタグの値を取得
const ul = document.getElementById("ul");//8.ulタグに関しての処理をしたいのでulタグの値を取得
　
 //23.ローカルストレージから呼び出す。画面をリロードしたときなので一番上に記述
const todos = JSON.parse(localStorage.getItem("todos")); //24.ローカルストレージからデータを取ってきて、todosという定数に格納。キーは先ほどlocalStorage.setItemで設定したキー「todos」

if(todos){ //25.ローカルストレージのデータが入った定数「todos」が空じゃなかったら　
  todos.forEach( todo => { //26.個々のデータへアクセスするときはtodoという変数名でアクセスできるようにする
    add(todo); //27.liタグを呼び出す
  })
}

form.addEventListener("submit",function(event){ //3.サブミットを押した時に、発生するイベ　ント=functionを作成
  event.preventDefault();  //5.サブミットを押すとデフォルトでリロードされてしまうので、デフォのイベントを妨げる
  console.log(input.value); //4.サブミットを押した時にインプットタグの中のバリューを取得
  add();//6.取得したバリューをもとにイベントを発生させる。先に関数名を決める
});


function add(todo){ //7.先に設定した関数名addの　function=機能　を記述 //28.引数を受け取ることになっていないので、引数を設定
  let todoText = input.value; ////14.if分を書くために、input.valueを todoText と変数宣言で簡略化する

  if(todo){ //29.もしtodoがデータベースに保存されていたら
    todoText = todo.text; //30.22行目で設定した変数「todoText」にデータベースにあったtodoを追加する
  }


  if(todoText.length > 0){ ////16.文字数が0よりも大きかったら true 以下の処理をする
    const li = document.createElement("li"); //9.liタグの値をもとに機能を作るためにまずは定数liを作成
    li.innerText = todoText//10.liの内部のテキストに、ユーザーがform > inputに入力した値を入れる ////15.変数宣言したtodoTextに変更
    li.classList.add("list-group-item");//11.生成するliタグのクラスを追加
    ul.appendChild(li);//12.liタグを　3行目で取得してきたulタグ　の子要素にする
    input.value = "";//13.form > input　の中身を次に記入するときのために空にする
    saveDate(); //16.データをセーブする関数名を設定
  }
}

function saveDate(){ //17.セーブする関数を作成
  const lists = document.querySelectorAll("li") //18.liタグを全て取得する
  let todos = []; //20.繰り返し処理で情報をとってきたものを、最終的に配列として「todos」に格納する
  lists.forEach(list => { //19.全てのliタグの情報が入った「lists」に対して、繰り返し処理を設定。情報は「list」に格納される
    todos.push(list.innerText);//21.繰り返し処理でliタグの中のinnerTextの情報を変数「todos」にpushする。push先の「todos」は配列の箱として変数宣言されているので、配列として保存される
  });
  localStorage.setItem("todos",　JSON.stringfy(todos)); //22.「todos」というキーにして、値は先ほど配列を保存した「todos」をJSON形式で保存する
}




/* アジェンダ */ 

//30:00__1.フォームの値を取得

//42:00__14.条件分岐

//47:00__16.ローカルストレージに保存

//53:30__19.liタグの情報を全て取得　

//56:00__22.ローカルストレージに保存

//58:55__23.ローカルストレージからデータを呼び出す
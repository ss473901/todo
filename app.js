const form = document.getElementById("form"); //1.フォームタグの値を取得
const input = document.getElementById("input"); //2.インプットタグの値を取得
const ul = document.getElementById("ul");//8.ulタグに関しての処理をしたいのでulタグの値を取得

form.addEventListener("submit",function(event){ //3.サブミットを押した時に、発生するイベント=functionを作成
  event.preventDefault();  //5.サブミットを押すとデフォルトでリロードされてしまうので、デフォのイベントを妨げる
  console.log(input.value); //4.サブミットを押した時にインプットタグの中のバリューを取得
  add();//6.取得したバリューをもとにイベントを発生させる。先に関数名を決める
});


function add(){ //7.先に設定した関数名addの　function=機能　を記述
  let todoText = input.value; ////14.if分を書くために、input.valueを todoText と変数宣言で簡略化する

  if(todoText.length > 0){ ////16.文字数が0よりも大きかったら true 以下の処理をする
    const li = document.createElement("li"); //9.liタグの値をもとに機能を作るためにまずは定数liを作成
    li.innerText = todoText//10.liの内部のテキストに、ユーザーがform > inputに入力した値を入れる ////15.変数宣言したtodoTextに変更
    li.classList.add("list-group-item");//11.生成するliタグのクラスを追加
    ul.appendChild(li);//12.liタグを　3行目で取得してきたulタグ　の子要素にする
    input.value = "";//13.form > input　の中身を次に記入するときのために空にする
  }
}


////14　からは　42:00〜
'use strict';
{
//inputタグを取得して変数に入れる
const newtask = document.getElementById('newtask');

// 入力された値をリストに追加する
const add = document.getElementById('add');

add.addEventListener('click',() => {
if(newtask.value =='') {
    return
}
  // olタグを取得して変数に入れる
  const list = document.getElementById('list')

  const id = list.children.length + 1;
  const comment = newtask.value;

  // 分かりやすい変数名をつけます
  const workButton = document.createElement('button');
  workButton.innerHTML = '作業中';

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';
  // テーブルの行に必要なデータの配列を作成します
  const cloumns = [id, comment, workButton, deleteButton]

  //　テーブルの行を作成します
  const tr = document.createElement('tr');

  // 配列の中身を一つずつ取り出して処理をします
  cloumns.forEach((cloumn) => {
  // テーブルの列を作成します
  const td = document.createElement('td');

  // HTMLタグ処理を変更
  if (cloumn instanceof HTMLElement) {
      td.appendChild(cloumn)
  } else {
    td.innerText = cloumn;
  }
  // 行に列を追加します
    tr.appendChild(td);
  })
  //テーブルに行を追加
  list.appendChild(tr);

  newtask.value = ''
})
}
    

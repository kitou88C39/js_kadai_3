'use strict';
{
//inputタグを取得して変数に入れる
const newtask = document.getElementById('newtask');

// 入力された値をリストに追加する
const add = document.getElementById('add');
//削除ボタンを押したときに何かの処理を実行したい
//次にdeleteTask関数を作成し、deleteTaskの引数には削除したいタスクのIDを渡します
//remove関数を呼び出してタスク(テーブルの一行の要素)を削除します
const deleteTask = (taskId) => {
 const task = document.getElementById('list');
 task.remove();
}
//idの変数を用意
let id = 0;

add.addEventListener('click',() => {
  if(newtask.value =='') {
    return
  }
  id += 1;

  // olタグを取得して変数に入れる
  const list = document.getElementById('list')
  const tr = document.createElement('tr')

  const taskId = `task-${id}`
  tr.id = taskId
  //const id = list.children.length + 1;
  const comment = newtask.value;

  // 分かりやすい変数名をつけます
  const workButton = document.createElement('button');
  workButton.innerHTML = '作業中';

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';

  //削除ボタンが押されたときにタスクを削除したいので
//deleteButtonがクリックされたときにdeleteTaskを呼び出す

  deleteButton.addEventListener('click', () => deleteTask(taskId));
  // テーブルの行に必要なデータの配列を作成します
  const cloumns = [id, comment, workButton, deleteButton]

  //　テーブルの行を作成します
  // const tr = document.createElement('tr');

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
    

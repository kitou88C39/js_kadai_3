'use strict';
{
//値を読み取る
const newtask = document.getElementById('newtask');

// 入力された値をリストに追加する
const add = document.getElementById('add');

// 連番用idを用意
let id = 0;
add.addEventListener('click',() => {

if(newtask.value !=='') {
// TODOリストに表示する
const list = document.getElementById('list'); 

// div要素を作成
const wrapper = document.createElement('div');
wrapper.className = 'wrap';
const divone = document.createElement('div');
const divtwo = document.createElement('div');

// 作成した要素に追加 ①
list.appendChild(wrapper);
wrapper.appendChild(divone);
wrapper.appendChild(divtwo);

// p.button要素の作成 ②
const p = document.createElement('p');
p.className = 'divonep';

const btnone = document.createElement('button');
btnone.innerHTML = '削除';
btnone.className = 'btnone';
const btntwo = document.createElement('button');
btntwo.innerHTML = '作業中';
btntwo.className = 'btntwo';

// ②を①に追加
wrapper.insertBefore(p, divone);
wrapper.insertBefore(btnone, divtwo);
wrapper.insertBefore(btntwo, btnone);

// inputで読み取った値を表示
p.innerHTML = newtask.value;
// idを表示
p.innerHTML += `${++id}`;

}    
});
}
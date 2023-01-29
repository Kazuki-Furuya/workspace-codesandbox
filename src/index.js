// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// letは上書き可能、再宣言不可能
// let val2 = "let変数";
// console.log(val2);

// let val2 = "let変数を上書き";
// console.log(val2);

// // 失敗例
// // let val2 = "let変数を再宣言"

// // constは上書きも再宣言も不可
// // constで定義したプロパティ、配列は追加、修正が可能
// const val3 = "const変数";
// console.log(val3);

// // 失敗例
// // val3 = "const変数を上書き"
// // const val3 = "const変数を再宣言";

// const val4 = {
//   name: "kazu",
//   age: 24
// };
// console.log(val4);

// val4.name = "カズ";
// val4.addres = "Tokyo";

// const val5 = ["dog", "cat"];
// console.log(val5);

// val5[0] = "bird";
// console.log(val5);

// val5.push("monkey");
// console.log(val5);

// 4-20 テンプレート文字列
// const name = "かず";
// const age = 24;
// // 私の名前はかずです。年齢は24歳です。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 4-21 アロー関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// 引数が１つのみの場合、以下の形式で可能
// const func2 = str => {
//   return str;
//of }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// // const func3 (num1, num2) => num1 + num2;
// console.log(func3(2, 2));

// 4-21　分割代入
// const myProfile = {
//   name: "caz",
//   age: 24
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ["caz", 240];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name00, age01] = myProfile;
// const message4 = `名前は${name00}です。年齢は${age01}です。`;
// console.log(message4);

// 4-23　デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん!`);
// sayHello("caz");
// sayHello();

// 4-24　スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // const arr6 = arr4;
// console.log(arr6);
// arr6[1] = 50;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 4-25　mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   let outputName = name;
//   if (name !== "じゃけぇ") {
//     outputName += "さん";
//   }
//   return outputName;
// });
// console.log(newNameArr);

// 4-26 三項演算子
// const val1 = 1> 0 ? 'trueです': 'falseです';
// console.log(val1);

// const num = 100000;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
};

console.log(checkSum(-200, -300));

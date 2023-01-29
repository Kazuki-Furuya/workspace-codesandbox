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

const myProfile = ["caz", 240];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name00, age01] = myProfile;
const message4 = `名前は${name00}です。年齢は${age01}です。`;
console.log(message4);

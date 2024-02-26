"use strict";
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, "2"));
console.log(add("1", "2"));

function addTypeSafe(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    throw Error("숫자만 파라미터에 입력해주세요.");
  }
}

console.log(addTypeSafe(1, 2));
console.log(addTypeSafe(1, "2"));

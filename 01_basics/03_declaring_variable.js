/**
 * Variable 선언하기
 *
 * 1) var - 더이상 안씀 ... 아래의 두 변수로 대체됨
 * 2) let
 * 3) const
 */

var name = "kjw";
console.log(name);

var age = 100;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 바꿀 수 있음
 */
ive = "안유진";
console.log(ive);

/**
 * const로 선언한 변수는 값을 바꿀 수 없음
 */
const newJeans = "뉴진스";
console.log(newJeans);

// newJeans = "하하하"; // 에러가 뜸

/**
 * 선언과 할당
 *
 * 1) 선언: 변수를 선언하는 것
 * 2) 할당: 값을 넣는 것
 */

var name; //선언

name = "아령하셔요"; // 할당
console.log(name);

let girlFriend;
console.log(girlFriend); //변수 선언 시 undefined 할당됨

// const girlFriend2; //const는 값이 초기화된 상태로 사용될 수 있음

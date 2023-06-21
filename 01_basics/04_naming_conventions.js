/**
 * Naming Conventions
 *
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자 모두 사용 할 수 있다.
 * 2) 특수기호 : _ $ 만 사용가능함
 * 3) 숫자로 이름을 시작 할 수 없다.
 * 4) 키워드는 변수명으로 사용 할 수 없다.
 *      var var='var';   var let ="";  var const ='';
 */

let codefactory = "코팩";
var $ive = "아이브";
const _yuJin = "안유진";

console.log(codefactory);
console.log($ive);
console.log(_yuJin);

// 에러남.
// let 1name = '';
// let const = 'attention';

/**
 * Naming Convention 2
 *
 * 1) cammelCase - 대부분의 언어에서 많이 사용
 * 2) snake_case - 소문자만 사용하고 띄어쓰기시 _사용
 *       -> 파일이름, 파이썬 같은 언어
 * 3) PascalCase - C# .. ms계열의 언어에서 사용
 *
 */

//안유진
const anYuJin = "안유진"; //cammelCase
console.log(anYuJin);

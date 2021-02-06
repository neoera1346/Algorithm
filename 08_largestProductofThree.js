// ! 문제:
/*
정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
*/

// ! 주의사항:
/*
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
배열의 요소는 음수와 0을 포함하는 정수입니다.
배열의 길이는 3 이상입니다.
*/

// ! 입출력 예시:
/*
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
*/

// ! 내 접근 방법:
/*
두 가지 경우가 있다:
  1. 정수의 경우: 정렬한 뒤, 마지막 3개의 요소들의 곱이 제일 크다.
  2. 음수의 경우: 정렬한 뒤, 처음 두개의 음수들의 곱과 마지막 요소의 곱이 제일 크다.
*/
// ? 1. 배열을 먼저 정리한다.
// ? 2. 정렬된 배열에서 두 가지 경우로 가능한 최대값을 변수에 담는다.
// ? 3. 두개의 수 중 가장 큰 것을 구한다.

// ! 내가 푼 방법 (1)
const largestProductOfThree = function (arr) {
  let sorted = arr.slice().sort((a, b) => a - b);
  let leng = arr.length;
  let max1 = sorted[leng - 1] * sorted[leng - 2] * sorted[leng - 3];
  let max2 = sorted[leng - 1] * sorted[0] * sorted[1];
  return Math.max(max1, max2);
  // TODO: 여기에 코드를 작성합니다.
};

// ! 문제:
/*
두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.
*/

// ! 주의사항: 
/*
base, sample 내에 중복되는 요소는 없다고 가정합니다.
시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.
*/

// ! 입출력 예시:
/*
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
*/

// ! 내 접근 방법:
// ? 1. 이중 for문으로 base를 순회하면서 sample의 모든 요소를 순회한다.
// ? 2. includes로 base 안에 sample이 있는지 확인한다.
// ? 3. 메모되어 있지 않다면, 직전 두 수 합을 구한다.
// ? 4. sample의 모든 요소를 포함해야 true, 일부만 포함하면 false를 반환한다.

// ! 내가 푼 방법 (1)
// ? 시간 복잡도가 개선되지 않아 테스트 케이스 한개가 통과되지 않았다.
/* 
for (let i = 0; i < base.length; i++) {
  for (let j = 0; j < sample.length; j++) {
    if (base.includes(sample[i])) {
      return true;
    }
  }
}

return false;
*/

// ! 내가 푼 방법 (2)
// ? 기존의 시간 복잡도 n^2에서 n logn으로 개선했다.
// ? 1. sort로 정렬함으로서 시간 복잡도를 1차 개선했다.
// ? 2. 콜백함수를 사용함으로 시간 복잡도를 다시 개선했다.

const isSubsetOf = function(base, sample) {

    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);

    const findSampleInSortedBase = (item, arr, from) => {
        for (let i = from; i < arr.length; i++) {
            if (item === arr[i]) return i;
        }
        return -1
    }

    let baseIndex = 0
    for (let i = 0; i < sample.length; i++) {
        baseIndex = findSampleInSortedBase(sample[i], base, baseIndex)
        if (baseIndex === -1) return false
    }

    return true;
};
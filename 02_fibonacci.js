// ! 문제:
/*
아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 
그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
*/

// ! 주의사항: 
/*
재귀함수를 이용해 구현해야 합니다.
반복문(for, while) 사용은 금지됩니다.
함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.
*/

// ! 입출력 예시:
/*
let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
*/

// ! 내 접근 방법:
// ? 1. 재귀의 한가지 방법인 '메모이제이션'을 활용한다.
// ? 2. 피보나치 수열은 [0, 1]부터 시작한다. 메모되어 있다면 그대로 반환한다.
// ? 3. 메모되어 있지 않다면, 직전 두 수 합을 구한다.
// ? 4. fibonacci 함수 안에서 fib 함수를 다시 돌린다.

function fibonacci(n) {
    // n번째 항의 수
    // memoization 사용
    let cache = [0, 1];

    let fib = (n) => {
        // const key = arguments[0]
        if (cache[n] !== undefined) {
            return cache[n]; // cache에 있다면 그대로 반환
        }
        cache[n] = fib(n - 1) + fib(n - 2); // 아니면 직전 두 수 합 구하기
        return cache[n]
    }
    return fib(n);
}
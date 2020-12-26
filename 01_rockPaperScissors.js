// ! 문제:
/*
가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임이다.
세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.
 */

// ! 주의사항: 
/*
1. 최종적으로 리턴되는 배열의 순서는 가중치 적용 정렬(Weighted Sort) 을 따른다.
2. 중요도는 'rock', 'paper', 'scissors' 순으로 높다.
3. 쉽게 생각해 올림픽 순위 결정 방식을 참고하면 된다.
4. 금메달('rock') 이 은메달('paper') 보다 우선하고, 은메달('paper') 이 동메달('scissors') 보다 우선한다.
*/

// ! 입출력 예시:
/*

    let output = rockPaperScissors();
    console.log(output);
*/
//    [
//     ["rock", "rock", "rock"],
//      ["rock", "rock", "paper"],
//      ["rock", "rock", "scissors"],
//      ["rock", "paper", "rock"],
//      // ...etc ...
//    ]

// ! 내 접근 방법:
// ? 1. '가위, 바위, 보'가 담긴 배열을 변수에 할당해준다.
// ? 2. 더 이상 남은 판이 없을 때, 현재까지 낸 수들을 새로운 결과에 담아주고 리턴한다.
// ? 3. permutate 함수의 반복문 안에서 permutate를 콜백함수로 사용한다.
// ? 4. 라운드 수와 빈 배열을 인자로 하는 permutate 함수를 실행하고 최종적으로 푸시하고 나오는 결과를 리턴한다.

const rockPaperScissors = function(rounds) {
    rounds = rounds || 3;
    const rps = ['rock', 'paper', 'scissors'];
    const outcomes = [];

    let permutate = function(roundsToGo, playedSoFar) {
        if (roundsToGo === 0) {
            outcomes.push(playedSoFar);
            return;
        }

        for (let i = 0; i < rps.length; i++) {
            let currentPlay = rps[i];
            permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
        }
    };

    permutate(rounds, []);

    return outcomes;
};
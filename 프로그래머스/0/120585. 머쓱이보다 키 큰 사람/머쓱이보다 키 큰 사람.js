function solution(array, height) {
    return array.filter(v => v > height).length
}

// function solution(array, height) {
//     let count = 0;
//     for (i of array) {
//         if (i > height) {
//             count += 1
//         }
//     }
//     return count;
// }

// function solution(array, height) {
//     let result = 0;
//     array.map((arr) => height < arr && result++);
//     return result;
// }

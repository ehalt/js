// function solution(text, markers) {
//     const lines = text.split('\n');

//     const filterlines = lines.map(line => {
//         for (let mark of markers) {
//             const index = line.indexOf(mark);
//             if (index !== -1) {
//                 line = line.slice(0, index);
//             }
//         }
//         return line.trimEnd();
//     })
//     return filterlines.join('\n');
// }



function solution(input, markers) {
    return input.split('\n')
      .map(str => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
      .join('\n');
  }

// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples"));
// solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

import fs from 'fs';

namespace day3 {
  
    const xmas = 'XMAS';
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    const part1 = () => {
        const content = fs.readFileSync("./advent of code 2024/day4/input.txt", "utf-8");
        let mat : string[][] = [];
        const lines = content.split('\n');

        const n = lines.length;
        let m : number = 0;
        lines.forEach((line, index) => {
            mat[index] = line.split('');
            m = line.length;
        });
        console.log(mat);

        // const search = (i:number, j: number, index: number): number => {
        //     const char = xmas[index];
        //     if (i >= 0 && i < n && j >= 0 && j < m) {
        //       if (mat[i][j] === char) {
        //         if (char === 'S') {
        //             return 1;
        //         } else {
        //             return search(i-1, j-1, index + 1) + 
        //             search(i-1, j, index + 1) + 
        //             search(i-1, j + 1, index + 1) + 
        //             search(i, j-1, index + 1) + 
        //             search(i-1, j + 1, index + 1) + 
        //             search(i + 1, j - 1, index + 1) + 
        //             search(i + 1, j, index + 1) + 
        //             search(i + 1, j + 1, index + 1);
        //         }
        //       } else {
        //         return 0;
        //       }
        //     } else {
        //         return 0;
        //     }
        // }

        const hasWordOnDirection = (word: string, startX: number, startY: number, dirX: number, dirY: number) : boolean => {
            let x = startX;
            let y = startY;
            let isMatching  = true;
            for (let poz = 0; poz < xmas.length; poz++) {
                if (x < 0 || x >= n || y < 0 || y >= m || mat[x][y] !== xmas[poz]) {
                    isMatching = false;
                    break;
                }
                x += dirX;
                y += dirY;
            }
            return isMatching;
        }

        const searchUnidirectional = (i:number, j: number): number => {
            let matches = 0;
            for (let [dirX, dirY] of directions) {
                if (hasWordOnDirection(xmas, i, j, dirX, dirY)) {
                    matches += 1;
                }
            }
            return matches;
        }

        let sum = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                sum += searchUnidirectional(i,j);
            }
        }
        console.log(sum);
    }

    const part2 = () => {
        const content = fs.readFileSync("./advent of code 2024/day4/input2.txt", "utf-8");
        let mat : string[][] = [];
        const lines = content.split('\n');

        const n = lines.length;
        let m : number = 0;
        lines.forEach((line, index) => {
            mat[index] = line.split('');
            m = line.length;
        });

        const hasWordOnDirection = (word: string, startX: number, startY: number, dirX: number, dirY: number) : boolean => {
            let x = startX;
            let y = startY;
            let isMatching  = true;
            for (let poz = 0; poz < word.length; poz++) {
                if (x < 0 || x >= n || y < 0 || y >= m || mat[x][y] !== word[poz]) {
                    isMatching = false;
                    break;
                }
                x += dirX;
                y += dirY;
            }
            return isMatching;
        }

        let sum = 0;
        for (let i = 0; i < n - 2; i++) {
            for (let j = 0; j < m - 2; j++) {
                if (
                    (hasWordOnDirection('MAS', i, j, 1, 1) || hasWordOnDirection('SAM', i, j, 1, 1)) &&
                    (hasWordOnDirection('MAS', i, j + 2, 1, -1) || hasWordOnDirection('SAM', i, j + 2, 1, -1)) ) 
                    {
                        sum += 1;
                        //console.log(i, j);
                    }
                }
        }
        console.log(sum);
    }

    //part1();
    part2();
}
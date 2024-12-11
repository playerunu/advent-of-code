import fs from 'fs';

namespace day2 {
    const isExpectedDiff = (a: number, b: number) => Math.abs(a-b) >= 1 && Math.abs(a-b) <= 3;

    const isReportValid = (report: number[]) => {
        let isIncreasing = false;
        if (report[0] < report[1]) {
            isIncreasing = true;
        }

        let isValid = isExpectedDiff(report[0], report[1]);

        for (let index = 1; index < report.length -1; index++) {
            if (!isValid) {
                break;
            }
            const a = report[index];
            const b = report[index + 1];

            if (!isExpectedDiff(a, b)) {
                isValid = false;
            }

            if (isIncreasing) {
                if (b < a) {
                    isValid = false;
                }
            } else {
                if (a < b) {
                    isValid = false;
                }
            }
        }
        
        return isValid;
    }


    const part1 = () => {
        const fileContent = fs.readFileSync("./advent of code 2024/day2-input.txt", "utf-8");
        const lines = fileContent.split("\n");

        let sum = 0;
        lines.forEach((line) => {
            const report = line.split(' ').map((element) => Number(element));

            if (isReportValid(report)) {
                sum += 1;
                console.log(line);
            }

        });

        console.log(sum);
    }

    const part2 = () => {
        const fileContent = fs.readFileSync("./advent of code 2024/day2-input2.txt", "utf-8");
        const lines = fileContent.split("\n");

        let sum = 0;
        lines.forEach((line) => {
            const report = line.split(' ').map((element) => Number(element));

            for (let index = 0; index < report.length; index++) {
                const leftArray = index > 0 ? report.slice(0, index) : [];
                const rightArray = index < report.length ? report.slice(index + 1, report.length) : [];
                
                if (isReportValid([...leftArray, ...rightArray])) {
                    sum += 1;
                    break;
                }
            }
        });

        console.log(sum);
    }

    //part1();
    part2();
}
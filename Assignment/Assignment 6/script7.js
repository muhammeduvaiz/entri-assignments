function calculateSalaryDetails(basicSalary) {
    let da, hra, pf, netSalary;

    if (basicSalary < 10000) {
        da = basicSalary * 0.25;
        hra = basicSalary * 0.30;
        pf = basicSalary * 0.08;
    } else if (basicSalary >= 10000 && basicSalary < 20000) {
        da = basicSalary * 0.20;
        hra = basicSalary * 0.25;
        pf = basicSalary * 0.06;
    } else if (basicSalary >= 20000 && basicSalary < 30000) {
        da = basicSalary * 0.15;
        hra = basicSalary * 0.20;
        pf = basicSalary * 0.04;
    } else {
        da = basicSalary * 0.10;
        hra = basicSalary * 0.15;
        pf = basicSalary * 0.02;
    }

    netSalary = basicSalary + da + hra - pf;
 
    return {
        basicSalary: basicSalary,
        da: da,
        hra: hra,
        pf: pf,
        netSalary: netSalary
    };
}


const basicSalary = 25000; 
const salaryDetails = calculateSalaryDetails(basicSalary);

console.log(salaryDetails);
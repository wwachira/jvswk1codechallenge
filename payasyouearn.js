//Payasyouearn current rating.
const salaryAmount = 50000; // Define the salary amount here
const nssfAmount = 2000; // Assuming a specific NSSF amount
let tax = 0;
let remaining = salaryAmount - nssfAmount;

const taxBrackets = [
    { maxAmount: 24000, taxRate: 0.1 },
    { maxAmount: 8333, taxRate: 0.25 },
    { maxAmount: 467667, taxRate: 0.3 },
    { maxAmount: 300000, taxRate: 0.325 },
];

for (const bracket of taxBrackets) {
    if (remaining > 0) {
        const amountToTax = Math.min(remaining, bracket.maxAmount);
        tax = tax + amountToTax * bracket.taxRate;
        remaining -= amountToTax;
    }
}

if (remaining > 0) {
    tax = tax + remaining * 0.35;
}

return tax;

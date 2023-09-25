// Define tax rates and deduction limits
const taxRates = [
  { min: 0, max: 24000, rate: 0.1 },    // 10% tax rate
  { min: 24001, max: 32333, rate: 0.25 }, // 25% tax rate
  { min: 32334, max: 500000, rate: 0.3 }, // 30% tax rate
  { min: 500001, max: 800000, rate: 0.325 }, // 32.5% tax rate
  { min: 800001, max: Infinity, rate: 0.35 } // 35% tax rate
];

const nhifDeductions = [
  { min: 0, max: 5999, deduction: 150 },
  { min: 6000, max: 7999, deduction: 300 },
  { min: 8000, max: 11999, deduction: 400 },
  { min: 12000, max: 14999, deduction: 500 },
  { min: 15000, max: 19999, deduction: 600 },
  { min: 20000, max: 24999, deduction: 750 },
  { min: 25000, max: 29999, deduction: 850 },
  { min: 30000, max: 34999, deduction: 900 },
  { min: 35000, max: 39999, deduction: 950 },
  { min: 40000, max: Infinity, deduction: 1000 }
];

// Function to calculate PAYE based on monthly taxable pay
function calculatePAYE(monthlyTaxablePay) {
  for (const rate of taxRates) {
    if (monthlyTaxablePay >= rate.min && monthlyTaxablePay <= rate.max) {
      return monthlyTaxablePay * rate.rate;
    }
  }
  return 0;
}

// Function to calculate NHIF deduction based on gross pay
function calculateNHIF(grossPay) {
  for (const deduction of nhifDeductions) {
    if (grossPay >= deduction.min && grossPay <= deduction.max) {
      return deduction.deduction;
    }
  }
  return 0;
}

// Function to calculate NSSF deduction (assuming 6% of pensionable pay)
function calculateNSSF(pensionablePay) {
  const rate = 0.06; // 6% rate
  return pensionablePay * rate;
}

// Function to calculate Housing Levy (1.5% of gross pay)
function calculateHousingLevy(grossPay) {
  const rate = 0.015; // 1.5% rate
  return grossPay * rate;
}

// Function to calculate net salary
function calculateNetSalary(grossPay, monthlyTaxablePay) {
  const paye = calculatePAYE(monthlyTaxablePay);
  const nhif = calculateNHIF(grossPay);
  const nssf = calculateNSSF(grossPay);
  const housingLevy = calculateHousingLevy(grossPay);

  const netSalary = grossPay - (paye + nhif + nssf + housingLevy);
  return netSalary;
}
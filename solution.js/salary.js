//function to calculate KRA/PAYE,deductions per grouped salary
//also shows the tax rate in percentage

function calculatePAYE(monthlyTaxablePay) {
    if (monthlyTaxablePay <= 24000) {
      return monthlyTaxablePay * 0.1; // 10% 
    } else if (monthlyTaxablePay <= 32333) {
      return monthlyTaxablePay * 0.25; // 25% 
    } else if (monthlyTaxablePay <= 500000) {
      return monthlyTaxablePay * 0.3; // 30% 
    } else if (monthlyTaxablePay <= 800000) {
      return monthlyTaxablePay * 0.325; // 32.5% 
    } else {
      return monthlyTaxablePay * 0.35; // 35% 
    }
  }
  
  //function to calculate NHIF deductions per grouped salary
  function calculateNHIF(grossPay) {
    if (grossPay <= 5999) {
      return 150;
    } else if (grossPay <= 7999) {
      return 300;
    } else if (grossPay <= 11999) {
      return 400;
    } else if (grossPay <= 14999) {
      return 500;
    } else if (grossPay <= 19999) {
      return 600;
    } else if (grossPay <= 24999) {
      return 750;
    } else if (grossPay <= 29999) {
      return 850;
    } else if (grossPay <= 34999) {
      return 900;
    } else if (grossPay <= 39999) {
      return 950;
    } else {
      return 1000;
    }
  }
  

  //function to calculate NSSF deductions per salried group 
  //NSSF deductions has a standard rate of 6% of the employees' salary
  function calculateNSSF(pensionablePay) {
    if (pensionablePay <= 6000) {
      return pensionablePay * 0.06; // 6% 
    } else {
      return 18000 * 0.06 + (pensionablePay - 6000) * 0.06; // Contributions for Tiers I and II
    }
  }
  
  //function for the newly implemented housing levy
  function calculateHousingLevy(grossPay) {
    return grossPay * 0.015; // 1.5% Housing Levy
  }

  //use this example to calculate the deductions for each section

  const paye = calculatePAYE(monthlyTaxablePay); 
  console.log(`PAYE: ${paye}`);

  const nhif = calculateNHIF(grossPay); 
  console.log(`NHIF: ${nhif}`);

  const nssf = calculateNSSF(pensionablePay);
  console.log(`NSSF: ${nssf}`);

  const housingLevy = calculateHousingLevy(grossPay);
  console.log(`Housing Levy: ${housingLevy}`);
 
 
  
  
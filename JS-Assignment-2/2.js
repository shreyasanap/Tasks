// even number zero to hundred

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
  

//  Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(operation, num1, num2) {
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Division by zero incorrect';
        }
        break;
      default:
        result = 'Invalid operation';
    }
  
    return result;
  }
  console.log(calculate('add', 5, 3));        
  console.log(calculate('subtract', 10, 4));   
  console.log(calculate('multiply', 6, 2));    
  console.log(calculate('divide', 8, 2));   
  console.log(calculate('divide', 5, 0));      
  console.log(calculate('unknown', 2, 3));    
  
  ```
You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.
```
function findTax(salary) {
    let taxRate;
    let taxAmount;
  
    switch (true) {
      case (salary > 0 && salary <= 200000):
        taxRate = 0;
        break;
      case (salary > 200000 && salary <= 500000):
        taxRate = 0.05;
        break;
      case (salary > 500000 && salary <= 1000000):
        taxRate = 0.10;
        break;
      case (salary > 1000000 && salary <= 1500000):
        taxRate = 0.20;
        break;
      case (salary > 1500000 && salary <= 2000000):
        taxRate = 0.25;
        break;
      case (salary > 2000000):
        taxRate = 0.30;
        break;
      default:
        return "Invalid salary amount";
    }
  
    taxAmount = salary * taxRate;
    return taxAmount;
  }
  
  // Example usage:
  console.log(findTax(100000));   // Output: 0 (0% tax on the entire salary)
  console.log(findTax(300000));   // Output: 10000 (5% tax on the entire salary)
  console.log(findTax(600000));   // Output: 50000 (10% tax on the entire salary)
  console.log(findTax(1200000));  // Output: 240000 (20% tax on the entire salary)
  console.log(findTax(1800000));  // Output: 450000 (25% tax on the entire salary)
  console.log(findTax(2500000));  // Output: 750000 (30% tax on the entire salary)
  console.log(findTax(-10000));   // Output: Invalid salary amount


  ```
Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
```

function sumOfProducts(n1, n2) {
    const num1 = n1.toString();
    const num2 = n2.toString();
    let sum = 0;
  
    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
      const digit1 = i < num1.length ? parseInt(num1[i]) : 0;
      const digit2 = i < num2.length ? parseInt(num2[i]) : 0;
      sum += digit1 * digit2;
    }
    return sum;
  }
  
  const n1 = 6;
  const n2 = 34;
  console.log(sumOfProducts(n1, n2));  // Output: 24
  
  
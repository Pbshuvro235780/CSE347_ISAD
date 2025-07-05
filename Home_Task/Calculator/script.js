function calculate() {
  let n1 = parseFloat(document.getElementById('num1').value);
  let n2 = parseFloat(document.getElementById('num2').value);
  let op = document.getElementById('operator').value;
  let result;

  if (isNaN(n1) || isNaN(n2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (op) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n2 !== 0 ? (n1 / n2) : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operator";
    }
  }

  document.getElementById('result').textContent = result;
}

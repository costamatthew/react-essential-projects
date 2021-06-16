function CalculatorService() {
  const SUM = "+";
  const SUBTRACTION = "-";
  const DIVISION = "/";
  const MULTIPLY = "*";

  function calcular(n1, n2, operation) {
    let result;

    switch (operation) {
      case SUM:
        result = n1 + n2;
        break;
      case SUBTRACTION:
        result = n1 - n2;
        break;
      case DIVISION:
        result = n1 / n2;
        break;
      case MULTIPLY:
        result = n1 * n2;
        break;

      default:
        result = 0;
    }

    return result;
  }

  return [calcular, SUM, SUBTRACTION, DIVISION, MULTIPLY];
}

export default CalculatorService;

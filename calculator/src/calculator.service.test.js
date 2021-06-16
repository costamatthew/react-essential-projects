import React from "react";
import reactDom from "react-dom";
import CalculatorService from "./calculator.service";

describe("Teste do CalculatorService", () => {
  const [calcular, SUM, SUBTRACTION, DIVISION, MULTIPLY] = CalculatorService();

  it("Deve garantir que 1 + 4 seja igual a 5", () => {
    let soma = calcular(1, 4, SUM);
    expect(soma).toEqual(5);
  });

  it("Deve garantir que 1 - 4 seja igual a -3", () => {
    let subtracao = calcular(1, 4, SUBTRACTION);
    expect(subtracao).toEqual(-3);
  });

  it("Deve garantir que 1 / 4 seja igual a 0.25", () => {
    let division = calcular(1, 4, DIVISION);
    expect(division).toEqual(0.25);
  });

  it("Deve garantir que 1 * 4 seja igual a 4", () => {
    let multiply = calcular(1, 4, MULTIPLY);
    expect(multiply).toEqual(4);
  });

  it("Deve retornar 0 para operação inválida", () => {
    let invalidOperation = calcular(1, 4, "%");
    expect(invalidOperation).toEqual(0);
  });
});

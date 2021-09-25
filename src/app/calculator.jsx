import React, { useState, useEffect } from 'react';
import { sum } from 'Src/utils/math';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    a: 0,
    b: 0,
    sum: 0,
  });

  const handleCalculator = (field, value) => {
    setCalculator({
      ...calculator,
      [field]: value,
    });
  };

  useEffect(() => {
    setCalculator({
      ...calculator,
      sum: sum(calculator.a, calculator.b),
    });
  }, [calculator.a, calculator.b]);

  return (
    <>
      <input value={calculator.a} onChange={(e) => handleCalculator('a', e.target.value)} type="number" />
      <input value={calculator.b} onChange={(e) => handleCalculator('b', e.target.value)} type="number" />
      <span>{` = ${calculator.sum}`}</span>
    </>
  );
};

export default Calculator;

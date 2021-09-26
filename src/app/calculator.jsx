import React, { useState } from 'react';
import { sum } from 'Src/utils/math';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    a: 0,
    b: 0,
  });

  const handleCalculator = (field, value) => {
    setCalculator({
      ...calculator,
      [field]: value,
    });
  };

  return (
    <>
      <input
        value={calculator.a}
        onChange={(e) => handleCalculator('a', e.target.value)}
        type="number"
      />
      <input
        value={calculator.b}
        onChange={(e) => handleCalculator('b', e.target.value)}
        type="number"
      />
      <span>{` = ${sum(calculator.a, calculator.b)}`}</span>
    </>
  );
};

export default Calculator;

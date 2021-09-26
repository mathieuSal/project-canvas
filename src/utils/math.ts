const sum = (a: string | number, b: string | number): number => {
  return parseFloat(<string>a) + parseFloat(<string>b);
};

// eslint-disable-next-line import/prefer-default-export
export { sum };

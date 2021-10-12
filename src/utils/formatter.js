const groupBy = (array, field) => {
  let i = 0;
  let val;
  let index;
  const values = [];
  const result = [];
  for (; i < array.length; i++) {
    val = array[i][field];

    // eslint-disable-next-line no-continue
    if (!val) continue;

    index = values.indexOf(val);
    if (index > -1) result[index].push(array[i]);
    else {
      values.push(val);
      result.push([array[i]]);
    }
  }
  return result;
};

// eslint-disable-next-line import/prefer-default-export
export { groupBy };

const evaluate = expression => {
  const operators = {
    '+': (left, right) => left + right,
    '*': (left, right) => left * right,
    '-': (left, right) => left - right,
    '/': (left, right) => left / right,
    '^': (left, right) => Math.pow(left, right),
  };

  const parseExpression = expression => {
    const [left, op, right] = expression.match(/\d+|[^\d\s]/g);
    return [parseInt(left), op, parseInt(right)];
  };

  const [left, op, right] = parseExpression(expression);
  const operatorFunction = operators[op];


  return () => operatorFunction(left, right);
};

const expressions = ['4+2', '5*7', '6-1', '9/2', '2^8'];

expressions.forEach(expression => {
  const resultFunction = evaluate(expression);
  console.log(`${expression} = ${resultFunction()}`);
});

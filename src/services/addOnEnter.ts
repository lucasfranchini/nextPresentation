const runOnEnter = (
  input: string,
  runFunction: Function,
  extraValidation: any = true
) => {
  if (input !== "Enter" || !extraValidation) return;

  runFunction();
};

export { runOnEnter };

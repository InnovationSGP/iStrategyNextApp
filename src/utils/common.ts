const errorHandler = (data: any, res: any, code: number = 400) => {
  return res.status(code).json({
    hasError: true,
    message: data,
  });
};

const successResponseHandler = (data: any, res: any, code = 200) => {
  res.status(code).json({
    hasError: false,
    body: data,
  });
};

const expiryCalculator = async (date = new Date(), hours: number) => {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return date;
};
export { errorHandler, expiryCalculator, successResponseHandler };

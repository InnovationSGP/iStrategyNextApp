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

export { errorHandler, successResponseHandler };

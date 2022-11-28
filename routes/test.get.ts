export default eventHandler(async (event) => {
  console.log('ehsr');
  const response = await fetch('http://localhost:3000/test', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  });

  const responseOptions = await fetch('http://localhost:3000/test', {
    method: 'OPTIONS', // *GET, POST, PUT, DELETE, etc.
  });

  return {
    post: {
      allowedMethodsHeader: await response.headers.get(
        'access-control-allowed-methods'
      ),
      data: await response.text(),
    },
    options: {
      allowedMethodsHeader: await responseOptions.headers.get(
        'access-control-allowed-methods'
      ),
      data: await responseOptions.text(),
    },
  };
});

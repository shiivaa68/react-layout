const axios = require('axios').default;
const baseUrl = 'https://alpha.tamashakhoneh.ir/v3/';
function connect(endPoint, mobile, password, extra) {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + endPoint, {
        mobile: mobile,
        password: password,
        extra: extra,
      })
      .then(function(data) {
        resolve(data);
      })
      .catch(function(error) {
        console.log(error, 'questionnaire');
      });
  });
}

// Start function
const start = async function(endPoint, mobile, password, extra) {
  const result = await connect(
    endPoint,
    mobile,
    password,
    extra,
  );
  console.log(result.headers['x-auth-token']);
  return result;
};

start(`auth/login`, '09186556812', 'MTIzNDU2NzhhRA==', {
  sdk: '23',
  device_name: 'HUAWEI KIW-L21',
});

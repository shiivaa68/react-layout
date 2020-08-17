const axios = require("axios").default;

class postRequest {
  connect(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(function (data) {
          resolve(data);
        })
        .catch(function (error) {
          console.log(error, "questionnaire");
        });
    });
  }

  async getRes(url, data) {
    const result = await this.connect(url, data);
    const status = result.status;
    const { success, message } = result.data;

    if (!success) {
      if (status === 409 || status === 405 || status === 500) {
        console.log("BEFORE " + status);
        return Promise.reject({
          status: status,
          message: message,
        });
      } else if (status === 401) {
        // logout
        // clear token from cookie
      }
    }

    console.log(result);
    return result;
  }
}

module.exports = postRequest;

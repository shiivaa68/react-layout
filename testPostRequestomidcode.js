const PostRequest   = require("./postRequest.js");
const postRequest   = new PostRequest();

const res           =  postRequest.getRes(`https://alpha.tamashakhoneh.ir/v3/auth/login`,
    {
        'mobile'  : '09186556812',
        'password': 'MTIzNDU2NzhhRA==',
        'extra'   : {"sdk":"23","device_name":"HUAWEI KIW-L21"}
    });

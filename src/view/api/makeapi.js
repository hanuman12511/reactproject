import axios from 'axios';
const BASE_URL = 'http://ankursingh.xyz/api/';
export const makeRequest = async (url,params = null) => {
  try {
    let info = {};
    info.headers = {
        Accept: "application/json",
        "Content-type": "multipart/form-data"
      };
        info.url = BASE_URL+url;
       let  formData = new FormData();
        if (params) {
            info.method = 'post';
            console.log('Request params:', params);
            const data = JSON.stringify(params);
           // info.data =data;
            for (const key in params) {
                console.log(key);
            if (key === 'images' && Array.isArray(params[key])) {
                for (const Mem of Object.keys(params[key])) {
                    formData.append(key + '[]', params[key][Mem]);
                }
          } else {
            formData.append(key, params[key]);
          }
        }
        info.data =JSON.stringify( Object.fromEntries(formData));
      }
    else{
       info.method = 'get';
       info.data = {};
    } 
    console.log('Request Info:', info);
    let res = await axios(info)
    const result = res;
    console.log(res);

return result;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
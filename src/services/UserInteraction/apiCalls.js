import axios from 'axios';
const jsonData=require('../../services/appSetting.json');
const apiUrl = jsonData.servicesUrl.userInteraction;
class apiCalls {
    async insertProfileDetails(requestData) {
        try {
            return await axios({
                method: 'post',
                url: apiUrl,
                data: requestData
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    async updareProfileDetails(requestData) {
        try {
            return await axios({
                method: 'put',
                url: apiUrl,
                data: requestData
            });
        }
        catch (err) {
            console.log(err);
        }
    };
}
export default apiCalls;
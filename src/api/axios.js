import axios from "axios";

export default axios.create({
    baseURL: "https://qrtiger.com/api/qr/static",
    headers: {
        "Authorization": "Bearer a07a9e70-a3a3-11ec-9baf-a130a618f8f8"
    }
});
import axios from './axios';

const getQrCode = async bodyParameters => {
    const res = await axios.post(
        '',
        bodyParameters,
    );
    return res;
}

export default getQrCode;
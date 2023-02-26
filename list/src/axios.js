import axios from "axios";

const instance = axios.create({
    baseURL: "https://63fb96e94e024687bf7b3cae.mockapi.io"
});

export default instance;
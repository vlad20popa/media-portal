import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/media-service/v1/",
    timeout: 100000,
    responseType: "json"
});

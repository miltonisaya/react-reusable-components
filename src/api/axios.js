import axios from "axios";

export default axios.create({
    baseURL: "https://635a5b3738725a1746c3f4c5.mockapi.io/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});
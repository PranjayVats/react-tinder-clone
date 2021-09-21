import axios from "axios";
const instance= axios. create({
    baseURL: "https://pranjay-vats-tinder-backend.herokuapp.com",
});
export default instance;
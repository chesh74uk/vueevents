import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/chesh74uk/vue3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};

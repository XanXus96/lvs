import axios from "axios";
import store from "~/store";
import router from "~/router";
import Swal from "sweetalert2";

// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters["auth/token"];
  if (token) {
    request.headers.common["Authorization"] = `Bearer ${token}`;
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request;
});

// Response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;

    if (status >= 500) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
        reverseButtons: true,
        confirmButtonText: "ok",
        cancelButtonText: "cancel"
      });
    }

    if (status === 401 && store.getters["auth/check"]) {
      Swal.fire({
        type: "warning",
        title: "Session Expired!",
        text: "Please log in again to continue.",
        reverseButtons: true,
        confirmButtonText: "ok",
        cancelButtonText: "cancel"
      }).then(() => {
        store.commit("auth/LOGOUT");

        router.push({ name: "login" });
      });
    }

    return Promise.reject(error);
  }
);

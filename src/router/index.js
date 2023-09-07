import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Booking from "../views/Booking.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("userLogin")) {
        const { user } = JSON.parse(localStorage.getItem("userLogin"));
        if (user.type === "CLIENT") {
          next();
        } else {
          next("/");
          alert("Bạn không có quyền vào trang quản trị");
        }
      } else {
        next("/");
        alert("Bạn phải đăng nhập mới vào được Admin");
      }
    },
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

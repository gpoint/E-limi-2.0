import { createRouter, createWebHistory } from "vue-router";

import Me from "./me";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/courses",
      name: "courses",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CoursesView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/pricing",
      name: "pricing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PricingView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ResetPasswordView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/password-reset",
      name: "complete-reset-password",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CompleteResetPasswordView.vue"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/me",
      component: () => import("../views/Me/Index.vue"),
      children: Me,
      meta: {
        authRequired: true,
      },
    },
    ,
  ],
});

const authRoutes = [
  "register",
  "login",
  "reset-password",
  "complete-reset-password",
];

// const noAuthRoutes = [
//   "home",
//   "about",
//   "pricing",
//   "contact",
//   "courses",
//   "course",
//   "contact",
//   "terms-and-conditions",
//   "privacy-policy",
//   "faqs",
// ];

import { useUserStore } from "../stores/user";

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  const { isLoggedIn, authorization } = userStore;

  // console.log(`User.isLoggedIn = ${isLoggedIn}`, authorization);

  if (to.path == "/logout") {
    userStore.logout();
    return next("/login");
  }

  if (authRoutes.includes(to.name)) {
    if (isLoggedIn) {
      return next("/me/courses");
    } else {
      return next();
    }
  }

  if (!to.meta.authRequired) {
    return next();
  }


  if (isLoggedIn) {
    return next();
  } else {
    return next("/login");
  }
});

export default router;

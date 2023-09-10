export default [
  {
    path: "",
    component: () => import("../views/Me/BaseView.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "courses",
    name: "my-courses",
    component: () => import("../views/Me/CoursesView.vue"),
    meta: {
      authRequired: true,
    },
  },
];

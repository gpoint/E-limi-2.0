<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white z-index-3 py-3">
    <div class="container">
        <RouterLink to="/" class="navbar-brand" href="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
            <img height="40" src="/img/logo.png" alt="E-limi">
        </RouterLink>
        <RouterLink v-show="menuCollapsed" :to="loggedIn ? '/logout' : '/login'" class="btn btn-sm bg-gradient-primary d-md-none btn-round mb-0 me-1" role="button">{{loggedIn ? 'Logout' : 'Login'}}</RouterLink>
        <button class="navbar-toggler shadow-none ms-2" :class="collapsed" @click="collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" :aria-expanded="!menuCollapsed" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1 bg-primary"></span>
                <span class="navbar-toggler-bar bar2 bg-warning"></span>
                <span class="navbar-toggler-bar bar3 bg-primary"></span>
            </span>
        </button>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" :class="show" id="navigation">
            <ul class="navbar-nav navbar-nav-hover mx-auto">
                <li class="nav-item mx-2">
                    <RouterLink to="/" class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                        Home
                    </RouterLink>
                </li>

                <li class="nav-item mx-2">
                    <RouterLink to="/about" class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                        About Us
                    </RouterLink>
                </li>
                <li class="nav-item mx-2">
                    <RouterLink to="/courses" class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                        Courses
                    </RouterLink>
                </li>

                <li class="nav-item mx-2">
                    <RouterLink to="/pricing" class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                        Pricing
                    </RouterLink>
                </li>

                <li class="nav-item mx-2">
                    <RouterLink to="/contact" class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                        Contact Us
                    </RouterLink>
                </li>
            </ul>

            <ul class="navbar-nav d-lg-block d-none">
                <li class="nav-item">
                    <RouterLink :to="loggedIn ? '/logout' : '/login'" class="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1" role="button">{{loggedIn ? 'Logout' : 'Login'}}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- End Navbar -->
</template>
<script>
import { useUserStore } from "../../stores/user";

export default {
    data() {
        return {
            user: null,
            menuCollapsed: true, 
        };
    },
    computed: {
        loggedIn() {
            const userStore = useUserStore(this.$pinia);
            return userStore.isLoggedIn;
        },
        subscribed() {
            return false;
        },
        collapsed() {
            return !this.menuCollapsed ? 'collapsed' : '';
        },
        show() {
            return !this.menuCollapsed ? 'show' : '';
        },
    },
    methods: {
        collapse() {
            this.menuCollapsed = !this.menuCollapsed;
        },
    },
    mounted() {
        const userStore = useUserStore(this.$pinia);

        const { firstName, lastName, } = userStore;

        this.user = {
            firstName,
            lastName,
        }
    },
};
</script>

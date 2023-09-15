<template>
<div>
    <section class="">
        <div class="page-header min-vh-100">
            <div class="container">
                <img src="/img/logo.png" class="position-absolute top-0 mt-5" style="height: 75px; object-fit: contain;">

                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                        <div class="card card-plain">

                            <div class="card-header pb-0 text-left mt-5">
                                <h4 class="font-weight-bolder">Sign In</h4>
                                <p class="mb-0">Enter your email and password to sign in</p>
                            </div>
                            <div class="card-body">
                                <form-message :type="response.type" v-model:message="response.message"></form-message>
                                <form @submit.prevent="login">
                                    <div class="mb-3">
                                        <input type="email" v-model="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" required>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" required>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input v-model="remember" class="form-check-input" type="checkbox" id="rememberMe">
                                        <label class="form-check-label" for="rememberMe">Remember me</label>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" :disabled="loading || undefined" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer pt-0">
                                <p class="mb-4 text-sm mx-auto">
                                    Don't have an account?
                                    <RouterLink to="/register" class="text-primary text-gradient font-weight-bold">Sign up</RouterLink>
                                </p>
                                <p class="mb-4 text-sm mx-auto mt-2">
                                    <RouterLink to="/reset-password" class="text-primary text-gradient font-weight-bold">Forgot Password?</RouterLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                        <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                            <img src="/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0">
                            <div class="position-relative">
                                <img class="max-width-500 w-100 position-relative z-index-2" style="filter: hue-rotate(90deg);" src="/img/illustrations/rocket-white.png" alt="image">
                            </div>
                            <h4 class="mt-5 text-white font-weight-bolder">"Attention is the new currency"</h4>
                            <p class="text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <base-footer></base-footer>

</div>
</template>

<script>
import AuthNav from '../components/navbars/AuthNav.vue';
import BaseFooter from '../components/footers/BaseFooter.vue';
import FormMessage from '../components/FormMessage.vue';
import AuthenticationService from '../services/authentication';

export default {
    components: {
        AuthNav,
        BaseFooter,
        FormMessage
    },
    data() {
        return {
            email: '',
            password: '',
            remember: false,
            loading: false,
            response: {
                message: null,
                type: 'danger',
            }
        };
    },
    methods: {
        async login() {
            try {

                this.loading = true;
                this.$Progress.start();

                const payload = {
                    email: this.email,
                    password: this.password,
                    remember: this.remember,
                };

                const login = await AuthenticationService.login(payload);

                return this.$router.push({
                    name: 'my-courses'
                });
            } catch (error) {
                this.response = {
                    message: `<strong>Error! ${error.message}</strong>`,
                    type: 'danger',
                }
            }

            this.loading = false;
            this.$Progress.finish();
        },
    },

}
</script>

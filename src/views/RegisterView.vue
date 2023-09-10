<template>
<div>
    <!-- <base-nav></base-nav> -->
    <section class="">
        <div class="page-header min-vh-100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                        <div class="card card-plain">
                            <img src="/img/logo.png" style="height: 75px; object-fit: contain;">

                            <div class="card-header pb-0 text-left mt-5">
                                <h4 class="font-weight-bolder">Sign Up</h4>
                                <p class="mb-0">Enter your email and password to register</p>
                            </div>
                            <div class="card-body">
                                <form-message :type="response.type" v-model:message="response.message"></form-message>
                                <form @submit.prevent="register">
                                    <label>Name</label>
                                    <div class="row">
                                        <div class="mb-3 col-6">
                                            <input type="text" v-model="this.firstName" class="form-control" placeholder="First Name" required aria-label="Name">
                                        </div>
                                        <div class="mb-3 col-6">
                                            <input type="text" v-model="this.lastName" class="form-control" placeholder="Last Name" aria-label="Name">
                                        </div>
                                    </div>
                                    <label>Email</label>
                                    <div class="mb-3">
                                        <input type="email" v-model="this.email" class="form-control" placeholder="Email" required aria-label="Email">
                                    </div>
                                    <label>Password</label>
                                    <div class="mb-3">
                                        <input type="password" v-model="this.password" class="form-control" placeholder="Password" required aria-label="Password">
                                    </div>
                                    <label>Confirm Password</label>
                                    <div class="mb-3">
                                        <input type="password" v-model="this.confirmPassword" class="form-control" placeholder="Confirm Password" required aria-label="Password">
                                    </div>
                                    <div class="form-check form-check-info text-left">
                                        <input type="checkbox" class="form-check-input" required value id="flexCheckDefault" checked>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            I agree the <a href="../../pages/privacy.html" class="text-dark font-weight-bolder">Terms and Conditions</a>
                                        </label>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" :disabled="loading || undefined" class="btn bg-gradient-primary w-100 mt-4 mb-0">Sign up</button>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer pt-0">
                                <p class="mb-4 text-sm mx-auto">
                                    Have an account?
                                    <RouterLink to="/login" class="text-primary text-gradient font-weight-bold">Sign in</RouterLink>
                                </p>
                                <p class="mb-4 text-sm mx-auto mt-2">
                                    <RouterLink to="/reset-password" class="text-primary text-gradient font-weight-bold">Forgot Password?</RouterLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                        <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                            <img src="img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0">
                            <div class="position-relative">
                                <img class="max-width-500 w-100 position-relative z-index-2" style="filter: hue-rotate(90deg);" src="img/illustrations/rocket-white.png" alt="image">
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
import BaseNav from '../components/navbars/BaseNav.vue';
import BaseFooter from '../components/footers/BaseFooter.vue';
import FormMessage from '../components/FormMessage.vue';
import AuthenticationService from '../services/authentication';

export default {
    components: {
        BaseNav,
        BaseFooter,
        FormMessage
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            loading: false,
            response: {
                message: null,
                type: 'danger',
            },
        };
    },
    methods: {
        async register() {
            try {

                this.loading = true;
                this.$Progress.start();

                const payload = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                };

                const response = await AuthenticationService.register(payload);

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

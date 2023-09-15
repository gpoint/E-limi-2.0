<template>
<div>
    <section>
        <div class="page-header min-vh-100">
            <div class="container">
                <img src="/img/logo.png" class="position-absolute top-0 mt-5" style="height: 75px; object-fit: contain;">

                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                        <div class="card card-plain">

                            <div class="card-header pb-0 text-lef mt-5">
                                <h4 class="font-weight-bolder">Complete Password Reset</h4>
                                <p class="mb-0" v-if="displayForm">Enter and confirm your new password.</p>
                            </div>
                            <div class="card-body">
                                <form-message :type="response.type" v-model:message="response.message"></form-message>
                                <form @submit.prevent="reset" v-if="displayForm">
                                    <div class="mb-3">
                                        <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password">
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" v-model="confirmPassword" class="form-control form-control-lg" placeholder="Confirm Password" aria-label="Confirm Password">
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" :disabled="loading || undefined" class="btn bg-gradient-primary btn-lg w-100 my-4">Complete</button>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer pt-0" v-if="!displayForm">
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
                            <img src="/img/shapes/pattern-lines.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0">
                            <div class="position-relative">
                                <img class="max-width-500 w-100 position-relative z-index-2" style="filter: hue-rotate(90deg);" src="/img/illustrations/lock.png" alt="locked">
                            </div>
                            <!-- <h4 class="mt-5 text-white font-weight-bolder">Soft UI Design</h4>
                            <p class="text-white">Just as it takes a company to sustain a product, it takes a community to sustain a protocol.</p> -->
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
import BaseFooter from '../components/footers/BaseFooter.vue';
import FormMessage from '../components/FormMessage.vue';
import AuthenticationService from '../services/authentication';

export default {
    components: {
        BaseFooter,
        FormMessage,
    },
    data() {
        return {
            password: '',
            confirmPassword: '',
            loading: false,
            displayForm: false,
            response: {
                message: '',
                type: 'danger'
            },
        };
    },
    methods: {
        async reset() {
            if (this.password !== this.confirmPassword) {
                this.response = {
                    message: '<strong>Passwords do not Match!</strong>',
                    type: 'danger',
                };
                return;
            }

            this.$Progress.start();
            this.loading = true;

            try {

                const { t: token } = this.$route.query
            
                const payload = {
                    password: this.password,
                };

                const response = await AuthenticationService.completeResetPassword(token, payload);

                this.response = {
                    message: `<strong>${response.message}</strong>`,
                    type: 'success',
                };

                this.displayForm = false;
            } catch (error) {
                this.response = {
                    message: `<strong>Error! ${error.message}</strong>`,
                    type: 'danger',
                };
            }

            this.loading = false;
            this.$Progress.finish();
        },
    },
    async mounted() {
        try {
            const { t: token } = this.$route.query

            if (!token) {
                throw new Error('Missing or invalid token')
            }
            
            const response = await AuthenticationService.validateResetPasswordToken(token);
            
            this.displayForm = true;
        } catch (error) {
            this.displayForm = false;
            this.response = {
                message: `<strong>Error! ${error.message}`,
                type: 'danger'
            }
        }
    }
};
</script>

<template>
<div>
    <base-nav></base-nav>

    <header class="bg-gradient-dark">
        <div class="page-header min-vh-75" style="background-image: url('img/shapes/waves-white.svg');">
            <span class="mask bg-gradient-primary opacity-8 "></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center mx-auto my-auto">
                        <h1 class="text-white">Work with an amazing design</h1>
                        <p class="lead mb-4 text-white opacity-8">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
                        <button type="submit" class="btn bg-white text-dark">Create Account</button>
                        <h6 class="text-white mb-2 mt-5">Find us on</h6>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:;"><i class="fab fa-facebook text-lg text-white me-4"></i></a>
                            <a href="javascript:;"><i class="fab fa-instagram text-lg text-white me-4"></i></a>
                            <a href="javascript:;"><i class="fab fa-twitter text-lg text-white me-4"></i></a>
                            <a href="javascript:;"><i class="fab fa-google-plus text-lg text-white"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-absolute w-100 z-index-1 bottom-0">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="moving-waves">
                        <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                        <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                        <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                        <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
                    </g>
                </svg>
            </div>
        </div>
    </header>

    <section class="py-lg-5 my-8">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto text-center mb-5">
                    <h2>Best no-tricks pricing</h2>
                    <p class="lead">If you&#39;re not satisfied, contact us within the first 30 days and we&#39;ll send you a full refund.</p>
                </div>
            </div>
            <div class="row">
                <div class="card">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card-body">
                                <h3 class="text-gradient text-danger">Monthly Unlimited Access</h3>
                                <p>You have Free Unlimited Updates and Premium Support on each package. You also have 3 days to request a refund.</p>
                                <div class="row mt-5 mb-2">
                                    <div class="col-lg-3 col-12">
                                        <h6 class="text-dark tet-uppercase">What&#39;s included</h6>
                                    </div>
                                    <div class="col-6">
                                        <hr class="horizontal dark">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12 ps-0">
                                        <div class="info d-flex align-items-center p-2">
                                            <div class="icon icon-shape icon-xs rounded-circle bg-gradient-primary opacity-6 shadow text-center">
                                                <i class="fas fa-check opacity-10"></i>
                                            </div>
                                            <div>
                                                <span class="ps-2">Private code access</span>
                                            </div>
                                        </div>
                                        <div class="info d-flex align-items-center p-2">
                                            <div class="icon icon-shape icon-xs rounded-circle bg-gradient-warning opacity-6 shadow text-center">
                                                <i class="fas fa-check opacity-10"></i>
                                            </div>
                                            <div>
                                                <span class="ps-2">Free entry to all repositories</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="info d-flex align-items-center p-2">
                                            <div class="icon icon-shape icon-xs rounded-circle bg-gradient-warning opacity-6 shadow text-center">
                                                <i class="fas fa-check opacity-10"></i>
                                            </div>
                                            <div>
                                                <span class="ps-2">Pro member accounts</span>
                                            </div>
                                        </div>
                                        <div class="info d-flex align-items-center p-2">
                                            <div class="icon icon-shape icon-xs rounded-circle bg-gradient-danger opacity-6 shadow text-center">
                                                <i class="fas fa-check opacity-10"></i>
                                            </div>
                                            <div>
                                                <span class="ps-2">Support team full assist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 my-auto">
                            <div class="card-body text-center">
                                <h6 class="mt-4 mb-0">Pay once a month</h6>
                                <h1 class="mt-0">
                                    <small>₦</small>5000
                                </h1>
                                <button type="button" class="btn bg-gradient-primary btn-lg mt-2">Get Access</button>
                            </div>
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

export default {
    components: {
        BaseNav,
        BaseFooter,
    },
    data() {
        return {
            data: '',
        };
    },

}
</script>

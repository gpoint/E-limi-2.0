<template>
<div>
    <base-nav></base-nav>
    <!-- -------- START HEADER 4 w/ search book a ticket form ------- -->
    <header>
        <div class="page-header min-vh-75" style="background-image: url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/airport.jpg)">
            <span class="mask bg-gradient-primary"></span>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-white text-center">
                        <h2 class="text-white">Contact Us</h2>
                        <p class="lead">Any questions or remarks? Just write us a messaage!</p>
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
    <!-- -------- END HEADER 4 w/ search book a ticket form ------- -->

    <section class="py-7 bg-gray-100 position-relative">
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-10 mx-auto">
                    <div class="card">
                        <div class="row">
                            <div class="col-lg-5 d-flex">
                                <div class="bg-gradient-primary my-lg-3 ms-lg-3 border-radius-md">
                                    <img src="/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute start-0 top-0 h-100 opacity-6">
                                    <div class="card-body p-5 position-relative">
                                        <h3 class="text-white">Contact Information</h3>
                                        <p class="text-white opacity-8 mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>
                                        <div class="d-flex p-2 text-white">
                                            <div>
                                                <i class="fas fa-phone text-sm"></i>
                                            </div>
                                            <div class="ps-3">
                                                <span class="text-sm opacity-8">(+40) 772 100 200</span>
                                            </div>
                                        </div>
                                        <div class="d-flex p-2 text-white">
                                            <div>
                                                <i class="fas fa-envelope text-sm"></i>
                                            </div>
                                            <div class="ps-3">
                                                <span class="text-sm opacity-8">hello@creative-tim.com</span>
                                            </div>
                                        </div>
                                        <div class="d-flex p-2 text-white">
                                            <div>
                                                <i class="fas fa-map-marker-alt text-sm"></i>
                                            </div>
                                            <div class="ps-3">
                                                <span class="text-sm opacity-8">730 Dyonisie Wolf <br> Bucharest, RO 010458</span>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook">
                                                <i class="fab fa-facebook"></i>
                                            </button>
                                            <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter">
                                                <i class="fab fa-twitter"></i>
                                            </button>
                                            <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble">
                                                <i class="fab fa-dribbble"></i>
                                            </button>
                                            <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram">
                                                <i class="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <form id="contact-form" method="post" autocomplete="off">
                                    <div class="card-body position-relative p-3 ps-0">
                                        <div class="row mt-4">
                                            <div class="col-md-6">
                                                <label>First name</label>
                                                <div class="input-group mb-4">
                                                    <input class="form-control" placeholder="eg. Lucas" aria-label="First Name..." type="text">
                                                </div>
                                            </div>
                                            <div class="col-md-6 ps-2">
                                                <label>Last name</label>
                                                <div class="input-group mb-4">
                                                    <input type="text" class="form-control" placeholder="eg. Jones" aria-label="Last Name...">
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label>Email address</label>
                                            <div class="input-group mb-4">
                                                <input type="email" class="form-control" placeholder="eg. lucas@creative-tim.com">
                                            </div>
                                        </div>
                                        <label>What are you interested on?</label>
                                        <div class="d-flex">
                                            <div>
                                                <div class="form-check me-3">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Design
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="form-check me-3">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Development
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="form-check me-3">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                                                    <label class="form-check-label" for="flexRadioDefault3">
                                                        Support
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                                                    <label class="form-check-label" for="flexRadioDefault4">
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mt-4">
                                            <label>Your message</label>
                                            <textarea name="message" class="form-control" id="message" rows="3"></textarea>
                                        </div>
                                        <div class="text-end">
                                            <button type="button" class="btn bg-gradient-dark mb-0">Send message</button>
                                        </div>
                                    </div>
                                </form>
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

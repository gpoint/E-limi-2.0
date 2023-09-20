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
                        <RouterLink to="/subscribe" class="btn bg-white text-dark">Subscribe </RouterLink>
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
    <!-- -------- START Features w/ image on left & title & text & 3 cols on soft background -------- -->
    <section class="py-5">
        <div class="container-fluid px-0">
            <div class="row justify-content-center text-center">
                <div class="col-3 px-md-0"></div>
                <div class="col-12 position-relative">
                    <div class="row">
                        <div class="col-xl-3"></div>
                        <div class="col-xl-5 col-md-8 col-12 text-start">
                            <div class="p-3 text-start border-radius-lg">
                                <h2>Review our pricing</h2>
                                <p class="text-dark text-lg mt-3">
                                    <span class="font-weight-bold">The time</span>
                                    is now for it to be okay to be great. People in this world shun people for being great.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-warning-soft bottom-0">
                        <div class="row">
                            <div class="col-xl-3 position-relative">
                                <img class="w-100 border-radius-section border-top-start-radius-0 border-bottom-start-radius-0 start-0 position-absolute max-width-300 mt-n11 d-xl-block d-none" src="/img/backgrounds/curved13.jpg" alt="image">
                            </div>
                            <div class="col-xl-9">
                                <div class="row">
                                    <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                        <div class="p-3 text-start border-radius-lg">
                                            <div class="icon icon-shape icon-md bg-gradient-warning shadow text-center">
                                                <svg width="30px" height="18px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mt-3">
                                                    <title>secure</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g id="credit-card" transform="translate(453.000000, 454.000000)">
                                                                    <path d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                    <path d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h5 class="mt-3">Secure</h5>
                                            <p>Our payments are secured by leading payment providers.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                        <div class="p-3 text-start bg-white border-radius-lg shadow-lg">
                                            <div class="icon icon-shape icon-md bg-gradient-warning shadow text-center">
                                                <svg width="30px" height="18px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mt-3">
                                                    <title>fast</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(4.000000, 301.000000)">
                                                                    <path d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
                                                                    <path d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                                                                    <path d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                                                                    <path d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" id="color-3" opacity="0.598539807"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h5 class="mt-3">Fast Support</h5>
                                            <p>We respond as quick as lightning to resolve the few issues you have.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                        <div class="p-3 text-start border-radius-lg">
                                            <div class="icon icon-shape icon-md bg-gradient-warning shadow text-center">
                                                <svg width="30px" height="18px" viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mt-3">
                                                    <title>bok</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-1869.000000, -741.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g id="basket" transform="translate(153.000000, 450.000000)">
                                                                    <path d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z" opacity="0.595377604"></path>
                                                                    <path d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h5 class="mt-3">Out of the box</h5>
                                            <p>Everything just works out of the box as soon as you subscribe.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                        <img class="w-10 end-10 position-absolute mt-n6" src="/img/shapes/pattern-points.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------- END Features w/ image on left & title & text & 3 cols on soft background -------- -->

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
                                <RouterLink to="/subscribe" class="btn bg-gradient-primary btn-lg mt-2">Get Unlimited Access</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- -------   START PRE-FOOTER 6 - title & description and input    -------- -->
    <!-- <section class="py-4 position-relative my-8">
        <div id="carousel-testimonials" class="carousel slide carousel-team">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-5 p-5 ms-lg-auto">
                                <div class="p-3">
                                    <img class="w-100 border-radius-md" src="../../assets/img/charles.jpg" alt="First slide">
                                </div>
                            </div>
                            <div class="col-md-5 me-lg-auto position-relative">
                                <p class="text-sm font-weight-bold mb-1">- Customer Story</p>
                                <h3 class="text-dark">Excelent payment service. You guys are the best!</h3>
                                <p class="my-4">
                                    <i>"Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone.
                                        This is the way to success."</i>
                                </p>
                                <div class="author align-items-center">
                                    <div class="avatar shadow bg-gradient-dark">
                                        <img src="../../assets/img//logos/white-logos/logo-spotify-white.svg">
                                    </div>
                                    <div class="name ps-2">
                                        <span>Mathew Glock</span>
                                        <div>
                                            <small>Marketing Manager - Slack</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-25 ms-auto opacity-2 mt-n9">
                                    <svg class="opacity-3" width="110px" height="110px" viewBox="0 0 270 270" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <title>quote-down</title>
                                        <g id="quote-down" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <path d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z" id="quote-up" fill="#48484A" fill-rule="nonzero" transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="py-5 mb-8">
        <div class="container">
            <div class="row">
                <div class="col-8 mx-auto text-center">
                    <h6 class="opacity-5"> More than 50+ schools trust E-limi</h6>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-coinbase.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-nasa.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-netflix.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-pinterest.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-spotify.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-vodafone.svg" alt="logo">
                </div>
            </div>
        </div>
    </div> -->
    <!-- -------   END PRE-FOOTER 6 - title & description and input    -------- -->

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

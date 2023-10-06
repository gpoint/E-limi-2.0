<template>
<div>
    <base-nav></base-nav>

    <header class="bg-gradient-dark">
        <div class="page-header min-vh-75" style="background-image: url('/img/shapes/waves-white.svg');">
            <span class="mask bg-gradient-primary opacity-8 "></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center mx-auto my-auto">
                        <h1 class="text-white">My Courses</h1>
                        <p class="lead mb-4 text-white opacity-8">These are courses you've enrolled for</p>
                        <!-- <button type="submit" class="btn bg-white text-dark">Create Account</button> -->
                        <!-- <h6 class="text-white mb-2 mt-5">Find more courses</h6> -->
                    </div>
                </div>
            </div>
            <div class="position-absolute w-100 z-index-1 bottom-0">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="moving-waves">
                        <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40)" />
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

    <!-- -------- START HEADER 5 w/ text and illustration ------- -->
    <section class="py-6 bg-gray-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-lg-0 mb-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <!-- <img src="/img/blog7-1.jpg" class="img-fluid border-radius-lg"> -->
                            </a>
                        </div>

                        <div class="card-body pt-3">
                            <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">House</span>
                            <a href="javascript:;" class="card-title h5 d-block text-darker">
                                Shared Coworking
                            </a>
                            <p class="card-description mb-4">
                                Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                            </p>
                            <div class="author align-items-center">
                                <!-- <img src="/img/team-2.jpg" alt="..." class="avatar shadow"> -->
                                <div class="name ps-3">
                                    <span>Mathew Glock</span>
                                    <div class="stats">
                                        <small>Posted on 28 February</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-lg-0 mb-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <!-- <img src="/img/blog7-2.jpg" class="img-fluid border-radius-lg"> -->
                            </a>
                        </div>

                        <div class="card-body pt-3">
                            <span class="text-gradient text-info text-uppercase text-xs font-weight-bold my-2">Office</span>
                            <a href="javascript:;" class="text-darker card-title h5 d-block">
                                Really Housekeeping
                            </a>
                            <p class="card-description mb-4">
                                Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                            </p>
                            <div class="author align-items-center">
                                <!-- <img src="/img/ivana-square.jpg" alt="..." class="avatar shadow"> -->
                                <div class="name ps-3">
                                    <span>Chriss Smahos</span>
                                    <div class="stats">
                                        <small>Posted 2 min ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-lg-0 mb-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <!-- <img src="/img/blog7-3.jpg" class="img-fluid border-radius-lg"> -->
                            </a>
                        </div>

                        <div class="card-body pt-3">
                            <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">Hub</span>
                            <a href="javascript:;" class="text-darker card-title h5 d-block">
                                Shared Coworking
                            </a>
                            <p class="card-description mb-4">
                                Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                            </p>
                            <div class="author align-items-center">
                                <!-- <img src="/img/marie.jpg" alt="..." class="avatar shadow"> -->
                                <div class="name ps-3">
                                    <span>Author</span>
                                    <div class="stats">
                                        <small>2 Lectures</small>
                                    </div>
                                </div>
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
import BaseNav from '../../components/navbars/BaseNav.vue';
import BaseFooter from '../../components/footers/BaseFooter.vue';

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

<template>
<div>
    <base-nav></base-nav>

    <!-- -------- START HEADER 1 w/ text and image on right ------- -->
    <header>
        <div class="page-header min-vh-100 ">
            <div class="oblique position-absolute top-0 h-75 d-md-block d-none">
                <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url(/img/backgrounds/paintbrush.jpg);"></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
                        <h1 class="text-gradient text-primary">Learn With <img alt="E-limi" src="/img/logo.png" height="50"></h1>
                        <h1 class="mb-4">Search For A Vocation</h1>
                        <p class="lead pe-5 me-5">Learn fresh or upskill yourself with courses curated for mastering vocations on E-limi. </p>

                        <form @submit.prevent="search" class="col-9 mt-lg-n2 mt-2">
                            <label class="text-white">Search courses</label>

                            <div class="input-group mb-3">
                                <input v-model="searchString" type="text" class="form-control  form-control-alternative" placeholder="Enter course name" aria-label="Enter course name" aria-describedby="button-search">
                                <button class="btn bg-gradient-warning mb-0" type="button" id="search-button">Search</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- -------- END HEADER 1 w/ text and image on right ------- -->
    <section id="services" class="my-7">
        <div class="container">
            <div class="row mt-0 mb-10 mt-8">
                <div class="col-lg-5 col-md-12 me-auto">
                    <div class="p-3 pt-0 position-sticky">
                        <div class="icon icon-shape bg-gradient-primary rounded-circle shadow text-center mb-4">
                            <i class="fas fa-paper-plane"></i>
                        </div>
                        <h3 class="text-gradient text-primary mb-0">Why study with E-limi? </h3>
                        <h5 class="mb-4">Stand up for every move</h5>
                        <p>Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost
                            impossible to get a pure thought out.It’s like a little kid, a little boy, looking at colors. <br> <br>
                            Before somebody tells you you shouldn’t like pink because that’s for girls, or you’d instantly become a gay
                            two-year-old. Why would anyone pick blue over pink? Pink is obviously a better color.</p>
                        <a href="javascript:;" class="text-dark icon-move-right">More about us
                            <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-8">
                    <div class="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-75">
                        <div class="w-100 h-100 bg-gradient-primary border-radius-xl position-absolute" alt=""></div>
                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/arena.jpg" class="w-100 border-radius-xl mt-6 ms-n5 position-absolute" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-6 bg-gray-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="p-3 text-center mb-3">
                        <div class="icon icon-shape icon-lg bg-gradient-primary shadow mx-auto">
                            <i class="fa fa-box-open"></i>
                        </div>
                        <h2 class="mt-3">Check out what&#39;s new in courses</h2>
                        <p>Get the most latest and most popular trade courses around</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 mb-lg-0 my-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                    <i class="ni ni-favourite-28"></i>
                                </button>
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
                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
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
                <div class="col-lg-4 mb-lg-0 my-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                    <i class="ni ni-favourite-28"></i>
                                </button>
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
                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
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
                <div class="col-lg-4 mb-lg-0 my-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                    <i class="ni ni-favourite-28"></i>
                                </button>
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
                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
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
                <div class="col-lg-4 mb-lg-0 my-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                    <i class="ni ni-favourite-28"></i>
                                </button>
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
                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
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
                <div class="col-lg-4 mb-lg-0 my-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                    <i class="ni ni-favourite-28"></i>
                                </button>
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
                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
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
                <div class="col-lg-4 mb-lg-0 my-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                    <i class="ni ni-favourite-28"></i>
                                </button>
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
                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
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
            </div>
        </div>
    </section>
    <section class="py-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="p-3 text-center mb-5">
                        <div class="icon icon-shape icon-lg bg-gradient-primary shadow mx-auto">
                            <i class="fas fa-burn"></i>
                        </div>
                        <h2 class="mt-3">Trending categories</h2>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-lg-4 col-md-6">
                    <div class="card card-background align-items-start h-100">
                        <div class="full-background" style="background-image: url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/beach.jpg)"></div>
                        <div class="card-body z-index-3">
                            <div class="icon icon-md">
                                <svg width="30px" height="30px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>spaceship</title>
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
                        </div>
                        <div class="card-footer pb-3 pt-2 z-index-3">
                            <h4 class="text-white mb-1">Nature&#39;s Light</h4>
                            <p class="text-white text-xs font-weight-bolder text-uppercase opacity-7">450 spots</p>
                        </div>
                        <span class="mask bg-gradient-primary border-radius-xl z-index-2 opacity-6"></span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex flex-column">
                    <div class="card h-100 card-background align-items-start">
                        <div class="full-background" style="background-image: url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/indian.jpg&#39;)"></div>
                        <div class="card-body z-index-3">
                            <div class="icon icon-md">
                                <svg width="30px" height="30px" viewBox="0 0 44 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>megaphone</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-2168.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g id="megaphone" transform="translate(452.000000, 300.000000)">
                                                    <path d="M35.7958333,0.273166667 C35.2558424,-0.0603712374 34.5817509,-0.0908856664 34.0138333,0.1925 L19.734,7.33333333 L9.16666667,7.33333333 C4.10405646,7.33333333 0,11.4373898 0,16.5 C0,21.5626102 4.10405646,25.6666667 9.16666667,25.6666667 L19.734,25.6666667 L34.0138333,32.8166667 C34.5837412,33.1014624 35.2606401,33.0699651 35.8016385,32.7334768 C36.3426368,32.3969885 36.6701539,31.8037627 36.6666942,31.1666667 L36.6666942,1.83333333 C36.6666942,1.19744715 36.3370375,0.607006911 35.7958333,0.273166667 Z"></path>
                                                    <path d="M38.5,11 L38.5,22 C41.5375661,22 44,19.5375661 44,16.5 C44,13.4624339 41.5375661,11 38.5,11 Z" opacity="0.601050967"></path>
                                                    <path d="M18.5936667,29.3333333 L10.6571667,29.3333333 L14.9361667,39.864 C15.7423448,41.6604248 17.8234451,42.4993948 19.6501416,41.764381 C21.4768381,41.0293672 22.3968823,38.982817 21.7341667,37.1286667 L18.5936667,29.3333333 Z" opacity="0.601050967"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="card-footer pb-3 pt-2 z-index-3">
                            <h4 class="text-white mb-1">Cultural</h4>
                            <p class="text-white text-xs font-weight-bolder text-uppercase opacity-7">257 spots</p>
                        </div>
                        <span class="mask bg-gradient-info border-radius-xl z-index-2 opacity-6"></span>
                    </div>
                    <div class="card h-100 card-background mt-4 align-items-start">
                        <div class="full-background" style="background-image: url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/greece.jpg&#39;)"></div>
                        <div class="card-body z-index-3">
                            <div class="icon icon-md">
                                <svg width="30px" height="30px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>customer-support</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(1.000000, 0.000000)">
                                                    <path d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" opacity="0.59858631"></path>
                                                    <path d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
                                                    <path d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="card-footer pb-3 pt-2 z-index-3">
                            <h4 class="text-white mb-1">Popularity</h4>
                            <p class="text-white text-xs font-weight-bolder text-uppercase opacity-7">363 spots</p>
                        </div>
                        <span class="mask bg-gradient-primary border-radius-xl z-index-2 opacity-6"></span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex flex-column">
                    <div class="card card-background align-items-start">
                        <div class="full-background" style="background-image: url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/city.jpg&#39;)"></div>
                        <div class="card-body z-index-3">
                            <div class="icon icon-md">
                                <svg width="30px" height="30px" viewBox="0 0 52 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>sound-wave</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-2015.000000, -596.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g id="sound-wave" transform="translate(299.000000, 305.000000)">
                                                    <path d="M15.2941176,30.5882353 C14.6024837,30.5882353 13.9754248,30.1667974 13.7154248,29.5210458 L8.11777778,15.5269281 L6.51189542,17.9366013 C6.19581699,18.4090196 5.66562092,18.6928105 5.09803922,18.6928105 L0,18.6928105 L0,15.2941176 L4.18888889,15.2941176 L7.08287582,10.9522876 C7.43294118,10.4288889 8.03281046,10.1467974 8.67346405,10.2045752 C9.30052288,10.2708497 9.84261438,10.6769935 10.0754248,11.263268 L15.0969935,23.8214379 L22.1696732,1.19294118 C22.3905882,0.482614379 23.0465359,0 23.7908497,0 C23.792549,0 23.792549,0 23.7942484,0 C24.5385621,0.00169934641 25.1962092,0.487712418 25.4154248,1.19973856 L31.2305882,20.1015686 L34.3267974,15.9738562 C34.6462745,15.5456209 35.1509804,15.2941176 35.6862745,15.2941176 L40.7843137,15.2941176 L40.7843137,18.6928105 L36.5359477,18.6928105 L31.9477124,24.8104575 C31.5653595,25.3202614 30.9298039,25.5717647 30.2959477,25.4647059 C29.6671895,25.3542484 29.1522876,24.9005229 28.9636601,24.2904575 L23.7772549,7.43803922 L16.9152941,29.3952941 C16.7011765,30.0818301 16.0792157,30.5593464 15.3603922,30.5865359 C15.3366013,30.5882353 15.3162092,30.5882353 15.2941176,30.5882353 Z"></path>
                                                    <path d="M26.5098039,34.6666667 C25.8181699,34.6666667 25.1911111,34.2452288 24.9311111,33.5994771 L19.3334641,19.6053595 L17.7275817,22.0150327 C17.4115033,22.487451 16.8813072,22.7712418 16.3137255,22.7712418 L11.2156863,22.7712418 L11.2156863,19.372549 L15.4045752,19.372549 L18.2985621,15.030719 C18.6486275,14.5073203 19.2484967,14.2252288 19.8891503,14.2830065 C20.5162092,14.349281 21.0583007,14.7554248 21.2911111,15.3416993 L26.3126797,27.8998693 L33.3853595,5.27137255 C33.6062745,4.56104575 34.2622222,4.07843137 35.0065359,4.07843137 C35.0082353,4.07843137 35.0082353,4.07843137 35.0099346,4.07843137 C35.7542484,4.08013072 36.4118954,4.56614379 36.6311111,5.27816993 L42.4462745,24.18 L45.5424837,20.0522876 C45.8619608,19.6240523 46.3666667,19.372549 46.9019608,19.372549 L52,19.372549 L52,22.7712418 L47.751634,22.7712418 L43.1633987,28.8888889 C42.7810458,29.3986928 42.1454902,29.6501961 41.511634,29.5431373 C40.8828758,29.4326797 40.3679739,28.9789542 40.1793464,28.3688889 L34.9929412,11.5164706 L28.1309804,33.4737255 C27.9168627,34.1602614 27.294902,34.6377778 26.5760784,34.6649673 C26.5522876,34.6666667 26.5318954,34.6666667 26.5098039,34.6666667 Z" id="Path-Copy" opacity="0.604957217"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="card-footer pb-3 pt-5 z-index-3">
                            <h4 class="text-white mb-1">Modern Life</h4>
                            <p class="text-white text-xs font-weight-bolder text-uppercase opacity-7">117 spots</p>
                        </div>
                        <span class="mask bg-gradient-info border-radius-xl z-index-2 opacity-6"></span>
                    </div>
                    <div class="card card-background mt-4 align-items-start">
                        <div class="full-background" style="background-image: url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laught.jpg&#39;)"></div>
                        <div class="card-body z-index-3">
                            <div class="icon icon-md">
                                <svg width="30px" height="30px" viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>time-alarm</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-2319.000000, -440.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g id="time-alarm" transform="translate(603.000000, 149.000000)">
                                                    <path d="M18.8086957,4.70034783 C15.3814926,0.343541521 9.0713063,-0.410050841 4.7145,3.01715217 C0.357693695,6.44435519 -0.395898667,12.7545415 3.03130435,17.1113478 C5.53738466,10.3360568 11.6337901,5.54042955 18.8086957,4.70034783 L18.8086957,4.70034783 Z" opacity="0.6"></path>
                                                    <path d="M38.9686957,17.1113478 C42.3958987,12.7545415 41.6423063,6.44435519 37.2855,3.01715217 C32.9286937,-0.410050841 26.6185074,0.343541521 23.1913043,4.70034783 C30.3662099,5.54042955 36.4626153,10.3360568 38.9686957,17.1113478 Z" opacity="0.6"></path>
                                                    <path d="M34.3815652,34.7668696 C40.2057958,27.7073059 39.5440671,17.3375603 32.869743,11.0755718 C26.1954189,4.81358341 15.8045811,4.81358341 9.13025701,11.0755718 C2.45593289,17.3375603 1.79420418,27.7073059 7.61843478,34.7668696 L3.9753913,40.0506522 C3.58549114,40.5871271 3.51710058,41.2928217 3.79673036,41.8941824 C4.07636014,42.4955431 4.66004722,42.8980248 5.32153275,42.9456105 C5.98301828,42.9931963 6.61830436,42.6784048 6.98113043,42.1232609 L10.2744783,37.3434783 C16.5555112,42.3298213 25.4444888,42.3298213 31.7255217,37.3434783 L35.0188696,42.1196087 C35.6014207,42.9211577 36.7169135,43.1118605 37.53266,42.5493622 C38.3484064,41.9868639 38.5667083,40.8764423 38.0246087,40.047 L34.3815652,34.7668696 Z M30.1304348,25.5652174 L21,25.5652174 C20.49574,25.5652174 20.0869565,25.1564339 20.0869565,24.6521739 L20.0869565,15.5217391 C20.0869565,15.0174791 20.49574,14.6086957 21,14.6086957 C21.50426,14.6086957 21.9130435,15.0174791 21.9130435,15.5217391 L21.9130435,23.7391304 L30.1304348,23.7391304 C30.6346948,23.7391304 31.0434783,24.1479139 31.0434783,24.6521739 C31.0434783,25.1564339 30.6346948,25.5652174 30.1304348,25.5652174 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="card-footer pb-3 pt-2 z-index-3">
                            <h4 class="text-white mb-1">Good Vibes</h4>
                            <p class="text-white text-xs font-weight-bolder text-uppercase opacity-7">215 spots</p>
                        </div>
                        <span class="mask bg-gradient-primary border-radius-xl z-index-2 opacity-6"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-sm-7 mt-5">
        <div class="container-fluid px-0">
            <div class="row justify-content-center text-center">
                <div class="col-3 px-md-0"></div>
                <div class="col-12 position-relative">
                    <div class="row mt-7">
                        <div class="col-xl-3"></div>
                        <div class="col-xl-5 col-md-8 col-12 text-start">
                            <div class="ps-5 me-3 text-start border-radius-lg">
                                <h2>We Offer </h2>
                                <p class="text-dark text-lg mt-3">
                                    Learning TVET online has never been easier.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-info-soft bottom-0">
                        <div class="row">
                            <div class="col-xl-3 position-relative">
                                <img class="w-100 border-radius-lg border-top-start-radius-0 border-bottom-start-radius-0 start-0 position-absolute max-width-300 mt-n11 d-xl-block d-none" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/new-office.jpg" alt="image">
                            </div>
                            <div class="col-xl-9">
                                <div class="row ps-3">
                                    <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                        <div class="p-3 text-start border-radius-lg">
                                            <div class="icon icon-shape icon-md bg-gradient-primary shadow text-center">
                                                <svg width="30px" height="18px" viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mt-3">
                                                    <title>basket</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-1869.000000, -741.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g id="basket" transform="translate(153.000000, 450.000000)">
                                                                    <path d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z" opacity="0.595377604"></path>
                                                                    <path d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h5 class="mt-3">Free & Paid Courses </h5>
                                            <p class="text-justify">Get straight to growing your business. We handle everything to sell online. So you can focus on your business rather managing the infrastructure.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                        <div class="p-3 text-start bg-white border-radius-lg shadow-lg">
                                            <div class="icon icon-shape icon-md bg-gradient-primary shadow text-center">
                                                <svg width="30px" height="18px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mt-3">
                                                    <title>credit-card</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g id="credit-card" transform="translate(453.000000, 454.000000)">
                                                                    <path d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                    <path d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h5 class="mt-3">Subscribe For Speed</h5>
                                            <p class="text-justify">Get a holistic and detailed view of your business to better understand sales, orders, and customers to better tailor your products.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                        <div class="p-3 text-start border-radius-lg">
                                            <div class="icon icon-shape icon-md bg-gradient-primary shadow text-center">
                                                <svg width="30px" height="18px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mt-3">
                                                    <title>spaceship</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(4.000000, 301.000000)">
                                                                    <path d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z">
                                                                    </path>
                                                                    <path d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z">
                                                                    </path>
                                                                    <path d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                                                                    <path d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" id="color-3" opacity="0.598539807"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h5 class="mt-3">Teach With Us</h5>
                                            <p class="text-justify">We don&#039;t keep your money! The payment goes to you directly as soon as a buyer pays.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                        <img class="w-10 end-10 position-absolute mt-n6" src="https://www.donner.africa/themes/_selling/default/assets/img/pattern-points.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-4 position-relative">

        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5 p-5 ms-lg-auto">
                    <div class="p-3">
                        <img class="w-100 border-radius-md" src="" alt="First slide">
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
                            <!-- <img src="../../assets/img/logos/white-logos/logo-spotify-white.svg"> -->
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
    </section>
    <!-- -------   START PRE-FOOTER 6 - title & description and input    -------- -->
    <div class="py-8">
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-2 col-md-4 col-6 mb-4 ms-auto">
                    <!-- <img class="w-100 opacity-7" src="../../assets/img/logos/medium-logos/logo-apple.svg"> -->
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <!-- <img class="w-100 opacity-7" src="../../assets/img/logos/medium-logos/logo-mailchimp.svg"> -->
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <!-- <img class="w-100 opacity-7" src="../../assets/img/logos/medium-logos/logo-behance.svg"> -->
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <!-- <img class="w-100 opacity-7" src="../../assets/img/logos/medium-logos/logo-mailchimp.svg"> -->
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4 me-auto">
                    <!-- <img class="w-100 opacity-7" src="../../assets/img/logos/medium-logos/logo-nasa.svg"> -->
                </div>
            </div>
        </div>
    </div>
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
            searchString: '',
        };
    },
    methods: {
        search() {
            return;
        },
    },

}
</script>

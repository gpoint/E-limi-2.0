<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3">
    <div class="container">
        <RouterLink to="/" class="navbar-brand" href="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
            <img height="40" src="img/logo.png" alt="E-limi">
        </RouterLink>
        <RouterLink to="/" href="https://www.creative-tim.com/product/soft-ui-design-system-pro#pricingCard" class="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">Buy Now</RouterLink>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </span>
        </button>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
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
                    <RouterLink to="/pricing" href="https://www.creative-tim.com/product/soft-ui-design-system-pro#pricingCard" class="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1" role="button">Subscribe</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- End Navbar -->
</template>

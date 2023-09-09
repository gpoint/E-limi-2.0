<template>
<!-- Navbar Light -->
      <nav
        class="navbar navbar-expand-lg blur blur-rounded my-3 top-0 border-bottom py-3 z-index-3 shadow my-3 py-2 start-0 end-0 mx-9 px-1 d-none d-md-block">
        <div class="container">
        <RouterLink to="/" class="navbar-brand" href="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
            <img height="40" src="/img/logo.png" alt="E-limi">
        </RouterLink>
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
        </div>
    </div>
      </nav>
      <!-- End Navbar -->

<!-- End Navbar -->
</template>

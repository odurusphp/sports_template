// Header
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- Navigation bar -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top pt-2" id="navbar">
            <div class="container">
                <a class="navbar-brand navbar-brand-modified" href="#"><img src="img/logo.png" class="w-100" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onclick="makeDark()">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarScroll">
                <ul class="navbar-nav w-100 justify-content-center my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: auto;">
                    <li class="nav-item me-lg-4">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="our-facilities.html">Facilities</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="our-shop.html">Shop</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="contact-us.html">Contact</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
                    </li>
                </ul>
                <i class="fa fa-search text-success"></i>
                <a href="signup.html" class="btn btn-outline-success border-2 ms-2 px-4 py-0 fs-6 text-nowrap"> SIGN UP </a>
                </div>
            </div>
        </nav>
      `;
    }
}

// Footer
class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <!-- Footer -->
        <section class="container text-secondary py-4">
            <div class="row">
                <div class="col-md mb-4">
                    <span class="h4 mb-md-5 d-block text-white">Links</span>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Social media</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Contact</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Overons</a></li>
                    </ul>           
                </div>
                <div class="col-md mb-4">
                    <span class="h4 mb-md-5 d-block text-white">Company</span>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Terms & condition</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Social media</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Policy</a></li>
                    </ul>                
                </div>
                <div class="col-md mb-4">
                    <span class="h4 mb-md-5 d-block text-white">Get in touch</span>
                    <ul class="list-unstyled text-white">
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Overons</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Social media</a></li>
                    </ul>            
                </div>
                <div class="col-md d-flex flex-column justify-content-between mb-4 order-md-first text-center text-md-start">
                    <a class="navbar-brand" href="#"><img src="img/logo.png" class="w-100" style="max-width: 8rem;" alt=""></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div><i class="fa-brands fa-facebook-f me-3 fs-3"></i> <i class="fa-brands fa-twitter me-3 fs-3"></i> <i class="fa-brands fa-instagram fs-3"></i></div>          
                </div>
            </div>
        </section>  
      `;
    }
}


// Client dashboard top bar
class DashboardTopbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <!-- Top Bar -->
        <div class="w-100 bg-white d-flex p-2 fs-small flex-column">
            <div class="w-100 d-flex fs-small align-items-center">
                <!-- Toggler -->
                <div class="navbar-light me-3 d-md-none">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onclick="showSidebar()">
                        <span class="navbar-toggler-icon" style="height: 25px; width: 25px;"></span>
                        </button>
                </div>

                <div class="d-flex flex-grow-1 justify-content-end">
                    <!-- Search bar -->
                    <div id="searchbarSmall" class="input-group border bg-white w-auto flex-sm-grow-1 d-sm-flex" style="border-radius: 40px;">
                        <input type="text" style="border-radius: inherit; border-top-right-radius: 0; border-bottom-right-radius: 0;" class="form-control border-0 me-2 py-1 fs-small d-none d-sm-block" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text bg-transparent border-0 btn py-1 py-sm-1" onclick="showSearch()" id="basic-addon2" style="border-radius: inherit;"><i class="fa fa-search text-light fs-6"></i></span>
                    </div>

                    <!-- Cart -->
                    <div class="align-self-center mx-2 position-relative btn p-0">
                        <i class="fa-solid fa-cart-shopping text-light fs-6"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-green fs-small d-flex justify-content-center align-items-center" style="height: 12px; width: 12px; font-size: 10px; margin-top: 3px;"> 2 </span>
                    </div>

                    <!-- Notifications -->
                    <div class="align-self-center mx-3 position-relative btn p-0">
                        <i class="fa-solid fa-bell text-light fs-6"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-green fs-small d-flex justify-content-center align-items-center" style="height: 12px; width: 12px; font-size: 10px; margin-top: 4px; margin-left: -2px;"> 9 </span>
                    </div>

                    <!-- User -->
                    <div class="bs-2 d-flex align-items-center border-start ps-2">
                        <p class="text-nowrap m-0 fw-bold me-2 ms-4 d-none d-sm-block">Manuel Nanor</p>
                        <div class="border border-2 border-secondary rounded-circle overflow-hidden d-flex align-items-center justify-content-center" style="height: 35px; width: 35px;">
                            <img src="/img/user.png" class="rounded-circle" style="transform: scale(.70);">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search bar stretched-->
            <div id="searchbar" class="input-group border bg-white w-100 d-none d-sm-none mt-2" style="border-radius: 40px;">
                <input type="text" id="searchbarInput" style="border-radius: inherit; border-top-right-radius: 0; border-bottom-right-radius: 0;" class="form-control border-0 me-2 py-1 fs-small" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text bg-white border-0 btn" id="basic-addon2" style="border-radius: inherit;"><i class="fa fa-search text-secondary"></i></span>
            </div>
        </div>
      `;
    }
}


// Register components
customElements.define('page-header', Header);
customElements.define('page-footer', Footer);

customElements.define('dashboard-top-bar', DashboardTopbar);
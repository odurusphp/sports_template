// Header
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- Navigation bar -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top pt-2" id="navbar">
            <div class="container-md">
                <a class="navbar-brand navbar-brand-modified" href="index.html"><img src="img/logo.png" class="w-100" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onclick="makeDark()">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarScroll">
                <ul class="navbar-nav w-100 justify-content-center my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: auto;">
                    <li class="nav-item me-lg-4">
                    <a class="nav-link" href="index.html" id="home">Home</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="about.html" id="about">About</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="our-facilities.html" id="facilities">Facilities</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="our-shop.html" id="shop">Shop</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="contact-us.html" id="contact">Contact</a>
                    </li>
                    <li class="nav-item  me-lg-4">
                    <a class="nav-link" href="cart.html" id="cart"><i class="fa-solid fa-cart-shopping"></i></a>
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
        <section class="container-md text-secondary py-4">
            <div class="row">
                <div class="col-sm mb-4">
                    <span class="h4 mb-md-5 d-block text-white">Links</span>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Social media</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Contact</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Overons</a></li>
                    </ul>           
                </div>
                <div class="col-sm mb-4">
                    <span class="h4 mb-md-5 d-block text-white">Company</span>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Terms & condition</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Social media</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Policy</a></li>
                    </ul>                
                </div>
                <div class="col-sm mb-4">
                    <span class="h4 mb-md-5 d-block text-white">Get in touch</span>
                    <ul class="list-unstyled text-white">
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Overons</a></li>
                        <li class="mb-2"><a href="#" class="text-decoration-none link-secondary">Social media</a></li>
                    </ul>            
                </div>
                <div class="col-sm d-flex flex-column justify-content-between mb-4 order-sm-first text-center text-md-start">
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
                    <div id="searchbarSmall" class="input-group border-visible-sm-none bg-white w-auto flex-sm-grow-1 d-sm-flex" style="border-radius: 40px;">
                        <input type="text" style="border-radius: inherit; border-top-right-radius: 0; border-bottom-right-radius: 0;" class="form-control border-0 me-2 py-1 fs-small d-none d-sm-block bg-transparent" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text bg-transparent border-0 btn py-1 py-sm-1" onclick="showSearch()" id="basic-addon2" style="border-radius: inherit;"><i class="fa fa-search text-light fs-6"></i></span>
                    </div>

                    <!-- Cart -->
                    <div class="align-self-center mx-2 position-relative btn p-0">
                        <i class="fa-solid fa-cart-shopping text-light fs-custom"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-green fs-small d-flex justify-content-center align-items-center" style="height: 12px; width: 12px; font-size: 10px; margin-top: 3px;"> 2 </span>
                    </div>

                    <!-- Notifications -->
                    <div class="align-self-center mx-3 position-relative btn p-0">
                        <i class="fa-solid fa-bell text-light fs-custom"></i>
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


// Admin dashboard sidebar
class AdminSidebar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <!-- Sidebar -->
        <div class="bg-dark vh-100 sidebar text-center text-secondary" id="sidebar">
            <button type="button" class="btn-close btn-close-white float-end me-2 mt-2 d-md-none" aria-label="Close" onclick="hideSidebar()"></button>
            <a class="navbar-brand navbar-brand-modified" href="#"><img src="/img/logo.png" class="w-50 mt-3" alt=""></a>
            <ul class="list-unstyled mt-4 p-3">
                <a href="index.html" id="dashboard" class="px-5 my-1 fw-bold py-1 fs-small text-decoration-none link-secondary w-100 btn text-start text-nowrap"> <i class="fa-solid fa-layer-group me-2"></i> Dashboard</a>
                <a href="staff.html" id="staff" class="px-5 my-1 fw-bold py-1 fs-small text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-user-group me-2"></i> Staff</a></li>
                <a href="facilities.html" id="sidebarFacilities" class="px-5 my-1 fw-bold py-1 fs-small text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-landmark me-2"></i> Facilities</a></li>
                <a href="bookings.html" id="bookings" class="px-5 my-1 fw-bold py-1 fs-small text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-receipt me-2"></i> Bookings</a></li>
                <a href="members.html" id="members" class="px-5 my-1 fw-bold py-1 fs-small text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-regular fa-id-card me-2"></i> Members</a></li>
                <a href="accounts.html" id="accounts" class="px-5 fw-bold py-1 my-1 fs-small text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-circle-user me-2"></i> Account</a></li>
                <a href="#" id="settings" class="px-5 fw-bold py-1 my-1 fs-small text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-gears me-2"></i> Settings</a></li>
            </ul>
        </div>
      `;
    }
}


// Client dashboard sidebar
class ClientSidebar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <!-- Sidebar -->
        <div class="bg-dark vh-100 sidebar text-center text-secondary" id="sidebar">
                <button type="button" class="btn-close btn-close-white float-end me-2 mt-2 d-md-none" aria-label="Close" onclick="hideSidebar()"></button>
                <a class="navbar-brand navbar-brand-modified" href="#"><img src="/img/logo.png" class="w-50 mt-3" alt=""></a>
                <ul class="list-unstyled mt-4 p-3">
                    <a href="index.html" id="dashboard" class="px-5 my-1 fw-bold py-1 fs-small  text-decoration-none link-secondary w-100 btn text-start text-nowrap"> <i class="fa-solid fa-layer-group me-2"></i> Dashboard</a>
                    <a href="facilities.html" id="sidebarFacilities" class="px-5 my-1 fw-bold py-1 fs-small  text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-landmark me-2"></i> Facilities</a></li>
                    <a href="bookings.html" id="bookings" class="px-5 my-1 fw-bold py-1 fs-small  text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-receipt me-2"></i> Bookings</a></li>
                    <a href="plan.html" id="plan" class="px-5 my-1 fw-bold py-1 fs-small  text-decoration-none link-secondary btn w-100 text-start text-nowrap"> <i class="fa-solid fa-id-card me-2"></i> Membership plan</a></li>
                    <a href="billing.html" id="billing" class="px-5 my-1 fw-bold py-1 fs-small  text-decoration-none link-secondary btn w-100 text-start"> <i class="fa-solid fa-credit-card text me-2"></i> Billings</a></li>
                    <a href="profile.html" id="profile" class="px-5 fw-bold py-1 my-1 fs-small  text-decoration-none link-secondary btn w-100 text-start text-nowrap"> <i class="fa-solid fa-gears me-2"></i> Profile Settings</a></li>
                </ul>
            </div>
      `;
    }
}


// Register components
customElements.define('page-header', Header);
customElements.define('page-footer', Footer);

customElements.define('dashboard-top-bar', DashboardTopbar);

customElements.define('admin-sidebar', AdminSidebar);
customElements.define('client-sidebar', ClientSidebar);
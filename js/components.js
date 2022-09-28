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

// Register components
customElements.define('page-header', Header);
customElements.define('page-footer', Footer);

/**
 * 
 * @param {string} activePage 
 */
function renderNavbar(activePage) {
  /* Navigation */
  const navLinks = [
    { id: 'home',         label: 'Home',        href: 'index.html' },
    { id: 'destinations', label: 'Destinations', href: 'destinations.html' },
    { id: 'packages',     label: 'Packages',     href: 'packages.html' },
    { id: 'about',        label: 'About Us',     href: 'about.html' },
  ];

  /*  nav link  */
  const linksHTML = navLinks.map(link => `
    <li class="nav-item">
      <a href="${link.href}"
         class="nav-link${link.id === activePage ? ' active' : ''}">
        ${link.label}
      </a>
    </li>`).join('');

  document.getElementById('navbar-placeholder').innerHTML = `
    <nav class="site-navbar navbar navbar-expand-lg">
      <div class="container">

        <!-- Logo -->
        <a class="navbar-brand" href="index.html">
          Velora <span>Travels</span>
        </a>

        <!-- Mobile hamburger  -->
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#siteNavMenu"
                aria-controls="siteNavMenu"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav links -->
        <div class="collapse navbar-collapse" id="siteNavMenu">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            ${linksHTML}
            <li class="nav-item">
              <a href="contact.html"
                 class="nav-link nav-cta${activePage === 'contact' ? ' active' : ''}">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>`;
}



function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-5">

          <!-- Col 1: Branding + social links -->
          <div class="col-lg-4 col-md-6">
            <span class="footer-brand">Velora <span>Travels</span></span>
            <p class="footer-tagline">
              Crafting extraordinary journeys since 2018.
              We believe every trip should tell a story worth remembering.
            </p>
            <div class="social-row">
              <a href="#" class="social-btn" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-btn" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-btn" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-btn" aria-label="Pinterest">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          <!-- Col 2: Explore links -->
          <div class="col-6 col-lg-2 col-md-3">
            <p class="footer-heading">Explore</p>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="destinations.html">Destinations</a></li>
              <li><a href="packages.html">Packages</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <!-- Col 3: Top destinations -->
          <div class="col-6 col-lg-2 col-md-3">
            <p class="footer-heading">Destinations</p>
            <ul class="footer-links">
              <li><a href="destinations.html">Bali</a></li>
              <li><a href="destinations.html">Paris</a></li>
              <li><a href="destinations.html">Maldives</a></li>
              <li><a href="destinations.html">Japan</a></li>
              <li><a href="destinations.html">Kenya</a></li>
            </ul>
          </div>

          <!-- Col 4: Newsletter -->
          <div class="col-lg-4 col-md-6">
            <p class="footer-heading">Newsletter</p>
            <p style="font-size:0.84rem; margin-bottom:14px; color:rgba(255,255,255,0.45);">
              Get exclusive travel deals and inspiration straight to your inbox.
            </p>
            <div class="newsletter-row">
              <input type="email" placeholder="your@email.com" aria-label="Email for newsletter"/>
              <button type="button">Subscribe</button>
            </div>
          </div>

        </div>

        <!-- Footer bottom bar -->
        <div class="footer-bottom">
          <p style="margin:0;">&copy; 2026 Velora Travels. All rights reserved.</p>
          <p style="margin:0;">
            Crafted with <span style="color:var(--color-primary);">&#9829;</span>
            for extraordinary travellers
          </p>
        </div>

      </div>
    </footer>`;
}
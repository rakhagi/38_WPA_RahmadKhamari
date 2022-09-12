<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top">
  <div class="container">
    <img src="@/assets/logo1.png" width="40">
    <a class="navbar-brand mx-2" href="#">OX Studio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item active">
              <div class="nav-link">
                <router-link to="/"> Home </router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <router-link to="/ourworks"> Our Works </router-link>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                ><router-link to="/testi"> Testimonials </router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link"
                ><router-link to="/about-us"> About Us </router-link></a
              >
            </li>
      </ul>
      <div class="btn-group">
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Contact Us
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
 <li>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=6285731112797&text=Hai%20kak Diana...%20saya%20tertarik%20untuk%20memesan%20sesuatu...."
                      ><img
                        src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png"
                        style="width: 19px; height 19px; margin: 5px"
                      />Admin 1</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item"  target="_blank"
                      href="https://api.whatsapp.com/send?phone=628970660647&text=Hai%20kak Lia...%20saya%20tertarik%20untuk%20memesan%20sesuatu...."
                      ><img
                        src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png"
                        style="width: 19px; height 19px; margin: 5px"
                      />Admin 2</a
                    >
                  </li>
  </ul>
</div>

    </div>
  </div>
</nav>
</template>
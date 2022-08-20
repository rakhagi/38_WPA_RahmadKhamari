<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid fixed-top bg-light border" style="height: 65px">
      <a href="http://localhost:8080"
        ><img
          class="ikon-navbar"
          alt="ox"
          src="https://st2.depositphotos.com/33928496/47712/v/450/depositphotos_477121454-stock-illustration-logo-monogram-slice-rounded-modern.jpg?forcejpeg=true"
      /></a>
      <a
        class="navbar-brand bg-light"
        style="margin-left: -600px"
        href="http://localhost:8080"
        >OX Studio</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="justify-content-end">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <div class="nav-link home">
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
            <li class="nav-item">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

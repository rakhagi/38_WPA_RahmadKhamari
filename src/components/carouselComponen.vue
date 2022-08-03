<template>
<div class="container-fluid p-5 m-3" style="width: 700px">
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide "
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="https://filebroker-cdn.lazada.co.id/kf/S57fba52e8ec14e8589ecbee99637317fr.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block ">
           
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
            </div>
      
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="https://filebroker-cdn.lazada.co.id/kf/S33238869dda44df58f39a86ba47fe3a0p.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q0OS8xMzAvMjM2NzczODA4NC80NTI3MS9iYjZhODRiZi81ZTRjYWFkME5iZjQzMzgxNA.jpg.dpg.webp   "
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>  
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</template>

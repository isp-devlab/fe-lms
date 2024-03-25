<script setup>
import headerComponent from "../components/Header.vue";
import footerComponent from "../components/Footer.vue";
</script>

<template>
  <body
    id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed aside-enabled sidebar-enabled bg-light"
  >
    <div class="d-flex flex-column flex-root">
      <div class="page d-flex flex-column flex-column-fluid">
        <headerComponent> </headerComponent>

        <div class="container-xxl my-15">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="mx-auto">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/img/imgslider.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/img/logo.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/img/logo.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div class="">
                    <button
                      class="carousel-control-prev btn btn-danger btn-icon"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="card shadow-none border-0 mt-5">
                <div class="card-body">
                  <div
                    class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                    style="
                      background-image: url('https://preview.keenthemes.com/metronic8/demo5/assets/media/stock/600x400/img-23.jpg');
                    "
                  ></div>
                  <div class="mt-5">
                    <a
                      href="#"
                      class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                      >25 Products Mega Bundle with 50% off discount amazing</a
                    >
                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3">
                      We’ve been focused on making a the from also not been eye
                    </div>
                    <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
                      <span
                        class="badge border-dashed fs-2 fw-bolder text-dark p-2"
                      >
                        <span class="fs-6 fw-bold text-gray-400">$</span
                        >28</span
                      >
                      <a href="#" class="btn btn-primary">Purchase</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card shadow-none border-0 mt-5">
                <div class="card-body">
                  <div
                    class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                    style="
                      background-image: url('https://preview.keenthemes.com/metronic8/demo5/assets/media/stock/600x400/img-23.jpg');
                    "
                  ></div>
                  <div class="mt-5">
                    <a
                      href="#"
                      class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                      >25 Products Mega Bundle with 50% off discount amazing</a
                    >
                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3">
                      We’ve been focused on making a the from also not been eye
                    </div>
                    <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
                      <span
                        class="badge border-dashed fs-2 fw-bolder text-dark p-2"
                      >
                        <span class="fs-6 fw-bold text-gray-400">$</span
                        >28</span
                      >
                      <a href="#" class="btn btn-primary">Purchase</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card shadow-none border-0 mt-5">
                <div class="card-body">
                  <div
                    class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                    style="
                      background-image: url('https://preview.keenthemes.com/metronic8/demo5/assets/media/stock/600x400/img-23.jpg');
                    "
                  ></div>
                  <div class="mt-5">
                    <a
                      href="#"
                      class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
                      >25 Products Mega Bundle with 50% off discount amazing</a
                    >
                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3">
                      We’ve been focused on making a the from also not been eye
                    </div>
                    <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
                      <span
                        class="badge border-dashed fs-2 fw-bolder text-dark p-2"
                      >
                        <span class="fs-6 fw-bold text-gray-400">$</span
                        >28</span
                      >
                      <a href="#" class="btn btn-primary">Purchase</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footerComponent> </footerComponent>
      </div>
    </div>
  </body>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {

//     },
// })
</script>


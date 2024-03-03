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
                            class="carousel-control-prev btn btn-danger btn-icon "
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
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <img
                            src="../assets/img/avatars/150-26.jpg"
                            class="card-img-top"
                            alt="..."
                            />
                            <div class="card-body">
                            <h5 class="card-title">Full StackWebDeveloper</h5>
                            <p class="card-text">Rp.0</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <img
                            src="../assets/img/avatars/150-26.jpg"
                            class="card-img-top"
                            alt="..."
                            />
                            <div class="card-body">
                            <h5 class="card-title">Full StackWebDeveloper</h5>
                            <p class="card-text">Rp.0</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <img
                            src="../assets/img/avatars/150-26.jpg"
                            class="card-img-top"
                            alt="..."
                            />
                            <div class="card-body">
                            <h5 class="card-title">Full StackWebDeveloper</h5>
                            <p class="card-text">Rp.0</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <img
                            src="../assets/img/avatars/150-26.jpg"
                            class="card-img-top"
                            alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Full StackWebDeveloper</h5>
                                <p class="card-text">Rp.0</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
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


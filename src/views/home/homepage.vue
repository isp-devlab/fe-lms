<script setup>
import Header from '../../components/Header.vue'
import footercomponent from '../../components/footer.vue'
</script>


<template>
    <Header></Header>

    <!-- 
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/logo.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item active">
                <img src="../assets/logo.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item active">
                <img src="../assets/logo.png" class="d-block w-100" alt="...">
            </div>
        </div>
    </div> -->


    <div id="swapzoneExchangeWidget" data-logo="true" data-size="full" data-refid="0N_zIkTl5G" data-from="btc"
        data-to="eth"></div>

    <div class="mx-auto" style="width: 500px">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../assets/img/imgslider.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/img/logo.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/img/logo.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div class="container overflow-hidden">
        <div class="row gx-5">
            <div class="col">
                <div class="card" style="width: 30rem;">
                    <img src="../../assets/img/avatars/150-26.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Full StackWebDeveloper</h5>
                        <p class="card-text">Rp.0</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 30rem;">
                    <img src="../../assets/img/avatars/150-26.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Full StackWebDeveloper</h5>
                        <p class="card-text">Rp.0</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 30rem;">
                    <img src="../../assets/img/avatars/150-26.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Full StackWebDeveloper</h5>
                        <p class="card-text">Rp.0</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <footercomponent></footercomponent>
</template>
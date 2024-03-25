<script setup>
import headerComponet from '../../components/Header.vue'
import footerComponent from '../../components/Footer.vue'
import accountCard from './component/AccountCard.vue'
</script>

<template>
  <body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed aside-enabled sidebar-enabled bg-light">
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-column flex-column-fluid">
				
        <headerComponet>
        </headerComponet>

				<div class="container-xxl my-15">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="card shadow-none border-0">
									<accountCard :setting="true">
										<template #nav>
											<div class="d-flex overflow-auto h-55px">
											<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
												<li class="nav-item">														
													<router-link :to="{name: 'profil.setelan'}" class="nav-link text-active-primary me-6">
															Setelan
                          </router-link>
												</li>
												<li class="nav-item">
													<router-link :to="{name: 'profil.tim'}" class="nav-link text-active-primary me-6">
															Tim
                          </router-link>
												</li>
												<li class="nav-item">
													<router-link :to="{name: 'profil.kelas'}" class="nav-link text-active-primary me-6 active">
															Kelas
                          </router-link>
												</li>
											</ul>
										</div>
										</template>
        					</accountCard>
                </div>
              </div>
            </div>
						<div class="row justify-content-center">
              <div class="col-md-6 col-lg-4">
                <div class="card shadow-none border-0 mt-5">
									<div class="card-body">
                    <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style="background-image:url('https://preview.keenthemes.com/metronic8/demo5/assets/media/stock/600x400/img-23.jpg')"></div>
									  <div class="mt-5">
										  <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Start backend with AdonisJS</a>
                      <div class="fw-bold fs-5 text-gray-600 text-dark mt-3">We’ve been focused on making a the from also not been eye</div>
                      <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
										    <a href="#" class="btn btn-primary w-100">Lanjutkan Belajar</a>
									    </div>
										</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card shadow-none border-0 mt-5">
									<div class="card-body">
                    <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style="background-image:url('https://preview.keenthemes.com/metronic8/demo5/assets/media/stock/600x400/img-23.jpg')"></div>
									  <div class="mt-5">
										  <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Start backend with AdonisJS</a>
                      <div class="fw-bold fs-5 text-gray-600 text-dark mt-3">We’ve been focused on making a the from also not been eye</div>
                      <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
										    <a href="#" class="btn btn-primary w-100">Lanjutkan Belajar</a>
									    </div>
										</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card shadow-none border-0 mt-5">
									<div class="card-body">
                    <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style="background-image:url('https://preview.keenthemes.com/metronic8/demo5/assets/media/stock/600x400/img-23.jpg')"></div>
									  <div class="mt-5">
										  <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Start backend with AdonisJS</a>
                      <div class="fw-bold fs-5 text-gray-600 text-dark mt-3">We’ve been focused on making a the from also not been eye</div>
                      <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
										    <a href="#" class="btn btn-primary w-100">Lanjutkan Belajar</a>
									    </div>
										</div>
                  </div>
                </div>
              </div>
            </div>
				</div>
				
        <footerComponent>
        </footerComponent>

			</div>
		</div>

	</body>
</template>
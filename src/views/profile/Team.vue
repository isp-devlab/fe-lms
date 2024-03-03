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
													<router-link :to="{name: 'profil.tim'}" class="nav-link text-active-primary me-6 active">
															Tim
                          </router-link>
												</li>
												<li class="nav-item">
													<router-link :to="{name: 'profil.kelas'}" class="nav-link text-active-primary me-6">
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
						<div class="row justify-content-center mt-5">
              <div class="col-6">
                <div class="card shadow-none border-0">
									<div class="card-body">
                    <a href="#" class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fs-2 fw-bolder me-1">Backend Dev Batch 1</span>
                        <span class="d-flex align-items-center text-gray-400  me-5 mb-2">
                          Lorem Ipsum Dolar Sit Amet
                        </span>
                        <div class="symbol-group symbol-hover flex-nowrap pt-4">
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                            <span class="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                            <img alt="Pic" src="../../assets/img/avatars/150-10.jpg">
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Jacob Jones">
                            <img alt="Pic" src="../../assets/img/avatars/150-14.jpg">
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                            <span class="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Jane Cooper">
                            <img alt="Pic" src="../../assets/img/avatars/150-15.jpg">
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                            <span class="symbol-label bg-danger text-inverse-danger fw-bold">P</span>
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Cody Fishers">
                            <img alt="Pic" src="../../assets/img/avatars/150-17.jpg">
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="btn btn-icon bg-light">
                          <span class="svg-icon svg-icon-primary svg-icon-2x">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <polygon points="0 0 24 0 24 24 0 24"/>
                                  <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999) "/>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card shadow-none border-0">
									<div class="card-body">
                    <a href="#" class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fs-2 fw-bolder me-1">Backend Dev Batch 2</span>
                        <span class="d-flex align-items-center text-gray-400  me-5 mb-2">
                          Lorem Ipsum Dolar Sit Amet
                        </span>
                        <div class="symbol-group symbol-hover flex-nowrap pt-4">
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                            <span class="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                            <img alt="Pic" src="../../assets/img/avatars/150-10.jpg">
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Jacob Jones">
                            <img alt="Pic" src="../../assets/img/avatars/150-14.jpg">
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                            <span class="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Jane Cooper">
                            <img alt="Pic" src="../../assets/img/avatars/150-15.jpg">
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                            <span class="symbol-label bg-danger text-inverse-danger fw-bold">P</span>
                          </div>
                          <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Cody Fishers">
                            <img alt="Pic" src="../../assets/img/avatars/150-17.jpg">
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="btn btn-icon bg-light">
                          <span class="svg-icon svg-icon-primary svg-icon-2x">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <polygon points="0 0 24 0 24 24 0 24"/>
                                  <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999) "/>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
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
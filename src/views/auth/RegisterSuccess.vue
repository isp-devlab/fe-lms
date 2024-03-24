<script setup>
import headerComponet from '../../components/Header.vue'
import footerComponent from '../../components/Footer.vue'
</script>

<template>
  <body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed aside-enabled sidebar-enabled bg-light">
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-column flex-column-fluid">
				
        <headerComponet>
        </headerComponet>

				<div class="container-xxl">
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-8">
                <div class="card my-15 shadow-none border-0">
                  <div class="card-body p-10 p-md-15 my-8">
                    <div class="mb-9 text-center">
                      <img alt="Logo" src="../../assets/img/icon/email.png" class="w-100px mb-10" />
                      <h1 class="card-title fw-bolder fs-2x pb-0">Pendaftaran berhasil !!</h1>
                      <span class="text-gray-500 fs-6">Cek email anda untuk melakukan aktivasi akun</span>
                    </div>
                    <div class="text-center">
                      <span>
                            Saya telah melakukan aktivasi? 
                            <router-link :to="{name: 'auth.login'}" class="fw-bold link-underline-primary">
                              Masuk
                            </router-link>
                        </span>
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

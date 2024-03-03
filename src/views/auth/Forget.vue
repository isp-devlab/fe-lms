<script setup>
import footerComponent from '../../components/Footer.vue'
import headerComponet from '../../components/Header.vue'
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
                  <div class="card-body p-10 p-md-15">
                    <div class="mb-9">
                      <h1 class="card-title fw-bolder fs-2x pb-0">Lupa Password ?</h1>
                      <span class="text-gray-500 fs-6">Masukan email anda untuk mereset Password</span>
                    </div>
                    <div class="mb-5">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" placeholder="Email"/>
                    </div>
                     <div class="mb-5">
                      <button type="submit" class="btn btn-primary w-100">Reset Password</button>
                    </div>
                    <div class="text-center">
                      <span><router-link :to="{name: 'auth.login'}" class="fw-bold link-underline-primary">
                          Kembali
                        </router-link></span>
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
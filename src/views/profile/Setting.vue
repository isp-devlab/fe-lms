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
													<router-link :to="{name: 'profil.setelan'}" class="nav-link text-active-primary me-6 active">
															Setelan
                          </router-link>
												</li>
												<li class="nav-item">
													<router-link :to="{name: 'profil.tim'}" class="nav-link text-active-primary me-6">
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
              <div class="col-12">
                <div class="card shadow-none border-0">
									<div class="card mb-5 mb-xl-10">
									<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Setelan Akun</h3>
										</div>
									</div>
									<div id="kt_account_profile_details" class="collapse show">
										<form id="kt_account_profile_details_form" class="form">
											<div class="card-body border-top p-9">
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label fw-bold fs-6">Avatar</label>
													<div class="col-lg-8">
														<div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url(assets/media/avatars/blank.png)">
															<div class="image-input-wrapper w-125px h-125px" style="background-image: url(https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg)"></div>
															<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
																<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
																<input type="hidden" name="avatar_remove" />
															</label>
															<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
																<i class="bi bi-x fs-2"></i>
															</span>
															<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
																<i class="bi bi-x fs-2"></i>
															</span>
														</div>
														<div class="form-text">Allowed file types: png, jpg, jpeg.</div>
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Nama Lengkap</label>
													<div class="col-lg-8 fv-row">
														<input type="text" class="form-control form-control-lg form-control-solid" placeholder="Nama Lengkap" />
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-bold fs-6">No. Telepon</label>
													<div class="col-lg-8 fv-row">
														<input type="text" class="form-control form-control-lg form-control-solid" placeholder="Nomor Telepon" />
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Email</label>
													<div class="col-lg-8 fv-row">
														<input type="email" class="form-control form-control-lg form-control-solid" placeholder="Email" />
													</div>
												</div>
												<div class="text-end">
													<button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">Simpan</button>
												</div>
											</div>
										</form>
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
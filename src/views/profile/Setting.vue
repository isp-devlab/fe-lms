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
											<h3 class="fw-bolder m-0">Profile Details</h3>
										</div>
									</div>
									<div id="kt_account_profile_details" class="collapse show">
										<form id="kt_account_profile_details_form" class="form">
											<div class="card-body border-top p-9">
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label fw-bold fs-6">Avatar</label>
													<div class="col-lg-8">
														<div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url(assets/media/avatars/blank.png)">
															<div class="image-input-wrapper w-125px h-125px" style="background-image: url(assets/media/avatars/150-26.jpg)"></div>
															<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
																<i class="bi bi-pencil-fill fs-7"></i>
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
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Full Name</label>
													<div class="col-lg-8">
														<div class="row">
															<div class="col-lg-6 fv-row">
																<input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value="Max" />
															</div>
															<div class="col-lg-6 fv-row">
																<input type="text" name="lname" class="form-control form-control-lg form-control-solid" placeholder="Last name" value="Smith" />
															</div>
														</div>
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Company</label>
													<div class="col-lg-8 fv-row">
														<input type="text" name="company" class="form-control form-control-lg form-control-solid" placeholder="Company name" value="Keenthemes" />
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label fw-bold fs-6">
														<span class="required">Contact Phone</span>
														<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active"></i>
													</label>
													<div class="col-lg-8 fv-row">
														<input type="tel" name="phone" class="form-control form-control-lg form-control-solid" placeholder="Phone number" value="044 3276 454 935" />
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label fw-bold fs-6">Company Site</label>
													<div class="col-lg-8 fv-row">
														<input type="text" name="website" class="form-control form-control-lg form-control-solid" placeholder="Company website" value="keenthemes.com" />
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Language</label>
													<div class="col-lg-8 fv-row">
														<select name="language" aria-label="Select a Language" data-control="select2" data-placeholder="Select a language..." class="form-select form-select-solid form-select-lg">
															<option value="">Select a Language...</option>
															<option data-kt-flag="flags/indonesia.svg" value="id">Bahasa Indonesia - Indonesian</option>
															<option data-kt-flag="flags/malaysia.svg" value="msa">Bahasa Melayu - Malay</option>
															<option data-kt-flag="flags/canada.svg" value="ca">Català - Catalan</option>
															<option data-kt-flag="flags/czech-republic.svg" value="cs">Čeština - Czech</option>
															<option data-kt-flag="flags/netherlands.svg" value="da">Dansk - Danish</option>
															<option data-kt-flag="flags/germany.svg" value="de">Deutsch - German</option>
															<option data-kt-flag="flags/united-kingdom.svg" value="en">English</option>
															<option data-kt-flag="flags/united-kingdom.svg" value="en-gb">English UK - British English</option>
															<option data-kt-flag="flags/spain.svg" value="es">Español - Spanish</option>
															<option data-kt-flag="flags/philippines.svg" value="fil">Filipino</option>
															<option data-kt-flag="flags/france.svg" value="fr">Français - French</option>
															<option data-kt-flag="flags/gabon.svg" value="ga">Gaeilge - Irish (beta)</option>
															<option data-kt-flag="flags/greenland.svg" value="gl">Galego - Galician (beta)</option>
															<option data-kt-flag="flags/croatia.svg" value="hr">Hrvatski - Croatian</option>
															<option data-kt-flag="flags/italy.svg" value="it">Italiano - Italian</option>
															<option data-kt-flag="flags/hungary.svg" value="hu">Magyar - Hungarian</option>
															<option data-kt-flag="flags/netherlands.svg" value="nl">Nederlands - Dutch</option>
															<option data-kt-flag="flags/norway.svg" value="no">Norsk - Norwegian</option>
															<option data-kt-flag="flags/poland.svg" value="pl">Polski - Polish</option>
															<option data-kt-flag="flags/portugal.svg" value="pt">Português - Portuguese</option>
															<option data-kt-flag="flags/romania.svg" value="ro">Română - Romanian</option>
															<option data-kt-flag="flags/slovakia.svg" value="sk">Slovenčina - Slovak</option>
															<option data-kt-flag="flags/finland.svg" value="fi">Suomi - Finnish</option>
															<option data-kt-flag="flags/el-salvador.svg" value="sv">Svenska - Swedish</option>
															<option data-kt-flag="flags/virgin-islands.svg" value="vi">Tiếng Việt - Vietnamese</option>
															<option data-kt-flag="flags/turkey.svg" value="tr">Türkçe - Turkish</option>
															<option data-kt-flag="flags/greece.svg" value="el">Ελληνικά - Greek</option>
															<option data-kt-flag="flags/bulgaria.svg" value="bg">Български език - Bulgarian</option>
															<option data-kt-flag="flags/russia.svg" value="ru">Русский - Russian</option>
															<option data-kt-flag="flags/suriname.svg" value="sr">Српски - Serbian</option>
															<option data-kt-flag="flags/ukraine.svg" value="uk">Українська мова - Ukrainian</option>
															<option data-kt-flag="flags/israel.svg" value="he">עִבְרִית - Hebrew</option>
															<option data-kt-flag="flags/pakistan.svg" value="ur">اردو - Urdu (beta)</option>
															<option data-kt-flag="flags/argentina.svg" value="ar">العربية - Arabic</option>
															<option data-kt-flag="flags/argentina.svg" value="fa">فارسی - Persian</option>
															<option data-kt-flag="flags/mauritania.svg" value="mr">मराठी - Marathi</option>
															<option data-kt-flag="flags/india.svg" value="hi">हिन्दी - Hindi</option>
															<option data-kt-flag="flags/bangladesh.svg" value="bn">বাংলা - Bangla</option>
															<option data-kt-flag="flags/guam.svg" value="gu">ગુજરાતી - Gujarati</option>
															<option data-kt-flag="flags/india.svg" value="ta">தமிழ் - Tamil</option>
															<option data-kt-flag="flags/saint-kitts-and-nevis.svg" value="kn">ಕನ್ನಡ - Kannada</option>
															<option data-kt-flag="flags/thailand.svg" value="th">ภาษาไทย - Thai</option>
															<option data-kt-flag="flags/south-korea.svg" value="ko">한국어 - Korean</option>
															<option data-kt-flag="flags/japan.svg" value="ja">日本語 - Japanese</option>
															<option data-kt-flag="flags/china.svg" value="zh-cn">简体中文 - Simplified Chinese</option>
															<option data-kt-flag="flags/taiwan.svg" value="zh-tw">繁體中文 - Traditional Chinese</option>
														</select>
														<!--end::Input-->
														<!--begin::Hint-->
														<div class="form-text">Please select a preferred language, including date, time, and number formatting.</div>
														<!--end::Hint-->
													</div>
													<!--end::Col-->
												</div>
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label fw-bold fs-6">Currency</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<select name="currnecy" aria-label="Select a Timezone" data-control="select2" data-placeholder="Select a currency.." class="form-select form-select-solid form-select-lg">
															<option value="">Select a currency..</option>
															<option data-kt-flag="flags/united-states.svg" value="USD">
															<b>USD</b>&#160;-&#160;USA dollar</option>
															<option data-kt-flag="flags/united-kingdom.svg" value="GBP">
															<b>GBP</b>&#160;-&#160;British pound</option>
															<option data-kt-flag="flags/australia.svg" value="AUD">
															<b>AUD</b>&#160;-&#160;Australian dollar</option>
															<option data-kt-flag="flags/japan.svg" value="JPY">
															<b>JPY</b>&#160;-&#160;Japanese yen</option>
															<option data-kt-flag="flags/sweden.svg" value="SEK">
															<b>SEK</b>&#160;-&#160;Swedish krona</option>
															<option data-kt-flag="flags/canada.svg" value="CAD">
															<b>CAD</b>&#160;-&#160;Canadian dollar</option>
															<option data-kt-flag="flags/switzerland.svg" value="CHF">
															<b>CHF</b>&#160;-&#160;Swiss franc</option>
														</select>
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Communication</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<!--begin::Options-->
														<div class="d-flex align-items-center mt-3">
															<!--begin::Option-->
															<label class="form-check form-check-inline form-check-solid me-5">
																<input class="form-check-input" name="communication[]" type="checkbox" value="1" />
																<span class="fw-bold ps-2 fs-6">Email</span>
															</label>
															<!--end::Option-->
															<!--begin::Option-->
															<label class="form-check form-check-inline form-check-solid">
																<input class="form-check-input" name="communication[]" type="checkbox" value="2" />
																<span class="fw-bold ps-2 fs-6">Phone</span>
															</label>
															<!--end::Option-->
														</div>
														<!--end::Options-->
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-0">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label fw-bold fs-6">Allow Marketing</label>
													<!--begin::Label-->
													<!--begin::Label-->
													<div class="col-lg-8 d-flex align-items-center">
														<div class="form-check form-check-solid form-switch fv-row">
															<input class="form-check-input w-45px h-30px" type="checkbox" id="allowmarketing" checked="checked" />
															<label class="form-check-label" for="allowmarketing"></label>
														</div>
													</div>
													<!--begin::Label-->
												</div>
												<!--end::Input group-->
											</div>
											<!--end::Card body-->
											<!--begin::Actions-->
											<div class="card-footer d-flex justify-content-end py-6 px-9">
												<button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">Simpan</button>
											</div>
											<!--end::Actions-->
										</form>
										<!--end::Form-->
									</div>
									<!--end::Content-->
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
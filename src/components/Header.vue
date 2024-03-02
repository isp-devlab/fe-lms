<template>
  	<div id="kt_header" class="header align-items-stretch">
					<div class="container-xxl d-flex align-items-stretch justify-content-between">
						<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 w-lg-225px me-5">
							<a href="#">
								<img alt="Logo" src="../assets/img/logo.png" class="d-none d-lg-inline h-80px" />
								<img alt="Logo" src="../assets/img/logo.png" class="d-lg-none h-45px" />
							</a>
						</div>
						<div class="d-flex align-items-stretch justify-content-between w-md-100">
							<div class="d-flex align-items-center w-100 d-md-block d-none pt-lg-7 pt-md-3 mx-10" id="kt_header_nav">
								<div class="align-items-center w-100">
									<div class="menu-item d-flex align-items-center">
										<div class="input-group mb-5 ">
											<input type="text" class="form-control border-right-0" placeholder="Cari Program Belajar" aria-label="Amount (to the nearest dollar)"/>
											<span class="input-group-text bg-white">
												<span class="svg-icon svg-icon-1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
														<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
													</svg>
												</span>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div class="d-flex align-items-stretch flex-shrink-0">
								<div class="d-flex align-items-stretch flex-shrink-0">
									<div class="d-flex align-items-stretch ms-2 me-2">
										<div id="kt_header_search" class="d-flex align-items-stretch d-md-none d-block dropdown">
												<div class="d-flex align-items-center" data-bs-toggle="dropdown">
													<div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px">
														<span class="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
																<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
															</svg>
														</span>
													</div>
												</div>
												<div class="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px dropdown-menu">
													<div data-kt-search-element="wrapper">
														<form data-kt-search-element="form" class="w-100 position-relative mb-0" autocomplete="off">
															<span class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
																	<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
																</svg>
															</span>
															<input type="text" class="form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
														</form>
													</div>
												</div>
										</div>
									</div>
									<div class="d-flex align-items-center ms-2">
										<div class="dropdown">
											<div class="btn btn-icon btn-active-light btn-active-color-primary position-relative w-30px h-30px w-md-40px h-md-40px" data-bs-toggle="dropdown">
												<span class="svg-icon svg-icon-2x">
													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
														<defs/>
														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<path d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z" fill="#000000"/>
																<rect fill="#000000" opacity="0.3" x="10" y="16" width="4" height="4" rx="2"/>
														</g>
													</svg>
												</span>
											</div>
											<div class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px dropdown-menu">
												<div class="d-flex flex-column bgi-no-repeat rounded-top" style="background-color:#000C32">
													<h3 class="text-white fw-bold px-9 mt-10 mb-2">Notifikasi</h3>
													<span class="text-white fw-bold  fs-8 opacity-75 px-9 mb-7">24 Notifikasi</span>
												</div>
												<div class="tab-content">
													<div class="scroll-y mh-325px my-5 px-8">
														<div class="d-flex flex-stack py-4">
															<div class="d-flex align-items-center">
																<div class="symbol symbol-35px me-4">
																	<span class="symbol-label bg-light-primary">
																		<span class="svg-icon svg-icon-2 svg-icon-primary">
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<defs/>
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																						<path d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z" fill="#000000"/>
																						<rect fill="#000000" opacity="0.3" x="10" y="16" width="4" height="4" rx="2"/>
																				</g>
																			</svg>
																		</span>
																	</span>
																</div>
																<div class="mb-0 me-2">
																	<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Ada tugas baru untuk anda</a>
																	<div class="text-gray-400 fs-7">1 hari yang lalu</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="d-flex align-items-center ms-5">
										<div class="dropdown">
											<div class="btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3" data-bs-toggle="dropdown">
												<div class="d-none d-md-flex flex-column align-items-end justify-content-center me-2">
													<span class="text-muted fs-7 fw-bold lh-1 mb-2">Hello</span>
													<span class="text-dark fs-base fw-bolder lh-1">Richard</span>
												</div>
												<div class="symbol symbol-30px symbol-md-40px">
													<img src="../assets/img/avatars/150-26.jpg" alt="image" />
												</div>
											</div>
											<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px dropdown-menu">
												<div class="menu-item px-3">
													<div class="menu-content d-flex align-items-center px-3">
														<div class="symbol symbol-50px me-5">
															<img alt="Logo" src="../assets/img/avatars/150-26.jpg" />
														</div>
														<div class="d-flex flex-column">
															<div class="fw-bolder d-flex align-items-center fs-5">Max Smith</div>
															<a href="#" class="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
														</div>
													</div>
												</div>
												<div class="separator my-2"></div>
												<div class="menu-item px-5">
													<a href="#" class="menu-link px-5">Profil</a>
												</div>
												<div class="menu-item px-5">
													<a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_1" class="menu-link px-5">
														<span class="menu-text">Tukar Kode</span>
													</a>
												</div>
												<div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
													<a href="#" class="menu-link px-5">
														<span class="menu-title">Tim Saya</span>
														<span class="menu-arrow"></span>
													</a>
													<div class="menu-sub menu-sub-dropdown w-175px py-4">
														<div class="menu-item px-3">
															<a href="#" class="menu-link px-5">Batch 1</a>
														</div>
														<div class="menu-item px-3">
															<a href="#" class="menu-link px-5">Batch 2</a>
														</div>
													</div>
												</div>
												<div class="menu-item px-5">
													<a href="#" class="menu-link px-5">Keluar</a>
												</div>
												<div class="separator my-2"></div>
												<div class="menu-item px-5">
													<div class="menu-content px-5">
														<label class="form-check form-switch form-check-custom form-check-solid pulse pulse-success" for="kt_user_menu_dark_mode_toggle">
															<input class="form-check-input w-30px h-20px" type="checkbox" value="1" name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="index.html" />
															<span class="pulse-ring ms-n1"></span>
															<span class="form-check-label text-gray-600 fs-7">Dark Mode</span>
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
		</div>
</template>
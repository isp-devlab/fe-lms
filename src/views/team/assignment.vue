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

				<div class="card rounded-0 bgi-no-repeat bgi-position-x-end bgi-size-cover" style="background-color: #000C32;background-size: auto 100%;">
					<div class="card-body container-xxl pt-10 pb-8 py-15">
						<div class="d-md-flex justify-content-between my-5">
							<div class="align-items-center">
								<h1 class="fw-bold me-3 text-white">Backend Developer Batch 1</h1>
								<span class="fw-bold text-white opacity-50">17 Peserta</span>
							</div>
							<div>
								<a href="" class="btn btn-light btn-sm mt-5 mt-md-0">Keluar Tim</a>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="d-flex overflow-auto d-block d-lg-none h-45px my-5">
						<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
							<li class="nav-item">
                <router-link :to="{name: 'tim.diskusi'}" class="nav-link text-active-primary me-6">
										Diskusi (2)
                </router-link>
							</li>
							<li class="nav-item">
                <router-link :to="{name: 'tim.tugas'}" class="nav-link text-active-primary me-6 active">
										Tugas (2)
                  </router-link>
							</li>
						</ul>
					</div>
				</div>
				<div id="kt_content_container" class="d-md-flex flex-column-fluid align-items-stretch container-xxl">
					<div id="kt_aside" class="aside">
						<div class="hover-scroll-overlay-y my-5 my-lg-5 w-100 ps-4 ps-lg-0 pe-4 me-1" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_header" data-kt-scroll-wrappers="#kt_aside" data-kt-scroll-offset="5px">
							<div class="menu menu-column menu-active-bg menu-hover-bg  fs-6 menu-rounded w-100" id="#kt_aside_menu" data-kt-menu="true">
								<div class="menu-item">
									<div class="menu-content pb-2">
										<span class="menu-section text-muted text-uppercase fs-7 fw-bolder">Menu</span>
									</div>
								</div>
								<div class="menu-item bg-hover-white">
                  <router-link :to="{name: 'tim.diskusi'}" class="menu-link bg-hover-white ">
										<span class="menu-title">Diskusi</span>
										<span class="menu-badge">2</span>
                  </router-link>
								</div>
								<div class="menu-item bg-hover-white">
                  <router-link :to="{name: 'tim.tugas'}" class="menu-link bg-hover-white active bg-white">
										<span class="menu-title">Tugas</span>
										<span class="menu-badge">2</span>
                  </router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="wrapper d-flex flex-column flex-row-fluid mt-5 mt-lg-10" id="kt_wrapper">
						<div class="content flex-column-fluid" id="kt_content">
							<div class="toolbar d-flex flex-stack flex-wrap mb-5 mb-lg-7" id="kt_toolbar">
								<div class="page-title d-flex flex-column py-1">
									<h1 class="d-flex align-items-center my-1">
										<span class="text-dark fw-bolder fs-1">Tugas</span>
										<small class="text-muted fs-6 fw-bold ms-1">(2)</small>
									</h1>
								</div>
							</div>
							<div class="post" id="kt_post">
								<div class="mb-10">
									<div class="mb-0">
										<div class="mb-4">
											<a href="#" class="fs-2 fw-bolder text-gray-900 text-hover-primary d-block me-1">How to use Metronic with Django Framework ?</a>
                      <span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
										</div>
										<div class="fs-base fw-normal text-gray-700 mb-4">I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.</div>
                    <div class="d-flex align-items-center justify-content-between border border-dashed border-gray-300 rounded px-7 py-3 mb-5">
											<div class="pe-2">
												<small class="text-muted d-block">Deadline: </small>
                        <span>1 Maret 2024, 17.00</span>
											</div>
											<div class="pe-2">
												<span class="badge badge-light-success">Completed</span>
											</div>
											<a href="#" class="btn btn-sm btn-light btn-primary">Lihat</a>
										</div>
									</div>
									
									<div class="separator separator-dashed border-gray-300 my-8"></div>
									
									<div class="mb-0">
										<div class="mb-4">
											<a href="#" class="fs-2 fw-bolder text-gray-900 text-hover-primary d-block me-1">How to use Metronic with Django Framework ?</a>
                      <span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
										</div>
										<div class="fs-base fw-normal text-gray-700 mb-4">I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.</div>
                    <div class="d-flex align-items-center justify-content-between border border-dashed border-gray-300 rounded px-7 py-3 mb-5">
											<div class="pe-2">
												<small class="text-muted d-block">Deadline: </small>
                        <span>1 Maret 2024, 17.00</span>
											</div>
											<div class="pe-2">
												<span class="badge badge-light-warning">In Progress</span>
											</div>
											<a href="#" class="btn btn-sm btn-light btn-primary">Lihat</a>
										</div>
									</div>

									<div class="separator separator-dashed border-gray-300 my-8"></div>
								</div>
								<div class="d-flex flex-center mb-0">
									<a href="#" class="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2">1</a>
									<a href="#" class="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2 fw-bold text-primary bg-white">2</a>
									<a href="#" class="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2">3</a>
									<a href="#" class="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2">4</a>
									<a href="#" class="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2">5</a>
									<span class="text-muted fw-bold fs-6 mx-2">..</span>
									<a href="#" class="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2">19</a>
								</div>
							</div>
						</div>
					</div>
					<div class="sidebar p-5 px-lg-0 py-lg-11">
						<div class="card mb-5 mb-lg-10 shadow-none border-0">
							<div class="card-header align-items-center border-0">
								<h3 class="card-title fw-bolder text-gray-900 fs-3">Peserta</h3>
							</div>
							<div class="card-body pt-0">
								<div class="d-flex mb-5">
									<div class="d-flex align-items-center py-1">
										<div class="symbol symbol-35px me-2">
											<img src="../../assets/img/avatars/150-3.jpg" alt="user" />
										</div>
										<div class="d-flex flex-column align-items-start justify-content-center">
											<span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">Sandra Piquet</span>
											<span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
										</div>
									</div>
								</div>
								<div class="d-flex mb-5">
									<div class="d-flex align-items-center py-1">
										<div class="symbol symbol-35px me-2">
											<img src="../../assets/img/avatars/150-3.jpg" alt="user" />
										</div>
										<div class="d-flex flex-column align-items-start justify-content-center">
											<span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">Sandra Piquet</span>
											<span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
										</div>
									</div>
								</div>
								<div class="d-flex mb-5">
									<div class="d-flex align-items-center py-1">
										<div class="symbol symbol-35px me-2">
											<img src="../../assets/img/avatars/150-3.jpg" alt="user" />
										</div>
										<div class="d-flex flex-column align-items-start justify-content-center">
											<span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">Sandra Piquet</span>
											<span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
										</div>
									</div>
								</div>
								<div class="d-flex mb-5">
									<div class="d-flex align-items-center py-1">
										<div class="symbol symbol-35px me-2">
											<img src="../../assets/img/avatars/150-3.jpg" alt="user" />
										</div>
										<div class="d-flex flex-column align-items-start justify-content-center">
											<span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">Sandra Piquet</span>
											<span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
										</div>
									</div>
								</div>
								<div class="d-flex mb-5">
									<div class="d-flex align-items-center py-1">
										<div class="symbol symbol-35px me-2">
											<img src="../../assets/img/avatars/150-3.jpg" alt="user" />
										</div>
										<div class="d-flex flex-column align-items-start justify-content-center">
											<span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">Sandra Piquet</span>
											<span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card mb-5 mb-lg-10 shadow-none border-0">
							<div class="card-header align-items-center border-0">
								<h3 class="card-title fw-bolder text-gray-900 fs-3">Mentor</h3>
							</div>
							<div class="card-body pt-0">
								<div class="d-flex mb-5">
									<div class="d-flex align-items-center py-1">
										<div class="symbol symbol-35px me-2">
											<img src="../../assets/img/avatars/150-3.jpg" alt="user" />
										</div>
										<div class="d-flex flex-column align-items-start justify-content-center">
											<span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">Sandra Piquet</span>
											<span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
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


		<div id="kt_drawer_chat" class="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
			<div class="card w-100 rounded-0" id="kt_drawer_chat_messenger">
				<div class="card-header pe-5 align-items-center	" id="kt_drawer_chat_messenger_header">
					<div class="card-title">
						<a href="#" class="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1 mt-3">Diskusi</a>
					</div>
					<div class="card-toolbar">
						<div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
							<span class="svg-icon svg-icon-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
								</svg>
							</span>
						</div>
					</div>
				</div>
				<div class="card-body" id="kt_drawer_chat_messenger_body">
					<div class="mb-10">
						<div class="mb-4">
							<a href="#" class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1">How to use Metronic with Django Framework ?</a>
						</div>
						<div class="fs-base fw-normal text-gray-700 mb-4">I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.</div>
						<div class="d-flex flex-stack flex-wrap">
							<div class="d-flex align-items-center py-1">
								<div class="symbol symbol-35px me-2">
									<img src="../../assets/img/avatars/150-3.jpg" alt="user" />
								</div>
								<div class="d-flex flex-column align-items-start justify-content-center">
									<span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">Sandra Piquet</span>
									<span class="text-muted fs-8 fw-bold lh-1">1 day ago</span>
								</div>
							</div>
						</div>
					</div>
					<div class="separator separator-dashed border-gray-300 my-8"></div>
					<div class="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="100px">
						<!--begin::Message(in)-->
						<div class="d-flex justify-content-start mb-10">
							<div class="d-flex flex-column align-items-start">
								<div class="d-flex align-items-center mb-2">
									<div class="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="../../assets/img/avatars/150-15.jpg" />
									</div>
									<div class="ms-3">
										<a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span class="text-muted fs-7 mb-1">2 mins</span>
									</div>
								</div>
								<div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
							</div>
						</div>
						<div class="d-flex justify-content-start mb-10">
							<div class="d-flex flex-column align-items-start">
								<div class="d-flex align-items-center mb-2">
									<div class="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="../../assets/img/avatars/150-15.jpg" />
									</div>
									<div class="ms-3">
										<a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span class="text-muted fs-7 mb-1">2 mins</span>
									</div>
								</div>
								<div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
					<textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
					<div class="d-flex flex-stack justify-content-end">
						<button class="btn btn-primary" type="button" data-kt-element="send">Send</button>
					</div>
				</div>
			</div>
		</div>
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<span class="svg-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
					<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
				</svg>
			</span>
		</div>
	
	</body>
</template>
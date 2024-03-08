<template>
                  <div class="card-body p-10 pb-0">
										<div class="d-md-flex mb-3">
											<div class="me-md-7 mb-4">
												<div class="d-flex justify-content-center">
													<div class="symbol symbol-100px symbol-lg-160px ">
                            <img src="../../../assets/img/avatars/150-26.jpg" alt="image" />
													  <div class="position-absolute translate-middle bottom-0 start-100 top-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                          </div>
												</div>
											</div>
											<div class="flex-grow-1">
												<div class="d-md-flex mb-2">
													<div class="d-flex flex-column text-center text-md-start">
														<div class="mb-2">
															<span class="text-gray-900 text-hover-primary fs-1 fw-bolder me-1 mt-3 d-block">Fajar Rivaldi Chan</span>
                              <span class="text-gray-400 text-hover-primary me-5 mb-2 fs-6">fajarrivaldi2015@gmail.com</span>
														</div>
													</div>
												</div>
												<div class="d-flex justify-content-center justify-content-md-start">
													<div class="border border-gray-300 border-dashed rounded min-w-md-125px  min-w-100px py-3 px-4 me-6 mb-3 text-md-end text-center">
														<div class="fs-2 fw-bolder">0</div>
														<div class="fw-bold fs-6 text-gray-400">Kelas</div>
													</div>
													<div class="border border-gray-300 border-dashed rounded min-w-md-125px  min-w-100px py-3 px-4 me-6 mb-3 text-md-end text-center">
															<div class="fs-2 fw-bolder">0</div>
														<div class="fw-bold fs-6 text-gray-400">Tim</div>
													</div>
												</div>
											</div>
										</div>
                    <div class="separator separator-dashed border-gray-300 px-0 mx-0"></div>

                    <slot name="nav"></slot>
                    
                  </div>
</template>
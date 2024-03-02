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
                  <div class="card-body p-10 p-md-15">
                    <form>
                      <div class="mb-9">
                        <h1 class="card-title fw-bolder fs-2x pb-0">Masuk</h1>
                        <span class="text-gray-500 fs-6">Silahkan masuk untuk melanjutkan</span>
                      </div>
                      <div class="mb-5">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="Email" v-model="input.email"/>
                      </div>
                      <div class="mb-5">
                        <div class="d-flex justify-content-between">
                          <label class="form-label">Password</label>
                            <router-link :to="{name: 'auth.forget'}" class="fw-bold link-underline-primary">
                              Lupa Password ?
                            </router-link>
                        </div>
                        <input type="password" class="form-control" placeholder="********" v-model="input.password"/>
                      </div>
                      <div class="mb-5">
                        <button type="submit" v-on:click.prevent = "login()" class="btn btn-primary w-100">Masuk</button>
                      </div>
                      <div class="text-center">
                        <span>
                            Belum punya akun? 
                            <router-link :to="{name: 'auth.register'}" class="fw-bold link-underline-primary">
                              Daftar
                            </router-link>
                        </span>
                      </div>
                    </form>
                    <p>Username is: {{input.email}}</p>
                    <p>Password is: {{input.password}}</p>
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

<script>
export default {
  name: 'LoginView',
  data(){
    return{
        input:{
            email: "",
            password: ""
        }
    }
  },
  methods:{
    login(){
      //make sure username OR password are not empty
      if(this.input.email != "" || this.input.password != ""){
        console.log("authenticated")
      }else{
        console.log("Username and Password can not be empty")
      }
    }
  },
}
</script>
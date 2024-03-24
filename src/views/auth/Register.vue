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
                    <div class="mb-9">
                      <h1 class="card-title fw-bolder fs-2x pb-0">Daftar</h1>
                      <span class="text-gray-500 fs-6">Daftarkan akun baru anda</span>
                    </div>
                      <div v-if="message" class="alert alert-dismissible bg-light-danger d-flex flex-row p-5" role="alert">
                        <span class="me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                          </svg>
                        </span>
                        <span class="fs-6">
                          {{ message }}
                        </span>
                      </div>
                    <Form @submit="handleRegister" :validation-schema="schema">
                     <div class="mb-5">
                      <label class="form-label">Nama</label>
                      <Field type="text" class="form-control" placeholder="Nama Lengkap" name="name" />
                      <ErrorMessage name="name" class="error-feedback text-danger" />
                    </div>
                    <div class="mb-5">
                      <label class="form-label">No. Telepon</label>
                      <Field type="number" class="form-control" placeholder="Nomor Telepon" name="phoneNumber"/>
                      <ErrorMessage name="phoneNumber" class="error-feedback text-danger" />
                    </div>
                    <div class="mb-5">
                      <label class="form-label">Email</label>
                      <Field type="email" class="form-control" placeholder="Email" name="email"/>
                      <ErrorMessage name="email" class="error-feedback text-danger" />
                    </div>
                    <div class="mb-5">
                      <label class="form-label">Password</label>
                      <Field type="password" class="form-control" placeholder="********" name="password"/>
                      <ErrorMessage name="password" class="error-feedback text-danger" />
                    </div>
                     <div class="mb-5">
                      <button class="btn btn-primary w-100" :disabled="loading">
                        <span
                          v-show="loading"
                          class="spinner-border spinner-border-sm"
                        ></span>
                        Daftar
                      </button>
                    </div>
                    </Form>
                    <div class="text-center">
                      <span>Sudah punya akun? 
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

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Nama wajib diisi!")
        .min(3, "Minimal 10 karakter!"),
      phoneNumber: yup
        .string()
        .required("Nomor telepon wajib diisi!")
        .min(10, "Minimal 10 karakter!"),
      email: yup
        .string()
        .required("Email wajib diisi!")
        .email("Email tidak valid!"),
      password: yup
        .string()
        .required("Password wajib diisi!")
        .min(6, "Minimal 6 karakter!")
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push({ name: 'home' });
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.$router.push({ name: 'auth.register.success' });
        },
        (error) => {
          if (error.response && error.response.status === 422) {
            this.message = "Email Telah digunakan";
          } else {
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
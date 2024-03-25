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
                      <div v-if="message" class="alert alert-dismissible d-flex flex-row p-5 align-items-center" :class="successful ? 'bg-light-dark' : 'bg-light-danger'" role="alert">
                        <span class="me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                          </svg>
                        </span>
                        <span class="fs-6">
                          {{ message }}
                        </span>
                      </div>
                    <Form @submit="handleForget" :validation-schema="schema">
                      <div class="mb-5">
                        <label class="form-label">Email</label>
                        <Field type="email" class="form-control" placeholder="Email" name="email"/>
                        <ErrorMessage name="email" class="error-feedback text-danger" />
                      </div>
                      <div class="mb-5">
                          <button class="btn btn-primary w-100" type="submit" :disabled="loading">
                            <span
                              v-show="loading"
                              class="spinner-border spinner-border-sm me-3"
                            ></span>
                            <span>Reset Password</span>
                          </button>
                      </div>
                    </Form>
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

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Forget Password",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email wajib diisi!")
        .email("Email tidak valid!"),
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
    handleForget(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/forget", user).then(
        (data) => {
          this.message = "Kami telah mengirimkan email kepada mu \n silahkan check email kamu";
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          if (error.response && error.response.status === 400) {
            this.message = "Email tidak terdaftar";
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
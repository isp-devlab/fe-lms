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
                      <h1 class="card-title fw-bolder fs-2x pb-0">Reset Password</h1>
                      <span class="text-gray-500 fs-6">Ubah password akun kamu</span>
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
                    <Form @submit="handleReset" :validation-schema="schema">
                      <Field type="hidden" :value="token" name="token"/>
                      <div class="mb-5">
                        <label class="form-label">Email</label>
                        <Field type="email" class="form-control" placeholder="Email" :value="email" name="email" readonly/>
                        <ErrorMessage name="email" class="error-feedback text-danger" />
                      </div>
                      <div class="mb-5">
                        <label class="form-label">Password Baru</label>
                        <Field type="password" class="form-control" placeholder="********" name="password"/>
                        <ErrorMessage name="password" class="error-feedback text-danger" />
                      </div>
                      <div class="mb-5">
                          <button class="btn btn-primary w-100" type="submit" :disabled="loading">
                            <span
                              v-show="loading"
                              class="spinner-border spinner-border-sm me-3"
                            ></span>
                            <span>Ubah Password</span>
                          </button>
                      </div>
                    </Form>
                    <div class="text-center">
                      <span><router-link :to="{name: 'auth.login'}" class="fw-bold link-underline-primary">
                          Batal
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "Login",
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
      password: yup
        .string()
        .required("Password wajib diisi!")
        .min(6, "Minimal 6 karakter!")
    });
    const router = useRouter();
    const email = ref('');
    const token = ref('');
    email.value = router.currentRoute.value.query.email || '';
    token.value = router.currentRoute.value.params.id || '';
    return {
      loading: false,
      message: "",
      schema,
      email,
      token
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: 'home' });
    }
  },
  methods: {
    handleReset(user) {
      this.loading = true;

      this.$store.dispatch("auth/reset", user).then(
        () => {
          this.$router.push({ name: 'auth.login' });
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
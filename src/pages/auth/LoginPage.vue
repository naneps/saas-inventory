<template>
  <section class="section">
    <div class="d-flex flex-wrap align-items-stretch">
      <div
        class="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white"
      >
        <div class="p-4 m-3">
          <center>
            <img
              src="../../assets/images/background.jpg"
              alt="logo"
              width="80"
              class="shadow-light rounded-circle mb-5 mt-2"
            />
          </center>
          <h4 class="text-dark font-weight-normal">
            Selamat Datang Di <span class="font-weight-bold"> Inventory</span>
          </h4>
          <p class="text-muted">
            Kelola barang masuk dan keluar dengan mudah dan cepat
          </p>
          <form @submit.prevent="submitForm" class="needs-validation">
            <InputField
              label="Username"
              inputId="username"
              name="username"
              tabindex="1"
              :isRequired="true"
              validationMessage="Please fill in your username"
              :validator="validateUsername"
            />
            <InputField
              label="Password"
              inputId="password"
              name="password"
              tabindex="2"
              type="password"
              :isRequired="true"
              validationMessage="Please fill in your password"
              :validator="validatePassword"
            ></InputField>

            <div class="form-group">
              <a href="auth-forgot-password.html" class="float-left mb-2">
                Forgot Password?
              </a>
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-icon icon-right btn-block my-4"
                tabindex="4"
              >
                Login
              </button>
            </div>
          </form>

          <div class="text-center mt-5 text-small">
            Copyright &copy; Griyatani
            <div class="mt-2">
              <a href="#">Privacy Policy</a>
              <div class="bullet"></div>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 background-walk-y position-relative overlay-gradient-bottom"
        :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
      >
        <div class="absolute-bottom-left index-2">
          <div class="text-light p-5 pb-2">
            <div class="mb-5 pb-3">
              <h1 class="mb-2 display-4 font-weight-bold">Selamat Pagi</h1>
              <h5 class="font-weight-normal text-muted-transparent">
                Indramayu, Jawa Barat, Indonesia
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import backgroundImage from "@/assets/images/background.jpg";
// Import necessary components and functions
import InputField from "@/components/InputField.vue";
import { useAuthStore } from "@/store/modules/auth-store";
import { validate } from "vee-validate";
const authStore = useAuthStore();
// Define validation functions
const validateUsername = (value) => {
  console.log("validateUsername:", value); // Debug statement
  return value && value.length >= 3; // Make sure value is not undefined
};

const validatePassword = (value) => {
  console.log("validatePassword:", value); // Debug statement
  return value && value.length >= 6; // Make sure value is not undefined
};

// Define form submission logic
const submitForm = () => {
  // Handle form submission logic here
  // You can use VeeValidate's $validate method to trigger validation
  const isValid = validate(); // This triggers validation for all fields

  if (isValid) {
    // Proceed with form submission, authentication, etc.
    authStore.login({ username: "exampleUser" });
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

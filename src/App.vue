<template>
  <router-view v-if="!isAuthenticated"></router-view>
  <div v-else class="main-wrapper container">
    <Navbar></Navbar>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <footer class="main-footer">
      <div class="footer-left">
        Copyright &copy; 2023
        <div class="bullet"></div>
        Created <a href="https://nauv.al/">Griyatani</a>
      </div>
      <div class="footer-right">{{ version }}</div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useAuthStore } from "@/store/modules/auth-store";
import { ref, watch } from "vue";
import { useRouter } from "vue-router"; // Import the useRouter function
const authStore = useAuthStore();
const user = authStore.user;

// Create a ref to store the isLoggedIn status
const isAuthenticated = ref(authStore.isAuthenticated);

const login = () => {
  authStore.login({ username: "exampleUser" });
};

const logout = () => {
  authStore.logout();
};

// Watch the user and update isAuthenticated
watch(
  () => authStore.user,
  (newUser) => {
    isAuthenticated.value = !!newUser; // Update isAuthenticated based on the presence of a user
  }
);

// Get the router instance using useRouter
const router = useRouter();

// Watch the isAuthenticated state and redirect when true
watch(isAuthenticated, (newValue) => {
  if (newValue) {
    router.push("/"); // Change "/authenticated-route" to your desired route
  } else {
    router.push("/login");
  }
});
</script>

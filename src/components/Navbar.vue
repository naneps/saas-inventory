<template>
  <div class="navbar-bg"></div>
  <nav class="navbar navbar-expand-lg main-navbar">
    <a href="index.html" class="navbar-brand sidebar-gone-hide">Stisla</a>
    <div class="navbar-nav">
      <a
        href="#"
        class="nav-link sidebar-gone-show"
        data-toggle="sidebar"
        @click="showMiniSidebar()"
        ><i class="fas fa-bars"></i
      ></a>
    </div>
    <div class="nav-collapse">
      <!-- <a class="sidebar-gone-show nav-collapse-toggle nav-link" href="#">
        <i class="fas fa-ellipsis-v"></i>
      </a> -->
      <ul class="navbar-nav">
        <!-- <li class="nav-item active">
          <a href="#" class="nav-link">Application</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Report Something</a>
        </li>
        <li class="nav-item"><a href="#" class="nav-link">Server Status</a></li> -->
      </ul>
    </div>
    <form class="form-inline ml-auto">
      <ul class="navbar-nav">
        <li>
          <a
            href="#"
            data-toggle="search"
            class="nav-link nav-link-lg d-sm-none"
            ><i class="fas fa-search"></i
          ></a>
        </li>
      </ul>
    </form>
    <ul class="navbar-nav navbar-right">
      <li class="dropdown dropdown-list-toggle">
        <a
          href="#"
          data-toggle="dropdown"
          class="nav-link nav-link-lg message-toggle beep"
          ><i class="far fa-envelope"></i
        ></a>
        <div class="dropdown-menu dropdown-list dropdown-menu-right">
          <div class="dropdown-header">
            Messages
            <div class="float-right">
              <a href="#">Mark All As Read</a>
            </div>
          </div>
          <div class="dropdown-list-content dropdown-list-message">
            <a href="#" class="dropdown-item dropdown-item-unread">
              <div class="dropdown-item-avatar">
                <img
                  alt="image"
                  src="@/assets/img/avatar/avatar-1.png"
                  class="rounded-circle"
                />
                <div class="is-online"></div>
              </div>
              <div class="dropdown-item-desc">
                <b>Kusnaedi</b>
                <p>Hello, Bro!</p>
                <div class="time">10 Hours Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item dropdown-item-unread">
              <div class="dropdown-item-avatar">
                <img
                  alt="image"
                  src="../assets/img/avatar/avatar-2.png"
                  class="rounded-circle"
                />
              </div>
              <div class="dropdown-item-desc">
                <b>Dedik Sugiharto</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div class="time">12 Hours Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item dropdown-item-unread">
              <div class="dropdown-item-avatar">
                <img
                  alt="image"
                  src="../assets/img/avatar/avatar-3.png"
                  class="rounded-circle"
                />
                <div class="is-online"></div>
              </div>
              <div class="dropdown-item-desc">
                <b>Agung Ardiansyah</b>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div class="time">12 Hours Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="dropdown-item-avatar">
                <img
                  alt="image"
                  src="../assets/img/avatar/avatar-4.png"
                  class="rounded-circle"
                />
              </div>
              <div class="dropdown-item-desc">
                <b>Ardian Rahardiansyah</b>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit ess
                </p>
                <div class="time">16 Hours Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="dropdown-item-avatar">
                <img
                  alt="image"
                  src="../assets/img/avatar/avatar-5.png"
                  class="rounded-circle"
                />
              </div>
              <div class="dropdown-item-desc">
                <b>Alfa Zulkarnain</b>
                <p>
                  Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </p>
                <div class="time">Yesterday</div>
              </div>
            </a>
          </div>
          <div class="dropdown-footer text-center">
            <a href="#">View All <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </li>
      <li class="dropdown dropdown-list-toggle">
        <a
          href="#"
          data-toggle="dropdown"
          class="nav-link notification-toggle nav-link-lg beep"
          ><i class="far fa-bell"></i
        ></a>
        <div class="dropdown-menu dropdown-list dropdown-menu-right">
          <div class="dropdown-header">
            Notifications
            <div class="float-right">
              <a href="#">Mark All As Read</a>
            </div>
          </div>
          <div class="dropdown-list-content dropdown-list-icons">
            <a href="#" class="dropdown-item dropdown-item-unread">
              <div class="dropdown-item-icon bg-primary text-white">
                <i class="fas fa-code"></i>
              </div>
              <div class="dropdown-item-desc">
                Template update is available now!
                <div class="time text-primary">2 Min Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="dropdown-item-icon bg-info text-white">
                <i class="far fa-user"></i>
              </div>
              <div class="dropdown-item-desc">
                <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                <div class="time">10 Hours Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="dropdown-item-icon bg-success text-white">
                <i class="fas fa-check"></i>
              </div>
              <div class="dropdown-item-desc">
                <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to
                <b>Done</b>
                <div class="time">12 Hours Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="dropdown-item-icon bg-danger text-white">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="dropdown-item-desc">
                Low disk space. Let's clean it!
                <div class="time">17 Hours Ago</div>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="dropdown-item-icon bg-info text-white">
                <i class="fas fa-bell"></i>
              </div>
              <div class="dropdown-item-desc">
                Welcome to Stisla template!
                <div class="time">Yesterday</div>
              </div>
            </a>
          </div>
          <div class="dropdown-footer text-center">
            <a href="#">View All <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </li>
      <li class="dropdown">
        <a
          href="#"
          data-toggle="dropdown"
          class="nav-link dropdown-toggle nav-link-lg nav-link-user"
        >
          <img
            alt="image"
            src="../assets/img/avatar/avatar-1.png"
            class="rounded-circle mr-1"
          />
          <div class="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div></a
        >
        <div class="dropdown-menu dropdown-menu-right">
          <div class="dropdown-title">Logged in 5 min ago</div>
          <a href="features-profile.html" class="dropdown-item has-icon">
            <i class="far fa-user"></i> Profile
          </a>
          <a href="features-activities.html" class="dropdown-item has-icon">
            <i class="fas fa-bolt"></i> Activities
          </a>
          <a href="features-settings.html" class="dropdown-item has-icon">
            <i class="fas fa-cog"></i> Settings
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item has-icon text-danger">
            <i class="fas fa-sign-out-alt"></i> Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>

  <!-- <nav class="navbar navbar-secondary navbar-expand-lg">
    <div class="container-fluid">
      <div class="menu-container">
        <ul class="navbar-nav">
          <NavbarItem
            v-for="navItem in navItems"
            :key="navItem.name"
            :name="navItem.name"
            :label="navItem.name"
            :link="navItem.path"
            :icon="navItem.icon"
          />
        </ul>
      </div>
    </div>
  </nav> -->
</template>     
<script setup>
import { useRouteStore } from "@/store/modules/route-store";
import { computed } from "vue";

const routeStore = useRouteStore();
const navItems = computed(() => routeStore.routes);
const showMiniSidebar = () => {
  //remove class sidebar-gone ind body and addclass sidebar-show on body
  document.body.classList.remove("sidebar-gone");
  document.body.classList.add("sidebar-show");
};
</script>

<style scoped>
.menu-container {
  /* max-height: 100vh; */
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  /* customesrcollbar: none; */
  /* background-color: aqua; */
  /* overflow-y: auto; */
}
</style>
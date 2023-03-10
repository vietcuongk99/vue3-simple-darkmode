<template>
  <div class="theme-toggle-wrapper">
    <img alt="Vue logo" class="logo" src="./assets/image/logo.svg" width="50" height="50" />
    <ThemeToggle :primary-theme="primaryTheme" :secondary-theme="secondaryTheme"/>
  </div>
  <div class="background"></div>
</template>

<script>
import { ref } from 'vue'
import ThemeToggle from "./components/ThemeToggle.vue";
import {DARK_THEME, LIGHT_THEME} from "./config/default";
export default {
  components: {ThemeToggle},
  setup () {
    const primaryTheme = ref(LIGHT_THEME)
    const secondaryTheme = ref(DARK_THEME)
    return {
      primaryTheme,
      secondaryTheme,
    }
  },

  mounted() {
    document.documentElement.setAttribute("data-theme", this.primaryTheme);
  }
}
</script>

<style lang="scss">
.theme-toggle-wrapper {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: calc(100% - 2rem);
}
.background {
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease;
}

[data-theme="dark"] {
  .background {
    background-image: url("assets/image/night.jpg");
  }
}

[data-theme="light"] {
  .background {
    background-image: url("assets/image/day.jpg");
  }
}

</style>

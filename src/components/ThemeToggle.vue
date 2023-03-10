<template>
  <div class="toggle-wrapper">
    <input id="toggle" type="checkbox" checked @change="change" />
    <label class="label" for="toggle">
      <span class="toggle-btn"></span>
      <font-awesome-icon icon="fa-solid fa-sun" class="label-icon sun" />
      <font-awesome-icon icon="fa-solid fa-moon" class="label-icon moon" />
    </label>
  </div>
</template>

<script>

export default {
  name: "ThemeToggle",
  props: {
    primaryTheme: String,
    secondaryTheme: String,
  },

  setup (props) {
    const change = (event) => {
      if (!event.target.checked) document.documentElement.setAttribute("data-theme", props.secondaryTheme);
      if (event.target.checked) document.documentElement.setAttribute("data-theme", props.primaryTheme);
    }

    return {
      change,
    }
  }
}
</script>

<style lang="scss" scoped>

.toggle-wrapper {
  position: relative;
  zoom: 1.5;
  top: 0;
  right: 0;
}

input#toggle {
  opacity: 0;
  position: absolute;
}

.label {
  width: 4rem;
  height: 2rem;
  background-color: var(--toggle-bg-color);
  border-radius: 14px;
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;

  .toggle-btn {
    position: absolute;
    background-color: #fff;
    height: 1.6rem;
    width: 1.85rem;
    border-radius: 14px;
    left: 0.25rem;
    transition: linear 0.2s;
  }

  .label-icon {
    width: 2rem;
    text-align: center;
    font-size: 1.2rem;
  }
}

.sun {
  color: #fcb021;
}

.moon {
  color: #f2f4f5;
}

[data-theme="light"] {
  .toggle-btn {
    transform: translateX(1.7rem);
  }
}

</style>

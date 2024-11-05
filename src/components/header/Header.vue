<script>
import Button from '../button/Button.vue'

export default {
  name: 'Header',
  components: {
    Button,
  },
  mounted() {
    const animatedElement = this.$el.querySelector('.border-b-animation')

    function startAnimation() {
      animatedElement.classList.add('animate')
      setTimeout(() => {
        animatedElement.classList.remove('animate')
        const randomInterval =
          Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000
        setTimeout(startAnimation, randomInterval)
      }, 6000)
    }

    const initialDelay = Math.floor(Math.random() * (7000 - 4000 + 1)) + 4000
    setTimeout(startAnimation, initialDelay)
  },
}
</script>

<template>
  <header
    class="w-full flex justify-center bg-color-bg-secondary backdrop-blur-sm relative overflow-hidden"
  >
    <div
      class="w-full p-5 max-w-screen-xl-up flex justify-between items-center border-b-animation"
    >
      <div>
        <img src="/logo.svg" class="logo" alt="logo" />
      </div>
      <div>
        <Button>vogas</Button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.border-b-animation {
  position: relative;
}
.border-b-animation::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    var(--color-border-primary-hover),
    transparent
  );
  transform: translateX(-100%);
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0s linear 0.5s;
}

.animate::after {
  animation: move-border 6s linear forwards;
  visibility: visible;
  opacity: 1;
  transition: opacity 1.5s ease-in-out;
}

@keyframes move-border {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    transform: translateX(90%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>

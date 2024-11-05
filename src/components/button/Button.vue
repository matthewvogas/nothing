<template>
  <div
    class="relative rounded-full p-0.25 overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="resetMouseEffect"
    :style="highlightStyle"
  >
    <div class="bg-color-bg-secondary rounded-full z-50">
      <a v-if="href" :href="href" class="px-6 py-2 relative z-10 w-full text-color-text-primary">
        <slot />
      </a>
      <button
        v-else
        @click="handleClick"
        class="px-6 py-2 relative z-10 w-full text-color-text-primary"
      >
        <slot />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: null,
    },
    handleClick: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      highlightStyle: {
        background: 'var(--color-border-primary)',
      },
    }
  },
  methods: {
    handleMouseMove(event) {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100

      this.highlightStyle = {
        background: `radial-gradient(circle at ${x}% ${y}%, var(--color-border-primary-hover), var(--color-border-primary) 60%)`,
      }
    },
    resetMouseEffect() {
      this.highlightStyle = {
        background: 'var(--color-border-primary)',
      }
    },
  },
}
</script>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}
</style>

<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-14">
    <div class="flex flex-col items-center justify-center">
      <h1
        class="text-size-primary font-semibold bg-gradient-to-b from-[#3B3B3B] to-[#FFF] bg-clip-text text-transparent"
      >
        Nothing
      </h1>
      <p
        class="text-size-secondary w-subtitle text-center bg-gradient-to-b from-[#3B3B3B] to-[#FFF] bg-clip-text text-transparent"
      >
        It&apos;s only after you&apos;re bored you have the great ideas.
        It&apos;s never going to be when you&apos;re stressed, or busy, running
        around or rushed.
        <span class="underline decoration-[#9f9f9f]">How old are you?</span>
      </p>
    </div>

    <div class="w-full flex items-center justify-center">
      <div></div>
      <div
        class="flex bg-gray-400 bg-opacity-5 items-center justify-center w-box flex-col bg-color-bg-gradient-primary shadow-sm backdrop-blur-10 border-gray-100 rounded-3xl">
        <div class="flex w-full px-4 pt-4 pb-[10px] justify-between">
          <span class="w-1 h-1 bg-white rounded-full"></span>
          <span class="w-1 h-1 bg-white rounded-full"></span>
        </div>
        <div>
          <div class="flex flex-wrap px-14 gap-[10px]">
            <img
              v-for="i in 90"
              :key="i"
              src="/logo.svg"
              class="logo min-w-7 min-h-7"
              alt="logo"
            />
          </div>
        </div>
        <div class="flex w-full px-4 pb-4 pt-[10px] justify-between">
          <span class="w-1 h-1 bg-white rounded-full"></span>
          <span class="w-1 h-1 bg-white rounded-full"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="min-h-[700px] bg-[#031b30]">
    <div
      class="container flex flex-wrap min-h-[700px] items-center gap-x-5 justify-center"
    >
      <img
        src="/logo.jpg"
        alt="the logo"
        
      />
      <Comingsoon />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  img {
    width: clamp(250px, 50vw,300px);
  }
</style>

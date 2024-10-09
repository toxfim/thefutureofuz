<template>
  <div class="text-slate-200 border-l-2 border-slate-200 pl-5">
    <h1 class="text-7xl font-bold title">Coming soon</h1>
    <br />
    <p class="text-3xl">
      the <span class="text-[#3fa8e0]">*</span
      ><span class="uzb">future of Uzbekistan</span> will be here soon.
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
h1.title, .uzb {
  background-clip: text;
  color: transparent;
  line-height: normal;
}
h1.title {
  background-image: linear-gradient(45deg, #3fa8e0, #fff);
}

.uzb {
  background-image: linear-gradient(120deg, #fff, #3fa8e0);
}
</style>

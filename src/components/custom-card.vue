<template>
  <!-- <article class="custom-card flex flex-col gap-1 items-center"> -->
  <article class="custom-card">
    <main>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>



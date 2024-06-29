<template>
  <section class="wrapper">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <slot name="body"></slot>
  </section>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 1.5rem;
}

.wrapper {
  padding-top: 3rem;
  padding-bottom: 1.5rem;
}
</style>

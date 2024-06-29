<template>
  <div class="skeleton">
    <div class="skeleton__lightmark"></div>
  </div>
</template>

<style scoped lang="scss">
.skeleton {
  background-color: #e0e0e0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &__lightmark {
    width: 100%;
    height: 100%;
    /* background: red; */
    display: block;
    position: absolute;
    left: 0;
    animation: slide-to-right 1.7s linear forwards infinite;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 13%;
      transform: rotate(-45deg) translate(-30%, -120px);
      background: linear-gradient(to right, #e0e0e0, #e8e8e8, #e0e0e0);
      /* background-color: magenta; */
    }
  }
}

@keyframes slide-to-right {
  0% {
    translate: 0 0;
  }

  60% {
    translate: 100% 100%;
  }

  100% {
    translate: 100% 100%;
  }
}
</style>

<template>
    <div class="loading" v-if="loading">
        <div class="half-circle-spinner">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'LoadingAnimate',
  props:['loading'],
  
}

</script>


<style scoped>
.loading{
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1010;
}

.half-circle-spinner, .half-circle-spinner * {
    box-sizing: border-box;
  }

  .half-circle-spinner {
    justify-self: center;
    align-self: center;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
  }

  .half-circle-spinner .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
  }

  .half-circle-spinner .circle.circle-1 {
    /* border-top-color: #0079C1; */
    border-top-color: white;
    animation: half-circle-spinner-animation 1s infinite;
  }

  .half-circle-spinner .circle.circle-2 {
    /* border-bottom-color: #0079C1; */
    border-top-color: white;
    animation: half-circle-spinner-animation 1s infinite alternate;
  }

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
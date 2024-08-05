<template>
  <div class="advice-container">
    <div class="advice-header">
      <p class="advice-number">ADVICE #{{ $store.getters.getSlip.id }}</p>
    </div>
    <div class="advice-content">
      <p class="advice-text">“{{ $store.getters.getSlip.advice }}”</p>
    </div>

    <div class="pattern-divider">
      <picture>
        <source media="(max-width: 413px)" srcset="/img/pattern-divider-mobile.svg">
        <img :src="CDN('/img/pattern-divider-desktop.svg')" alt="Responsive Image">
      </picture>
    </div>
    <div @click="getAdvice" class="background-dice">
      <div class="dice">
        <img :src="CDN('/img/icon-dice.svg')" alt="dice"/>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  methods: {
    async getAdvice() {
      await this.$store.dispatch("getAdvice")
    },
  },
  async created() {
    await this.$store.dispatch("getAdvice")
  },

}

</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #303C55; /* Dark background color */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.advice-container {
  background-color: var(--dark-grayish-blue);
  padding: 48px;
  border-radius: 15px;
  width: calc(540px - (48px * 2));
  height: calc(332px - (48px * 2));
  position: relative;
}

.advice-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.advice-number {
  font-size: 13px;
  letter-spacing: 4px;
  color: var(--neon-green);
}

.advice-text {
  font-size: 28px;
  margin-top: 10px;
  color: var(--light-cyan);
  text-align: center;
}

.advice-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 62px);
}

.pattern-divider {
  position: absolute;
  bottom: 62px;
  left: calc(50% - (444px / 2));
}

.background-dice {
  background-color: var(--neon-green);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  cursor: url('~@/assets/pointer-copy-8.png'), pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -32px;
  left: calc(50% - 32px);
}

.background-dice:hover {
  box-shadow: 0 0 44px 1px rgba(82, 255, 168, 1);
}

.dice > img {
  display: block;
}

@media screen and (max-width: 413px) {

  .advice-container {
    padding: 40px 24px;
    border-radius: 10px;
    width: calc(343px - (24px * 2));
    height: calc(315px - (40px * 2));
  }

  .pattern-divider {
    left: calc(50% - (295px / 2));
  }

  .advice-number {
    font-size: 11px;
    letter-spacing: 3.5px;
  }

  .advice-text {
    font-size: 24px;
  }
}



/*
.icons {
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top :20px
}
.icon{
  width :24px ;
  height :24px ;
  display:flex ;
  justify-content:center ;
  align-items:center ;
  border-radius :50% ;
  margin-right :10px;
  cursor: url('~@/assets/pointer-copy-8.png'), pointer;
}
*/
</style>
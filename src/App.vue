<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

/*Primary
Light Cyan: hsl(193, 38%, 86%)
Neon Green: hsl(150, 100%, 66%)
Neutral
Grayish Blue: hsl(217, 19%, 38%)
Dark Grayish Blue: hsl(217, 19%, 24%)
Dark Blue: hsl(218, 23%, 16%)*/

:root {
  /*Primary*/
  --light-cyan: hsl(193, 38%, 86%);
  --neon-green: hsl(150, 100%, 66%);
  /*Neutral*/
  --grayish-blue: hsl(217, 19%, 38%);
  --dark-grayish-blue: hsl(217, 19%, 24%);
  --dark-blue: hsl(218, 23%, 16%);
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Manrope', sans-serif;
}

body {
  background-color: var(--dark-blue);
}
</style>
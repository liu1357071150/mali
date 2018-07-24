<template>
  <div id="app">
    <div id="control"></div>

    <div id="main"></div>

    <div id="information">
      <div class="Double_view">
      </div>

    </div>

    <div id="sunburst"></div>

    <div id="time_line"></div>

  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  html {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #303243;
    height: 100%;
    width: 100%;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  #main {
    width: 50%;
    height: 70%;
    border: 1px solid #9A2EFE;
    float: left;
  }

  #information {
    width: 30%;
    height: 70%;
    border: 1px solid #9A2EFE;
    float: right;
  }

  #control {
    width: 20%;
    height: 70%;
    border: 1px solid #9A2EFE;
    float: left;
  }

  #time_line {
    clear: left;
    float: left;
    width: 70%;
    height: 30%;
    border: 1px solid #9A2EFE;
  }

  #sunburst {
    width: 30%;
    height: 30%;
    float: right;
  }

  #sys_email {
    width: 100%;
    height: 100%;
  }

  .Double_view {
    width: 100%;
    height: 40%;
    border: 1px solid #9A2EFE;
    border-left: none;
  }
</style>

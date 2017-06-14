<template>
  <div id="navigation">
    <div id="header-img">
      <img class="col-sm-10 col-sm-offset-1"  src="../../assets/farao_terrace_nigth_sm_crop2.png" alt="">
    </div>
    <nav id="nav" class="col-sm-10 col-sm-offset-1">
      <ul>
        <li v-for="menuItem in menu" class="menu-item" :style="{'width': menuWidth}">
          <router-link :to="{path: menuItem.path}" class="menu-text">{{menuItem.name}}</router-link>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script src="./Navigation.js"></script>
<style src="./Navigation.css"></style>


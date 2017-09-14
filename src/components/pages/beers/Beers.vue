<template>
  <div id="beers" class="container-fluid">
    <div class="row" id="beer-content" v-show="loadedBeers.length">
      <a v-on:click="prev" href="#" id="prev-beer" class="beer-control col-sm-1">
        <i class="fa fa-chevron-left"></i>
      </a>
      <div class="col-sm-10" id="beer-cointainer">
        <div id="beer-holder">
          <div class="beer-items">
            <div class="beer-block" v-for="(beer, key) in loadedBeers" v-bind:class="{'active' : key === 1}">
              <div class="beer-block-main" v-html=""></div>
              <div class="beer-block-sub">
                <div class="deg"></div>
                <div class="brew"></div>
                <div class="desc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a v-on:click="next" href="#" id="next-beer" class="beer-control col-sm-1">
        <i class="fa fa-chevron-right"></i>
      </a>
    </div>
    <div class="row" id="beer-loader" v-show="!loadedBeers.length">
      <p>Loading Beers</p>
      <i class="fa fa-spin fa-pulse fa-spinner"></i>
    </div>
  </div>
</template>

<script src="./Beers.js"></script>
<style src="./Beers.css"></style>



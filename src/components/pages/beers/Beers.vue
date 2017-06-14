<template>
  <div id="beers" class="container-fluid">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <div class="beer-holder">
          <div class="beer-block" v-for="beer in beers">
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

  </div>
</template>

<script src="./Beers.js"></script>
<style src="./Beers.css"></style>



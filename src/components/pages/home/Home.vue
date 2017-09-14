<template>
  <div id="home" class="container-fluid">
    <div class="row">
      <div class="content-block col-sm-5 col-sm-offset-1" id="origins">
        <div class="content-header">
          <h2>Origins..</h2>
        </div>
        <div class="content-body" v-html="messages.origins">

        </div>
      </div>

      <div class="content-block col-sm-5 " id="offer">
        <div class="content-header">
          <h2>Café Farao</h2>
        </div>
        <div class="content-body" v-html="messages.about">
        </div>
      </div>
    </div>

    <div class="row">
      <div id="newsFeed" class="col-sm-6 col-sm-offset-3">
        <div id="newsFeed-header">
          <h2>Latest news</h2>
        </div>
        <div id="newsFeed-slider">
          <a v-on:click="prev" id="newsFeed-prev" href="#" class="col-sm-1 newsFeed-control"><i
            class="fa fa-chevron-left"></i></a>

          <div id="newsFeed-content" class="col-xs-10">
            <div id="news-cat" class="">
              {{currentNewsItem.cat}}
            </div>
            <div id="news-body" v-html="currentNewsItem.news">

            </div>
          </div>
          <a v-on:click="next" id="newsFeed-next" href="#" class="col-sm-1 newsFeed-control"><i
            class="fa fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style src="./Home.css"></style>


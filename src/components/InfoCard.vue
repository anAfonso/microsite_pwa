<template>
  <div>
    <div uk-toggle="target: #card-1" class="uk-card info uk-card-default">
        <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)">
        </div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">Learn more about our products</h3>
            <p>1000 brands - 1 platform</p>
        </div>
      </div>
    <div id="card-1" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
          <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)"></div>
          <button class="uk-offcanvas-close" type="button" uk-close></button>
          <div class="card-body">
            <h3>Learn more about our products</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div uk-toggle="target: #card-2" class="uk-card info uk-card-default">
        <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"></div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Meet our amazing team</h3>
            <p>From all over the world</p>
        </div>
    </div>
    <div id="card-2" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"></div>
          <button class="uk-offcanvas-close" type="button" uk-close></button>
          <div class="card-body">
            <h3>Meet our amazing team</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
        </div>
      </div>
    </div>
  </div>
  <div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  computed: mapState('products', [
    'productNameToCreate',
    'productCreationPending'
  ]),
  methods: {
    ...mapMutations('products', ['setProductNameToCreate']),
    ...mapActions('products', ['triggerAddProductAction'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.uk-card.info {
  width: 300px;
  margin: 0 auto;
  border-radius: 13px;
  box-shadow: 0 7px 27px 0 rgba(88,88,88,0.14);

  .uk-card-media-top {
    background-size: cover;
    height: 300px;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-repeat: no-repeat;
    }

  .uk-card-body {
    max-height: 45px;
    padding: 12px;
  }
    h3 {
      color: #212736;
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 0;
    }
    p {
      color: #3e3e3e;
      margin-top: 0px;
      font-size: 14px;
    }

}

.uk-card.info {
  margin: 40px auto !important;
}

.card-body {
  padding: 20px 25px;
}

.uk-offcanvas-bar {
  width: 100vw;
  left: 100vw;
  background-color: #fff;
  color: #000;
  padding: 0;
  .uk-card-media-top {
    background-size: cover;
    height: 400px;
    background-repeat: no-repeat;
    background-position: center;

    }
    .uk-offcanvas-close {
      background: #fff;
      color: #000;
      border-radius: 50%;
      padding: 15px;
      top: 15px;
      right: 15px;
    }
    h3 {
      color: #000;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
    }
}
</style>

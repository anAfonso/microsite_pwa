<template>
  <div uk-slider="center: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
            <li>
              <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
                  <div class="uk-card-media-left uk-cover-container" style="background-size: 80%;background-image: url(https://avatars0.githubusercontent.com/u/1564818?s=200&v=4)">
                  </div>
                  <div class="uk-card-body">
                      <div class="voucher-circle-top"></div>
                      <div class="voucher-circle-bottom"></div>
                      <p class="type">Discount</p>
                      <h3 class="uk-card-title">20% off</h3>
                      <p>On all articles</p>
                  </div>
              </div>
            </li>
            <li>
              <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
                  <div class="uk-card-media-left uk-cover-container" style="background-image: url(https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80)">
                  </div>
                  <div class="uk-card-body">
                    <p class="type">Voucher</p>
                    <h3 class="uk-card-title">Free delivery</h3>
                    <p>On all clothing</p>
                  </div>
              </div>
            </li>
            <li>
              <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
                  <div class="uk-card-media-left uk-cover-container" style="background-image: url(https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80)">
                  </div>
                  <div class="uk-card-body">
                    <p class="type">Discount</p>
                    <h3 class="uk-card-title">15% off</h3>
                    <p>On all accessories</p>
                  </div>
              </div>
            </li>
            <li>
              <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
                  <div class="uk-card-media-left uk-cover-container" style="background-image: url(https://images.unsplash.com/photo-1564836949415-da93f0419a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80)">
                  </div>
                  <div class="uk-card-body">
                    <p class="type">Voucher</p>
                    <h3 class="uk-card-title">1 free</h3>
                    <p>Sample of Revolution makeup</p>
                  </div>
              </div>
            </li>
            <li>
              <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
                  <div class="uk-card-media-left uk-cover-container" style="background-image: url(https://images.unsplash.com/photo-1567433517180-d3e56cf7f81e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)">
                  </div>
                  <div class="uk-card-body">
                    <p class="type">Discount</p>
                    <h3 class="uk-card-title">10% off</h3>
                    <p>On all skin care products</p>
                  </div>
              </div>
            </li>
        </ul>


    </div>


</div>
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
.uk-slider-container {
  height: 170px;
  padding: 20px 0;
}
.uk-card {
  width: 300px;
  margin: 0 auto;
  border-radius: 13px;
  box-shadow: 0 2px 2px 0 rgba(46,46,46,.1);
  display: flex;
  flex-direction: row;
  height: 134px;
  position:relative;


  .uk-card-media-left {
    background-size: cover;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    flex-basis: 57%;
    background-repeat: no-repeat;
    background-position: center;
    }

  .uk-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 18px 0 18px;
    border-left: .125rem dashed #f0f0f0;
    position: relative;
    z-index: 2;
    &:before {
      background: #f4f4f4;
      content: "";
      display: inline-block;
      height: .4375rem;
      left: -.5rem;
      position: absolute;
      width: .875rem;
      z-index: 1;
      border-radius: 0 0 .875rem .875rem;
      box-shadow: 0 2px 2px 0 rgba(46,46,46,.1);
      top: 0;

    }
    &:after {
      background: #f4f4f4;
      content: "";
      display: inline-block;
      height: .4375rem;
      left: -.5rem;
      position: absolute;
      width: .875rem;
      z-index: 1;
      border-radius: .875rem .875rem 0 0;
      bottom: 0;
      box-shadow: 0 13px 3px -10px rgba(46,46,46,.1) inset,0 3px 0 #f4f4f4;
      transition: background .15s ease,box-shadow .2s ease;

    }

  }
    h3 {
      color: #212736;
      font-weight: 700;
      font-size: 22px;
      margin: 0;
    }
    p {
      color: #3e3e3e;
      margin-top: 3px;
      font-size: 14px;
      &.type {
        color: #FF6900;
        margin-bottom: 5px;
        font-weight: 500;
      }
    }

}
.product-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  .product-name-input {
    padding-left: 5px;
    height: 30px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
  }

  .create-product-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    border-color: #2c3e50;

    &.disabled {
      pointer-events: none;
      background-color: #aaa;
    }

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }
}
</style>

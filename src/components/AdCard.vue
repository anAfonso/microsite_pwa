<template>
  <div class="ad">

    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top" style="background-image: url(https://i.ytimg.com/vi/J-9l4tsL24A/maxresdefault.jpg)">
        </div>
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
.ad{
  height: 500px;
}
.uk-card {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  border-radius: 13px;
  box-shadow: 0 7px 27px 0 rgba(88,88,88,0.14);

  .uk-card-media-top {
    background-size: cover;
    height: 400px;
    border-radius: 13px;
    background-position: 50%;
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
      margin-top: 3px;
      font-size: 14px;
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

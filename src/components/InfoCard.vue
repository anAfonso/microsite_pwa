<template>
  <div uk-slider="center: true">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">About our products</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562887245-138c2f45013e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">About our products</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1310&q=80" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">About our products</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562887085-d0aa7ff20b95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">About our products</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562887245-138c2f45013e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">About our products</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
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
  height: 400px;
}
.uk-card {
  width: 300px;
  margin: 0 auto;
  border-radius: 13px;
  box-shadow: 0 7px 27px 0 rgba(88,88,88,0.14);

  .uk-card-media-top {
    background-size: cover;
    height: 300px;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
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

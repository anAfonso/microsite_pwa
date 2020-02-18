<template>
  <div class="page-wrapper">
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
      <div uk-toggle="target: #card-3" class="uk-card voucher uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
          <div class="uk-card-media-left uk-cover-container" style="background-image: url(https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)">
          </div>
          <div class="uk-card-body">
              <div class="voucher-circle-top"></div>
              <div class="voucher-circle-bottom"></div>
              <p class="type">Discount</p>
              <h3 class="uk-card-title">20% off</h3>
              <p>On all shoes</p>
          </div>
      </div>
      <div id="card-3" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">
            <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)"></div>
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <div class="card-body">
              <h3>20% off on all shoes</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div uk-toggle="target: #card-4" class="uk-card voucher uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
          <div class="uk-card-media-left uk-cover-container" style="background-image: url(https://images.unsplash.com/photo-1562886889-4ff7af0602ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)">
          </div>
          <div class="uk-card-body">
            <p class="type">Voucher</p>
            <h3 class="uk-card-title">1 free</h3>
            <p>Sample of Honest skin care</p>
          </div>
      </div>
      <div id="card-4" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">
            <div class="uk-card-media-top" style="background-image: url(https://images.unsplash.com/photo-1562886889-4ff7af0602ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)"></div>
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <div class="card-body">
              <h3>1 free Sample of Honest skin care</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div uk-toggle="target: #card-5" class="uk-card info info-pic uk-card-default">
          <div class="uk-card-media-top" style="background-image: url(https://visi.co.za/wp-content/uploads/2018/01/adicolor5.jpg)">
          </div>
          <div class="uk-card-body">
            <h3>Discover Adicolor</h3>
          </div>
        </div>
      <div id="card-5" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">
        <div class="uk-card-media-top" style="background-image: url(https://visi.co.za/wp-content/uploads/2018/01/adicolor5.jpg)"></div>
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <div class="card-body">
              <h3>Adidas Adicolor new collection</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div uk-toggle="target: #card-6" class="uk-card info info-square uk-card-default">
      <div class="uk-card-media-top" style="background-image: url(https://mk0uranus9v2y8a9wpr.kinstacdn.com/wp-content/uploads/2019/10/zalando-kolonia-outlet.jpg)">
      </div>
           <div class="uk-overlay-default uk-position-cover"></div>
           <div class="uk-overlay uk-position-center uk-dark">
               <h3>Want to work with us? </h3>
               <h3>Apply now 	&nbsp;	&nbsp;<span uk-icon="icon: arrow-right" ratio="2"></span></h3>
           </div>
       </div>
      <div id="card-6" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">
            <div class="uk-card-media-top" style="background-image: url(https://mk0uranus9v2y8a9wpr.kinstacdn.com/wp-content/uploads/2019/10/zalando-kolonia-outlet.jpg)"></div>
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <div class="card-body">
              <h3>Want to work with us?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: { },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';



.uk-card.voucher {
  width: 300px;
  margin: 0 auto;
  border-radius: 13px;
  box-shadow: 0 2px 2px 0 rgba(46,46,46,.1);
  display: flex;
  flex-direction: row;
  height: 134px;
  position:relative;
  margin-bottom: 20px;


  .uk-card-media-left {
    background-size: cover;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    flex-basis: 70%;
    background-repeat: no-repeat;
    background-position: center;
    }

  .uk-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 18px 0 18px;
    border-left: .125rem dashed transparent;
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
      margin-top: 2px;
      font-size: 15px;
      &.type {
        color: #FF6900;
        margin-bottom: 5px;
        font-weight: 500;
      }
    }

}

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



.uk-card.info-pic {
  height: 410px;
  border-radius: 13px;
  .uk-card-media-top {
    height: 350px;
    background-repeat: no-repeat;
    background-position: 0%;
    background-size: cover;
  }
  .uk-card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      color: #000;
      line-height: 34px;

    }
  }
}

.uk-card.info-square {
  height: 300px;
  height: 300px;
  border-radius: 13px;

  .uk-card-media-top {
    border-radius: 13px;
  }
  .uk-overlay-default {
    border-radius: 13px;
    background: rgba(0,0,0,.5);
  }

  .uk-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  h3 {
    font-weight: 700;
    font-size: 30px;
    text-align: left;
    color: #fff;
    line-height: 40px;
  }
}

</style>

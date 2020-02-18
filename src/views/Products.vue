<template>
  <div class="page-wrapper">
    <h2 class="products-page-title">About our products</h2>
    <product-list class="product-list"></product-list>
  <info-card v-if="networkOnLine"></info-card >
  <h2 class="">Offers for you</h2>
  <voucher-card v-if="networkOnLine"></voucher-card >
  <ad-card> </ad-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductList from '@/components/ProductList'
import InfoCard from '@/components/InfoCard'
import VoucherCard from '@/components/VoucherCard'
import AdCard from '@/components/AdCard'

export default {
  components: { ProductList, InfoCard, VoucherCard, AdCard},
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.products-page-title {
  text-align: center;
  margin-bottom: 0px;
  padding: 40px 0 0;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 600;

}

h2 {
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.product-list {
  margin: 20px 0;
}


</style>

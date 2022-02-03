<template>
  <div class='sz-title-block'>
    <SzSubTitle></SzSubTitle>
    <SzMainTitle></SzMainTitle>
  </div>
</template>

<script>
import SzMainTitle from '@/components/atoms/sz-main-title.vue';
import SzSubTitle from '@/components/atoms/sz-sub-title.vue';

export default {
  name: "SzTitleBlock",
  components: {
    SzMainTitle,
    SzSubTitle,
  },
};

</script>

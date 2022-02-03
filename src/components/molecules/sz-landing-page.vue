<template>
  <div class='sz-landing-page'>
  <SzStarsBackground></SzStarsBackground>
  <SzNavigation></SzNavigation>
  <SzTitleBlock></SzTitleBlock>
  </div>
</template>

<script>
import SzNavigation from '@/components/molecules/sz-navigation';
import SzTitleBlock from '@/components/molecules/sz-title-block';
import SzStarsBackground from '@/components/molecules/sz-stars-background';

export default {
  name: "SzLandingPage",
  components: {
    SzNavigation,
    SzTitleBlock,
    SzStarsBackground,
  },
};

</script>

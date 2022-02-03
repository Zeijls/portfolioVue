<template>
  <div class='sz-navigation'>
    <SzLogo></SzLogo>
    <SzContactButton></SzContactButton>
  </div>
</template>

<script>
import SzLogo from '@/components/molecules/sz-logo.vue';
import SzContactButton from '@/components/atoms/sz-contact-button.vue';

export default {
  name: "SzNavigation",
  components: {
      SzLogo,
      SzContactButton,
  },
};

</script>

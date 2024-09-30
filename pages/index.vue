<template>
  <div>
    <HeaderContent/>
    <About/>
    <Project/>
    <Shelter/>
    <OurTeam/>
    <Citizens/>
    <Partner/>
    <FooterComponent/>
    <DonateButton /> 
  </div>
</template>

<script lang="ts" setup>
import DonateButton from '@/component/DonateButton.vue'; 
import HeaderContent from '@/component/headerComponent/Header.vue'; 
import About from '@/component/aboutComponent/About.vue'; 
import Project from '@/component/projectComponent/Project.vue'; 
import FooterComponent from "@/component/FooterComponent.vue";
import OurTeam from '~/component/teamComponent/OurTeam.vue';
import Citizens from '@/component/citizensComponent/Citizens.vue';
import Partner from '@/component/partnerComponent/Partner.vue';
import Shelter from '~/component/shelterComponent/Shelter.vue';
</script>

<style lang="scss">
html, body {
  margin: 0px 0px !important;
  padding: 0px !important;
}
</style>

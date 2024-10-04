<script lang="ts" setup>
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <VerticalNavLink
    :item="{
      title: 'Progress',
      icon: 'ri-table-alt-line',
      to: '/tableData',
    }"
  />
  <!-- <VerticalNavLink
    :item="{
      title: 'Dashboard',
      to: '/dashboard',
    }"
  /> -->

  <!-- <VerticalNavLink
    :item="{
      title: 'Progress',
      icon: 'ri-table-alt-line',
      to: '/tableData',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Add Client',
      icon: 'ri-archive-drawer-line',
      to: '/clientData',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Whatsapp Log',
      icon: 'ri-whatsapp-line',
      to: '/whatsappTable',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Email Log',
      icon: 'ri-mail-open-line',
      to: '/emailTable',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Place Order',
      icon: 'ri-shopping-cart-2-line',
      to: '/placeOrder',
    }"
  /> -->
</template>






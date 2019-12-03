<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BookingSum/>
  </div>
</template>

<script>
import BookingSum from '@/components/BookingSum.vue'
export default {
  name:'about',
  components:{
    BookingSum
  }
}
</script>
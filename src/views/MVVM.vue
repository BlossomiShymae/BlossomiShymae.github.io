<script setup lang="ts">
  
</script>

<template>
  <div class="mvvm">
    <h1>MVVM (model-view-viewmodel)</h1>
    <p>An architectural pattern that can be seen added in GUI applications or innate in web frameworks 
      like Vue.js, Svelte, etc. The view is binded to the viewmodel and the viewmodel updates the model.
    The model notifies the viewmodel for change in domain data and the viewmodel notifies the view for changes 
    in presentation data.</p>

    <p>I really like this pattern cause I use this nearly every time I create a client application. The only 
      downside is this can create more files than needed (I usually create 1:1 view to viewmodels). At least it makes 
      thingies much more easier to maintain and understand. :3
    </p>
  </div>
</template>

<style lang="scss" scoped>

</style>
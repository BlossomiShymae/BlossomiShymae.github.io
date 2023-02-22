<script setup lang="ts">
  
</script>

<template>
  <div class="dependency-injection">
    <h1>Dependency injection</h1>
    <p>A very powerful pattern that provides classes with what it needs rather than 
      having the class construct the dependencies itself. This takes the idea of 
    singleton pattern and improvises the shortcomings. There is no global state or tight coupling. {{ `<3` }}</p>

    <p>I often use a framework in the programming language I'm coding to use this pattern.</p>
    <ul>
      <li>C# - Microsoft.Extensions.DependencyInjection</li>
      <li>Java - Spring Core or Google Guice</li>
      <li>Python - Dependency Injector</li>
      <li>Typescript - Vue.js - Provide/Inject</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
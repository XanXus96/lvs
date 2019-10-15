<template>
  <card :title="home">you are logged in</card>
</template>

<script>
export default {
  middleware: "auth",

  metaInfo() {
    return { title: "home" };
  }
};
</script>

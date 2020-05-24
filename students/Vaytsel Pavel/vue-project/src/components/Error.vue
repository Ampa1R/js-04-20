<template>
    <span>{{ msg }}</span>
</template>

<script>
export default {
    name: 'Error',
    props: { msg: String }
};
</script>

<style scoped>
span {
    text-align: center;
    color: darkred;
    padding: 20px;
}
</style>

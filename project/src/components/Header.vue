<template>
    <header>
        <div class="logo">
            eShop
        </div>
        <slot/>
        
    </header>
</template>

<script>

export default {

}
</script>

<style>
header {
    padding: 10px 7%;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}
.header-price {
    color: #2e4a62;
    font-size: 30px;
}

.logo {
    font-size: 28px;
    font-weight: 700;
}
</style> 
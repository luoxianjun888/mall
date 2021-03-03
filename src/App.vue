<template>
    <div id="app">
        <router-link class="btn btn-outline-dark" to="/home">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-view></router-view>
    </div>
</template>

<style>
@import url('~assets/css/app.css');
</style>
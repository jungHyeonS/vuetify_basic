<template>
    <!-- 루트 컴포넌트 -->
    <v-app>
        <!-- app : 기본레이아웃 명시 -->
        <v-app-bar v-if="$vuetify.breakpoint.xsOnly" app></v-app-bar>
        <v-navigation-drawer app></v-navigation-drawer>

        <!-- 프레임워크에 코어에 등록된 내용에따라 컨턴츠 영역 조절  -->
        <v-main>
            <v-container fluid>
                커텐츠 영역
            </v-container>
        </v-main>
        <v-footer app></v-footer>
    </v-app>
</template>
<script>
export default {

}
</script>
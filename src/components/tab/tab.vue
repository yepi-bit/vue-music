<template>
  <div class="tab">
    <router-link
      class="tab-item"
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
    >
        <span class="tab-link">
          {{tab.name}}
        </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    data() {
      return {
        tabs: [
          {
            name: '推荐',
            path: '/recommend'
          },
          {
            name: '歌手',
            path: '/singer'
          },
          {
            name: '排行',
            path: '/top-list'
          },
          {
            name: '搜索',
            path: '/search'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    .tab-item {
      flex: 1;
      text-align: center;
      .tab-link {
        padding-bottom: 5px;
        color: rgba(255, 255, 255, 0.5);
      }
      &.router-link-active {
        .tab-link {
          color: #ffcd32;
          border-bottom: 2px solid #ffcd32;
        }
      }
    }
  }
</style>

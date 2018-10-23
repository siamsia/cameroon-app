

<template>
    <div class="friend">
        <div class="friend-search">
        <input type="text" value="" placeholder="搜索全部关注">
        </div>
        <div class="friend-content">
            <div class="friend-content-list">
            <p>最近浏览</p>
            <ul>
                <li v-for="(item,index) in friend" :key="index">
                    <div class="friend-content-list-content">
                        <div class="friend-content-list-content-left"><img :src="item.src" alt=""></div>
                        <div class="friend-content-list-content-right">
                            <div>
                            <p>
                                {{item.title}}
                            </p>
                            <p>
                                简介：{{item.intro}}
                            </p>
                            <p>
                                最近状态：{{item.state}}
                            </p>
                            </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    </div>       
</template>
<script>
    export default {
        // props: ["friend"]
    }
</script>

<style lang="scss">
.topic {
  &-search {
      margin-top:50px;
      width:100%;
      background: #fff;
      height: 20px;
      input{
          border-style:none;
          margin-top: 0.1rem;
          height: 20px;
          border-radius: 2rem;
          background-color: #eee;
          text-align: center;
      font-weight: 400;
      font-size: 16px;
      outline: none;
      }
  }
  &-content {
    background-color: #ddd;
    height: 100%;
    overflow: hidden;
    &-list {
      li {
        margin-top: 0.2rem;
        height: 1.2rem;
        background-color: #fff;
      }
      &-content {
        display: flex;
        &-left {
          flex-grow: 1;
          position: relative;
          height: 1.8rem;
          img {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            height: 1.2rem;
          }
        }
        &-right {
          flex-grow: 2;
          position: relative;
          div {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          p {
            &:nth-child(1) {
              font-size: 0.3rem;
            }
            &:nth-child(2) {
              color: rgb(157, 157, 157);
            }
          }
        }
      }
    }
  }
}
.demo-text p {
  margin: 0;
}
.container{
    height: 100%;
}
</style>

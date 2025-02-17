<script setup lang="ts">
import {computed, ref} from 'vue'

// 响应式数据
const rejectCount = ref(0)
const isYesClicked = ref(false)
const heartContent = ref('')

// 配置数据
const messages = [
  {text: 'ฅ•ω•ฅ 你...你确定吗？', svg: '/svgs/1F48C.svg'},
  {text: '٩(๑´0`๑)۶ 再想想哦～', svg: '/svgs/1F928.svg'},
  {text: '(｡•́︿•̀｡) 你会后悔的...', svg: '/svgs/1F620.svg'},
  {text: '＞︿＜ 没有后悔药哒！', svg: '/svgs/1F624.svg'},
  {text: '（＞д＜）最后一次机会！', svg: '/svgs/1F97A.svg'},
  {text: 'o(´^｀)o 哼！不可以！', svg: '/svgs/1F97A.svg'},
]

// 计算属性
const currentNoButtonText = computed(() =>
    rejectCount.value > 0
        ? messages[Math.min(rejectCount.value - 1, messages.length - 1)].text
        : '不要'
)

const yesButtonStyle = computed(() => ({
  transform: `scale(${1 + rejectCount.value * 0.2})`
}))

const getCharacterImage = computed(() =>
    isYesClicked.value ? '/svgs/1F970.svg' :
        messages[Math.min(rejectCount.value, messages.length - 1)].svg
)

const handleNoClick = () => {
  rejectCount.value += 1
  heartContent.value = '❓'
}

const handleYesClick = () => {
  isYesClicked.value = true
  heartContent.value = '🎉💖🎉'
}

</script>

<template>
  <div class="container">
    <div class="express">
      <div class="hearts">
        <div
            class="heart"
            draggable="true"
        >
          ❤️
        </div>
        <span v-text="heartContent"></span>
      </div>
      <img
          :src="getCharacterImage"
          alt="character"
          class="character"
      >
    </div>
    <div class="buttons" v-if="!isYesClicked">
      <button
          id="yesBtn"
          :style="yesButtonStyle"
          @click="handleYesClick"
      >
        我愿意！
      </button>
      <button
          v-if="!isYesClicked"
          id="noBtn"
          @click="handleNoClick"
      >
        {{ currentNoButtonText }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
$primary-color: #ff69b4;
$secondary-color: #f8bbd0;

.container {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
  background: linear-gradient(45deg, $secondary-color, #87cefa);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  .hearts {
    position: relative;
    height: 60px;
    margin: 2rem 0;

    .heart {
      font-size: 2.5rem;
      animation: float 2s ease-in-out infinite;
      cursor: grab;

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      &:active {
        cursor: grabbing;
      }
    }
  }

  .character {
    width: 150px;
    transition: transform 0.3s ease;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;

    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &#yesBtn {
        background: $primary-color;
        color: white;

        &:hover {
          transform: scale(1.05) rotate(2deg);
        }
      }

      &#noBtn {
        background: #e0e0e0;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>

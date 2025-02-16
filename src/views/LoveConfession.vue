<script setup lang="ts">
import {computed, ref} from 'vue'

type CharacterState = 'happy' | 'sad' | 'excited'

// 响应式数据
const rejectCount = ref(0)
const characterState = ref<CharacterState>('happy')
const isYesClicked = ref(false)
const heartContent = ref('')
const isDragging = ref(false)

// 配置数据
const messages = [
  'ฅ•ω•ฅ 你...你确定吗？',
  '٩(๑´0`๑)۶ 再想想哦～',
  '(｡•́︿•̀｡) 你会后悔的...',
  '＞︿＜ 没有后悔药哒！',
  '(,,•́ . •̀,,) 真的不要嘛？',
  '（＞д＜）最后一次机会！',
  'o(´^｀)o 哼！不可以！'
]

// 计算属性
const currentNoButtonText = computed(() =>
    rejectCount.value > 0
        ? messages[Math.min(rejectCount.value - 1, messages.length - 1)]
        : '不要'
)

const yesButtonStyle = computed(() => ({
  transform: `scale(${1 + rejectCount.value * 0.2})`
}))

const getCharacterImage = computed(() => {
  const images = {
    happy: '/images/happy.png',
    sad: '/images/sad.png',
    excited: '/images/excited.png'
  }
  return images[characterState.value]
})

// 事件处理
const handleNoHover = () => {
  if (!isYesClicked.value) {
    characterState.value = 'sad'
  }
}

const handleNoClick = () => {
  rejectCount.value += 1
  heartContent.value += '❓'
}

const handleYesClick = () => {
  characterState.value = 'excited'
  isYesClicked.value = true
  heartContent.value = '🎉💖🎉'
}

// 拖拽处理
const handleDragStart = () => {
  isDragging.value = true
}

const handleDragEnd = (e: DragEvent) => {
  isDragging.value = false
  const target = e.target as HTMLElement
  const rect = target.getBoundingClientRect()

  if (e.clientX > rect.left &&
      e.clientX < rect.right &&
      e.clientY > rect.top &&
      e.clientY < rect.bottom
  ) {
    handleYesClick()
  }
}
</script>

<template>
  <div class="container">
    <div class="express">
      <div class="hearts">
        <div
            class="heart"
            draggable="true"
            @dragstart="handleDragStart"
            @dragend="handleDragEnd"
        >
          ❤️{{ heartContent }}
        </div>
      </div>
      <img
          :src="getCharacterImage"
          alt="character"
          class="character"
          :class="{ 'character--sad': characterState === 'sad' }"
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
          @mouseover="handleNoHover"
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

    &--sad {
      filter: brightness(0.9);
      transform: rotate(5deg);
    }
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

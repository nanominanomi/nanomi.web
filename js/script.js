const { ref, watch } = Vue

const App = {
  setup() {
    const isDarkMode = ref(false)

    // 監聽 isDarkMode 的變化
    watch(isDarkMode, (val) => {
      console.log('切換模式：', val ? 'dark' : 'light')  // ← 看這個有沒有印出來
      document.body.classList.toggle('dark', val)
      document.body.classList.toggle('light', !val)
    }, { immediate: true })

    return {
      isDarkMode
    }
  }
}

Vue.createApp(App).mount('#app')

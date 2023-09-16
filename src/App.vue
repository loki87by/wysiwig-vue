<template>
  <div id="app">
    <Header :undo="undoState" :redo="redoState" :showPrompt='showPrompt' :getHtml='getHtml' />
    <Main :state='state' :setState="setNewState" :currentWidth="currentWidth" :currentHeight="currentHeight" :nodeType="nodeType" />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Main from './components/Main/Main.vue'
// eslint-disable-next-line standard/object-curly-even-spacing
import {/* TEXT_ELEMENTS, */ BASE_STATE } from './utils/consts'
export default {
  name: 'App',
  data: function () {
    return {
      state: BASE_STATE,
      story: [BASE_STATE],
      stateIndex: 0,
      changedIndex: 0,
      currentHeight: NaN,
      currentWidth: NaN,
      selected: false,
      selectedText: '',
      currentElement: '',
      nodeType: ''
    }
  },
  components: {
    Header,
    Main
  },
  created () {
    window.addEventListener('select', this.selecter)
    window.addEventListener('mouseover', this.textAreaHandler)
    window.addEventListener('mouseout', this.changesChecker)
  },
  destroyed () {
    window.removeEventListener('select', this.selecter)
    window.removeEventListener('mouseover', this.textAreaHandler)
    window.removeEventListener('mouseout', this.changesChecker)
  },
  methods: {
    setNewState (data) {
      this.state = data
      this.story.push(data)
    },

    undoState () {
      if (this.stateIndex === 0) {
        return
      }
      const ind = this.stateIndex - 1
      this.state = this.story[ind]
      this.stateIndex = ind
    },

    redoState () {
      if (this.stateIndex === this.story.length - 1) {
        return
      }
      const ind = this.stateIndex + 1
      this.state = this.story[ind]
      this.stateIndex = ind
    },

    showPrompt () {
      const uri = prompt('Введите url изображения', 'www.examle.com')
      console.log(uri)
    },

    /* toHeading (target, text) {
},

fromHeading (target, text) {
} */

    getHtml () {
      console.dir(window.document)
    },

    selecter () {
      const selectedText = window.getSelection().toString().replace('\n', ' ')
      console.log(selectedText)
    },

    textAreaHandler (e) {
      if (e.target.id.split('-')[0] === 'text') {
        if (!this.selected) {
          this.nodeType = e.target.id.split('-')[1]
          this.selected = true
        }
        const textContent = e.target.textContent
        const height = e.target.clientHeight
        const width = e.target.clientWidth
        this.currentHeight = height
        this.currentWidth = width
        const ind = this.state.findIndex(i => i.content === textContent)
        this.changedIndex = ind
        this.state[ind].tag = 'textArea'
      }
    },

    changesChecker (e) {
      console.log(e.target)
    }
  },

  mounted () {
    this.selecter()
  }
}
</script>

<style>
@import url("../normalize.css");
@import url("../styles.css");
</style>

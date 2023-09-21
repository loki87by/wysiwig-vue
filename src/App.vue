<template>
  <div id="app">
    <!-- <Header :undo="undoState" :redo="redoState" :toHeading="toHeading" :showPrompt='showPrompt' /> -->
    <Header :undo="undoState" :redo="redoState" :showPrompt='showPrompt' :getHtml='getHtml' />
    <Main :state='state' :setState="setNewState" />
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { BASE_STATE } from './utils/consts.js'
import { htmlGetter } from './utils/helpers'
export default {
  name: 'App',
  data: function () {
    return {
      state: BASE_STATE,
      story: [BASE_STATE],
      stateIndex: 0,
      changedIndex: 0,
      selected: false,
      breakingSelected: NaN,
      selectedText: '',
      nodeType: ''
    }
  },
  components: {
    Header,
    Main
  },
  created () {
    window.addEventListener('mouseup', this.selecter)
  },
  destroyed () {
    window.removeEventListener('mouseup', this.selecter)
  },

  methods: {
    setNewState (data) {
      if (this.stateIndex < this.story.length - 1) {
        const current = JSON.parse(JSON.stringify(this.story)).slice(0, this.stateIndex + 1)
        this.story = current
      }
      this.state = data
      this.story.push(data)
      this.stateIndex += 1
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
      const uri = prompt('Введите url изображения', 'www.example.com')
      console.log(uri)
    },

    copyToClipBoard (textToCopy) {
      navigator.clipboard.writeText(textToCopy)
    },

    selecter (e) {
      const range = window.getSelection().getRangeAt(0)
      const start = range.startOffset
      const end = range.endOffset
      const index = e.target.id.replace(/\D*\d?-/, '')
      if (index >= 0 && index !== '') {
        const selectedText = this.state[index].content.substring(start, end)
        this.selectedText = selectedText
        if (selectedText === this.state[index].content) {
          this.breakingSelected = 2
        } else if (selectedText === '') {
          this.breakingSelected = 0
        } else {
          this.breakingSelected = 1
        }
      }
    },

    getHtml () {
      const text = htmlGetter(this.state)
      this.copyToClipBoard(text)
    }
    /*
    toHeading () {
      console.log(this.nodeType)
      const tag = this.nodeType
      const size = TEXT_ELEMENTS.findIndex(i => i === this.nodeType)
      const newTag = size > 0 ? TEXT_ELEMENTS[size - 1] : 'h1'
      if (this.breakingSelected === 2) {
        this.state[this.indexOfSelect].tag = newTag
      } else {
        const parts = this.state[this.indexOfSelect].content.split(
          this.selectedText
        )
        if (parts.length === 2) {
          const newElements = []
          newElements.push({
            tag: tag,
            content: parts[0]
          })
          newElements.push({
            tag: newTag,
            content: this.selectedText
          })
          newElements.push({
            tag: tag,
            content: parts[1]
          })
          const start = JSON.parse(JSON.stringify(this.state)).slice(
            0, this.indexOfSelect
          )
          const end = JSON.parse(JSON.stringify(this.state)).slice(
            this.indexOfSelect + 1
          )
          const res = [...start, ...newElements, ...end]
          this.state = res
          const newIndex = this.indexOfSelect + start.length
          this.story.push(res)
          this.indexOfSelect = newIndex
          this.breakingSelected = 2
        }
      }
      this.currentHeight = NaN
      this.currentWidth = NaN
      this.currentMargin = ''
    }, */

    /* fromHeading (target, text) {
} */
    /*

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
      if (!this.selected) {
        return
      }
      const ind = this.changedIndex

      if (!e.target.value) {
        this.state[ind].tag = this.nodeType
        this.selected = false
      } else {
        if (this.state[ind].content !== e.target.value) {
          const duplicate = JSON.parse(JSON.stringify(this.state))
          duplicate[ind].content = e.target.value
          duplicate[ind].tag = this.nodeType
          this.selected = false
          this.state[ind].tag = this.nodeType
          this.setNewState(duplicate)
        }
      }
    } */
  }

/*   mounted () {
    this.selecter()
  } */
}
</script>

<style>
@import url("../normalize.css");
@import url("../styles.css");
</style>

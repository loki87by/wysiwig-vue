<template>
  <header>
    <div class="header_button">
      <img
        class="header_button-icon"
        @click="undo()"
        alt="undo"
        :src="undoIcon"
      />
    </div>
    <div class="header_button">
      <img
        class="header_button-icon"
        @click="redo()"
        alt="redo"
        :src="redoIcon"
      />
    </div>
    <div class="header_button">
      <img
        class="header_button-icon"
        @click="showPrompt()"
        alt="add image"
        :src="imgIcon"
      />
    </div>
    <div class="header_button header_text-button">
      <p @click="getHtml()">getHtml</p>
    </div>
  </header>
</template>

<script>
/* import { debounce } from '../../utils/helpers'
import { NAVIGATION_LINKS } from '../../utils/consts' */
import * as undoIcon from '../../assets/undo.svg'
import * as redoIcon from '../../assets/redo.svg'
/* import up from "../../assets/up.svg";
import down from "../../assets/down.svg"; */
import * as imgIcon from '../../assets/img.svg'

export default {
  name: 'Header',
  props: ['undo', 'redo', 'showPrompt', 'getHtml'],
  data: function () {
    return {
      inputed: '',
      undoIcon,
      redoIcon,
      imgIcon
      /* nav: NAVIGATION_LINKS */
    }
  }
  /* methods: {
    filterItems (e) {
      const text = e.target.value
      this.inputed = text
      /* debounce(this.filter, 1000, text) *
    },

    filterFromButton () {
      this.filter(this.inputed)
    }
  } */
}
</script>

<style>
@import url("../../styles/header.css");
</style>

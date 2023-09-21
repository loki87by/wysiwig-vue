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
        class="header_button-icon header_button-icon_up"
        @click="toHeading()"
        alt="to heading"
        :src="thIcon"
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
import * as thIcon from '../../assets/up.svg'
/* import down from "../../assets/down.svg"; */
import * as imgIcon from '../../assets/img.svg'

export default {
  name: 'Header',
  props: ['undo', 'redo', 'toHeading', 'showPrompt', 'getHtml'],
  data: function () {
    return {
      inputed: '',
      undoIcon,
      redoIcon,
      imgIcon,
      thIcon
    }
  }
}
</script>

<style>
@import url("../../styles/header.css");
</style>

<script>
import { h } from 'vue'

export default {
  name: 'Item',
  props: [
    'tag',
    'content',
    'index',
    'updateState'
  ],
  setup (props) {
    return () =>
      h(
        props.tag === 'img' ? props.tag : 'div',
        {
          class: props.tag === 'img' ? props.tag : `divtext ${props.tag}`,
          on: {
            'input': function (e) {
              props.updateState(e, props.index)
            }
          },
          attrs:
            props.tag === 'img'
              ? {
                src: props.content,
                alt: 'изображение',
                id: `${props.tag}-${props.index}`
              }
              : {
                contentEditable: true,
                id: `text-${props.tag}-${props.index}`
              }
        },
        props.tag !== 'img' ? props.content : null
      )
  }
}
</script>

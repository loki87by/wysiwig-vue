<script>
import { h } from 'vue'

export default {
  name: 'Item',
  props: ['tag', 'content', 'index', 'currentHeight', 'currentWidth', 'nodeType'],
  setup (props) {
    return () =>
      h(
        props.tag,
        {
          class: props.tag,
          style: {minHeight: props.tag === 'textArea' ? `${props.currentHeight}px` : null,
            height: props.tag === 'textArea' ? 'max-content' : null,
            width: props.tag === 'textArea' ? `${props.currentWidth}px` : null,
            fontSize: props.tag === 'textArea' ? `var(--${props.nodeType})` : null},
          attrs: props.tag === 'img' ? {
            src: props.content,
            alt: 'изображение',
            id: `${props.tag}-${props.index}`
          } : {
            id: `text-${props.tag}-${props.index}`}
        },
        props.tag !== 'img' ? props.content : null
      )
  }
}
</script>

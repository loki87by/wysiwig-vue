export const htmlGetter = (arr) => {
  return arr.map((item) =>
    item.tag === 'img'
      ? `<img src="${item.content}" alt="${item.tag}"/>`
      : `<${item.tag}>${item.content}</${item.tag}>`
  ).join('')
}

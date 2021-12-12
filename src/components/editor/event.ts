import Quill from 'quill'
export function addTag(quill: Quill) {
  const index = quill.getSelection(true).index
  if (index) {
    quill.insertText(index, '#')
  } else {
    alert('没有聚焦')
  }
}

export function setBold(quill: Quill) {
  const { index, length } = quill.getSelection(true)

  console.log('setBold')
  console.log(index, length)
  quill.formatText(index, length, 'bold', true)
}

export function setUl(quill: Quill) {
  const index = quill.getSelection(true).index
  if (index) {
    quill.insertText(index, '#')
  } else {
    alert('没有聚焦')
  }
}

export function setOl(quill: Quill) {
  const index = quill.getSelection(true).index
  if (index) {
    quill.insertText(index, '#')
  } else {
    alert('没有聚焦')
  }
}
export function setUnderline(quill: Quill) {
  const index = quill.getSelection(true).index
  if (index) {
    quill.insertText(index, '#')
  } else {
    alert('没有聚焦')
  }
}

const express = require('express')
const app = express()
app.use(express.json())
app.get('tags', (req, res) => {
  res.send({
    data: [
      '历史',
      '玄幻',
      '武侠',
    ]
  })
})

app.listen(3000, () => {
  console.log('on 3000')
})
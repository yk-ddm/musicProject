const http = require('http')
const express = require('express')
const app = express()

app.use('/static', express.static('assets'))

app.listen(3000, () => {
    console.log('服务开启成功, 请访问 http://localhost:3000/')
})
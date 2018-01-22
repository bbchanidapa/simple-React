var moment = require('moment')
var axios = require('axios')
const url = 'https://bx.in.th/api/'
const line = require('@line/bot-sdk')
var express = require('express')
const app = express()
const locale = moment.locale('th')
const date = moment().format('LLL')
console.log(date)

// const userId = 'U465d63dba85c98b87bba1e33dbd0751b'
// app.listen( 3000)
// var bot = linebot({
//     channelId: '1558243028',
//     channelSecret: 'b9b123266c15cf4510c50b1a2a509f9c',
//     channelAccessToken: 'IJmHAlaS0cECsFIiS9TJfWj/zFDH0qEerXyq15VUqmTJrPQMew2yTb4eNso3w8kMKBcwLfCAMY/g9TL902WlBlT17Kg3BXOgEZNJmOzJUkF1XKL5ZzyxWc9x+Ud+XAdkfB2UJOxpzds/gjwDkqHswgdB04t89/1O/w1cDnyilFU=',
//     verify: true
// })



const token = 'uUxBwSgXb25XSvjv4WmguoQmuYj0P9TbysGdcnChOzF'

var lineApi = require("line-api")
var notify = new lineApi.Notify({
    token: token
})
notify.status().then(console.log)

function noti(message) {
    notify.send({
        message: message
    }).then(console.log)
}
const time = (1000*60)*5
setInterval(function () {
    axios.get(url).then((res = {}) => {
        if (res.data['25'].last_price >= 75) console.log('XRP >>>', res.data['25'].last_price)
        else if (res.data['25'].last_price <= 56) console.log('XRP <<<', res.data['25'].last_price)
        // EVX
        else if (res.data['28'].last_price <= 157) console.log('EVX BUY NOW....', res.data['28'].last_price)
        else if (res.data['28'].last_price >= 165) console.log('>>>>>EVX SELL<<<<<', res.data['28'].last_price)
        // console.log('EVX', res.data['28'].last_price, noti('EVX'))
        // noti(date)// .setTimeout(() => {}, 1000)
        noti('EVX : '+ res.data['28'].last_price)
        noti('XRP : '+ res.data['25'].last_price)
        noti('OMG : '+ res.data['26'].last_price)
    })
},time)




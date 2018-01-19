var axios = require('axios')
const url = 'https://bx.in.th/api/'
const token = '8v0iqsNBiu9ZLHHfWp8ZicmEgLbUlNoCxjru2RnnzMg'
// setInterval(function(){
//     axios.get(url).then((res = {})=> {
//         if(res.data['25'].last_price >= 75) console.log('XRP >>>',res.data['25'].last_price) 
//         else if(res.data['25'].last_price <= 56) console.log('XRP <<<', res.data['25'].last_price)
//         // EVX
//         else if(res.data['28'].last_price <= 157) console.log('EVX BUY NOW....', res.data['28'].last_price)
//         else if(res.data['28'].last_price >= 165) console.log('>>>>>EVX SELL<<<<<', res.data['28'].last_price)    
//         console.log('EVX', res.data['28'].last_price)
//     })
   
// },2000)
// axios.post({url:'https://notify-api.line.me/api/notify'}).then((res = {})=> {
    
// })
axios({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
        'bearer': token
    },
    form: {
      message: 'message'
    }
})
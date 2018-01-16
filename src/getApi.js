var axios = require('axios')
const url = 'https://bx.in.th/api/'

setInterval(function(){
    axios.get(url).then((res = {})=> {
        if(res.data['25'].last_price >= 75) console.log(res.data['25'].last_price) 
        else if(res.data['25'].last_price <= 67) console.log(res.data['25'].last_price) 
    })
},2000)
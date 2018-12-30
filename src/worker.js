let counter = 1;
const updateCounter = () => {
 console.log('updating', counter)
    counter++;
}

// const WebSocket = require('ws')

// const wss = new WebSocket('wss://api.bitfinex.com/ws/')
// wss.onmessage = (msg) => console.log(msg.data)
// wss.onopen = () => {
//    wss.send(JSON.stringify({
//       "event":"subscribe",
//       "channel":"book",
//       "pair":"BTCUSD"
//    }))
// }

setInterval(updateCounter, 3000);
const getCounter = () => counter;
export default getCounter;

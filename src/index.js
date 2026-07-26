import PriceWatcherClient from './ws-client.js';
import EventBus from './event-bus.js';

const client = new PriceWatcherClient("wss://stream.binance.com:9443/ws/btcusdt@trade");
const bus = new EventBus()

client.bus.on('trade', (trade) => {
  console.log(trade);
});
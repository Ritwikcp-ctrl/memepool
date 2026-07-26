import PriceWatcherClient from './ws-client.js';
import EventBus from './event-bus.js';
import Queue from "./queue.js";
import Worker from './worker.js';

const client = new PriceWatcherClient("wss://stream.binance.com:9443/ws/btcusdt@trade");
const bus = new EventBus()
const queue = new Queue()
const worker = new Worker(queue,(trade) => {
    console.log("Processing" , trade);
});


client.bus.on('trade', (trade) => {
  queue.enqueue(trade); //This helps in the putting them into the line and not for precessing 
});

worker.start();
//raw websocket connection to binance steram.
import WebSocket from "ws";
import EventBus from "./event-bus.js";

class PriceWatcherClient {
    constructor(url) {
        this.url = url;
        this.bus = new EventBus();
        this.socket = new WebSocket(url); // this actually opens the connection.

        this.socket.onopen = () => console.log("Connected");
        this.socket.onclose = () => console.log("Disconnected");
        this.socket.onerror = (err) => console.error("WebSocket error:", err);

        this.socket.onmessage = (event) => {
            const trade = JSON.parse(event.data)
            this.bus.emit('trade' , trade);

        };

    }
}


export default PriceWatcherClient;
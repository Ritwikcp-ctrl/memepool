class EventBus {
    constructor(){
        this.listeners = {
            // message :[
            //     callback
            // ]
        };
    }

    on(eventName,callback) { //  Subscribing the event. 
        if(!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    }

    emit(eventName,data) { // Publishing the event .
        if(!this.listeners[eventName]) return;
        this.listeners[eventName].forEach(callback => callback(data));
    }
}




export default EventBus;
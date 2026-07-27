class Worker {
    constructor (queue,onProcess) {
        this.queue = queue;
        this.onProcess = onProcess;
        this.running = false;
        
    }

    start() {
        this.running = true;
        this.loop();
    }

    stop() {
        this.running = false;
    }

    get size() {
    return this.items.length;
}

    async loop () {
        while(this.running) {
          
            if(this.queue.size()>0) {
               const item = this.queue.dequeue();
               this.onProcess (item); 
            } else {
                await new Promise (resolve => setTimeout(resolve,1000));
            }
        }
    }
}

export default Worker;
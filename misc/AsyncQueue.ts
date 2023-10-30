type Task = {
  (): Promise<void>;
};

class AsyncQueue {
  private queue: Array<Task> = [];
  private isRunning: boolean = false;

  async run() {
    if (this.isRunning) return;
    this.isRunning = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        console.log("running task...");
        await task();
        console.log("done.");
      }
    }

    this.isRunning = false;
  }

  enqueue(task: Task) {
    this.queue.push(task);
    this.run();
  }
}

const createTask: () => Task = () => async () =>
  await new Promise((res) => setTimeout(res, 5000));

const queue = new AsyncQueue();
queue.enqueue(createTask());
queue.enqueue(createTask());

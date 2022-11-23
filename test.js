class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    if (this.seconds > 59) {
      this.minutes++;
      this.seconds=0;
    }
    if (this.minutes > 59) {
      this.hours++;
      this.minutes=0;
    }
    this.printTime();
  }

  addATick() {
    setInterval(clock._tick, 1000);
  }
}

const clock = new Clock();
// console.log(`${clock.hours}`);
// console.log(`${clock.minutes}`);
// console.log(`${clock.seconds}`);
// clock._tick();
setInterval(clock._tick.bind(clock), 1000)

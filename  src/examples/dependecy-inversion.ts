//v1 bad

class App {
  player = new Player();
}

class Player {
  tracking = new Tracking();
}

class Tracking {}

// v2 good

interface AbstractPlayer {
  play(): void;
  pause(): void;
}

interface AbstractTracking {
  sendTrackings(): void;
}

class App1 {
  player: AbstractPlayer;

  constructor(player: AbstractPlayer) {
    this.player = player;
  }
}

class Player1 implements AbstractPlayer {
  tracking: AbstractTracking;

  constructor(tracking: AbstractTracking) {
    this.tracking = tracking;
  }

  play(): void {
    throw new Error("Method not implemented.");
  }
  pause(): void {
    throw new Error("Method not implemented.");
  }
}

class Tracking1 implements AbstractTracking {
  sendTrackings(): void {
    throw new Error("Method not implemented.");
  }
}

const tracking = new Tracking1();
const player = new Player1(tracking);
const app = new App1(player);

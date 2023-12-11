import Network from '../services/Network';

export default class Game extends Phaser.Scene {
  network!: Network;
  disableKeys() {
    this.input.keyboard!.enabled = false;
  }

  enableKeys() {
    this.input.keyboard!.enabled = true;
  }
}

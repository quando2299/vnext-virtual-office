import Network from '../services/Network';

export default class Game extends Phaser.Scene {
  myPlayer: any;
  registerKeys() {
    throw new Error('Method not implemented.');
  }
  network!: Network;
  disableKeys() {
    this.input.keyboard!.enabled = false;
  }

  enableKeys() {
    this.input.keyboard!.enabled = true;
  }
}

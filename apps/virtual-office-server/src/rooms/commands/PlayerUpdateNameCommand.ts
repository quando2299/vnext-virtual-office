import { Command } from '@colyseus/command';
import { IOfficeState } from 'apps/types/IOfficeState';
import { Client, Room } from 'colyseus';

type Payload = {
  client: Client;
  name: string;
};

export default class PlayerUpdateNameCommand extends Command<
  Room<IOfficeState>,
  Payload
> {
  execute(data: Payload) {
    const { client, name } = data;

    const player = this.room.state.players.get(client.sessionId);

    if (!player) return;
    player.name = name;
  }
}

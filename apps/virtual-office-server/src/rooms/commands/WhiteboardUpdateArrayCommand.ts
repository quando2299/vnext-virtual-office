import { Command } from '@colyseus/command';
import { IOfficeState } from 'apps/types/IOfficeState';
import { Client, Room } from 'colyseus';

type Payload = {
  client: Client;
  whiteboardId: string;
};

export class WhiteboardAddUserCommand extends Command<
  Room<IOfficeState>,
  Payload
> {
  execute(data: Payload) {
    const { client, whiteboardId } = data;
    const whiteboard = this.room.state.whiteboards.get(whiteboardId);
    const clientId = client.sessionId;

    if (!whiteboard || whiteboard.connectedUser.has(clientId)) return;
    whiteboard.connectedUser.add(clientId);
  }
}

export class WhiteboardRemoveUserCommand extends Command<
  Room<IOfficeState>,
  Payload
> {
  execute(data: Payload) {
    const { client, whiteboardId } = data;
    const whiteboard = this.state.whiteboards.get(whiteboardId);

    if (whiteboard.connectedUser.has(client.sessionId)) {
      whiteboard.connectedUser.delete(client.sessionId);
    }
  }
}

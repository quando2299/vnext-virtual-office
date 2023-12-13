import { monitor } from '@colyseus/monitor';
import { LobbyRoom, Server } from 'colyseus';
import cors from 'cors';
import express from 'express';
import http from 'http';

import { RoomType } from '../../types/Room';
import { SkyOffice } from './rooms/SkyOffice';

const port = Number(process.env.PORT || 2567);
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static('dist'))

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

// register room handlers
gameServer.define(RoomType.LOBBY, LobbyRoom);
gameServer.define(RoomType.PUBLIC, SkyOffice, {
  name: 'Public Lobby',
  description:
    'For making friends and familiarizing yourself with the controls',
  password: null,
  autoDispose: false,
});
gameServer.define(RoomType.CUSTOM, SkyOffice).enableRealtimeListing();

// register colyseus monitor AFTER registering your room handlers
app.use('/colyseus', monitor());

gameServer.listen(port);
console.log(`Listening on ws://localhost:${port}`);

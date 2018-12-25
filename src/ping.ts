import { service, DisService } from '@disnetwork/core';
import { PingMessageEvent } from './ping/message';

@service({
    events: [
        PingMessageEvent,
    ]
})

export class PingService extends DisService {}

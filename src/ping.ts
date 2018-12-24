import { PingMessageEvent } from './ping/message';
import { service, DisService } from '@disnetwork/core';

@service({
    events: [
        PingMessageEvent,
    ]
})

export class PingService extends DisService {}
import { app } from '@disnetwork/core/';
import { PingService } from './ping';
import { PreStartEvent } from './event/preStart';
import { StartEvent } from './event/start';
@app({
    services: [
        PingService
    ],
    events: [
        PreStartEvent,
        StartEvent,
    ]
})

export class SampleApp {

}

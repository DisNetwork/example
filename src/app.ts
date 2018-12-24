import { PingService } from './ping';
import { PreStartEvent } from './event/preStart';
import { StartEvent } from './event/start';

@App({
    services: [
        PingService
    ],
    events: [
        PreStartEvent,
        StartEvent,
    ]
})
export class App {
}

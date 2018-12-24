import { PreStartEvent } from './event/preStart';
import { StartEvent } from './event/start';

@App({
    services: [],
    events: [
        PreStartEvent,
        StartEvent
    ]
})
export class App {
}

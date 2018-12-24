import { PingMessageEvent } from './ping/message';

@Service({
    events: [
        PingMessageEvent,
    ]
})
export class PingService {
}

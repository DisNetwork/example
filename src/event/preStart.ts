import { DisEvent } from "@disnetwork/core";

export class PreStartEvent extends DisEvent {

    public onFire(): void {
        // Here you will be able to set the activity before the bot starts
    }

}

import {getFirstEventByStartDate} from "~/server/database/repositories/eventRepository";
import {H3Event} from "h3";

export default eventHandler(async (event: H3Event) => {

    const today = new Date().toISOString();
    const nextEvent = await getFirstEventByStartDate(today);
    console.log('nextEvent', nextEvent)
    return {nextEvent};
});

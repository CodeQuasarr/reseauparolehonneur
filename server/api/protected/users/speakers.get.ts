import {H3Event} from "h3";
import {getAllSpeackers} from "~/server/database/repositories/userRepository";

export default defineEventHandler(async (event: H3Event) => {

    const speakers = await getAllSpeackers();
    return speakers
});

import { DateTime } from "./luxon.js";

export let upDate = () => {
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
return now;
}
// setInterval(upDate, 1000);

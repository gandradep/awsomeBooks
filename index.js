import { upDate } from "./modules/date.js";
const date = document.getElementById('dateTime');
let refreshDate = () => date.innerText =upDate();
setInterval(refreshDate, 1000);

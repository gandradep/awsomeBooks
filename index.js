import { upDate } from "./modules/date.js";
import {} from "./modules/displayListPage.js";
import {} from "./modules/displayAddPage.js";
import {} from "./modules/displayContactPage.js";
const date = document.getElementById('dateTime');
let refreshDate = () => date.innerText =upDate();
setInterval(refreshDate, 1000);

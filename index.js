import { stache } from "can";
import "./hello-world";

const renderer = stache("<hello-world/>");
document.body.appendChild(renderer({}));

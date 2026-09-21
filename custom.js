import { EventEmitter } from "events";

const emitter = new EventEmitter();

// event register using .on() method

emitter.on("login", callback)
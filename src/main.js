// src/main.js
import { EventBus } from './engine/events.js';
// We will import render and logic later

console.log("Tiny Convoy Initialization Started...");

// Initialize Event Bus
const events = new EventBus();

// Make it globally available for debugging if needed (remove in prod)
window.gameEvents = events;

events.publish('GAME_INIT_STARTED', { time: Date.now() });

console.log("Event Bus Ready. Waiting for systems to load...");

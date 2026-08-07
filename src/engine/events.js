// src/engine/events.js
/**
 * A simple Event Bus for decoupled communication between modules.
 */
export class EventBus {
    constructor() {
        this.listeners = {};
    }

    /**
     * Subscribe to an event
     * @param {string} eventName 
     * @param {Function} callback 
     */
    subscribe(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
        
        // Return an unsubscribe function
        return () => {
            this.listeners[eventName] = this.listeners[eventName].filter(cb => cb !== callback);
        };
    }

    /**
     * Publish an event to all subscribers
     * @param {string} eventName 
     * @param {any} data 
     */
    publish(eventName, data) {
        if (this.listeners[eventName]) {
            this.listeners[eventName].forEach(callback => {
                try {
                    callback(data);
                } catch (e) {
                    console.error(`Error in event listener for ${eventName}:`, e);
                }
            });
        }
    }
}

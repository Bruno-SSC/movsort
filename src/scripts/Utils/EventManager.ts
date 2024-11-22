type EventCallback = (data?: any) => void;
// this is how typescript handle typing of functions. Not an arrow function.
type Events = { [event: string]: EventCallback[] };
// objeto que tem propriedades em string e valor em array de funções que estão tipadas como EventCallback
// funções podem ser tipadas como variáveis. No caso delas, a tipagem aplica para os parametros.

export class EventManager {
  static events: Events = {};

  static create_event(event_name: string, callback: EventCallback) {
    // verifies if events has an entry to store the callback
    if (!this.events[event_name]) this.events[event_name] = [];
    this.events[event_name].push(callback);
  }

// * beware of how the emited data will be given to ALL functions of the cb array on an event
  static emit(event_name: string, data?: any): string | void {
    if (!this.events[event_name]) return "event not found";
    this.events[event_name].forEach((callback) => callback(data));
  }

  static off(event_name: string, callback: EventCallback) {
    if (!this.events[event_name]) return "event not found";
    this.events[event_name] = this.events[event_name].filter((cb) => cb !== callback);
    //return all cb different from the provided and replaces the whole array without the provided.
  }
}

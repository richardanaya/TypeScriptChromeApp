export class Observable {

	public _listeners = [];

	on(listener) {
		this._listeners.push(listener);
	}

    trigger(...args: any[]) {
    	for(var i = 0 ; i < this._listeners.length; i++) {
    		this._listeners[i].apply(null,args);
    	}
    }
}
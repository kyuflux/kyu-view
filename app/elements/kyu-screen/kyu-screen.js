/*global Rx */

(function () {
	var observer = Rx.Observer.create(
		function(n){ document.querySelector('kyu-screen').data = n; },
		function(){console.log('Error');},
		function(){console.log('Completed');}); 
	Polymer({
		ready: function(){
			this.ws = new WebSocket(this.wsurl);
			this.wsStreams = Rx.Observable.fromEvent(this.ws,'message')
		.map(function(x){return x.data;});
		this.wsStreams.subscribe(observer);

		}
		       // define element prototype here
	});
})();


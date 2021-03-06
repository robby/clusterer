var cluster = require('cluster');
var os = require('os');
var path = require('path');
var cpus = os.cpus().length;

if(cluster.isMaster) {
	process.on('uncaughtException', function(err){
		console.error(err);
	});

	cluster.setupMaster({ exec: path.resolve(__dirname, '../../..'), args: process.argv, silent: false });

	cluster.on('fork', function(worker){
		console.log('worker ' +  worker.process.pid + ' online.');
	});

	cluster.on('exit', function(worker, code, signal){
		console.log('worker ' +  worker.process.pid + ' died.');

		forker();
	});

	function forker(){
		for (var i = Object.keys(cluster.workers).length; i < cpus; i++) { 
			cluster.fork(); 
		}
	}

	forker();
}
class HTMLElementDependencyService{
	last_id=0;
	els={};
	constructor(root,delay=2000){
		this.root=root;
		this.delay=delay;
	}
	start(){
		this.interval=setInterval(()=>{
			for(const id in this.els)
				if(!this.root.contains(this.els[id].dependency)){
					for(const dependant of this.els[id].dependants)
						dependant.remove();
					delete this.els[id];
				}
		},this.delay);
	}
	stop(){
		clearInterval(this.interval);
	}
	dependency(dependency){
		if(!dependency.__dependency_id)
			dependency.__dependency_id=++this.last_id;
		if(!this.els[dependency.__dependency_id])
			this.els[dependency.__dependency_id]={dependency,dependants:[]};
		this.dependency=dependency;
		return this;
	}
	add(...dependants){
		this.els[this.dependency.__dependency_id].dependants.push(...dependants);
	}
}

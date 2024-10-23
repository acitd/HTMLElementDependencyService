class HTMLElementDependencyService{
	last_id=0;
	els={};
	constructor(root_el,delay=2000){
		this.root_el=root_el;
		this.delay=delay;
	}
	start(){
		this.interval=setInterval(()=>{
			for(const id in this.els){
				if(!this.root_el.contains(this.els[id].el)){
					for(const dependant of this.els[id].dependants)
						dependant.remove();
					delete this.els[id];
				}
			}
		},this.delay);
	}
	stop(){
		clearInterval(this.interval);
	}
	add(el,...dependants){
		if(!el.__dependency_id)
			el.__dependency_id=++this.last_id;
		if(!this.els[el.__dependency_id])
			this.els[el.__dependency_id]={
				el,
				dependants:[]
			};
		this.els[el.__dependency_id].dependants.push(...dependants);
	}
}

({
	handleDeleteTask : function(component, event, helper) {
		console.log('deleted task');
		//get our current list of tasks -- modifier
		let tasks = component.get("v.tasks");
		//get the arrayIndex
		const arrayIndex = event.getParam('arrayIndex');
		//remove the proper one
		tasks.splice(arrayIndex,1);
		//Set the list of tasks
		component.set('v.tasks', tasks);
	},
	handleCreateTask : function(component, event, helper) {
		console.log('created task');
		//get our current list of tasks -- modifier
		let tasks = component.get("v.tasks");
		//get the new task
		const newTask = event.getParam('taskName');
		//Add the new task 
		tasks.push(newTask);
		//Set the list of tasks
		component.set('v.tasks', tasks);
	}
})
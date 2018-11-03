({
	handleCreateTask : function(component, event, helper) {
		//Get the inpout value
		const input = document.getElementById('task-input').value;
		//Add the value to the list
		const createTaskEvent = $A.get("e.c:TodoCreateTask");
		createTaskEvent.setParam("taskName",input);
		createTaskEvent.fire();

		//let tasks = component.get('v.taskList');
		//tasks.push(input);
		//component.set('v.taskList', tasks);
	}
})
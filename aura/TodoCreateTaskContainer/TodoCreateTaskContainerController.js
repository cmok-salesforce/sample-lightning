({
	handleCreateTask : function(component, event, helper) {
		const input = document.getElementById('task-input').value;
		//console.log(input);
		let tasks = component.get('v.taskList');
		tasks.push(input);
		component.set('v.taskList', tasks);
	}
})
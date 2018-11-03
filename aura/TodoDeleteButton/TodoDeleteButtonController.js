({
	handleDelete : function(component, event, helper) {
		//Get ArrayIndex
		const arrayIndex = component.get('v.arrayIndex');
		//Dispatch and Event to delete a proper task
		const deleteEvent = $A.get("e.c:TodoDeleteTask");
		deleteEvent.setParam("arrayIndex", arrayIndex);
		deleteEvent.fire();
	}
})
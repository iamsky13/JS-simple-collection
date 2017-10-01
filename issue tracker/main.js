
document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e){
	var issueDesc = document.getElementById('issueDescInput').value;
	var issuepriority = document.getElementById('issuePriority').value;
	var assignedTo = document.getElementById('issueAssignedTo').value;
	var issueId = chance.guid();
	var issueStatus = 'Open';

	var issue = {
		id: issueId,
		description:issueDesc,
		priority:issuepriority,
		assignedTo:assignedTo,
		status:issueStatus
	}
	

	if(localStorage.getItem('issues')==null){
		var issues=[];
		issues.push(issue);
		localStorage.setItem('issues',JSON.stringify(issues));
	}
	else{
		var issues = JSON.parse(localStorage.getItem('issues'));
		issues.push(issue);
		localStorage.setItem('issues',JSON.stringify(issues));
	}
	
	document.getElementById('issueInputForm').reset();

	fetchIssues();

	e.preventDefault();
}




function fetchIssues(){
	var issues = JSON.parse(localStorage.getItem('issues'));
	var issuesList = document.getElementById('issuesList');

	issuesList.innerHtml='';
	for(var i=0;i<issues.length;i++){
		var id = issues[i].id;
		var desc = issues[i].description;
		var priority = issues[i].priority;
		var assignedTo = issues[i].assignedTo;
		var status = issues[i].status;


		issuesList.innerHTML += '<div class="jumbotron">'+
								'<h6>Issue ID: '+id+'</h6>'+
								'<p><span class="label label-info">'+status+'</span></p>'+
								'<h3>'+desc+'</h3>'+
								'<p><span class="glyphicon glyphicon-exclamation-sign">'+priority+'</span></p>'+
								'<p><span class="glyphicon glyphicon-user">'+assignedTo+'</span></p>'+
								'<a href="#" class="btn btn-warning onclick="setStatusClose(\''+id+'\')">close</a>'+
								'<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
								'</div>';



	}
}
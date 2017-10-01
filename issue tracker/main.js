function fetchIssues(){
	var issues = JSON.parse(localStorage.getItem('issues'))
	var issuesList = document.getElementById('issueList')

	issuesList.innerHtml=''
	for(var i=0;i<issues.length;i++){
		var id = issues[i].id;
		var desc = issues[i].description;
		var priority = issues[i].priority;
		var assignedTo = issues[i].assignedTo;
		var status = issues[i].status;

		issuesList.innerHtml+= '<div class="well">'+
								'<h6>Issue ID: '+id+'</h6>'+
								'<p><span class="label label-info">'+status+'</span></p>'+
								'<h3>'+desc+'</h3>'
								'<p><span class="glyphicon glyphicon-exclamation-sign">'+priority+'</span></p>'+
								'<p><span class="glyphicon glyphicon-user">'+assignedTo+'</span></p>'+
								'<a href="#" class="class="btn btn-warning onclick="setStatusClose(\''+id+'\')">close</a>'+
								'<a href="#" class="class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
								'</div>'

	}
}
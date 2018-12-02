//when html is loaded
$(window).on("load", function(){
	document.addEventListener("deviceready", onDeviceReady, false);
});







//store student ID for edit and delete purpose.






//when device is ready load console log for notification plugin.
function onDeviceReady(){
	console.log(navigator.notification);
	retrieveData1();
	retrieveData2();
	retrieveData3();
	retrieveData4();
	retrieveData5();
	totala();
	totalb();
	totalc();
	totald();
	totale();
	retrieveData1a();
	retrieveData2a();
	retrieveData3a();
	retrieveData4a();
	retrieveData5a();
}


//home button
function redirectToHome(){
	$.mobile.changePage("#home", { transition: "slide", changeHash: false, reloadPage: true });
	$(location).attr('href', "index.html");
	$('#liststudentalumni').listview('refresh');
	//$('#liststudentevents').listview('refresh');
	//$('#liststudentannoucement').listview('refresh');
	//$('#liststudentservices').listview('refresh');
	//$('#liststudentlossandfound').listview('refresh');

	
}

function redirectToDelete(){
	$.mobile.changePage("#home_admin_edit", { transition: "slide", changeHash: false, reloadPage: true });
	$(location).attr('href', "user2.html");
	$('#liststudentalumni').listview('refresh');
	//$('#liststudentevents').listview('refresh');
	//$('#liststudentannoucement').listview('refresh');
	//$('#liststudentservices').listview('refresh');
	//$('#liststudentlossandfound').listview('refresh');

	
}


function redirectToHome1a(){
	$.mobile.changePage("#home", { transition: "slide", changeHash: false, reloadPage: true });
	$(location).attr('href', "user1.html");
	$('#liststudentalumni').listview('refresh');
	//$('#liststudentevents').listview('refresh');
	//$('#liststudentannoucement').listview('refresh');
	//$('#liststudentservices').listview('refresh');
	//$('#liststudentlossandfound').listview('refresh');

	
}
function redirectToHome2(){
	$.mobile.changePage("#home", { transition: "slide", changeHash: false, reloadPage: true });
	$(location).attr('href', "user2.html");
	$('#liststudentalumni').listview('refresh');
	//$('#liststudentevents').listview('refresh');
	//$('#liststudentannoucement').listview('refresh');
	//$('#liststudentservices').listview('refresh');
	//$('#liststudentlossandfound').listview('refresh');

	
}
/////////////////////////////////////////////////////////////////////////////////////////
function myFunctionlogout(){
	
	window.location.href ="index.html#home";
	
}
/////////////////////////////////////////////////////////////////////////////////////////
function send_login(){ 
	
	var x = $('#password').val();
	var y = $('#matricno').val();
//alert("login");
//alert(x);
//alert(y);
 if (x == 1419579 && y==1419579 || x=="piji" && y=="piji" || x=="a" && y=="c" || x=="a" && y=="a"){
	 alert("WELL DONE");
	 window.location.href ="user1.html#home";
	 
 }
 else {
	 alert("PASWOORD AND MATRIC NUMBER DOES NOT MATCH");
 }
	}



var vendor_id=null;
$('#log').submit(function(){
	send_login();
	return false;
});

/////////////////////////////////////////////////////////////////////////////////////////
function asend_logina(){ 
	
	var x = $('#apassword').val();
	var y = $('#amatricno').val();
//alert("login");
//alert(x);
//alert(y);
 if (x == "admin" && y=="admin"){
	 alert("WELL DONE");
	 window.location.href ="user2.html#home";
	 
 }
 else {
	 alert("PASWOORD AND MATRIC NUMBER DOES NOT MATCH");
 }
	}



$('#aalog').submit(function(){
	asend_logina();
	return false;
});
//////////////////////////////////////////////////////////////////////////////////////////////
/*
function validatePassword(){	
	//alert("lol");
	//alert("lol");
	//alert("lol");
	var element1=document.getElementById('matricno').value;
	var element=document.getElementById('password').value;
		alert(element1);
		alert(element);
		
		
	$.getJSON('http://1413673.iium.acme.my/mobile/login.php',
function(data) {
		$.each(data, function(index, data) {	
		alert(data.username);
		alert(data.username);	
			if(element1 == data.username && element == data.password){
				alert("lol");
				window.location.href ="user2.html#home";
		}
	else{
		navigator.notification.alert('Invalid Username or Password!');
		}
		});
	});
}

$(document).on('click', '#validate', function() {
	validatePassword();
});


*/
////////////////////////////////////////////////////////////////////////////////////////////
function myFunctionlogina(){
	alert("dlogin");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	//var postData = $('#login').serialize();
	//alert("QueryID"+postData);
	
	//$.get("http://1413673.iium.acme.my/mobile/mobilefyp/login.php", postData, function(data){
		//$(".result").html(data);
//window.location.href ="user1.html#home";
	redirectToHome1a();
	//});
	

}
////////////////////////////////////////////////////////////////////////////////////////////
function myFunctionlogin1(){
	alert("ADMIN login");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	//var postData = $('#login').serialize();
	//alert("QueryID"+postData);
	
	//$.get("http://1413673.iium.acme.my/mobile/mobilefyp/loginadmin.php", postData, function(data){
		//$(".result").html(data);
 //window.location.href ="user2.html#home";
	redirectToHome2();
	//});
	//$('#studentdetailsalumni').empty();
	

	}
////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctionlogot(){
	alert("dlogin");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	//var postData = $('#login').serialize();
	//alert("QueryID"+postData);
	
	//$.get("http://1413673.iium.acme.my/mobile/mobilefyp/login.php", postData, function(data){
		//$(".result").html(data);
 //window.location.href ="user2.html#home";
	redirectToHome();
	//});

}
///////////////////////////////////////////////////////////////////////////////////////////////
function storeData1(){
	var postData = $('#newrecordalumni').serialize();
	postData = postData.replace(/\+/g, '%20');
	
	console.log(postData);
	$.get("http://1413673.iium.acme.my/mobile/new-student-alumni.php", postData, function(data){
		$(".result").html(data);
		redirectToHome1a();
	});}


///////////////////////////////////////////////////////////////////////////////////////////////

function storeData1aa(){
	var postData = $('#anewrecordalumni').serialize();
	postData = postData.replace(/\+/g, '%20');
	
	console.log(postData);
	$.get("http://1413673.iium.acme.my/mobile/new-student-alumni.php", postData, function(data){
		$(".result").html(data);
		 window.location.href ="user2.html#home";
	});}



	



//new record button

$('#newrecordalumni').submit(function(){
	storeData1();
	return false;
});
$('#anewrecordalumni').submit(function(){
	storeData1aa();
	return false;
});
///////////////







//retrieve existing record from mysql and display as a listview
function retrieveData1(){
	$('#liststudentalumni').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_alumni_approve.php", function(data){
	//$('#studentdetailsalumni').empty();
	$.each(data, function(index,data) {
		//$('#studentdetailsalumni').empty();
		//alert(data.id_number);
		$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
		
		//$('#liststudentalumni').listview('refresh');
	});
	$('#liststudentalumni').listview('refresh');
	});
}

//display student details
var studentInfo ={
		ID : null,
		result : null
	}

var studentInfoannoucement ={
		ID : null,
		result : null
	}
var studentInfoevent ={
		ID : null,
		result : null
	}

var studentInfoservice ={
		ID : null,
		result : null
	}
var studentInfoloss ={
		ID : null,
		result : null
	}


/*
function displayDetails(){
	var x = document.getElementById("studentdetailsalumni");
	console.log(x);
	console.log("x");
	
	$.get("http://1413673.iium.acme.my/mobile/mobilefyp/list-student_alumni.php",
	 function(data){
		console.log(data);
		$.each(data, function(index, data) {
			console.log(data.id_number);
			console.log(studentInfo.ID);
				if (data.id_number == studentInfo.ID){	
					//data.id_number studentInfo.ID
					x.innerHTML ="<h1>"+data.description+"<h1>";
				}
			});
		});
	
}

*/
function displayDetails(){
	//alert("test");
	
	
	$('#studentdetailsalumni').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_alumni_approve.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == studentInfo.ID){	
					$('#studentdetailsalumni').empty();
					$('#studentInfo').attr('value', studentInfo.ID);
					//alert("test1");
				$('#studentdetailsalumni').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#studentdetailsalumni').append('<li><h5>' +data.title+'</h5></li>');
				//$('#studentdetailsalumni').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#studentdetailsalumni').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}

function retrieveData2(){
	$('#liststudentannoucement').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_annoucement_approve.php", function(data){
	$.each(data, function(index,data) {
		
		$('#liststudentannoucement').append('<li><a href="#detailsannoucement" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	//$('#liststudentannoucement').listview('refresh');
	 $('#liststudentannoucement').listview('refresh');
	});


}
function displayDetails2(){
	//alert("test");
	
	
	$('#studentdetailsannoucement').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_annoucement_approve.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == studentInfoannoucement.ID){	
					//alert("test1");
					$('#studentdetailsannoucement').empty();
					$('#studentInfoannoucement').attr('value', studentInfoannoucement.ID);
				$('#studentdetailsannoucement').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#studentdetailsannoucement').append('<li><h5>' +data.title+'</h5></li>');
				//$('#studentdetailsannoucement').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#studentdetailsannoucement').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}
$(document).on('vclick','#liststudentannoucement li a', function(){
	studentInfoannoucement.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(studentInfoannoucement.ID);
  $.mobile.changePage("#detailsannoucement", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#detailsannoucement', function(){
//	alert("test");
	displayDetails2();
});





function retrieveData3(){
	$('#liststudentevents').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_event_approve.php", function(data){
	$.each(data, function(index,data) {
		
		$('#liststudentevents').append('<li><a href="#detailsevent" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	$('#liststudentevents').listview('refresh');
	});


}

function displayDetails3(){
	//alert("test");
	
	
	$('#studentdetailsevent').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_event_approve.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == studentInfoevent.ID){	
					//alert("test1");
					$('#studentdetailsevent').empty();
					$('#studentInfoevent').attr('value', studentInfoevent.ID);
				$('#studentdetailsevent').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#studentdetailsevent').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#studentdetailsevent').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}
$(document).on('vclick','#liststudentevents li a', function(){
	studentInfoevent.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(studentInfoevent.ID);
  $.mobile.changePage("#detailsevent", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#detailsevent', function(){
//	alert("test");
	displayDetails3();
});




function retrieveData4(){
	$('#liststudentservices').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_service_approve.php", function(data){
	$.each(data, function(index,data) {
		
		$('#liststudentservices').append('<li><a href="#detailsservice" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	$('#liststudentservices').listview('refresh');
	});


}
function displayDetails4(){
	//alert("test");
	
	
	$('#studentdetailsservice').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_service_approve.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == studentInfoservice.ID){	
					//alert("test1");
					$('#studentdetailsservice').empty();
					$('#studentInfoservice').attr('value', studentInfoservice.ID);
				$('#studentdetailsservice').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#studentdetailsservice').append('<li><h5>' +data.title+'</h5></li>');
				//$('#studentdetailsservice').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#studentdetailsservice').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}
$(document).on('vclick','#liststudentservices li a', function(){
	studentInfoservice.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(studentInfoservice.ID);
  $.mobile.changePage("#detailsservice", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#detailsservice', function(){
//	alert("test");
	displayDetails4();
});


function retrieveData5(){
	$('#liststudentlossandfound').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_lossandfound_approve.php", function(data){
	$.each(data, function(index,data) {
		
		$('#liststudentlossandfound').append('<li><a href="#detailslossandfound" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	$('#liststudentlossandfound').listview('refresh');
	});


}
function displayDetails5(){
	//alert("test");
	
	
	$('#studentdetailslossandfound').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_lossandfound_approve.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == studentInfoloss.ID){	
					//alert("test1");
					$('#studentdetailslossandfound').empty();
					$('#studentInfoloss').attr('value', studentInfoloss.ID);
				$('#studentdetailslossandfound').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#studentdetailslossandfound').append('<li><h5>' +data.title+'</h5></li>');
				//$('#studentdetailslossandfound').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#studentdetailslossandfound').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}

$(document).on('vclick','#liststudentlossandfound li a', function(){
	studentInfoloss.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(studentInfoloss.ID);
  $.mobile.changePage("#detailslossandfound", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#detailslossandfound', function(){
//	alert("test");
	displayDetails5();
});










//delete existing record from mysql



//navigator callback for alert dialog box












//event triggers
$(document).on('click','#home', function(){
	retrieveData1();
	});
$(document).on('click','#home', function(){
	retrieveData2();
	});
$(document).on('click','#home', function(){
	retrieveData3();
	});
$(document).on('click','#home', function(){
	retrieveData4();
	});
$(document).on('click','#home', function(){
	retrieveData5();
	});












//delete record button









//displayeventlistner
/*
var alerto={
		ID:null,
		result:null
}*/

$(document).on('vclick','#liststudentalumni li a', function(){
	studentInfo.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(studentInfo.ID);
  $.mobile.changePage("#detailsalumni", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#detailsalumni', function(){
//	alert("test");
	displayDetails();
});

///////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctiondeletea(){
	//alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#deleterecorda').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete-student.php", postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
		
	});

}
function myFunctionapprovea(){
	alert("approve");
	//alert(astudentInfo.ID);
	var postData = $('#deleterecorda').serialize();
	
	$.get("http://1413673.iium.acme.my/mobile/approve-student.php",postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
	});

}
////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctiondeleteann(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#deleterecordann').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete-student-ann.php", postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
		
	});

}
function myFunctionapproveann(){
	alert("approve");
	//alert(astudentInfo.ID);
	var postData = $('#deleterecordann').serialize();
	
	$.get("http://1413673.iium.acme.my/mobile/approve-student-ann.php",postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
	});

}
////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctiondeleteas(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#deleterecords').serialize();
	alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete-student-se.php", postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
		
	});

}
function myFunctionapproveas(){
	alert("approve");
	//alert(astudentInfo.ID);
	var postData = $('#deleterecords').serialize();
	
	$.get("http://1413673.iium.acme.my/mobile/approve-student-se.php",postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
	});

}
////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctiondeletes(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#deleterecords').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete-student-se.php", postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
		
	});

}
function myFunctionapproves(){
	alert("approve");
	//alert(astudentInfo.ID);
	var postData = $('#deleterecords').serialize();
	
	$.get("http://1413673.iium.acme.my/mobile/approve-student-se.php",postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
	});

}
////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctiondeleteser(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#deleterecordser').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete-student-ser.php", postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
		
	});

}
function myFunctionapproveser(){
	alert("approve");
	//alert(astudentInfo.ID);
	var postData = $('#deleterecordser').serialize();
	
	$.get("http://1413673.iium.acme.my/mobile/approve-student-ser.php",postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
	});

}
////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctiondeleteloss(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#deleterecordloss').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete-student-loss.php", postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
	});

}
function myFunctionapproveloss(){
	alert("approve");
	//alert(astudentInfo.ID);
	var postData = $('#deleterecordloss').serialize();
	
	$.get("http://1413673.iium.acme.my/mobile/approve-student-loss.php",postData, function(data){
		$(".result").html(data);
		window.location.href ="user2.html#home_admin_edit";
	});

}

////////////////////////////////////////////////////////////////////////////////////////////////
function myFunctionlogin(){
	alert("dlogin");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	//var postData = $('#login').serialize();
	//alert("QueryID"+postData);
	
	//$.get("http://1413673.iium.acme.my/mobile/mobilefyp/login.php", postData, function(data){
		//$(".result").html(data);
	// window.location.href ="index.html#home";
	redirectToHome2();
	//});

}

////////////////////////////////////////////////////////////////////////////////////////////////
function delete1(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#delete1').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete1-student.php", postData, function(data){
		$(".result").html(data);
		redirectToHome2();
		
	});
}

////////////////////////////////////////////////////////////////////////////////////////////////
function delete2(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#delete2').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete2-student.php", postData, function(data){
		$(".result").html(data);
		redirectToHome2();
		
	});
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function delete3(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#delete3').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete3-student.php", postData, function(data){
		$(".result").html(data);
		redirectToHome2();
		
	});
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function delete4(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#delete4').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete4-student.php", postData, function(data){
		$(".result").html(data);
		redirectToHome2();
		
	});
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function delete5(){
	alert("delete");
	//alert(astudentInfo.ID);
	//alert($("#astudentInfoID").val());
	var postData = $('#delete5').serialize();
	//alert("QueryID"+postData);
	
	$.get("http://1413673.iium.acme.my/mobile/delete5-student.php", postData, function(data){
		$(".result").html(data);
		redirectToHome2();
		
	});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


//retrieve existing record from mysql and display as a listview
function retrieveData1a(){
	$('#aliststudentalumni').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_alumni_approve_admin.php", function(data){
	//$('#studentdetailsalumni').empty();
	$.each(data, function(index,data) {
		//$('#studentdetailsalumni').empty();
		//alert(data.id_number);
		$('#aliststudentalumni').append('<li><a href="#adetailsalumni" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
		
		//$('#liststudentalumni').listview('refresh');
	});
	$('#aliststudentalumni').listview('refresh');
	});
}

//display student details
var astudentInfo ={
		ID : null,
		result : null
	}

var astudentInfoannoucement ={
		ID : null,
		result : null
	}
var astudentInfoevent ={
		ID : null,
		result : null
	}

var astudentInfoservice ={
		ID : null,
		result : null
	}
var astudentInfoloss ={
		ID : null,
		result : null
	}


/*
function displayDetails(){
	var x = document.getElementById("studentdetailsalumni");
	console.log(x);
	console.log("x");
	
	$.get("http://1413673.iium.acme.my/mobile/mobilefyp/list-student_alumni.php",
	 function(data){
		console.log(data);
		$.each(data, function(index, data) {
			console.log(data.id_number);
			console.log(studentInfo.ID);
				if (data.id_number == studentInfo.ID){	
					//data.id_number studentInfo.ID
					x.innerHTML ="<h1>"+data.description+"<h1>";
				}
			});
		});
	
}

*/
function displayDetailsa(){
	//alert("test");
	
	
	$('#astudentdetailsalumni').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_alumni_approve_admin.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == astudentInfo.ID){	
					$('#astudentdetailsalumni').empty();
					$('#astudentInfoID').attr('value', astudentInfo.ID);
					//alert("test1");
				$('#astudentdetailsalumni').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#astudentdetailsalumni').append('<li><h5>' +data.title+'</h5></li>');
				//$('#astudentdetailsalumni').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#astudentdetailsalumni').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		$('#astudentdetailsalumni').listview('refresh');
		
		//alert("Test"+$("#astudentInfoID").val());
		
		});
	
}

function retrieveData2a(){
	$('#aliststudentannoucement').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_annoucement_approve_admin.php", function(data){
	$.each(data, function(index,data) {
		
		$('#aliststudentannoucement').append('<li><a href="#adetailsannoucement"  data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	//$('#liststudentannoucement').listview('refresh');
	 $('#aliststudentannoucement').listview('refresh');
	});


}
function displayDetails2a(){
	//alert("test");
	
	
	$('#astudentdetailsannoucement').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_annoucement_approve_admin.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == astudentInfoannoucement.ID){	
					//alert("test1");
					$('#astudentdetailsannoucement').empty();
					$('#astudentInfoannoucement').attr('value', astudentInfoannoucement.ID);
				$('#astudentdetailsannoucement').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#studentdetailsannoucement').append('<li><h5>' +data.title+'</h5></li>');
				//$('#studentdetailsannoucement').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#studentdetailsannoucement').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}
$(document).on('vclick','#aliststudentannoucement li a', function(){
	astudentInfoannoucement.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(astudentInfoannoucement.ID);
$.mobile.changePage("#adetailsannoucement", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#adetailsannoucement', function(){
//	alert("test");
	displayDetails2a();
});





function retrieveData3a(){
	$('#aliststudentevents').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_event_approve_admin.php", function(data){
	$.each(data, function(index,data) {
		
		$('#aliststudentevents').append('<li><a href="#adetailsevent" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	$('#aliststudentevents').listview('refresh');
	});


}

function displayDetails3a(){
	//alert("test");
	
	
	$('#astudentdetailsevent').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_event_approve_admin.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == astudentInfoevent.ID){	
					//alert("test1");
					$('#astudentdetailsevent').empty();
					$('#astudentInfoevent').attr('value', astudentInfoevent.ID);
					
				$('#astudentdetailsevent').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#astudentdetailsevent').append('<li><h5>' +data.title+'</h5></li>');
				//$('#astudentdetailsevent').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#astudentdetailsevent').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}
$(document).on('vclick','#aliststudentevents li a', function(){
	astudentInfoevent.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(astudentInfoevent.ID);
$.mobile.changePage("#adetailsevent", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#adetailsevent', function(){
//	alert("test");
	displayDetails3a();
});




function retrieveData4a(){
	$('#aliststudentservices').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_service_approve_admin.php", function(data){
	$.each(data, function(index,data) {
		
		$('#aliststudentservices').append('<li><a href="#adetailsservice" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	$('#aliststudentservices').listview('refresh');
	});


}
function displayDetails4a(){
	//alert("test");
	
	
	$('#astudentdetailsservice').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_service_approve_admin.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == astudentInfoservice.ID){	
					//alert("test1");
					$('#astudentdetailsservice').empty();
					$('#astudentInfoservice').attr('value', astudentInfoservice.ID);
				$('#astudentdetailsservice').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#astudentdetailsservice').append('<li><h5>' +data.title+'</h5></li>');
				//$('#studentdetailsservice').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#astudentdetailsservice').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#studentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}
$(document).on('vclick','#aliststudentservices li a', function(){
	astudentInfoservice.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(astudentInfoservice.ID);
$.mobile.changePage("#adetailsservice", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#adetailsservice', function(){
//	alert("test");
	displayDetails4a();
});


function retrieveData5a(){
	$('#aliststudentlossandfound').empty();
$.getJSON("http://1413673.iium.acme.my/mobile/list-student_lossandfound_approve_admin.php", function(data){
	$.each(data, function(index,data) {
		
		$('#aliststudentlossandfound').append('<li><a href="#adetailslossandfound" data-id="'+data.post_id+'"><h4>'+data.heading+'</h4></li>');
		
	});
	$('#aliststudentlossandfound').listview('refresh');
	});


}
function displayDetails5a(){
	//alert("test");
	
	
	$('#astudentdetailslossandfound').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/list-student_lossandfound_approve_admin.php",
	 function(data){
		$.each(data, function(index, data) {
		
			//console.log(data);
			//console.log(data.id_number);
			//console.log(studentInfo.ID);	
			//alert(data.id_number);
				if(data.post_id == astudentInfoloss.ID){	
					//alert("test1");
					$('#astudentdetailslossandfound').empty();
					$('#astudentInfoloss').attr('value', astudentInfoloss.ID);
				$('#astudentdetailslossandfound').append('<li>POST ID :<h5>' +data.post_id+'</h5>TITLE POST<h5>' +data.heading+'</h5>DATE OD EVENT :<h5>' +data.datetime+'</h5>DESCRIPTION :<h5>' +data.post_detail+'</h5></li>');
				//$('#astudentdetailslossandfound').append('<li><h5>' +data.title+'</h5></li>');
				//$('#astudentdetailslossandfound').append('<li><h5>' +data.date_post+'</h5></li>');
				//$('#astudentdetailslossandfound').append('<li><h5>' +data.description+'</h5></li>');
				//	x.innerHTML ="<h1>"+data.description+"<h1>";
				//	x.innnerHTML= "test";
				
				}
			});
		//$('#studentdetailsalumni').listview('refresh');
		//$('#astudentInfo').attr('value', studentInfo.ID);
		//alert(studentInfo.ID);
		});
	
}

$(document).on('vclick','#aliststudentlossandfound li a', function(){
	astudentInfoloss.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	//alert(astudentInfoloss.ID);
$.mobile.changePage("#adetailslossandfound", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#adetailslossandfound', function(){
//	alert("test");
	displayDetails5a();
});










//delete existing record from mysql



//navigator callback for alert dialog box












//event triggers
$(document).on('click','#home_admin_edit', function(){
	retrieveData1a();
	});
$(document).on('click','#home_admin_edit', function(){
	retrieveData2a();
	});
$(document).on('click','#home_admin_edit', function(){
	retrieveData3a();
	});
$(document).on('click','#home_admin_edit', function(){
	retrieveData4a();
	});
$(document).on('click','#home_admin_edit', function(){
	retrieveData5a();
	});





$(document).on('vclick','#aliststudentalumni li a', function(){
	astudentInfo.ID=$(this).attr('data-id');
	//alert($(this).attr('data-id'));
	alert(astudentInfo.ID);
$.mobile.changePage("#adetailsalumni", {transition:"slide", changeHash:false});
}); 

$(document).on('pagebeforeshow', '#adetailsalumni', function(){
//	alert("test");
	displayDetailsa();
});

////////////////////////////////////////////////////////////////////////////////////////////

function totala(){
	$('#totalalumni').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/totalalumni.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#totalalumni').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#totalalumni').listview('refresh');
		});
	$('#total_a_alumni').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_a_alumni.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_a_alumni').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_a_alumni').listview('refresh');
		});
	
	$('#total_p_alumni').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_p_alumni.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_p_alumni').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_p_alumni').listview('refresh');
		});
}

function totalb(){
	
	$('#totalab').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/totalb.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#totalb').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#totalb').listview('refresh');
		});
	$('#total_a_b').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_a_b.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_a_b').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_a_b').listview('refresh');
		});
	
	$('#total_p_b').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_p_b.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_p_b').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_p_b').listview('refresh');
		});
	
}


function totalc(){
	
	$('#totalac').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/totalc.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#totalc').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#totalc').listview('refresh');
		});
	$('#total_a_c').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_a_c.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_a_c').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_a_c').listview('refresh');
		});
	
	$('#total_p_c').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_p_c.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_p_c').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_p_c').listview('refresh');
		});
	
}


function totald(){
	$('#totalad').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/totald.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#totald').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#totald').listview('refresh');
		});
	$('#total_a_d').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_a_d.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_a_d').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_a_d').listview('refresh');
		});
	
	$('#total_p_d').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_p_d.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_p_d').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_p_d').listview('refresh');
		});
	
	
	
}


function totale(){
	
	$('#totalae').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/totale.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#totale').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#totale').listview('refresh');
		});
	$('#total_a_e').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_a_e.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_a_e').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_a_e').listview('refresh');
		});
	
	$('#total_p_e').empty();
	$.getJSON("http://1413673.iium.acme.my/mobile/total_p_e.php", function(data){
		//$('#studentdetailsalumni').empty();
		$.each(data, function(index,data) {
			//$('#studentdetailsalumni').empty();
			//alert(data.id_number);
		//	$('#liststudentalumni').append('<li><a href="#detailsalumni" data-id="'+data.id_number+'"><h4>'+data.title+'</h4></li>');
			//$('#liststudentalumni').append('<li><a href="#detailsalumni"  data_id="+data.id_number+"<br><h2>'+data.id_number+'</h2><h2>'+data.title+'</h2><h3>'+data.date_post+'</h3><h4>'+data.description+'</h4></li>');
			$('#total_p_e').append('<h2>'+data.post_id+'</h2>');
			//$('#liststudentalumni').listview('refresh');
		});
		$('#total_p_e').listview('refresh');
		});
	
	
}







/*<!--
 _  _     _
|  |_| | |_
|_ | \ |  _| 

-->*/
function clearInputForm() 
{
	var frm= document.frmTRN; 
	frm.trainNo.value = '';
	 	
	frm.jStation.options.length =0;
		
	frm.jStation.options.add(new Option("---Select---","Select"));
	frm.trainNo.focus();
}
/* Ends */

function clearForm() 
{
	var frm= document.frmTRN;
	frm.trainNo.value = '';
 	
	frm.jStation.options.length =0;	
	frm.jStation.options.add(new Option("Select","Select"));
 	$('select').selectmenu('refresh');
 	frm.trainNo.focus();
}
/* Ends */

function clearFindTrainForm() 
{
	var frm= document.frmTRN; 
	frm.trainNo.value = '';
	frm.trainNo.focus();
}
/* Ends */

function clearFeedbackForm() 
{
	var frm= document.frmFB; 
}
/* Ends */

function showNewSpot()
{
	var frm= document.frmTRN;
	frm.target="";
	var queryStr = "q?opt=MenuHomeNew";
	submitForm(frm,queryStr,10);
}

function showSpot()
{
	var frm= document.frmTRN;
	frm.target="";
	var queryStr = "q?opt=MenuHome";
	submitForm(frm,queryStr,10);
}

function showTrainSchedule(comeFrom) 
{
	var frm= document.frmTRN;
	frm.target="";
	frm.trainNo.value = trim(frm.trainNo.value);
	var trainNoValue = frm.trainNo.value;
	
	if(comeFrom == 'K')
	{
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			var queryStr = "q?opt=TrainServiceSchedule&subOpt=show&trainNo="+trainNoValue;
			submitForm(frm,queryStr,10);
		}
	}
	else if (comeFrom == 'B')
	{
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue == '' || trainNoValue == '00000')
		{
			document.getElementById("divMessageText").innerHTML = "Invalid Train No. !!!";
			frm.trainNo.value = '';
			frm.trainNo.focus();
			return false;
		}
		else if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			var queryStr = "q?opt=TrainServiceSchedule&subOpt=show&trainNo="+trainNoValue;
			submitForm(frm,queryStr,10);
		}
		else if(trainNoValue.length < 3 )	
		{
			document.getElementById("divMessageText").innerHTML = "Enter Train No./Name [Min. 3 Characters]";
			frm.trainNo.focus();
			return false;
		}
		else
		{
			var queryStr = "q?opt=TrainRunning&subOpt=FindTrain";
			submitForm(frm,queryStr,10);
		}
	}
}	
/* Ends */

function showTrainServiceScheduleMap(trainNo,trainStartDate,frm)
{
	var trainNo = trim(trainNo);
	
	if(trainNo.length != 5 || !checkForNumber(trainNo))
	{
		return false;
	}
	else if(trainStartDate.length != 11) 
	{
		return false;
	}
	
	var params = [
        'height='+screen.height,
        'width='+screen.width,
        'fullscreen=yes', 
        'directories=no',
        'titlebar=no',
        'toolbar=no',
        'location=no',
        'status=no',
        'menubar=no'].join(','); 

	frm.action="TrnMap?opt=map&subOpt=route&trainNo="+trainNo+"&trainStartDate="+trainStartDate;
	window.open('test.html', 'formresult', params);
	frm.target="formresult";
	frm.submit();
	
	//var queryStr = "TrnMap?opt=map&subOpt=route&trainNo="+trainNo+"&trainStartDate="+trainStartDate;
	//submitForm(frm,queryStr,10);
}

function showTrainServiceSchedule(trainNo,trainStartDate,frm)
{
	//alert(trainNo);
	var trainNo = trim(trainNo);
	
	if(trainNo.length != 5 || !checkForNumber(trainNo))
	{
		return false;
	}
	else if(trainStartDate.length != 11) 
	{
		return false;
	}
	
	var params = [
        'height='+screen.height,
        'width='+screen.width*0.8,
        'fullscreen=yes', 
        'directories=no',
        'titlebar=no',
        'toolbar=no',
        'location=no',
        'status=no',
        'menubar=no'].join(','); 

	frm.action="q?opt=TrainServiceSchedulePop&subOpt=show&trainNo="+trainNo+"&trainStartDate="+trainStartDate;
	window.open('test.html', 'formresult', params);
	frm.target="formresult";
	frm.submit();
	
	//var queryStr = "q?opt=TrainServiceSchedule&subOpt=show&trainNo="+trainNo+"&trainStartDate="+trainStartDate;
	//submitForm(frm,queryStr,10);
}

function showTrainServiceScheduleSpot(trainNo,trainStartDate,idTrainDef,frm)
{
	//alert(trainNo);
	var trainNo = trim(trainNo);
	
	if(trainNo.length != 5 || !checkForNumber(trainNo))
	{
		return false;
	}
	else if(trainStartDate.length != 11) 
	{
		return false;
	}
	
	var params = [
        'height='+screen.height,
        'width='+screen.width,
        'fullscreen=yes', 
        'directories=no',
        'titlebar=no',
        'toolbar=no',
        'location=no',
        'status=no',
        'menubar=no'].join(','); 

	frm.action="q?opt=TrainServiceSchedulePop&subOpt=show&trainNo="+trainNo+"&trainStartDate="+trainStartDate+"&idTrainDef="+idTrainDef;
	window.open('test.html', 'formresult', params);
	frm.target="formresult";
	frm.submit();
	
	//var queryStr = "q?opt=TrainServiceSchedule&subOpt=show&trainNo="+trainNo+"&trainStartDate="+trainStartDate+"&idTrainDef="+idTrainDef;
	//submitForm(frm,queryStr,10);
}

/* Ends */


function onTrainInput() 
{
	var frm= document.frmTRN; 
	frm.target="";
	//frm.trainNo.value = trim(frm.trainNo.value);
	var trainNoValue = frm.trainNo.value;
	
	if(trainNoValue.length == 5 && trainNoValue == '00000')
	{
		document.getElementById("divMessageText").innerHTML = "Invalid Train No. !!!";
		frm.trainNo.value = '';
		frm.trainNo.focus();
		return false;
	}
	if(trainNoValue.length == 5)
	{
		if(!checkForNumber(trainNoValue))
		{
			if(!checkAlphaNumericSpaceHyphen(trainNoValue))
			{
				return false;
			}
			else
			{	
				var queryStr = "q?opt=TrainRunning&subOpt=FindTrain";
			}	
		}
		else
		{
			var queryStr = "q?opt=TrainRunning&subOpt=FindStationList";
		}
		submitForm(frm,queryStr,10);
	}
}
/* Ends */



function onJourneyStationInput() 
{
	var frm= document.frmTRN;
	frm.target="";
	frm.trainNo.value = trim(frm.trainNo.value);
	
	
	if(frm.trainNo.value.length == 0 || frm.trainNo.value.length < 3)
	{
		document.getElementById("divMessageText").innerHTML = "Enter Train No./Name [Min. 3 Characters]";
		frm.trainNo.focus();
		return false;
	}
	if(frm.jStation.selectedIndex == 0)
	{
		document.getElementById("divMessageText").innerHTML = "Select Station !!!";
		frm.jStation.focus();
		return false;
	}
	
	
	
	//frm.jDate[2].selected = true;
	var stnDyRunStr =  frm.jStation[frm.jStation.selectedIndex].title.split("#");
	var strJStDayOfRunArrival = stnDyRunStr[0].toUpperCase();
	var strJStDayOfRunDeparture = stnDyRunStr[1].toUpperCase();
	
	//alert("jDayof run AT JSTATION arrival:"+strJStDayOfRunArrival);
	//alert("jDayof run AT JSTATION departure:"+strJStDayOfRunDeparture);
	
	//frm.jDate.value = jDate;alert(jDate);
	var tmpjDateDayValue =  frm.jDateDay.value.toUpperCase(); //alert(tmpjDateDayValue)
	//alert("DATE DAY VALUE:<---->"+tmpjDateDayValue);
	
	var stnStr =  frm.jStation[frm.jStation.selectedIndex].value.split("#");
	
	
	if(stnStr[1] == 'true')
	{
		document.getElementById("divArrDepFlag").style.display = 'block';
		if(document.getElementById("dvMainBody"))
		{
			document.getElementById("dvMainBody").style.display = 'none';
		}
		//frm.jDate[0].selected = true;
		document.getElementById("divMessageText").innerHTML = "At station: "+frm.jStation[frm.jStation.selectedIndex].text+"["+stnStr[0]+"] day changes in Arrival & Departure timings." +
				"<br>Select:-<br><b>Arrival</b>: If you want to de-board the train<br><b>Departure</b>: If you want to board the train<br><br>Then choose your Journey Date.";
		//setTimeout(clearmsg,5000);
		return false;
	}	
	else
	{
		document.getElementById("divArrDepFlag").style.display = 'none';
		
		if(strJStDayOfRunArrival != 'DAILY' && strJStDayOfRunArrival.search(tmpjDateDayValue) == -1)
		{
			
			document.getElementById("divMessageText").innerHTML = "Train touches given station on: "+strJStDayOfRunArrival;
			
			if(document.getElementById("dvMainBody"))
			{
				document.getElementById("dvMainBody").style.display = 'none';
			}
			if(document.getElementById("excpDiv"))
			{
				document.getElementById("excpDiv").style.display = 'none';
			}
			return false;
		}
	}
	
	
	
	//frm.jDateType.value = jDateType;
	var queryStr = "tr?opt=TrainRunning&subOpt=ShowRunC";
	submitForm(frm,queryStr,10);
}	
/* Ends */

function onStnSel(stnVal,stntitle,stnName) {
	var frm= document.frmTRN;
	frm.target="";
	frm.trainNo.value = trim(frm.trainNo.value);
	frm.jStation.value = stnVal;
	if(frm.trainNo.value.length == 0 || frm.trainNo.value.length < 3)
	{
		document.getElementById("divMessageText").innerHTML = "Enter Train No./Name [Min. 3 Characters]";
		frm.trainNo.focus();
		return false;
	}
	if(stnVal == "")
	{
		document.getElementById("divMessageText").innerHTML = "Select Station !!!";
		frm.jStation.focus();
		return false;
	}
	
	
	
	//frm.jDate[2].selected = true;
	var stnDyRunStr =  stntitle.split("#");
	var strJStDayOfRunArrival = stnDyRunStr[0].toUpperCase();
	var strJStDayOfRunDeparture = stnDyRunStr[1].toUpperCase();
	
	//alert("jDayof run AT JSTATION arrival:"+strJStDayOfRunArrival);
	//alert("jDayof run AT JSTATION departure:"+strJStDayOfRunDeparture);
	
	//frm.jDate.value = jDate;alert(jDate);
	var tmpjDateDayValue =  frm.jDateDay.value.toUpperCase(); //alert(tmpjDateDayValue)
	//alert("DATE DAY VALUE:<---->"+tmpjDateDayValue);
	
	var stnStr =  stnVal.split("#");
	
	
	if(stnStr[1] == 'true')
	{
		document.getElementById("divArrDepFlag").style.display = 'block';
		if(document.getElementById("dvMainBody"))
		{
			document.getElementById("dvMainBody").style.display = 'none';
		}
		//frm.jDate[0].selected = true;
		document.getElementById("divMessageText").innerHTML = "At station: "+stnName+"["+stnStr[0]+"] day changes in Arrival & Departure timings." +
				"<br><br>Select:-<br><br><b>Arrival</b>: If you want to de-board the train<br><br><b>Departure</b>: If you want to board the train<br><br>Then choose your Journey Date.";
		//setTimeout(clearmsg,5000);
		return false;
	}	
	else
	{
		document.getElementById("divArrDepFlag").style.display = 'none';
		
		if(strJStDayOfRunArrival != 'DAILY' && strJStDayOfRunArrival.search(tmpjDateDayValue) == -1)
		{
			
			document.getElementById("divMessageText").innerHTML = "Train touches given station on: "+strJStDayOfRunArrival;
			
			if(document.getElementById("dvMainBody"))
			{
				document.getElementById("dvMainBody").style.display = 'none';
			}	
			if(document.getElementById("excpDiv"))
			{
				document.getElementById("excpDiv").style.display = 'none';
			}
			return false;
		}
	}
	
	
	
	//frm.jDateType.value = jDateType;
	var queryStr = "tr?opt=TrainRunning&subOpt=ShowRunC";
	submitForm(frm,queryStr,10);
	}
function onDateSel(jDate)
{
	if(jDate == 'YS')
		{
		document.getElementById("jYesterday").className ='btn  btn-primary';
		document.getElementById("jToday").className = 'btn  btn-default';
		document.getElementById("jTomorrow").className = 'btn  btn-default';
		}
	else if(jDate == 'TM')
		{
		document.getElementById("jTomorrow").className ='btn  btn-primary';
		document.getElementById("jToday").className = 'btn  btn-default';
		document.getElementById("jYesterday").className = 'btn  btn-default';
		}
	else
		{
		document.getElementById("jToday").className ='btn  btn-primary';
		document.getElementById("jYesterday").className = 'btn  btn-default';
		document.getElementById("jTomorrow").className = 'btn  btn-default';
		}
	return true;
}

function onJourneyDateInput(jDate,jDateDay) 
{
	var frm= document.frmTRN;
	frm.target="";
	frm.trainNo.value = trim(frm.trainNo.value);
	frm.jDate.value = jDate;//alert(jDate);
	frm.jDateDay.value = jDateDay;//alert(jDateDay);
	
	if(frm.trainNo.value.length == 0 || frm.trainNo.value.length < 3)
	{
		document.getElementById("divMessageText").innerHTML = "Enter Train No./Name [Min. 3 Characters]";
		frm.trainNo.focus();
		return false;
	}
	if(frm.trainNo.value.length < 5 || !checkForNumber(frm.trainNo.value))
	{
		document.getElementById("divMessageText").innerHTML = 'Click "Find"';
		return false;
	}
	if(frm.jStation.selectedIndex == 0)
	{
		document.getElementById("divMessageText").innerHTML = "Select Station !!!";
		frm.jStation.focus();
		return false;
	}
	
	var stnDyRunStr =  frm.jStation[frm.jStation.selectedIndex].title.split("#");
	var strJStDayOfRunArrival = stnDyRunStr[0].toUpperCase();
	var strJStDayOfRunDeparture = stnDyRunStr[1].toUpperCase();
	
	//alert("jDayof run AT JSTATION arrival:"+strJStDayOfRunArrival);
	//alert("jDayof run AT JSTATION departure:"+strJStDayOfRunDeparture);
	
	
	//alert("datetype:"+jDateType+" button:"+jDateType+ "jDayof run AT JSTATION:"+strJStDayOfRun);
	
	var tmpjDateDayValue =  jDateDay.toUpperCase();
	//alert("DATE VALUE:"+tmpjDateDayValue);
	
	var stnStr =  frm.jStation[frm.jStation.selectedIndex].value.split("#");
	
	
	if(stnStr[1] == 'true')
	{
		if(frm.arrDepFlag[0].checked)	//Arrival
		{
			//alert("A");
			if(strJStDayOfRunArrival != 'DAILY' && strJStDayOfRunArrival.toUpperCase().search(tmpjDateDayValue) == -1)
			{
				
				document.getElementById("divMessageText").innerHTML = "Train touches given station on: "+strJStDayOfRunArrival;
				
				if(document.getElementById("dvMainBody"))
				{
					document.getElementById("dvMainBody").style.display = 'none';
				}	
				if(document.getElementById("excpDiv"))
				{
					document.getElementById("excpDiv").style.display = 'none';
				}
				return false;
			}
			
		}	
		else	//Departure
		{
			//alert("D");
			if(strJStDayOfRunDeparture != 'DAILY' && strJStDayOfRunDeparture.toUpperCase().search(tmpjDateDayValue) == -1)
			{
				
				document.getElementById("divMessageText").innerHTML = "Train touches given station on: "+strJStDayOfRunDeparture;
				
				if(document.getElementById("dvMainBody"))
				{
					document.getElementById("dvMainBody").style.display = 'none';
				}
				if(document.getElementById("excpDiv"))
				{
					document.getElementById("excpDiv").style.display = 'none';
				}
				return false;
			}
		}	
	}	
	else
	{
		document.getElementById("divArrDepFlag").style.display = 'none';
		
		if(strJStDayOfRunArrival != 'DAILY' && strJStDayOfRunArrival.search(tmpjDateDayValue) == -1)
		{
			
			document.getElementById("divMessageText").innerHTML = "Train touches given station on: "+strJStDayOfRunArrival;
			
			if(document.getElementById("dvMainBody"))
			{
				document.getElementById("dvMainBody").style.display = 'none';
			}
			if(document.getElementById("excpDiv"))
			{
				document.getElementById("excpDiv").style.display = 'none';
			}
			return false;
		}
	}
	
	//alert("frm.jStation[frm.jStation.selectedIndex]-->"+frm.jStation[frm.jStation.selectedIndex].value);
	
	var queryStr = "tr?opt=TrainRunning&subOpt=ShowRunC";
	submitForm(frm,queryStr,10);
}	
/* Ends */
function onTrainInputFind(comeFrom) 
{
	var frm= document.frmTRN; 
	frm.target="";
	frm.trainNo.value = trim(frm.trainNo.value);
	var trainNoValue = frm.trainNo.value;
	if(comeFrom == 'K')
	{
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			var queryStr = "tr?opt=TrainRunning&subOpt=FindRunningInstance";
			submitForm(frm,queryStr,10);
		}
	}else if(comeFrom == 'A')
	{
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			var queryStr = "q?opt=TrainRunning&subOpt=FindStationList";
			submitForm(frm,queryStr,10);
		}else
		{
			showSpot();
		}
	}
}

function onTrainInputRefresh(trainNo,startDate) 
{
	var frm= document.frmTRN; 
	frm.target="";
	frm.trainNo.value = trainNo;
	var trainNoValue = frm.trainNo.value;
	
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000' && startDate !='')	//5 digit number
		{
			var queryStr = "tr?opt=TrainRunning&subOpt=FindRunningInstance&refDate="+startDate;
			submitForm(frm,queryStr,10);
		}
	
}


function onTrainFindInput(comeFrom) 
{
	var frm= document.frmTRN; 
	frm.target="";
	frm.trainNo.value = trim(frm.trainNo.value);
	var trainNoValue = frm.trainNo.value;
	if(comeFrom == 'K')
	{
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			var queryStr = "q?opt=TrainRunning&subOpt=FindStationList";
			submitForm(frm,queryStr,10);
		}
	}else if(comeFrom == 'A')
	{
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			var queryStr = "tr?opt=TrainRunning&subOpt=FindRunningInstance";
			submitForm(frm,queryStr,10);
		}else
		{
			showNewSpot();
		}
	}
	else if(comeFrom == 'B')
	{
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		
		if(trainNoValue == '' || trainNoValue == '00000')
		{
			document.getElementById("divMessageText").innerHTML = "Invalid Train No. !!!";
			frm.trainNo.value = '';
			frm.trainNo.focus();
			return false;
		} 
		else if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			var queryStr = "q?opt=TrainRunning&subOpt=FindStationList";
			submitForm(frm,queryStr,10);
		}
		else if(trainNoValue.length == 0 || trainNoValue.length < 3)
		{
			document.getElementById("divMessageText").innerHTML = "Enter Train No./Name [Min. 3 Characters]";
			frm.trainNo.focus();
			return false;
		}
		else if(!checkAlphaNumericSpaceHyphen(trainNoValue) && !checkForNumber(trainNoValue))
		{
			document.getElementById("divMessageText").innerHTML = "Invalid Train No. !!!";
			frm.trainNo.value = '';
			frm.trainNo.focus();
			return false;
		}
		else
		{
			var queryStr = "q?opt=TrainRunning&subOpt=FindTrain";
			submitForm(frm,queryStr,10);
		}	
	}
	else if(comeFrom == 'BS')
	{
		if(trainNoValue == '' || trainNoValue == '00000')
		{
			document.getElementById("divMessageText").innerHTML = "Invalid Train No. !!!";
			frm.trainNo.value = '';
			frm.trainNo.focus();
			if(document.getElementById("dvMainBody"))
			{
				document.getElementById("dvMainBody").style.display = 'none';
			}
			return false;
		}
		else if(trainNoValue.length == 0 || trainNoValue.length < 3)
		{
			document.getElementById("divMessageText").innerHTML = "Enter Train No./Name [Min. 3 Characters]";
			frm.trainNo.focus();
			if(document.getElementById("dvMainBody"))
			{
				document.getElementById("dvMainBody").style.display = 'none';
			}
			return false;
		}
		else if(!checkAlphaNumericSpaceHyphen(trainNoValue) && !checkForNumber(trainNoValue))
		{
			document.getElementById("divMessageText").innerHTML = "Invalid Train No. !!!";
			frm.trainNo.value = '';
			frm.trainNo.focus();
			if(document.getElementById("dvMainBody"))
			{
				document.getElementById("dvMainBody").style.display = 'none';
			}
			return false;
		}
		else
		{
			var queryStr = "q?opt=TrainRunning&subOpt=FindTrain";
			submitForm(frm,queryStr,10);
		}	
	}
	
	
}	
/* Ends */

function getStnByCode(stncode) {
		var stn = arrStationList.find(el => el.code === stncode);
		//alert(stn['name']+' - '+stn['code']);
		
		if(stn != null){
			return stn['name']+' - '+stn['code'];
		}else
			return '';
		
	
	}

function onLiveStationSubmit() 
{
	var frm= document.frmSTN; 
	
	var jFromStationInput = frm.jFromStationInput.value = trim(frm.jFromStationInput.value.toUpperCase());
	
	var jToStationInput =frm.jToStationInput.value = trim(frm.jToStationInput.value.toUpperCase());
	
	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter Station !!!";
		return false;
	}else if(jFromStationInput == jToStationInput)
	{
		document.getElementById("divMessageText").innerHTML = "From and To Stations cannot be same !!!";
		return false;
	}
	
	//alert(""+jFromStationInput + " " +jToStationInput);
	
	var succ = false;
	if(jFromStationInput.indexOf("-") == -1) {
		
		var s = getStnByCode(jFromStationInput)
			if(s.length !=0 && s!='') {
				frm.jFromStationInput.value = s;
				succ = true;
			}
		
	}
	else {
		
		var sArr=jFromStationInput.split('-');
		
		var s = getStnByCode(sArr[1].trim())
		if(s.length !=0 && s!='') {
			frm.jFromStationInput.value = s;
			succ = true;
		}
	}
	
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid Station !!!";
		return false;
	}
	
	if(jToStationInput != '')
	{
		var succ = false;
		if(jToStationInput.indexOf("-") == -1) {
			
			var s = getStnByCode(jFromStationInput)
				if(s.length !=0 && s!='') {
					frm.jToStationInput.value = s;
					succ = true;
				}
			
		}
		else {
			
			var sArr=jToStationInput.split('-');
			
			var s = getStnByCode(sArr[1].trim())
			if(s.length !=0 && s!='') {
				frm.jToStationInput.value = s;
				succ = true;
			}
		}
		if(!succ) {
			document.getElementById("divMessageText").innerHTML = "Invalid Going to station !!!";
			return false;
		}	
	}
	
	var queryStr = "q?opt=LiveStation&subOpt=show";
	submitForm(frm,queryStr,10);
}
/* Ends */
function onLiveStationSubmit2() 
{
	var frm= document.frmSTN; 
	
	var jFromStationInput = frm.jFromStationInput.value = trim(frm.jFromStationInput.value.toUpperCase());
	
	var jToStationInput =frm.jToStationInput.value = trim(frm.jToStationInput.value.toUpperCase());
	
	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter Station !!!";
		return false;
	}else if(jFromStationInput == jToStationInput)
	{
		document.getElementById("divMessageText").innerHTML = "From and To Stations cannot be same !!!";
		return false;
	}
	
	
	//alert(""+jFromStationInput + " " +jToStationInput);
	
	var succ = false;
	if(jFromStationInput.indexOf("-") == -1) {
		//alert(fromIn);
		for(var i in arrStationList) {
			alert(i);
		
			var s = arrStationList[i];
			if(s.code ==  jFromStationInput)
			{
				frm.jFromStationInput.value = s.name+' - '+s.code;
				succ = true;
				break;
			}
		}
	}
	else {
		for(var i in arrStationList) {
			var s = arrStationList[i];
			if((s.name+' - '+s.code)== jFromStationInput) {
				frm.jFromStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid Station !!!";
		return false;
	}
	
	if(jToStationInput != '')
	{
		var succ = false;
		jToStationInput = jToStationInput.toUpperCase();
		if(jToStationInput.indexOf("-") == -1) {
			var toIn = "- " + jToStationInput;
			//alert(toIn);
			for(var i in arrStationList) {
				var s = arrStationList[i];
				var indx = s.indexOf(toIn);
				if(indx != -1 && indx == s.length - toIn.length) {
					frm.jToStationInput.value = s;
					succ = true;
					break;
				}
			}
		}
		else {
			for(var i in arrStationList) {
				var s = arrStationList[i];
				if(s == jToStationInput) {
					frm.jToStationInput.value = s;
					succ = true;
					break;
				}
			}
		}
		if(!succ) {
			document.getElementById("divMessageText").innerHTML = "Invalid Going to station !!!";
			return false;
		}	
	}
	
	var queryStr = "q?opt=LiveStation&subOpt=show";
	submitForm(frm,queryStr,10);
}
/* Ends */

function onLiveStationKumbhSubmit() 
{
	var frm= document.frmSTN; 
	
	var jFromStationInput = frm.jFromStationInput[frm.jFromStationInput.selectedIndex].value;
	
	var jToStationInput =frm.jToStationInput.value = trim(frm.jToStationInput.value.toUpperCase());
	
	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Select Station !!!";
		return false;
	}
	
	//alert("" + "DELHI- DLI".indexOf("- DLI") + " " + ("DELHI- DLI".length - "- DLI".length - 1));
	
	var succ = false;
	
	if(jToStationInput != '')
	{
		var succ = false;
		jToStationInput = jToStationInput.toUpperCase();
		if(jToStationInput.indexOf("-") == -1) {
			var toIn = "- " + jToStationInput;
			//alert(toIn);
			for(var i in arrStationList) {
				var s = arrStationList[i];
				var indx = s.indexOf(toIn);
				if(indx != -1 && indx == s.length - toIn.length) {
					frm.jToStationInput.value = s;
					succ = true;
					break;
				}
			}
		}
		else {
			for(var i in arrStationList) {
				var s = arrStationList[i];
				if(s == jToStationInput) {
					frm.jToStationInput.value = s;
					succ = true;
					break;
				}
			}
		}
		if(!succ) {
			document.getElementById("divMessageText").innerHTML = "Invalid Going to station !!!";
			return false;
		}	
	}
	
	var queryStr = "q?opt=LiveStationKumbh&subOpt=show";
	submitForm(frm,queryStr,10);
}
/* Ends */

function clearStnForm() 
{
	var frm= document.frmSTN; 
	frm.jStation.value = '';
	frm.jStation.focus();
}
/* Ends */

function clearTBSForm() 
{
	var frm= document.frmTBS; 
	frm.jFromStationInput.value = '';
	frm.jToStationInput.value = '';
}
/* Ends */

function clearLiveStnForm() 
{
	var frm= document.frmSTN; 
	frm.jFromStationInput.value = '';
	frm.jToStationInput.value = '';
}
/* Ends */


function showAverageDelay()
{
	
	var frm = document.frmTRN;
	frm.target="";
	frm.trainNo.value = trim(frm.trainNo.value);
	var trainNoValue = trim(frm.trainNo.value);
	var array = trainNoValue.split("-");
	trainNoValue = array[0];
	frm.trainNo.value = trainNoValue;
		
	if(trainNoValue.length != 5 || !checkForNumber(trainNoValue))
	{
		return false;
	}
	
	var queryStr = "q?opt=AverageDelay&subOpt=show&trainNo="+trainNoValue;
	submitForm(frm,queryStr,10);
}
/* Ends */

function onTBS() 
{
	var frm= document.frmTBS; 
	
	var jFromStationInput = frm.jFromStationInput.value = trim(frm.jFromStationInput.value.toUpperCase());
	
	var jToStationInput =frm.jToStationInput.value = trim(frm.jToStationInput.value.toUpperCase());
	
	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter Station !!!";
		return false;
	}else if(jFromStationInput == jToStationInput)
	{
		document.getElementById("divMessageText").innerHTML = "From and To Stations cannot be same !!!";
		return false;
	}
	
	//alert(""+jFromStationInput + " " +jToStationInput);
	
	var succ = false;
	if(jFromStationInput.indexOf("-") == -1) {
		
		var s = getStnByCode(jFromStationInput)
			if(s.length !=0 && s!='') {
				frm.jFromStationInput.value = s;
				succ = true;
			}
		
	}
	else {
		
		var sArr=jFromStationInput.split('-');
		
		var s = getStnByCode(sArr[1].trim())
		if(s.length !=0 && s!='') {
			frm.jFromStationInput.value = s;
			succ = true;
		}
	}
	
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid Station !!!";
		return false;
	}
	
	if(jToStationInput != '')
	{
		var succ = false;
		if(jToStationInput.indexOf("-") == -1) {
			
			var s = getStnByCode(jFromStationInput)
				if(s.length !=0 && s!='') {
					frm.jToStationInput.value = s;
					succ = true;
				}
			
		}
		else {
			
			var sArr=jToStationInput.split('-');
			
			var s = getStnByCode(sArr[1].trim())
			if(s.length !=0 && s!='') {
				frm.jToStationInput.value = s;
				succ = true;
			}
		}
		if(!succ) {
			document.getElementById("divMessageText").innerHTML = "Invalid Going to station !!!";
			return false;
		}	
	}
	
	var queryStr = "q?opt=TrainsBetweenStation&subOpt=tbs";
	submitForm(frm,queryStr,10);
}


function onTBS2() 
{
	var frm= document.frmTBS; 
	
	var jFromStationInput = frm.jFromStationInput.value = frm.jFromStationInput.value.toUpperCase();
	
	var jToStationInput =frm.jToStationInput.value = frm.jToStationInput.value.toUpperCase();
	
	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter From station !!!";
		return false;
	}
	
	if(jToStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter To station !!!";
		return false;
	}
	
	//alert("" + "DELHI- DLI".indexOf("- DLI") + " " + ("DELHI- DLI".length - "- DLI".length - 1));
	
	var succ = false;
	jFromStationInput = jFromStationInput.toUpperCase();
	if(jFromStationInput.indexOf("-") == -1) {
		var fromIn = "- " + jFromStationInput;
		//alert(fromIn);
		for(var i in arrStationList) {
			var s = arrStationList[i];
			var indx = s.indexOf(fromIn);
			if(indx != -1 && indx == s.length - fromIn.length) {
				frm.jFromStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	else {
		for(var i in arrStationList) {
			var s = arrStationList[i];
			if(s == jFromStationInput) {
				frm.jFromStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid From station !!!";
		return false;
	}
	
	var succ = false;
	jToStationInput = jToStationInput.toUpperCase();
	if(jToStationInput.indexOf("-") == -1) {
		var toIn = "- " + jToStationInput;
		//alert(toIn);
		for(var i in arrStationList) {
			var s = arrStationList[i];
			var indx = s.indexOf(toIn);
			if(indx != -1 && indx == s.length - toIn.length) {
				frm.jToStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	else {
		for(var i in arrStationList) {
			var s = arrStationList[i];
			if(s == jToStationInput) {
				frm.jToStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid To station !!!";
		return false;
	}
	
	if(frm.jFromStationInput.value == frm.jToStationInput.value)
	{
		document.getElementById("divMessageText").innerHTML = "From & To station are same !!!";
		return false;
	}
	
	var queryStr = "q?opt=TrainsBetweenStation&subOpt=tbs";
	submitForm(frm,queryStr,10);
}
/* Ends */

function showTrainsAtStation() 
{
	var frm= document.frmTAS; 
	
	var jFromStationInput = frm.jFromStationInput.value = trim(frm.jFromStationInput.value.toUpperCase());
	
	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter Station !!!";
		return false;
	}
	
	//alert(""+jFromStationInput + " " +jToStationInput);
	
	var succ = false;
	if(jFromStationInput.indexOf("-") == -1) {
		
		var s = getStnByCode(jFromStationInput)
			if(s.length !=0 && s!='') {
				frm.jFromStationInput.value = s;
				succ = true;
			}
		
	}
	else {
		
		var sArr=jFromStationInput.split('-');
		
		var s = getStnByCode(sArr[1].trim())
		if(s.length !=0 && s!='') {
			frm.jFromStationInput.value = s;
			succ = true;
		}
	}
	
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid Station !!!";
		return false;
	}

	var queryStr = "q?opt=TrainsAtStation&subOpt=tas";
	submitForm(frm,queryStr,10);
}
/* Ends */


function onTBSH() 
{
	var frm= document.frmTBSH; 

	var queryStr = "q?opt=HeritageTrainsBetweenStation&subOpt=tbsh";
	submitForm(frm,queryStr,10);
}
/* Ends */

function onTBSSPL() 
{
	var frm= document.frmTBS; 
	
	var jFromStationInput = frm.jFromStationInput.value = trim(frm.jFromStationInput.value.toUpperCase());

	var jToStationInput =frm.jToStationInput.value = trim(frm.jToStationInput.value.toUpperCase());

	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter Station !!!";
		return false;
	}else if(jFromStationInput == jToStationInput)
	{
		document.getElementById("divMessageText").innerHTML = "From and To Stations cannot be same !!!";
		return false;
	}

	//alert(""+jFromStationInput + " " +jToStationInput);

	var succ = false;
	if(jFromStationInput.indexOf("-") == -1) {
		
		var s = getStnByCode(jFromStationInput)
			if(s.length !=0 && s!='') {
				frm.jFromStationInput.value = s;
				succ = true;
			}
		
	}
	else {
		
		var sArr=jFromStationInput.split('-');
		
		var s = getStnByCode(sArr[1].trim())
		if(s.length !=0 && s!='') {
			frm.jFromStationInput.value = s;
			succ = true;
		}
	}

	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid From Station !!!";
		return false;
	}

	if(jToStationInput != '')
	{
		var succ = false;
		if(jToStationInput.indexOf("-") == -1) {
			
			var s = getStnByCode(jFromStationInput)
				if(s.length !=0 && s!='') {
					frm.jToStationInput.value = s;
					succ = true;
				}
			
		}
		else {
			
			var sArr=jToStationInput.split('-');
			
			var s = getStnByCode(sArr[1].trim())
			if(s.length !=0 && s!='') {
				frm.jToStationInput.value = s;
				succ = true;
			}
		}
		if(!succ) {
			document.getElementById("divMessageText").innerHTML = "Invalid  To station !!!";
			return false;
		}	
	}
	
	var queryStr = "q?opt=TrainsBetweenStation&subOpt=tbsspl";
	submitForm(frm,queryStr,10);
}
/* Ends */

function onTBSSPL2() 
{
	var frm= document.frmTBS; 
	
	var jFromStationInput = frm.jFromStationInput.value = frm.jFromStationInput.value.toUpperCase();
	
	var jToStationInput =frm.jToStationInput.value = frm.jToStationInput.value.toUpperCase();
	
	if(jFromStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter From station !!!";
		return false;
	}
	
	if(jToStationInput.length == 0) 
	{
		document.getElementById("divMessageText").innerHTML = "Enter To station !!!";
		return false;
	}
	
	//alert("" + "DELHI- DLI".indexOf("- DLI") + " " + ("DELHI- DLI".length - "- DLI".length - 1));
	
	var succ = false;
	jFromStationInput = jFromStationInput.toUpperCase();
	if(jFromStationInput.indexOf("-") == -1) {
		var fromIn = "- " + jFromStationInput;
		//alert(fromIn);
		for(var i in arrStationList) {
			var s = arrStationList[i];
			var indx = s.indexOf(fromIn);
			if(indx != -1 && indx == s.length - fromIn.length) {
				frm.jFromStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	else {
		for(var i in arrStationList) {
			var s = arrStationList[i];
			if(s == jFromStationInput) {
				frm.jFromStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid From station !!!";
		return false;
	}
	
	var succ = false;
	jToStationInput = jToStationInput.toUpperCase();
	if(jToStationInput.indexOf("-") == -1) {
		var toIn = "- " + jToStationInput;
		//alert(toIn);
		for(var i in arrStationList) {
			var s = arrStationList[i];
			var indx = s.indexOf(toIn);
			if(indx != -1 && indx == s.length - toIn.length) {
				frm.jToStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	else {
		for(var i in arrStationList) {
			var s = arrStationList[i];
			if(s == jToStationInput) {
				frm.jToStationInput.value = s;
				succ = true;
				break;
			}
		}
	}
	if(!succ) {
		document.getElementById("divMessageText").innerHTML = "Invalid To station !!!";
		return false;
	}
	
	if(frm.jFromStationInput.value == frm.jToStationInput.value)
	{
		document.getElementById("divMessageText").innerHTML = "From & To station are same !!!";
		return false;
	}
	
	var queryStr = "q?opt=TrainsBetweenStation&subOpt=tbsspl";
	submitForm(frm,queryStr,10);
}
/* Ends */


function onTrainInputByFind(trainNo) 
{
	var frm= document.frmTRN; 
	frm.target="";
	trainNo = trim(trainNo);
	frm.trainNo.value = trainNo;
	
	var queryStr = "q?opt=TrainRunning&subOpt=FindStationList";
	submitForm(frm,queryStr,10);
}

function onTrainInputByFind(trainNo,startDate) 
{
	var frm= document.frmTRN; 
	frm.target="";
	trainNo = trim(trainNo);
	frm.trainNo.value = trainNo;
	
	var queryStr = "q?opt=TrainRunning&subOpt=FindStationList&jDate="+startDate;
	submitForm(frm,queryStr,10);
}

/* Ends */
function onTrainInputByFindP(trainNo) 
{
	var frm= document.frmTBS; 
	frm.target="";
	trainNo = trim(trainNo);
	frm.trainNo.value = trainNo;
	
	var queryStr = "q?opt=TrainRunning&subOpt=FindStationList";
	submitForm(frm,queryStr,10);
}	

function onTrainInputByFindP(trainNo,startDate) 
{
	var frm= document.frmTBS; 
	frm.target="";
	trainNo = trim(trainNo);
	frm.trainNo.value = trainNo;
	
	var queryStr = "q?opt=TrainRunning&subOpt=FindStationList&jDate="+startDate;
	submitForm(frm,queryStr,10);
}
/* Ends */

function onTrainInputByLiveStation(trainNo,jDate) 
{
	var frm= document.frmSTN; 
	
	var queryStr = "q?opt=TrainRunning&subOpt=FindStationList&trainNo="+trainNo+"&jDate="+jDate;
	submitForm(frm,queryStr,10);
}	
/* Ends */

function submitFeedback()
{
	var frm = document.frmFB; 
	
	frm.feedbackTxt.value = trim(frm.feedbackTxt.value);
	frm.personName.value = trim(frm.personName.value);
	frm.contactNo.value = trim(frm.contactNo.value);
	frm.emailId.value = trim(frm.emailId.value);
	
	if(frm.feedbackTxt.value.length == '')
	{
		document.getElementById("divMessageText").innerHTML = "Enter feedback !!!";
		frm.feedbackTxt.focus();
		return ;
	}
	if(frm.personName.value.length == '')
	{
		document.getElementById("divMessageText").innerHTML = "Enter name !!!";
		frm.personName.focus();
		return ;
	}
	if(frm.contactNo.value.length > 0)
	{
		if(frm.contactNo.value.length != 10 || !checkForNumber(frm.contactNo.value))
		{
			document.getElementById("divMessageText").innerHTML = "Invalid mobile no. !!!";
			frm.contactNo.value = '';
			frm.contactNo.focus();
			return ;
		}
	}
	if(frm.emailId.value.length == 0)
	{
		document.getElementById("divMessageText").innerHTML = "Enter email id !!!";
		frm.emailId.value = '';
		frm.emailId.focus();
		return ;
	}
	if(frm.emailId.value.length > 0 )
	{ 
		if(!validateEmailID(frm.emailId.value))
		{
			document.getElementById("divMessageText").innerHTML = "Invalid email id !!!";
			frm.emailId.value = '';
			frm.emailId.focus();
			return ;
	     }
	}
	if(frm.captchaValue.value.length == 0)
	{
		document.getElementById("divMessageText").innerHTML = "Enter value for Captcha !!!";
		frm.captchaValue.value = '';
		frm.captchaValue.focus();
		return ;
	}
	
	document.getElementById('fbbutton').style.display = "none";
	
	var queryStr = "q?opt=Feedback&subOpt=submit";
	submitForm(frm,queryStr,10);
}
/* Ends */


function onMainMenu(subOpt,excpType)
{
	var frm = document.frmMainMenu;
	var queryStr = "q?opt=MainMenu&subOpt="+subOpt+"&excpType="+excpType;
	submitForm(frm,queryStr,10);
}

function showFeedback(subOpt,frm)
{
	//alert('hello');
	//var frm = document.fFrm;
	var queryStr = "q?opt=MainMenu&subOpt="+subOpt+"&excpType=";
	submitForm(frm,queryStr,10);
}
/* Ends */
function onMenuPNR(subOpt)
{
	if(subOpt=='pnr')
		{window.open("http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en");}
	else if(subOpt=='hpnr')
		{window.open("http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=hi");}
}
function onMenuSeat(subOpt)
{
	if(subOpt=='seat')
		{window.open("http://www.indianrail.gov.in/enquiry/SEAT/SeatAvailability.html?locale=en");}
	else if(subOpt=='hseat')
		{window.open("http://www.indianrail.gov.in/enquiry/SEAT/SeatAvailability.html?locale=hi");}
}
function onMenuBook(subOpt)
{
	window.open("https://www.irctc.co.in");
}
function onMenuFreight(subOpt)
{
	window.open("https://fois.indianrail.gov.in/RailSAHAY");
}
/* Ends */
function onMenuHome(subOpt,excpType)
{
	
	var frm = document.frmMenuHome;
	var queryStr = "q?opt=MenuHome&subOpt="+subOpt+"&excpType="+excpType;
	submitForm(frm,queryStr,10);
}
/* Ends */

function onExceptionalTrains(eDateType,eType)
{
	//alert(eDateType)
	var frm = document.frmExcpTrain;

	frm.excpDateType.value = eDateType;
	frm.excpType.value = eType;
	
	var queryStr = "q?opt=ExcpTrains&subOpt=show";
	submitForm(frm,queryStr,10);
}
/* Ends */


function checkCharLimit(obj,divID,frm)
{
	if (obj.value.length == frm.maxFeedbackLen.value) 
		return false;
		
	return true;
}

function showCharCount(obj,divID,frm)
{
	if (obj.value.length > frm.maxFeedbackLen.value) 
	{
		obj.value = obj.value.substring(0,frm.maxFeedbackLen.value);
	}
	document.getElementById(divID).innerText = frm.maxFeedbackLen.value - obj.value.length;
	return true;
}

function showMap()
{
	var params = [
	              'height='+screen.height,
	              'width='+screen.width,
	              'fullscreen=yes', 
	              'directories=no',
	              'titlebar=no',
	              'toolbar=no',
	              'location=no',
	              'status=no',
	              'menubar=no'].join(','); 

	document.frmTRN.action="TrnMap?opt=map&subOpt=spot";
	window.open('test.html', 'formresult', params);
	document.frmTRN.target="formresult";
	document.frmTRN.submit();

}
function showMapNew(trainNo,jStation,jDate,arrDepFlag)
{
	var params = [
	              'height='+screen.height,
	              'width='+screen.width,
	              'fullscreen=yes', 
	              'directories=no',
	              'titlebar=no',
	              'toolbar=no',
	              'location=no',
	              'status=no',
	              'menubar=no'].join(','); 

	document.frmTRN.action= "TrnMap?opt=map&subOpt=spot&trainNo="+trainNo+"&jStation="+jStation+"&jDate="+jDate+"&arrDepFlag="+arrDepFlag+"&from=N";
	window.open('test.html', 'formresult', params);
	document.frmTRN.target="formresult";
	document.frmTRN.submit();

}
function showFullRoute()
{
	var params = [
        'height='+screen.height,
        'width='+screen.width,
        'fullscreen=yes', 
        'directories=no',
        'titlebar=no',
        'toolbar=no',
        'location=no',
        'status=no',
        'menubar=no'].join(','); 

	document.frmTRN.action="tr?opt=TrainRunning&subOpt=full";
	window.open('test.html', 'formresult', params);
	document.frmTRN.target="formresult";
	document.frmTRN.submit();
}

function showFullRunning(trainNo, startDate)
{
	var params = [
        'height='+screen.height,
        'width='+screen.width,
        'fullscreen=yes', 
        'directories=no',
        'titlebar=no',
        'toolbar=no',
        'location=no',
        'status=no',
        'menubar=no'].join(','); 

	document.frmExcpTrain.action="tr?opt=TrainRunning&subOpt=fullR&trainNo="+trainNo+"&jDate="+startDate;
	window.open('test.html', 'formresult', params);
	document.frmExcpTrain.target="formresult";
	document.frmExcpTrain.submit();
}

function showSplTrains()
{
	document.frmTRN.action="q?opt=TrainRunning&subOpt=splTrnDtl";
	document.frmTRN.submit();
}
function showSplTrainsS()
{
	document.frmMainMenu.action="q?opt=TrainRunning&subOpt=splTrnDtl";
	document.frmMainMenu.submit();
}
function showSplTrainsSN()
{
	document.frmNav.action="q?opt=TrainRunning&subOpt=splTrnDtl";
	document.frmNav.submit();
}

function showSplTrainsP()
{
	document.frmTBS.action="q?opt=TrainRunning&subOpt=splTrnDtl";
	document.frmTBS.submit();
}

function showExcpInfo(comeFrom)
{
	if(comeFrom == 'P'){
		var frm= document.frmTRN; 
		frm.target="";
		frm.trainNo.value = trim(frm.trainNo.value);
		var trainNoValue = frm.trainNo.value;
		
		if(trainNoValue.length > 5 && trainNoValue.includes("-"))
		{
			var array = trainNoValue.split("-");
			trainNoValue = array[0];
			frm.trainNo.value = trainNoValue
		}
		if(trainNoValue.length == 5 && checkForNumber(trainNoValue) && trainNoValue != '00000')	//5 digit number
		{
			document.frmTRN.action="q?opt=TrainRunning&subOpt=canDtl";
			document.frmTRN.submit();
		}
	}else if (comeFrom == 'M'){
		document.frmTRN.action="q?opt=TrainRunning&subOpt=excpInfo";
		document.frmTRN.submit();
	}
	else if (comeFrom == 'N'){
		document.frmMainMenu.action="q?opt=TrainRunning&subOpt=excpInfo";
		document.frmMainMenu.submit();
	}
	/*else if (comeFrom == 'N'){
		document.frmNav.action="q?opt=TrainRunning&subOpt=excpInfo";
		document.frmNav.submit();
	}*/
	else if (comeFrom == 'C'){
		document.frmExcpTrain.action="q?opt=TrainRunning&subOpt=excpInfo";
		document.frmExcpTrain.submit();
	}
		
}


function showMapS()
{
	var params = [
	              'height='+screen.height,
	              'width='+screen.width,
	              'fullscreen=yes', 
	              'directories=no',
	              'titlebar=no',
	              'toolbar=no',
	              'location=no',
	              'status=no',
	              'menubar=no'].join(','); 

	document.frmTRN.action="TrnMap?opt=map&subOpt=cspot";
	window.open('test.html', 'formresult', params);
	document.frmTRN.target="formresult";
	document.frmTRN.submit();

}

function showMap2()
{
	var params = [
	              'height='+screen.height,
	              'width='+screen.width,
	              'fullscreen=yes', 
	              'directories=no',
	              'titlebar=no',
	              'toolbar=no',
	              'location=no',
	              'status=no',
	              'menubar=no'].join(','); 

	document.frmTRN.action="TrnMap?opt=map&subOpt=bspot";
	window.open('test.html', 'formresult', params);
	document.frmTRN.target="formresult";
	document.frmTRN.submit();

}
/* Ends */

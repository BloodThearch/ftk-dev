var timerCount = 0;

function _id(s){return document.getElementById(s);} 
function _name(s){return document.getElementsByName(s);} 

function incrementTimer(timerCnt) 
{
	if(document.getElementById("timerCnt"))
		obj= document.getElementById("timerCnt");
	//else if(parent.detail.document.getElementById("timerCnt"))	
		//obj = parent.detail.document.getElementById("timerCnt");
	
	if(obj)
	{	
		if(isNaN(timerCount))
		{
			obj.innerHTML = "";
		}
		else
		{
			if(timerCount == 0) { timerCount = 10; }
			obj.innerHTML = timerCount;
		}
		timerCount--;
	}	
}
/* Ends */

function fnPleaseWait(inputTimerCnt) 
{
	var obj;
	
	if(document.getElementById("splashScreen"))
	{
		obj= document.getElementById("splashScreen");
	}
	/*else if(parent.detail.document.getElementById("splashScreen"))	
	{
		//obj = parent.detail.document.getElementById("splashScreen");
	}*/
	
	if(obj)
	{
		obj.style.visibility = "visible";
		
		//timerCount = inputTimerCnt;
		//setInterval("incrementTimer()",1000);
		//incrementTimer();
	}
}
/* Ends */

function fnHideWait() 
{
	if(document.getElementById("splashScreen"))
	{
		var obj= document.getElementById("splashScreen");		
		obj.style.visibility = "hidden";
	}
}
/* Ends */


function hideBackContent()
{
	//blurDiv = document.getElementsById('splashScreen'); 
	var blurDiv = document.createElement("div"); 
	blurDiv.id = "blurDiv"; 
	blurDiv.style.cssText = "position:absolute; top:0px; right:0px;left:0px;bottom:0px; background-color: #f5f5f5; opacity:0.5; filter:alpha(opacity=50);vertical-align:middle; text-align:center;"; 
	//blurDiv.innerHTML = "<table width=100% height=100% style=\"width:100%;height:100%;\" cellpadding=0 cellspacing=0 border=0><tbody><tr><td valign=middle align=center style=\"vertical-align:middle;text-align:center;\"><IMG src=\"images/pleasewait.gif\" BORDER=0 width=40 height=40></td></tr></tbody></table>";
	document.getElementsByTagName("body")[0].appendChild(blurDiv); 
}
/* Ends */

function showBackContent()
{
	var blurDiv = document.getElementById("blurDiv"); 
	blurDiv.parentNode.removeChild(blurDiv); 
}
/* Ends */

function showObject(obj) 
{
	obj.style.visibility = "visible";
}

function hideObject(obj) 
{
	obj.style.visibility = "hidden";
}
/* Ends */

function clearmsg() {
	document.getElementById("divMessageText").innerHTML ="";
}

function submitForm(frm,queryStr,waitCnt) {
	fnPleaseWait(waitCnt);
	hideBackContent();
	
	setTimeout(function() {
		frm.action = queryStr;
		frm.submit();
	}, 100);
	/*
	if(queryStr.indexOf("q?type=TrainRunning&subOpt=ShowRunC") != -1) { // In case of train running data only. 
		$.ajax({url:"GetCSRFToken?t=" + new Date().getTime(), success:function(str){
			try {
				var prm = "csrfToken=" + eval(str);
				if(queryStr.indexOf("?") == -1) {
					queryStr += "?" + prm;
				}
				else {
					queryStr += "&" + prm;
				}
				setTimeout(function() {
					frm.action = queryStr;
					frm.submit();
				}, 100);
			} catch(ex){ }
		}, error:function(){alert("Some Error at server side please try again.");}, async:true});
	}
	else {
		setTimeout(function() {
			frm.action = queryStr;
			frm.submit();
		}, 100);
	}*/
}
/* Ends */

function blink(delayTime)
{
	setTimeout("hidit('"+delayTime+"');", 500);
}
function hidit(delayTime)
{
	if(document.getElementById('blinkingEA'))
	{		
		document.getElementById('blinkingEA').style.color = '#006fc4';
		document.getElementById('blinkingEAT').style.color = '#006fc4';
	}	
	if(document.getElementById('blinkingED'))
	{		
		document.getElementById('blinkingED').style.color = '#006fc4';
		document.getElementById('blinkingEDT').style.color = '#006fc4';
	}
	setTimeout("showit('"+delayTime+"')", 500);
}
function showit(delayTime)
{
	//alert(delayTime)
	if(document.getElementById('blinkingEA'))
	{		
		var textCol = delayTime > 0 ? 'red':'#E90000';
		document.getElementById('blinkingEA').style.color = textCol;
		document.getElementById('blinkingEAT').style.color = textCol;
	}
	if(document.getElementById('blinkingED'))
	{		
		var textCol = delayTime > 0 ? 'red':'#E90000';
		document.getElementById('blinkingED').style.color = textCol;
		document.getElementById('blinkingEDT').style.color = textCol;
	}
	setTimeout("blink('"+delayTime+"')",0);
}

function blinkText(delayTime)
{
	setTimeout("hideText('"+delayTime+"')", 500);
}
function hideText(delayTime)
{
	if(document.getElementById('blinkingFooter'))
	{		
		document.getElementById('blinkingFooter').style.color = '#006fc4';
		document.getElementById('blinkingFooter').style.color = '#006fc4';
	}	
	
	setTimeout("showText('"+delayTime+"')", 500);
}
function showText(delayTime)
{
	//alert(delayTime)
	if(document.getElementById('blinkingFooter'))
	{		
		var textCol = delayTime > 0 ? 'red':'#00A900';
		document.getElementById('blinkingFooter').style.color = textCol;
		document.getElementById('blinkingFooter').style.color = textCol;
	}
	
	setTimeout("blinkText('"+delayTime+"')",0);
}

function blinkHead(delayTime)
{
	setTimeout("hideHead('"+delayTime+"')", 500);
}
function hideHead(delayTime)
{
	if(document.getElementById('blinkingHead'))
	{		
		document.getElementById('blinkingHead').style.color = '#006fc4';
		document.getElementById('blinkingHead').style.color = '#006fc4';
	}	
	
	setTimeout("showHead('"+delayTime+"')", 500);
}
function showHead(delayTime)
{
	//alert(delayTime)
	if(document.getElementById('blinkingHead'))
	{		
		var textCol = delayTime > 0 ? 'red':'#00A900';
		document.getElementById('blinkingHead').style.color = textCol;
		document.getElementById('blinkingHead').style.color = textCol;
	}
	
	setTimeout("blinkHead('"+delayTime+"')",0);
}

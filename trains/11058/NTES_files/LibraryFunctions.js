
/**
 * Method Desc : Trim leading or trailing whitespace/extra spaces  Optimised Function
 * 
 */
function trim(str)
{ 
    return (str.replace(/^\s*/, '').replace(/\s*$/, ''));
} 
/* Ends */

String.prototype.startsWith = function(str) 
{
	return (this.match("^"+str)==str)
} 
/* Ends */


/**
 * Method Desc :  Remove special characters from a string. 
 * 
 */
function removeSpecialChar(inputStr) 
{
	var returnStr = "";//alert(inputStr)
	
	if(isNaN(inputStr))
	{
		//pattern = /\$|,| |@|#|~|`|\%|\*|\^|\&|\(|\)|\+|\=|\[|\-|\_|\]|\[|\}|\{|\;|\:|\'|\"|\<|\>|\?|\||\/\\|\!|\$|\./g;
        // remove special characters like "$" and "," etc...
		//alert(inputStr.replace(pattern, ""))
		returnStr = inputStr.replace(/\s/g,'');
		
		returnStr = returnStr.replace(/[^a-zA-Z 0-9]+/g,'');
		//alert(returnStr)
	}
	else
	{
		returnStr = inputStr;
	}
	return returnStr;
}
/* Ends */

function checkAlphaNumSpace(strVal) 
{   

    if ( /[^A-Za-z0-9 ]/.test(strVal) ) 
    { 
        return false;//do something because he fails input test.
    }
    return true;
}
/* Ends */

function checkAlphaSpace(strVal) 
{   

    if ( /[^A-Za-z ]/.test(strVal) ) 
    { 
        return false;//do something because he fails input test.
    }
    return true;
}
/* Ends */

function checkAlphaSpaceHyphen(strVal) 
{   

    if ( /[^A-Za-z -]/.test(strVal) ) 
    { 
        return false;//do something because he fails input test.
    }
    return true;
}
/* Ends */

function checkAlphaNumericSpaceHyphen(strVal) 
{   

    if ( /[^A-Za-z0-9 -]/.test(strVal) ) 
    { 
        return false;//do something because he fails input test.
    }
    return true;
}
/* Ends */

function isAlphabeticString(strVal) 
{   

    if ( /[^A-Za-z]/.test(strVal) ) 
    { 
        return false;//do something because he fails input test.
    }
    return true;
}
/* Ends */

function checkForNumber(strVal) 
{   

    if ( /[^0-9]/.test(strVal) ) 
    { 
        return false;//do something because he fails input test.
    }
    return true;
}
/* Ends */
/**
 * Method Desc : for Setting focus to next control 
 * 
 */
function tabNext(tabLength,cnt1, cnt2) 
{    
	var cntLength = cnt1.value.length;	
    if(tabLength == cntLength)
    {
       cnt2.focus();
    }   		
}
/* Ends */

function validateEmailID(value) 
{
	//alert(value)
	
	var str = trim(value)
	
	if(str == "")	return false;
	
	var at="@"
	var dot="."
	var lat=str.indexOf(at)
	var lstr=str.length
	var ldot=str.indexOf(dot)

	if (str.indexOf(at)==-1)	
		return false
	else if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)	
		return false
	else if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
	    return false
	else if (str.indexOf(at,(lat+1))!=-1)
	    return false
	else if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
	    return false
	else if (str.indexOf(dot,(lat+2))==-1)
	    return false
	else if (str.indexOf(" ")!=-1)
	    return false
	
 	return true					
}
/* Ends */


/*######################################### AJAX ################################## STARTS ###########*/

/* to make an HttpRequest S */
function newXMLHttpRequest() 
{
		var xmlreq = false;

  		// Create XMLHttpRequest object in non-Microsoft browsers
  		if (window.XMLHttpRequest) 
  		{
    		xmlreq = new XMLHttpRequest();
  		} 
  		else if (window.ActiveXObject) 
  		{//else if S
    	try 
    	{
  			// Try to create XMLHttpRequest in later versions
  			// of Internet Explorer

  			xmlreq = new ActiveXObject("Msxml2.XMLHTTP");
  
		} 
		catch (e1) 
		{//catch S

  			// Failed to create required ActiveXObject
  
  			try 
  			{
    			// Try version supported by older versions
    			// of Internet Explorer
  
    			xmlreq = new ActiveXObject("Microsoft.XMLHTTP");

  			} 
  			catch (e2) 
  			{
    			// Unable to create an XMLHttpRequest by any means
       			xmlreq = false;
   			}
		}//catch E
    		
  		}//else if E

	return xmlreq;	
}
/* to make an HttpRequest E */

/* getReadyStateHandler S */
function getReadyStateHandler(req, responseXmlHandler) {

   // Return an anonymous function that listens to the XMLHttpRequest instance
   return function () {

     // If the request's status is "complete"
     if (req.readyState == 4) {
       
       // Check that we received a successful response from the server
       if (req.status == 200) {

         // Pass the XML payload of the response to the handler function.
            responseXmlHandler(req.responseXML);
          
       } else {

         // An HTTP problem has occurred
         alert("HTTP error "+req.status+": "+req.statusText);
       }
     }
   }
 }
/* getReadyStateHandler E */
	
/*######################################### AJAX ################################## ENDS ################################*/










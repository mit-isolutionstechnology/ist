function onlyDigit(e){
	alert(e.keyCode);
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault(); 
        return true;
    }else{
    	return false;
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    alert(evt);	
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

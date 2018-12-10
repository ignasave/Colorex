
var buttonC_default = 'btn btn-purple btn-block mt-3 py-5';
var buttonC_pressed = 'btn btn-purple btn-block mt-3 py-5 active z-depth-0';
var buttonColor_default = "col-12 col-sm-6 col-md-2 m-0 btn btn-outline-light-blue btn-lg z-depth-0 rounded-0"
var buttonToggle_pressed = "col-6 col-md-3 m-0 btn btn-outline-secondary btn-lg z-depth-4";
var buttonToggle_default = "col-6 col-md-3 m-0 btn btn-outline-primary btn-lg z-depth-0";
var buttonSelected = "col-12 col-sm-6 col-md-2 m-0 btn btn-outline-warning btn-lg z-depth-0 rounded-0 selected"
var	buttonSelected2 = "col-12 col-sm-6 col-md-2 m-0 btn btn-outline-danger btn-lg z-depth-0 rounded-0 selected2";

var selected = 1;
var styleSelected = 1;
var selectedColor1;

$(document).ready(function(){
    $('#buttonOColor2').hide(0);
    set_clicks();
	set_want_buttons();
	set_pair_colors();
	select(true);
});

function want_style(selector){
	$('#want').children('div').not('#title').children('button').attr('class', buttonC_default);
	$(selector).attr('class', buttonC_pressed);
	$('#colorTable').children('div').attr('class', buttonColor_default);
}


function set_want_buttons(){
	$('#color_parejo').on('click', function() {
		want_style(this);
		$('#buttonOColor2').hide(0);
		styleSelected = 1;
		select(true);
	});
	$('#mechas').on('click', function() {
		want_style(this);
		$('#buttonOColor2').show(0);
		styleSelected = 2;
		select(true);
	});
	$('#degradado').on('click', function() {
		want_style(this);
		$('#buttonOColor2').show(0);
		styleSelected = 3;
		select(true);
	});

}

function select(button1){
	if (button1){
		$('#buttonOColor1').attr('class', buttonToggle_pressed);
		$('#buttonOColor2').attr('class', buttonToggle_default);
		selected = 1;
	}
	else {
		$('#buttonOColor2').attr('class', buttonToggle_pressed);
		$('#buttonOColor1').attr('class', buttonToggle_default);
		selected = 2;
	}
}

function set_pair_colors(){
	$('#buttonOColor1').on('click', function(event) {
		select(true);
	});
	$('#buttonOColor2').on('click', function(event) {
		select(false);
	});
}

function set_clicks(){
	$('#colorTable').children('div').on('click', function() {
		if (selected == 1 && styleSelected == 1) {
			$('#colorTable').children('div').attr('class', buttonColor_default);
			$(this).attr('class', buttonSelected);

		}
		else if (selected == 1) {
			$('#colorTable').children('div').not('.selected2').attr('class', buttonColor_default);
			$(this).attr('class', buttonSelected);
		}
		else if (selected == 2) {
			$('#colorTable').children('div').not('.selected').attr('class', buttonColor_default);
			$(this).attr('class', buttonSelected2);
		}
		if (styleSelected != 1) {
			select(false);
		}
	});
}

$('#atras2').on('click', function() {

	$('#stepOneIndicator').attr('style', 'width: 0%; height: 20px');
	$('#stepTwo').toggle(500);
	$('#stepOne').toggle(500);
	
});

$('#siguiente2').on('click', function(event) {
	var n = $('#colorTable').children('.selected').length;
	var n2 = $('#colorTable').children('.selected2').length;
	if (styleSelected != 1) {

		

		if(	n != 0 && n2 != 0){
			if (styleSelected == 2) {
				console.log("MECHAS");
			}

			else {
				console.log("DEGRADADO");
			}

			console.log("color 1 : " + $('#colorTable').children('.selected').children('p').html());
			console.log("color 2 : " + $('#colorTable').children('.selected2').children('p').html());
			$('#stepTwoIndicator').attr('style', 'width: 100%; height: 20px');
		}

	}
	else {
		if(	n != 0 ){
			console.log("DEGRADADO");
			console.log("color 1 : " + $('#colorTable').children('.selected').children('p').html());
			$('#stepTwoIndicator').attr('style', 'width: 100%; height: 20px');
		}
	}
	
});





// DECLARACION DE VARIABLES 
var buttonA_pressed = "btn btn-outline-default waves-effect z-depth-0";
var buttonA_default = "btn btn-outline-primary waves-effect z-depth-1";
var buttonB_pressed = "btn btn-outline-default waves-effect z-depth-0";
var buttonB_default = "btn btn-outline-secondary waves-effect z-depth-1";

var colorButton_default = "col-2 btn btn-outline-light-blue btn-lg z-depth-0 ";
var colorButton_pressed = "col-2 btn btn-outline-success btn-lg z-depth-5";

var toggleButton_default = "btn btn-deep-purple btn-lg";
var toggleButton_active = "btn btn-deep-purple btn-lg active";

var buttonTeñido = '#teñido';
var buttonVirgen = '#virgen';
var buttonLargo = '#largo';
var buttonCorto = '#corto';

var memoryRaiz = 0;
var Rmemory ;
var memoryMedio = 0;
var Mmemory ;
var memoryPunta = 0;
var Pmemory;


var F1,F2 ;
var actualTone = "RAIZ";

$(document).ready(function(){
    $('#stepTwo').toggle(0);
    $('#button_group').children('button').children('i').toggle(0);
    pair_selectable_buttons(buttonTeñido,buttonVirgen,buttonA_default,buttonA_pressed, 1);
	pair_selectable_buttons(buttonCorto,buttonLargo,buttonB_default,buttonB_pressed, 2);
	set_color_buttons();
	set_tone_function();
});

function pair_selectable_buttons(button1, button2, defaultStyle, pressedStyle, NumberQuestion)
{
	$(button1).on('click', function(event) {
		if ( $(button1).attr("class") == pressedStyle) {
			$(button1).attr("class",defaultStyle);
		}
		else{
			$(button1).attr("class",pressedStyle);
			$(button2).attr("class",defaultStyle);
		}

		if (NumberQuestion == 1) {
			F1 = $(this).children('p').html();
		}
		else if (NumberQuestion == 2) {
			F2 = $(this).children('p').html();
		}
	});

	$(button2).on('click', function(event) {
		if ( $(button2).attr("class") == pressedStyle) {
			$(button2).attr("class",defaultStyle);
		}
		else{
			$(button2).attr("class",pressedStyle);
			$(button1).attr("class",defaultStyle);
		}
		if (NumberQuestion == 1) {
			F1 = $(this).children('p').html();
		}
		else if (NumberQuestion == 2) {
			F2 = $(this).children('p').html();
		}

	});

}


function set_color_buttons(){
	$('#ColorTable').children('div').on('click', function(event) {
		$('#ColorTable').children('div').not('#divition').attr("class", colorButton_default);
		$(this).attr("class", colorButton_pressed);
		memory = $(this).children('p').html();
		intMemory = parseInt(memory);
		if (actualTone == "RAIZ") {
			Rmemory = $(this);
			memoryRaiz = intMemory;
			$('#check_raiz').show(1000);
		}
		else if(actualTone == "MEDIO"){
			Mmemory = $(this);
			memoryMedio = intMemory;
			$('#check_medio').show(1000);
		}
		else if (actualTone == "PUNTA") {
			Pmemory = $(this);
			memoryPunta = intMemory;
			$('#check_punta').show(1000);
		}
	});
}

function set_tone_function(){
	$('#button_group').children('button').on('click', function(event) {
		$('#button_group').children('button').attr('class', toggleButton_default);
		$('#ColorTable').children('div').not('#divition').attr("class", colorButton_default);
		actualTone = $(this).children('span').html();
		if (actualTone == "RAIZ") {
			if (Rmemory != undefined) {
				Rmemory.attr('class', colorButton_pressed);
			}
			
		}
		else if(actualTone == "MEDIO"){
			if (Mmemory != undefined) {
				Mmemory.attr('class', colorButton_pressed);
			}
			
		}
		else if (actualTone == "PUNTA"){
			if (Pmemory) {
				Pmemory.attr('class', colorButton_pressed);
			}
			
		}
		$(this).attr("class", toggleButton_active);
	});
}


$('#siguiente').on('click', function(event) {
	if ($(buttonTeñido).attr('class') == buttonA_pressed || $(buttonVirgen).attr('class') == buttonA_pressed) {
		if ($(buttonLargo).attr('class') == buttonB_pressed || $(buttonCorto).attr('class') == buttonB_pressed) {
			if (memoryRaiz != 0 && memoryMedio != 0 && memoryPunta != 0) {
				$('#stepOneIndicator').attr('style', 'width: 100%; height: 20px');
				$('#stepOne').toggle(500);
				$('#stepTwo').toggle(500);

				//////////
				logearVariables();
			}
		}
	}

});

function logearVariables(){
	console.log(F1);
	console.log(F2);
	console.log('Poroso : ' + $("#porosoC").html());
	console.log('Lacio : ' + $("#lacioC").html());
	console.log('Grueso : ' + $("#gruesoC").html());
	console.log('Canas : ' + $("#canasC").html());
	console.log("raiz " + memoryRaiz);
	console.log("medio " + memoryMedio);
	console.log("punta " + memoryPunta);
}
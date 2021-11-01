
$(document).ready(function () {

	$(document).on("click", ".number-td, .common-td", function (t) {
		const originText = $("#equation-td").text();
		$("#equation-td").text(originText + $(this).text());
	});

	$(document).on("click", "#execute-td", function (t) {
		const equation = $("#equation-td").text();
		try{
			const answer = eval(equation);
			$("#answer-td").text(answer);
		}
		catch(e){
			$("#equation-td").text('');
			$("#answer-td").text('Nan');
		}
	});

	$(document).on("click", "#delete-all-td", function (t) {
		$("#equation-td").text('');
	});

	$(document).on("click", "#backspace-td", function (t) {
		const originText = $("#equation-td").text();
		if(!originText.length)
			$("#equation-td").text('');
		else
			$("#equation-td").text(originText.slice(0,-1));
	});
});
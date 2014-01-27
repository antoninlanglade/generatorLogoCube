$(document).ready(function(){
	generatorGrid.init(6,'svg');
	$('.restart').click(function(){
		generatorGrid.restart(6,'svg');
	});
});

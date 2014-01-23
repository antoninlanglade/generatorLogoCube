var generatorGrid = {
	gridTab1 : [[],[],[],[]],
	gridTab2 : [[],[],[],[]],
	countDelete : 0,
	gridColor : ["#2ecc71","#3498db","#9b59b6","#f1c40f","#e67e22","#e74c3c","#95a5a6","#34495e"],
	init : function(){
		this.createGrid(8);
	},
	createGrid : function(param){
		var s = Snap("#svg");

		console.log(this.gridTab1);
		var color = this.pickColor();
		for(i=0;i<param/2;i++){
			for(j=0;j<param;j++){
				if( this.createOrNot() != 0 || this.countDelete < param){
					var bigSquare = s.rect(10+(i*55), 10+(j*55), 50, 50);
					bigSquare.attr({
					    fill: color,
					    stroke: "#000",
					    strokeWidth: 2
					});
					this.gridTab1[i][j] = 1;
					this.gridTab2[((param/2-1)-i)][j] = 1;
				}
				else{
					this.gridTab1[i][j] = 0;
					this.gridTab2[((param/2-1)-i)][j] = 0;
				}
			}
		}
		for(i=0;i<param/2;i++){
			for(j=0;j<param;j++){
				if(this.gridTab2[i][j] == 1){
					var bigSquare = s.rect((param/2)*55+10+(i*55), 10+(j*55), 50, 50);
					bigSquare.attr({
					    fill: color,
					    stroke: "#000",
					    strokeWidth: 2
					});
				}
			}
		}
		console.log(this.gridTab2);
	},
	pickColor : function(){
		var randomPick = Math.floor(Math.random()*8);
		var color = this.gridColor[randomPick];
		return color;
	},
	createOrNot : function(){
		var randomPick = Math.floor(Math.random()*2);
		this.countDelete += 1;
		return randomPick;
	}
}

generatorGrid.init();

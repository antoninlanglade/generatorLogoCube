var generatorGrid = {
	gridTab1 : [],
	gridTab2 : [],
	countDelete : 0,
	lengthGrid : null,
	gridColor : ["#2ecc71","#3498db","#9b59b6","#f1c40f","#e67e22","#e74c3c","#95a5a6","#34495e"],
	init : function(length,id){
		self = this;
		this.lengthGrid = length;
		this.initWidth(length,id);
		this.createTab();
		this.createGrid(length,id);
		this.downloadPng();
	},
	createGrid : function(param,id){
		var s = Snap('#'+id),
			color = this.pickColor();
		for(i=0,k=(param/2);i<k;i++){
			for(j=0;j<param;j++){
				if( this.createOrNot() != 0 || this.countDelete < param){
					var bigSquare = s.rect(10+(i*55), 10+(j*55), 50, 50);
					bigSquare.attr({
					    fill: color,
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
		for(i=0,k=(param/2);i<k;i++){
			for(j=0;j<param;j++){
				if(this.gridTab2[i][j] == 1){
					var bigSquare = s.rect((param/2)*55+10+(i*55), 10+(j*55), 50, 50);
					bigSquare.attr({
					    fill: color,
					    strokeWidth: 2
					});
				}
			}
		}
	},
	pickColor : function(){
		var randomPick = Math.floor(Math.random()*8),
			color = this.gridColor[randomPick];
		return color;
	},
	createOrNot : function(){
		var randomPick = Math.floor(Math.random()*2);
		this.countDelete++;
		return randomPick;
	},
	createTab : function(){
		for(i=0,j=(this.lengthGrid/2);i<j; i++){
			this.gridTab1.push([]);
			this.gridTab2.push([]);	
		}
	},
	initWidth : function(length,id){
		$('#'+id).css({
			'width' : length*57+'px',
			'height' : length*57+'px'
		});
	},
	downloadPng : function(){

	},
	restart : function(length,id){
		$('#'+id).html('');
		this.gridTab1 = new Array();
		this.gridTab2 = new Array();
		this.countDelete = 0;
		this.lengthGrid = null;
		this.lengthGrid = length;
		this.initWidth(length,id);
		this.createTab();
		this.createGrid(length,id);
		this.downloadPng();
	}
}

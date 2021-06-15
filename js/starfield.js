class Starfield
{
	// Define as variaveis
	fps;
    canvas;
    width;
	height;
    minVelocity;
    maxVelocityX;
	maxVelocityY;
    numstars;
	stars;
    intervalId;
	ctx;
	star;
	
	//Define o contexto e as variaveis
	constructor(ctx) {
		this.fps = 30;
	
	this.width = 10;
	this.height = 20;
	this.minVelocity = 50;
	this.maxVelocityX = 800;
	this.maxVelocityY = 100;
	this.numstars = 450;
	this.intervalId = 0;
	this.ctx = ctx;

	//Define o tamanho da janela
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
	}
	
	initialize()
	{
		var self = this;
	
		addEventListener('resize', function resize(event)
		{
			self.width = window.innerWidth;
			self.height = window.innerHeight;
			self.ctx.canvas.width = self.width;
			self.ctx.canvas.height = self.height;
			self.draw() 	
		});
	} 

	start()
	{

		// Inicializa um array com as estrelas
		this.stars = [];

		// Gera as estrelas
		for(var i=0; i<this.numstars; i++)
		{
			// Posição
			var x = Math.random()*this.width;
			var y =  Math.random()*this.height;
			// Tamanho e movimento
			var size =  Math.random()*4;
			var velX = (Math.random()*(this.maxVelocityX - this.minVelocity))+this.minVelocity;
			var velY = (Math.random()*(this.maxVelocityY - this.minVelocity))+this.minVelocity;
			this.star = new Star(x,y, size,velX, velY);
			this.stars[i] = this.star;
		}
		
		var timeUpdate = 1000 / this.fps;
		var self = this;
		this.intervalId = setInterval(function() {
			self.update();
			self.draw();	
		}, timeUpdate);
	}

	draw()
	{
		//Desenha o background
		this.ctx.fillStyle = '#1e0045';
		this.ctx.fillRect(0, 0, this.width, this.height);
		
		//Desenha as estrelas
		this.ctx.fillStyle = '#ffffff';
		for(var i=0; i<this.stars.length;i++) {
			this.star = this.stars[i];
			this.ctx.fillRect(this.star.x, this.star.y, this.star.size, this.star.size);
		}	
	}

	update()
	{
		var deltaTime = 1 / this.fps;

		for(var i=0; i<this.stars.length; i++) {
			var star = this.stars[i];
			star.y += deltaTime * star.velocityX;
			star.x += deltaTime * star.velocityY;
			
			// Gera estrelas no topo após saírem da tela
			if(star.y > this.height) {
				var x = Math.random()*this.width;
				var size =  Math.random()*4;
				var velX = (Math.random()*(this.maxVelocityX - this.minVelocity))+this.minVelocity;
				var velY = (Math.random()*(this.maxVelocityY - this.minVelocity))+this.minVelocity;
				let s = new Star(x, 0,size, velX, velY);			
				this.stars[i] = s;
			}
		}
	}

	stop()
	{
		clearInterval(this.intervalId);
	}
}
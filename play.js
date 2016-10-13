window.onload = function(){
    let ctx = document.getElementById(('canvas')).getContext('2d');
    let gameStarted = false;
    let play = document.getElementById('play');
    let bgplay = document.getElementById('bgplay');
    window.addEventListener('click', playResult)
    function playResult(){
        if(gameStarted == false)
            if(event.clientX>=280 && event.clientX<=280+retry.width
                && event.clientY>=350 && event.clientY<=350+retry.height) {
                gameStarted = true;
                ctx.clearRect(0,0,800,600)
                init();
            }
    }
    ctx.fillStyle='black';
    ctx.drawImage(bgplay,0,0);
    ctx.drawImage(play,280,350)
    
    function init(){
    let image = document.getElementById('wall')
    let wallBack = document.getElementById('wallBack');

    let soldier2 = document.getElementById('soldier');
    let ammoMan = document.getElementById('healAmmo');
    let bomb2 = document.getElementById('bomb');

    let retry = document.getElementById('retry');

    let bomb = {x:20, y:344}
    let soldier = {x:20, y:344}
    let ammoManObj = {x:20, y:-210}

    let upOrDown = true;
    let gotAway = true;
    let bombExists = false;

    let bombsDetonated = 0;
    let br = 0;
    let bullets = 15;
    let soldiersGetAway = 0;

    let shotsSucceeded=0;
    let partialSoldiers=0;
    let speed = 1;
    let ammoManCount = 0;

    let bombCounter = 0;

    window.addEventListener('click', result)
    window.addEventListener('click', retryResult)
    window.addEventListener('click', ammoResult)
    window.addEventListener('click', bombResult)

    let ammoManOn = false;
    let dead = false;
    animatedSoldiers();
		// NEW GAME
        function retryResult(){
            if(dead)
                if(event.clientX>=280 && event.clientX<=280+retry.width
                    && event.clientY>=350 && event.clientY<=350+retry.height)
                    init();
        }
		
		// KILL SOLDIER
    function result(){
        if(
            (event.clientX<soldier.x+38
            && event.clientX>=soldier.x
            && event.clientY>=soldier.y+84)||

            (event.clientX>soldier.x+75
            &&event.clientX<=soldier.x+soldier.width
            && event.clientY>=soldier.y+84)||

            (event.clientX<=soldier.x+75
            && event.clientX>=soldier.x+38
            && event.clientY<=348
            && event.clientY>=soldier.y)
        )
        {
            gotAway = false;
            ctx.clearRect(soldier.x,260,soldier2.width,84)
            soldier.y=344;
            soldier.x=-75;
            soldier.x += 80 * (Math.floor(Math.random() * 10) + 1);
            ctx.drawImage(wallBack,0,0,800,600,0,0,800,600)
            ctx.drawImage(soldier2,soldier.x,soldier.y)
            ctx.drawImage(image,0,344)
            if(speed<2)speed += 0.3
            if(speed>2) speed+=0.0001;
            else if(speed>3.4) speed +=0.000001;
            shotsSucceeded++;
        }
        bullets-=1/2;
    }
	
		//KILL AMMOMAN
    function ammoResult(){
        if(
            (
            event.clientX<=ammoManObj.x + ammoMan.width-24
            && event.clientX>=ammoManObj.x+24
            && event.clientY<=ammoManObj.y + ammoMan.height-82
            && event.clientY>=ammoManObj.y)
        )
        {
            ctx.clearRect(ammoManObj.x,ammoManObj.y,ammoMan.width,ammoMan.height)
            ammoManObj.y=-210;
            ammoManObj.x=-75;
            ammoManObj.x += 80 * (Math.floor(Math.random() * 10) + 1);
            
            ctx.drawImage(wallBack,0,0,800,600,0,0,800,600)
            
            
            ctx.drawImage(image,0,344)
            
            if(speed<2)speed += 0.3
            if(speed>2) speed+=0.0001;
            else if(speed>3.4) speed +=0.1;
            shotsSucceeded++;
            bullets+=6;
            ammoManOn = false;
        }
        bullets-=1/2;
    }
	
		// DETONATE BOMB
    function bombResult(){
	if(event.clientX<=bomb.x + bomb2.width
            && event.clientX>=bomb.x
            && event.clientY<=bomb.y + bomb2.height
            && event.clientY>=bomb.y){
	    ctx.clearRect(bomb.x,bomb.y,bomb2.width,bomb2.height)
            bomb.y=344;
            bomb.x=20;
            ctx.drawImage(wallBack,0,0,800,600,0,0,800,600)
            ctx.drawImage(image,0,344)
	    bombExists=false;
	    bombsDetonated++; 
        bombCounter++;
        partialSoldiers+=0.5;
		bombCounter=0;
	}
    }
	
		// DRAW EVERYTHING
    function animatedSoldiers(){
        ctx.clearRect(soldier.x,260,soldier2.width,84)
        ctx.drawImage(wallBack,0,0,800,600,0,0,800,600)
        ctx.drawImage(soldier2,soldier.x,soldier.y)
		//BOMB CHECK
	if(bombExists){
	    ctx.drawImage(bomb2,bomb.x,bomb.y)
	    if(bomb.y>100)
            bomb.y-=5;
        if(bombCounter>=500){
            bombCounter=0;
        }
        else{
            bombCounter++;
        }
	}
        if(ammoManOn == true){
            ctx.drawImage(ammoMan, ammoManObj.x, ammoManObj.y);
            ammoManObj.y+=5;
            if(ammoManObj.y>440){
                ammoManObj.y = -210;
                ammoManObj.x=-75;
                ammoManObj.x += 80 * (Math.floor(Math.random() * 10) + 1);
                //ctx.clearRect(ammoManObj.x, 260, ammoMan.width, ammoMan.height);
                ammoManOn=false;
                ammoManCount++;
            }
        }
        if((shotsSucceeded-1)%5==0) if(ammoManCount!=0)ammoManCount--;
        if(shotsSucceeded%5==0 && shotsSucceeded !=0) {
            if(ammoManCount==0)
            {ammoManOn = true;}
        }
	if(partialSoldiers%3==0 && partialSoldiers!=0){
            if(bombExists==false){
	    bomb.x=soldier.x+15;
	    bombExists=true;
            }

	}
        partialSoldiers=shotsSucceeded;
        ctx.drawImage(image,0,344)
        if(upOrDown){
            soldier.y -=speed;
            if(soldier.y<244){
                upOrDown=false;
            }
        }
        if(!upOrDown){
            if(br==1 && soldier.y>344) {
                soldier.x=-75;
                soldier.x += 80 * (Math.floor(Math.random() * 10) + 1);
                br=0;
            }
            else if(soldier.y>344){
                upOrDown=true;br++;
                if(gotAway==true)soldiersGetAway++;
                gotAway=true;
            }
            soldier.y +=speed;
        }
        if(bullets<=3){
	ctx.fillStyle='yellow';
	ctx.font = "30px arial black";
	ctx.fillText(`Warning ${bullets} bullets left!`,240,390)
	}
	    ctx.fillStyle='white';
        ctx.font = "20px arial black"
        ctx.fillText(`Soldiers caught: ${shotsSucceeded}`,10,500)
        ctx.fillText(`Bullets left: ${bullets}`,10,530)
        ctx.fillText(`Soldiers who got away: ${soldiersGetAway}`,10,560)
	    ctx.fillText(`Bombs detonated: ${bombsDetonated}`,10,590)
        ctx.font = "30px arial black"

        // BOMB COUNTER
        switch(true){
            case (bombCounter>1 && bombCounter<100 && bomb.y<300):ctx.fillText("5",bomb.x,bomb.y)
                break;
            case (bombCounter>100 && bombCounter<200 && bomb.y<300):ctx.fillText("4",bomb.x,bomb.y)
                break;
            case (bombCounter>200 && bombCounter<300 && bomb.y<300):ctx.fillText("3",bomb.x,bomb.y)
                break;
            case (bombCounter>300 && bombCounter<400 && bomb.y<300):ctx.fillText("2",bomb.x,bomb.y)
                break;
            case (bombCounter>400 && bombCounter<450 && bomb.y<300):ctx.fillText("1",bomb.x,bomb.y)
                break;
            case (bombCounter>450 && bombCounter<500 && bomb.y<300):ctx.fillText("0",bomb.x,bomb.y)
                break;
        }
		// DEAD CHECK
        if(bullets>0 && soldiersGetAway<6 && bombCounter<500)
        requestAnimationFrame(animatedSoldiers);
        else{
            ctx.font = "23px arial black"
            dead=true;
            ctx.clearRect(0,0,800,600);
            ctx.fillStyle = 'black'
            ctx.fillRect(0,0,800,600);
            ctx.fillStyle = 'white'
            if(bullets>0 && soldiersGetAway==6) {
                ctx.fillText(`You lost. Lots of enemies went through your defence.`, 70, 300)
            }
                else if(bombCounter>=500)
            ctx.fillText(`You lost. A bomb exploded.`,250,300)
            else
                ctx.fillText(`You lost. You went out of bullets and couldn't resist the attack.`,5,300)
            ctx.fillText(`Enemies caught: ${shotsSucceeded}`,292,330)
            ctx.drawImage(retry,280,350)
        }
    }

}
}
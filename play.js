window.onload = function(){function init(){
    let ctx = document.getElementById(('canvas')).getContext('2d');
    let image = document.getElementById('wall')
    let soldier2 = document.getElementById('soldier');
    let wallBack = document.getElementById('wallBack');
    let soldier = {x:20, y:344}
    let upOrDown = true;
    let br = 0;
    let bullets = 10;
    let osamasGetAway = 0;
    let gotAway = true;
    let shotsSucceeded=0;
    let speed = 1;
    window.addEventListener('click', result)
    window.addEventListener('click', ammoResult)
    window.addEventListener('click', bombResult)
    animatedSoldiers();
    draw()
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
    function animatedSoldiers(){
        ctx.clearRect(soldier.x,260,soldier2.width,84)
        ctx.drawImage(wallBack,0,0,800,600,0,0,800,600)
        ctx.drawImage(soldier2,soldier.x,soldier.y)
	if(bombExists){
	    ctx.drawImage(bomb2,bomb.x,bomb.y)
	    if(bomb.y>100)
            bomb.y-=5;
	}
	if(shotsSucceeded>2 && shotsSucceeded%3==0){
            if(bombExists==false){
	    bomb.x=soldier.x+15;
	    bombExists=true;
            }
	}
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
                if(gotAway==true)osamasGetAway++;
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
        ctx.fillText(`Osamas caught: ${shotsSucceeded}`,10,500)
        ctx.fillText(`Bullets left: ${bullets}`,10,530)
        ctx.fillText(`Osamas who got away: ${osamasGetAway}`,10,560)
        if(bullets>0 && osamasGetAway<6)
        requestAnimationFrame(animatedSoldiers);
        else{
            ctx.clearRect(0,0,800,600);
            ctx.fillStyle = 'black'
            ctx.fillRect(0,0,800,600);
            ctx.fillStyle = 'white'
            if(bullets>0 && osamasGetAway==6)
                ctx.fillText(`You lost. Lots of enemies went through your deffence.`,120,300)
            else
                ctx.fillText(`You lost. You went out of bullets and could resist the attack.`,75,300)
            ctx.fillText(`Enemies caught: ${shotsSucceeded}`,292,330)
        }
    }

}
init();}
window.onload = function(){function init(){
    let ctx = document.getElementById(('canvas')).getContext('2d');
    let image = document.getElementById('wall')
    let soldier2 = document.getElementById('soldier');
    let wallBack = document.getElementById('wallBack');
<<<<<<< HEAD
    let ammoMan = document.getElementById('healAmmo');
    let bomb2 = document.getElementById('bomb');
    let bomb = {x:20, y:344}
    let soldier = {x:20, y:344}
    let ammoManObj = {x:20, y:-210}
    let upOrDown = true;
    let bombsDetonated = 0;
    let br = 0;
    let bullets = 10;
    let soldiersGetAway = 0;
    let gotAway = true;
    let shotsSucceeded=0;
    let speed = 1;
    let ammoManCount = 0;
    let bombExists = false;
    let bombCounter = 0;
    window.addEventListener('click', result)
    window.addEventListener('click', ammoResult)
    window.addEventListener('click', bombResult)
    let ammoManOn = false;
    animatedSoldiers();
=======
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
>>>>>>> origin/master
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
<<<<<<< HEAD
    }
=======
>>>>>>> origin/master
    function animatedSoldiers(){
        ctx.clearRect(soldier.x,260,soldier2.width,84)
        ctx.drawImage(wallBack,0,0,800,600,0,0,800,600)
        ctx.drawImage(soldier2,soldier.x,soldier.y)
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/master
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
<<<<<<< HEAD
                if(gotAway==true)soldiersGetAway++;
=======
                if(gotAway==true)osamasGetAway++;
>>>>>>> origin/master
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
<<<<<<< HEAD
        ctx.fillText(`Soldiers caught: ${shotsSucceeded}`,10,500)
        ctx.fillText(`Bullets left: ${bullets}`,10,530)
        ctx.fillText(`Soldiers who got away: ${soldiersGetAway}`,10,560)
        if(bullets>0 && soldiersGetAway<6)
=======
        ctx.fillText(`Osamas caught: ${shotsSucceeded}`,10,500)
        ctx.fillText(`Bullets left: ${bullets}`,10,530)
        ctx.fillText(`Osamas who got away: ${osamasGetAway}`,10,560)
        if(bullets>0 && osamasGetAway<6)
>>>>>>> origin/master
        requestAnimationFrame(animatedSoldiers);
        else{
            ctx.clearRect(0,0,800,600);
            ctx.fillStyle = 'black'
            ctx.fillRect(0,0,800,600);
            ctx.fillStyle = 'white'
<<<<<<< HEAD
            if(bullets>0 && soldiersGetAway==6)
                ctx.fillText(`You lost. Lots of enemies went through your defence.`,120,300)
=======
            if(bullets>0 && osamasGetAway==6)
                ctx.fillText(`You lost. Lots of enemies went through your deffence.`,120,300)
>>>>>>> origin/master
            else
                ctx.fillText(`You lost. You went out of bullets and could resist the attack.`,75,300)
            ctx.fillText(`Enemies caught: ${shotsSucceeded}`,292,330)
        }
    }

}
init();}
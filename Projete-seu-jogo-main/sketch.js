var mago
var esp
var gelo
var b
var ifo
var nec
var mar
var bur
var dra
var esq
var esq2
var fogoa
var sol

var bg,bgImg;

var zombieGroup;



function preload(){
  

  ifo = loadImage("f.png")
nec=loadImage("n.png")
mar=loadImage("m.png")
bur=loadImage("b.png")
dra=loadImage("d.png")
esq=loadImage("e.png")
esq2=loadImage("e2.png")
fogoa=loadImage("fa.png")
sol=loadImage("s.png")
mago=loadImage("mg.png")
esp=loadImage("g2.png")
gelo=loadImage("g.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 mag= createSprite(20, 300);
 
 
 s = createSprite(200, 200);
   p = createSprite(200, 200);
   d = createSprite(200, 200);
   e2 = createSprite(200, 250);
   fa = createSprite(200, 20);
 n = createSprite(20, 200);
 fs = createGroup();
 ss = createGroup();
 ds = createGroup();
 es = createGroup();
 bs = createGroup();
 es2 = createGroup();
   fas = createGroup();
   ps = createGroup();
   wef = 0
   x=0
   y=0
   v=50
   pa = createSprite(0,200,5,1000)
  mago=20
  necromante=25

  mag.addImage(mago);
  mag.scale=0.2
  p.addImage(bur);
  p.escale=0.5
  n.addImage(nec);
  n.scale=0.2
  e2.addImage(esq2);
  e2.scale=0.2
  fa.addImage(fogoa);
  fa.scale=0.1
  d.addImage(dra);
  d.scale=1.5
  s.addImage(sol);
  s.scale=1.5
  
  
  
  fa.visible=false
  e2.visible=false
  p.visible=false
  d.visible=false
  s.visible=false
  edges=createEdgeSprites();
  
  
  
  
  
  

  
}

function draw() {
  background("white")
  drawSprites();
    
   n.collide(edges);
     
   if(keyDown("d")){
    mag.x = mag.x + 5;
  }
  if(keyDown("a")){
  mag.x = mag.x - 5;
  }
 if(keyDown("w")){
    mag.y = mag.y - 5;
}
 if(keyDown("s")){
    mag.y = mag.y + 5;
  } 

    if(keyDown("right")){
      n.x = n.x + 5;
    }
    if(keyDown("left")){
    n.x = n.x - 5;
    }
   if(keyDown("up")){
      n.y = n.y - 5;
  }
   if(keyDown("down")){
      n.y = n.y + 5;
    }
    
   

    if (World.frameCount%45==0) {
      var e = createSprite(width, random(20,height));
      e.addImage(esq);
  e.scale=0.2
    e.velocityX=-5
    es.add(e)
    }
    
    if (World.frameCount%400==0) {
       b = createSprite(random(150,width), random(20,height));
      b.addImage(mar);
  b.scale=0.2
    b.velocityX=0
    bs.add(b)
    wef = 1
    }
    
   
    
     if (World.frameCount%250==0) {
      var e2 = createSprite(width, random(20,height));
      e2.addImage(esq2);
  e2.scale=0.2
    e2.velocityX=-3
    es2.add(e2)
    }
    
    if (World.frameCount%250==0) {
      var e2 = createSprite(e2.x,e2.y);
      e2.addImage(esq2);
  e2.scale=0.2
    e2.velocityX=-3
    es2.add(e2)
    }
    
    if (World.frameCount%1000==0) {
      var d = createSprite(width, random(20,height));
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-3
    ds.add(d)
    }
    
    if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
    if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
    if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
    if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
    if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
    if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
    
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }
   if (World.frameCount%1000==0) {
      var d = createSprite(d.x,d.y);
      d.addImage(dra);
  d.scale=0.2
    d.velocityX=-4
    ds.add(d)
    }

    
    if (keyWentUp("space")) {
     
  if (World.frameCount%1==0) {
    var f = createSprite(n.x,n.y);
      f.addImage(ifo);
  f.scale=0.1
  f.velocityX=10
  fs.add(f)
  }
    }
  
   if (keyWentUp("p")) {
     
  if (World.frameCount%3==0) {
    var p = createSprite(n.x,n.y);
      p.addImage(bur);
  p.scale=0.25
  p.velocityX=2.5
  ps.add(p)
  }
  
  if (World.frameCount%3==0) {
    var p = createSprite(n.x,n.y);
      p.addImage(bur);
  p.scale=0.25
  p.velocityX=2.5
  ps.add(p)
  }
  
  if (World.frameCount%3==0) {
    var p = createSprite(n.x,n.y);
      p.addImage(bur);
  p.scale=0.25
  p.velocityX=2.5
  ps.add(p)
  }
  
  if (World.frameCount%3==0) {
    var p = createSprite(n.x,n.y);
      p.addImage(bur);
  p.scale=0.25
  p.velocityX=2.5
  ps.add(p)
  }
  
  if (World.frameCount%3==0) {
    var p = createSprite(n.x,n.y);
      p.addImage(bur);
  p.scale=0.25
  p.velocityX=2.5
  ps.add(p)
  }
  
  if (World.frameCount%3==0) {
    var p = createSprite(n.x,n.y);
      p.addImage(bur);
  p.scale=0.25
  p.velocityX=2.5
  ps.add(p)
  }
  

    }
  
    if (keyWentUp("q")) {
     
      if (World.frameCount%1==0) {
        var f = createSprite(mag.x,mag.y);
          f.addImage(gelo);
      f.scale=0.2
      f.velocityX=17
      fs.add(f)
      }
        }
      
       if (keyWentUp("e")) {
         
      if (World.frameCount%3==0) {
        var p = createSprite(mag.x,mag.y);
          p.addImage(esp);
      p.scale=0.4
      p.velocityX=0
      ps.add(p)
      }
      
      if (World.frameCount%3==0) {
        var p = createSprite(mag.x,mag.y);
          p.addImage(esp);
      p.scale=0.4
      p.velocityX=0
      ps.add(p)
      }
      
      if (World.frameCount%3==0) {
        var p = createSprite(mag.x,mag.y);
          p.addImage(esp);
      p.scale=0.4
      p.velocityX=0
      ps.add(p)
      }
      
        }

    fs.overlap(es,function(colector,colected){colected.remove()
      colector.remove()
    });
     
     fs.overlap(es2,function(colector,colected){colected.remove()
      colector.remove()
    });
     
    fs.overlap(bs,function(colector,colected){colected.remove()
      colector.remove()
      wef=0;
    });
    
     fas.overlap(fs,function(colector,colected){colected.remove()
      colector.remove()
    });
    
    fs.overlap(ds,function(colector,colected){colected.remove()
      colector.remove()
    });
    
    fs.overlap(ss,function(colector,colected){colected.remove()
      colector.remove()
    });
    
    ps.overlap(es,function(colector,colected){colected.remove()
      colector.remove()
    });
     
     ps.overlap(es2,function(colector,colected){colected.remove()
      colector.remove()
    });
     
    ps.overlap(bs,function(colector,colected){colected.remove()
      colector.remove()
    });
    
    ps.overlap(ds,function(colector,colected){colected.remove()
      colector.remove()
    });
    
     fas.overlap(ps,function(colector,colected){colected.remove()
      colector.remove()
    });
    
    ss.overlap(ps,function(colector,colected){colected.remove()
      colector.remove()
    });
    
    
    
     
    if (d) {
      if(World.frameCount%1==0) {
   var s = createSprite(d.x,d.y);
      s.addImage(sol);
  s.scale=0.3
  s.velocityX=-5
  ss.add(s)
        console.log()
      }
    }
    
    if (d) {
      if(World.frameCount%1==0) {
   var s = createSprite(d.x,d.y);
      s.addImage(sol);
  s.scale=0.3
  s.velocityX=-5
  ss.add(s)
        console.log()
      }
    }
    
    if (d) {
      if(World.frameCount%1==0) {
   var s = createSprite(d.x,d.y);
      s.addImage(sol);
  s.scale=0.3
  s.velocityX=-5
  ss.add(s)
        console.log()
      }
    }
    
     if (wef==1) {
      if(World.frameCount%30==0) {
        var fa = createSprite(b.x,b.y);
      fa.addImage(fogoa);
  fa.scale=0.1
  fa.velocityX=-5
  fas.add(fa)
       
      }
     }
     
   pa.overlap(es,function(colector,colected){colected.remove()
       v-=1
    });
     
     pa.overlap(es2,function(colector,colected){colected.remove()
       v-=1
    });
     
    pa.overlap(fas,function(colector,colected){colected.remove()
       v-=1
    });
    
     pa.overlap(fas,function(colector,colected){colected.remove()
       v-=1
    });
    
    pa.overlap(ds,function(colector,colected){colected.remove()
      v-=1
    });
    
    pa.overlap(ss,function(colector,colected){colected.remove()
      v-=1
    });
    
    n.overlap(es,function(colector,colected){colected.remove()
      necromante-=1
   });
    
    n.overlap(es2,function(colector,colected){colected.remove()
      necromante-=1
   });
    
   n.overlap(fas,function(colector,colected){colected.remove()
      necromante-=1
   });
   
    n.overlap(fas,function(colector,colected){colected.remove()
      necromante-=1
   });
   
   n.overlap(ds,function(colector,colected){colected.remove()
     necromante-=1
   });
   
   n.overlap(ss,function(colector,colected){colected.remove()
     necromante-=1
   });

   mag.overlap(es,function(colector,colected){colected.remove()
    mago-=1
 });
  
  mag.overlap(es2,function(colector,colected){colected.remove()
    mago-=1
 });
  
 mag.overlap(fas,function(colector,colected){colected.remove()
    mago-=1
 });
 
  mag.overlap(fas,function(colector,colected){colected.remove()
    mago-=1
 });
 
 mag.overlap(ds,function(colector,colected){colected.remove()
   mago-=1
 });
 
 mag.overlap(ss,function(colector,colected){colected.remove()
   mago-=1
 });

    textSize(20)
    text(World.seconds,width/2,50)
    
     textSize(20)
   text(v,190,20)
   text(mago,100,100)
   if (mago<=0){
    mag.destroy()
   }
   text(necromante,750,100)
   if (necromante<=0){
    n.destroy()
   }
    if (v<=0){
      background("black")
      textSize(50)
      text("game over",100,200)
      
    }
     }
   







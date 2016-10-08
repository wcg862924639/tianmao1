


window.onload=function  () {
  //左边导航  顶部搜索
  var lou=$(".lou")[0];
  var floortop=$(".floortop")[0];
  document.documentElement.scrollTop=1;
  if(document.documentElement.scrollTop==1){
    var scrollobj=document.documentElement;
  }else{
    var scrollobj=document.body;
  }
  var flag=true;
  var flag2=true;
   addEvent(window,"scroll",aa)
  function aa(){
    var st=scrollobj.scrollTop;
    if(st>800){
      if (flag) {
      flag=false;flag2=true;
      animate(floortop,{top:0})
      animate(lou,{width:40,height:355})
    };
    }else{
      if(flag2){
       flag=true;flag2=false;
      animate(floortop,{top:-50})
      animate(lou,{width:0,height:0})
      }
    }
  }

  var lou1=$(".lou1");
  var floors=$(".floors");
  var color=["#1C3EE5","#D61CE5","#E5D61C","#1CE581","#FCD1D8","#CB9B00","#777"];
  for (var i = 0; i < lou1.length; i++) {
    lou1[i].index=i;
    lou1[i].onclick=function(){
      for (var i = 0; i < lou1.length; i++) {
        var ot=floors[this.index].offsetTop;
      animate(scrollobj,{scrollTop:ot});
      };
    }
    
  };
   for (var i = 0; i < lou1.length; i++) {
    lou1[i].index=i;
    lou1[i].onmouseover=function(){
      for (var i = 0; i < lou1.length; i++) {
      lou1[i].style.background="#555";
      };
     this.style.background=color[this.index];
    }
    lou1[i].onmouseout=function(){
          lou1[this.index].style.background="#555";
        }
  };



  // 右部分定位2
  var wei1=$(".wz");
  var weizi=$(".weizi")
  var t;
  for (var i = 0; i < wei1.length; i++) {
    wei1[i].index=i;
    hover(wei1[i],function(){
      var that=this;
      clearTimeout(t)
      t=setTimeout(function(){
        weizi[that.index].style.display="block";
        animate(weizi[that.index],{left:-80},400)
      },200)
    },function(){
      clearTimeout(t)
      weizi[this.index].style.display="none";
      animate(weizi[this.index],{left:-100},400)
    })
  };
  
   //文字头上的猫头效果
    var xg=getClass("xiao");
     var mao=getClass("mao");
       for (var i = 0; i < xg.length; i++) {
            maotou(xg[i],mao[i])
       };
       function maotou(xg,mao){
      xg.onmouseover=function(){  
        animate(mao,{top:-30},150)
      }
      xg.onmouseout=function(){  
        animate(mao,{top:0},150)
      }
    }

	// banner
var yuans=document.getElementsByClassName("yuan");
var imgs=document.getElementsByClassName("img");
var banner=document.getElementsByClassName("banner-box")[0];
var colors=["#E9E9E9","#E8E8E8","#000000","#FFFFFF","#FCD1D8"];
for (var i = 0; i < yuans.length; i++) {
	yuans[i].index=i;
	yuans[i].onmouseover=function(){
		for (var i = 0; i < yuans.length; i++) {
	         imgs[i].style.zIndex=1;
	         yuans[i].style.background="#555";
		};
		banner.style.background=colors[this.index];
		imgs[this.index].style.zIndex=2;
		this.style.background="#fff";
	}
  };
    
    var num=0;
   lunbo=setInterval(function (){
      num++;
       if (num==5) {
       	num=0;
        };
		for (var i = 0; i < yuans.length; i++) {
	         imgs[i].style.zIndex=1;
	         yuans[i].style.background="#555";
		};
		banner.style.background=colors[num];
		imgs[num].style.zIndex=2;
		yuans[num].style.background="#fff";
     },2000)

    var num=0;
    function move(){
       num++;
        if (num==5) {
       	num=0;
        };
		for (var i = 0; i < yuans.length; i++) {
	         imgs[i].style.zIndex=1;
	         yuans[i].style.background="#555";
		};
		banner.style.background=colors[num];
		imgs[num].style.zIndex=2;
		yuans[num].style.background="#fff";
     }
        

    banner.onmouseover=function(){
    	clearInterval(lunbo)
    }
    banner.onmouseout=function(){
    	lunbo=setInterval(move,2000)
    }


   // 楼层导航
   var items=$(".brad");
    	var masks=$(".mask");
    	for (var i = 0; i < items.length; i++) {
    		items[i].index=i;
    		items[i].onmouseover=function(){
    			masks[this.index].style.opacity="0.8";
    		}
    		items[i].onmouseout=function(){
    		masks[this.index].style.opacity="0";
    	  }
    	};

//图片放大
     
var tupian=$(".tupian");

var shangx=$(".shangx");

 for (var i = 0; i < tupian.length; i++) {
    shangx[i].index=i;
    shangx[i].onmouseover=function(){
      animate(tupian[this.index],{width:160,height:160,marginTop:-10,marginLeft:-10},300)
    }
    shangx[i].onmouseout=function(){
     animate(tupian[this.index],{width:140,height:140,marginTop:0,marginLeft:0},300)
  }; 

 }
//图片左移动
var imgss=$(".imgs");
var hezi=$(".index-child2-right1");
for (var i = 0; i < imgss.length; i++) {
  hezi[i].index=i;
  hezi[i].onmouseover=function(){
    animate(imgss[this.index],{left:-6},400)
  }
  hezi[i].onmouseout=function(){
    animate(imgss[this.index],{left:0},400)
  }
};

//图片加载
 

 }
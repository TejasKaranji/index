!function(a,e,t,o){function i(){return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))}e.requestAnimationFrame&&(a.parallaxBackground=function(o,n){var r={parallaxResizeWatch:null,parallaxBgImage:"",parallaxBgPosition:"center center",parallaxBgRepeat:"no-repeat",parallaxBgSize:"cover",parallaxSpeed:.5,parallaxDirection:"down"},p=this;p.opts={};var l,s,c,d,m,u,g,x,h,f,v,w,k,b,z,y,B=a(o),D=null,S=a(e),_=0,j=0,T=0,q=0,E=1,A=(S.get(0).pageYOffset||t.documentElement.scrollTop)-(t.documentElement.clientTop||0),F=!0,I=0;p.init=function(){p.opts=a.extend({},r,n),p._construct()},p._construct=function(){p.opts.parallaxSpeed>1?p.opts.parallaxSpeed=1:p.opts.parallaxSpeed<0&&(p.opts.parallaxSpeed=0),p.setup(),p.events()},p.render=function(){!0!==F&&p.move(),e.requestAnimationFrame(p.render),F=!0},p.setup=function(){B.css("background-image","none"),B.find(".ee-parallax").length<1&&B.prepend('<div class="ee-parallax"></div>'),D=B.find(".ee-parallax"),D.find(".ee-parallax__inner").length<1&&D.prepend('<div class="ee-parallax__inner"></div>'),l=D.find(".ee-parallax__inner"),s=p.getElementSize(D),c=p.repositionBackground(D,s),B.css({"z-index":0}),l.css({position:"absolute",width:s[0],height:s[1],transform:"translate3d("+c[0]+"px, "+c[1]+"px, "+c[2]+"px)","z-index":"-1"}),"left"!==p.opts.parallaxDirection&&"right"!==p.opts.parallaxDirection||(m=0,u=c[0]),"up"!==p.opts.parallaxDirection&&"down"!==p.opts.parallaxDirection||(m=0,u=c[1]),I=B.visible(!0)?S.scrollTop():D.offset().top},p.refresh=function(){setTimeout(function(){p.adjust()},100),p.move()},p.events=function(){a(t).ready(function(){p.render()}),S.on("resize",p.refresh),p.opts.parallaxResizeWatch&&p.opts.parallaxResizeWatch._resize(p.refresh),S.on("scroll",function(){!0===F&&(A=(e.pageYOffset||t.documentElement.scrollTop)-(t.documentElement.clientTop||0)),F=!1})},p.getElementSize=function(a){return x=a.width(),d=a.height(),z=S.height(),y=S.width(),i()&&(E=2),"left"!==p.opts.parallaxDirection&&"right"!==p.opts.parallaxDirection||(x+=E*Math.ceil(y*parseFloat(p.opts.parallaxSpeed))),"up"!==p.opts.parallaxDirection&&"down"!==p.opts.parallaxDirection||(d+=E*Math.ceil(z*parseFloat(p.opts.parallaxSpeed))),[x,d]},p._getProgress=function(){return(A-l.offset().top+z)/(z+d)},p.repositionBackground=function(a,e){switch(v=parseInt(a.css("padding-left").replace("px","")),w=parseInt(a.css("padding-right").replace("px","")),h=parseInt(a.css("padding-top").replace("px","")),f=parseInt(a.css("padding-bottom").replace("px","")),k=(e[1]-a.outerHeight())/2,b=(e[0]-a.outerWidth())/2,p.opts.parallaxDirection){case"up":case"down":_=-v,j=-(k+h),T=0;break;case"left":case"right":_=-(b+v),j=-h,T=0}return[_,j,T]},p.adjust=function(){s=p.getElementSize(D),c=p.repositionBackground(D,s),l.css({width:s[0],height:s[1],transform:"translate3d("+c[0]+"px, "+c[1]+"px, "+c[2]+"px)"})},p.move=function(){q=S.scrollTop()-I,m=q*(parseFloat(p.opts.parallaxSpeed)/4),"up"===p.opts.parallaxDirection&&(u+=-m,g="translate3d("+c[0]+"px, "+u+"px, "+c[2]+"px)"),"down"===p.opts.parallaxDirection&&(u+=m,g="translate3d("+c[0]+"px, "+u+"px, "+c[2]+"px)"),"left"===p.opts.parallaxDirection&&(u+=m,g="translate3d("+u+"px, "+c[1]+"px, "+c[2]+"px)"),"right"===p.opts.parallaxDirection&&(u+=-m,g="translate3d("+u+"px, "+c[1]+"px, "+c[2]+"px)"),B.visible(!0)&&l.css({width:s[0],height:s[1],transform:g}),I=S.scrollTop()},p.destroy=function(){D.remove(),l.remove(),B.removeData("parallaxBackground")},p.init()},a.fn.parallaxBackground=function(e){return this.each(function(){if(a.fn.parallaxBackground.destroy=function(){void 0!==t&&(a(this).data("parallaxBackground").destroy(),a(this).removeData("parallaxBackground"))},void 0===a(this).data("parallaxBackground")){var t=new a.parallaxBackground(this,e);a(this).data("parallaxBackground",t)}})})}(jQuery,window,document);
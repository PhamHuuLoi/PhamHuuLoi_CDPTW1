try{
    var resizedd=0,time_f_arr=[];function calculate_clipped_circle(){$(".clipped-info-circle").each(function(){var i=$(this).data("circle-type"),e=$(this).data("half-percentage"),t=$(this).children().data("responsive-circle");if("on"==t){var r=$(this).children().data("responsive-breakpoint"),n=$(window).width();i=$(this).data("circle-type");if(r<n){var c=$(this).data("first-height");void 0!==c&&""!=c&&$(this).height(c),$(this).width("100%"),make_info_circle(".info-c-full-br",resizedd)}}var o=$(this).find(".info-circle-icons").outerHeight(),s=$(this).find(".info-circle-icons").outerHeight();if("full-circle"!=i){var a=$(this).outerHeight(),l=($(this).outerWidth(),$(this).css("margin-top")),u=$(this).css("margin-bottom"),f=$(this).children().outerWidth(),d=parseInt($(this).find(".info-c-full").css("margin-top").replace(/[^-\d\.]/g,"")),h=parseInt($(this).find(".info-c-full").css("padding-top").replace(/[^-\d\.]/g,""));if("top-circle"==i||"bottom-circle"==i){$(this).css({overflow:"hidden"});$(this).find(".info-c-full").outerWidth(),$(this).find(".info-c-full").width();if("top-circle"==i){var p=e/100*a;$(this).css({"padding-top":l,height:p,"margin-bottom":0});var y=p-d-parseInt(l.replace(/[^-\d\.]/g,""))-h-h/2;$(this).find(".info-c-full-wrap").css({height:y})}else if("bottom-circle"==i){var j=(100-e)/100*a;p=a-j+10;$(this).css({"padding-bottom":u,height:p,"margin-top":0}),$(this).children().css({"margin-top":-(j+o/2)});y=p-d-parseInt(l.replace(/[^-\d\.]/g,""))-h-h/2}}else if("left-circle"==i||"right-circle"==i){$(this).css({overflow:"hidden","padding-top":l,"padding-bottom":u});$(this).find(".info-c-full").outerWidth(),$(this).find(".info-c-full").width();if("left-circle"==i){var Q=e/100*f;$(this).css({width:Q,"padding-left":l}),$(this).children().css({width:f,"max-width":f});var _=Q-d-(h+h/2)-parseInt(l.replace(/[^-\d\.]/g,""));$(this).find(".info-c-full-wrap").width(_)}else if("right-circle"==i){var m=(100-e)/100*f;Q=parseInt(f-m);$(this).css({width:Q,"padding-right":l}),$(this).children().css({"margin-left":-(m+s/2),"max-width":f,width:f});var v=m-d;v=v+parseInt(l.replace(/[^-\d\.]/g,""))-h;_=Q-d-parseInt(l.replace(/[^-\d\.]/g,""))-h;var g=v;$(this).find(".info-c-full-wrap").width(_),$(this).find(".info-c-full-wrap").css({"margin-left":g+"px"})}}}if("on"==t){r=$(this).children().data("responsive-breakpoint");(n=$(window).width())<=r&&$(this).css({width:"auto",overflow:"visible",height:"auto",padding:0})}})}function info_circle_slide(i,r){r.bsf_appear(function(){setInterval(function(){if("on"==r.attr("data-slide-true")){var i=1*r.attr("data-slide-number"),e=r.find(".info-circle-icons").length;"full"!=r.data("info-circle-angle")?e-1==i&&(i=0):e==i&&(i=0);var t=r.find(".info-circle-icons").eq(i);r.attr("data-slide-number",i+1),show_next_info_circle(t)}},i)})}function show_next_info_circle(i){var e=i.parents(".info-c-full-br").data("highlight-style");""!=e&&(i.parents(".info-c-full-br").find("."+e).removeClass(e).removeClass("info-circle-active"),i.addClass(e).addClass("info-circle-active"));var t=i.next(),r=i.parents(".info-c-full-br").data("icon-show-size");"not-show"==i.parents(".info-c-full-br").data("icon-show")&&(t.find("i.info-circle-icon").remove(),t.find("img.info-circle-img-icon").remove(),i.parents(".info-c-full-br").find(".info-c-full").addClass("circle-noicon")),t=t.html();i.css("font-size"),i.attr("style");var n=i.parents(".info-c-full-br");n.find(".info-c-full-wrap").stop().animate({opacity:0},"slow",function(){i.parents(".info-c-full-br").find(".info-c-full .info-c-full-wrap").html(t),n.find(".info-c-full i").css({"font-size":parseInt(r)+"px"}),n.find(".info-c-full .info-circle-img-icon").css({width:parseInt(r)+"px"}),i.parents(".info-c-full-br").find(".info-c-full-wrap").animate({opacity:1},"slow")})}function responsive_check(i){$(i).each(function(){if("on"==$(this).data("responsive-circle")){var i="info-circle-wrapper-"+$(this).parent().data("uniqid"),e="<style>@media(max-width:"+$(this).data("responsive-breakpoint")+"px){ #"+i+" .smile_icon_list_wrap{ display: block; margin-top: auto !important; } #"+i+" .info-c-full-br{ display: none; } .smile_icon_list_wrap { margin-left:auto !important; max-width:inherit !important; width:auto !important; } .info-circle-responsive .info-circle-def { display: block; width: auto; height: auto; } .info-circle-responsive .info-circle-sub-def { display: block; vertical-align: top; } }</style>";$("head").append(e);var s=$(this).parent().find(".smile_icon_list_wrap .smile_icon_list"),a=s.find(".icon_list_item").clone();s.find(".icon_list_item").remove();var l=$(this).next().data("content_bg"),u=$(this).next().data("content_color");$(this).find(".icon-circle-list .info-details").each(function(){var i=$(this).attr("data-icon-class"),e=$(this).find(".info-circle-heading").html(),t=$(this).find(".info-circle-text").html(),r=$(this).prev().css("background-color"),n=$(this).prev().css("color"),c=$(this).prev().css("border"),o=$(this).find(".info-circle-sub-def").children().eq(0).clone();a.find(".icon_list_icon").html(o.wrap("<div />").parent().html()),a.find(".icon_description").css("color",u),a.find(".icon_description").css("background-color",l),a.find(".icon_description h3").html(e),a.find(".icon_description p").html(t),a.find(".icon_list_icon").css({"background-color":r,color:n,border:c}),a.addClass(i),s.append(a.wrap("<div />").parent().html())})}})}function make_info_circle(i,e){$(i).each(function(i,s){var a=$(s).data("icon-size");$($(s).find(".icon-circle-list .info-circle-icons")).each(function(i,e){var t,r,n,c,o;t=$(this).data("padding-style"),c=!!$(e).hasClass("info-circle-icon-without-background")?(r=n=o=a,a/2):null!=t?(r=n=o=a,a/2+t):(r=n=o=2*a,a),$(s).parent().css({"margin-top":c+10+"px","margin-bottom":c+10+"px"}),$(this).css({"font-size":a+"px",height:r+"px",width:n+"px",margin:"-"+c+"px","line-height":o+"px"})})}),".info-c-full-br"==i&&$(i).each(function(){$(this).css("height",$(this).width()),$(this).css("opacity","1")}),".info-c-semi-br"==i&&$(i).each(function(){var i=$(this).width();$(this).css("height",parseInt(i)/2+"px");i=i+"px "+i+"px  0 0";$(this).css("border-radius",i);var e=$(this).find(".info-c-full").width();e=e+"px "+e+"px 0 0",$(this).find(".info-c-full").css("border-radius",e)}),setTimeout(function(){e==resizedd&&(".info-c-full-br"==i&&part_circle_icon(i),".info-c-semi-br"==i&&semi_circle_icon(i))},1e3)}function part_circle_icon(i){$(i).each(function(){$(this).bsf_appear(function(){if("none"!=$(this).css("display")){var i=$(this).find(".icon-circle-list .info-circle-icons").length,e=new Array,t=$(this).outerWidth()/2,r=0,n=$(this).data("start-degree");void 0===n&&""==n||(r=n);var c=180/i,o=$(this).data("info-circle-angle"),s=$(this).data("divert"),a="";"full"==o&&(a=o,o=180,c=90,t=-t);var l=0,u=!1;for(d=1;d<=i;d++){var f=d*((180+2*c)/i);"full"==a?(f<r&&1==d?(l=r-f,u=!1):r<f&&1==d&&(l=f-r,u=!0),1==u?f-=l:f+=l):f=f+o-c+s,f*=.0174532925,e.push(t*Math.cos(f)),e.push(t*Math.sin(f))}var d=0,h=0,p=$(this).data("launch"),y=$(this).data("launch-duration"),j=$(this).data("launch-delay");y||(y=1),j||(j=.15),""!=p?(h=-1e3*j,$(this).find(".icon-circle-list .info-circle-icons").each(function(){var i=$(this);h+=1e3*j,setTimeout(function(){i.animate({opacity:1,left:e[d++],top:e[d++]},{duration:1e3*y,easing:p})},h)})):$(this).find(".icon-circle-list .info-circle-icons").each(function(){$(this).css({opacity:"1",left:e[d++],top:e[d++]})})}})})}$(document).ready(function(){make_info_circle(".info-c-full-br",0),responsive_check(".info-c-full-br"),$(".clipped-info-circle").each(function(i,e){var t=$(this).outerHeight(),r=$(this).outerWidth();$(this).attr("data-first-width",r),$(this).attr("data-first-height",t)}),$(window).resize(function(){make_info_circle(".info-c-full-br",++resizedd),calculate_clipped_circle()}),$(window).load(function(){make_info_circle(".info-c-full-br",++resizedd),calculate_clipped_circle()}),$(document).on("ultAdvancedTabClicked",function(){make_info_circle(".info-c-full-br",++resizedd),calculate_clipped_circle()}),$(".info-c-full-br").each(function(){"click"==$(this).data("focus-on")&&$(this).find(".icon-circle-list .info-circle-icons").click(function(){var i=$(this);$(this).parents(".info-c-full-br").attr("data-slide-true","false"),show_next_info_circle(i)}),"hover"==$(this).data("focus-on")&&$(this).find(".icon-circle-list .info-circle-icons").hover(function(){var i=$(this);$(this).parents(".info-c-full-br").attr("data-slide-true","false"),show_next_info_circle(i)},function(){})}),setTimeout(function(){$(".info-c-full-br").each(function(){var i=$(this).data("slide-duration");i||(i=.2),$(this).attr("data-slide-number","1"),info_circle_slide(1e3*i,$(this)),show_next_info_circle($(this).find(".info-circle-icons").eq(0))})},1e3)}),$(window).load(function(){$(".info-c-full-br").each(function(){"on"==$(this).attr("data-slide-true")&&$(this).hover(function(){$(this).attr("data-slide-true","off")},function(){$(this).attr("data-slide-true","on")})})}),$(document).ready(function(i){$(".icon_list_item").each(function(i,e){var t=$(this);1<=t.find(".info-circle-img-icon").length&&t.closest("ul.smile_icon_list").addClass("ic-resp-img")})});

}
catch(e){console.error("An error has occurred: "+e.stack);}
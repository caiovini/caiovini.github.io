(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{20:function(t,i,e){},27:function(t,i,e){"use strict";e.r(i);var s=e(0),n=e.n(s),o=e(11),h=e.n(o),a=(e(20),e(2)),r=e(3),c=e(14),l=e(13),d=function(){function t(i,e){Object(a.a)(this,t),this.position=i,this.strokeStyle="#AF9B60",this.fillStyle="#AF9B60",this.lineWidth=5,this.speed=10,this.angle=e,this.showing=!0}return Object(r.a)(t,[{key:"getPosition",value:function(){return this.position}},{key:"getRadius",value:function(){return this.lineWidth}},{key:"setShowing",value:function(t){this.showing=t}},{key:"render",value:function(t,i){this.showing&&(this.position.x>i.width||this.position.x<0||this.position.y>i.height||this.position.y<0?this.showing=!1:(this.position.x=this.position.x+Math.sin(this.angle*Math.PI/180)*this.speed,this.position.y=this.position.y-Math.cos(this.angle*Math.PI/180)*this.speed,t.beginPath(),t.arc(this.position.x,this.position.y,1,0,2*Math.PI),t.strokeStyle=this.strokeStyle,t.fillStyle=this.fillStyle,t.lineWidth=this.lineWidth,t.closePath(),t.fill(),t.stroke(),t.restore()))}}]),t}(),u=function(){function t(i){Object(a.a)(this,t),this.radius=i.size,this.lifeSpan=i.lifeSpan,this.interval=i.interval,this.inertia=.98,this.fillStyle="#ffffff",this.lineWidth=2}return Object(r.a)(t,[{key:"render",value:function(t,i,e,s,n){for(var o=this.rotatePoint({x:0,y:-20},{x:0,y:0},(e-180)*Math.PI/180),h=0;h<s;h++){var a={x:i.x+o.x+this.getRandomNumber(-n,n),y:i.y+o.y+this.getRandomNumber(-n,n)};if(this.radius-=this.interval,this.radius<.1&&(this.radius=this.lifeSpan),this.radius<=0)return;t.save(),t.translate(a.x,a.y),t.fillStyle=this.fillStyle,t.lineWidth=this.lineWidth,t.beginPath(),t.moveTo(0,-this.radius),t.arc(0,0,this.radius,0,2*Math.PI),t.closePath(),t.fill(),t.restore()}}},{key:"getRandomNumber",value:function(t,i){return Math.random()*(i-t+1)+t}},{key:"rotatePoint",value:function(t,i,e){return{x:(t.x-i.x)*Math.cos(e)-(t.y-i.y)*Math.sin(e)+i.x,y:(t.x-i.x)*Math.sin(e)+(t.y-i.y)*Math.cos(e)+i.y}}}]),t}(),y=function(){function t(i){Object(a.a)(this,t),this.parms={position:i.position,angle:0,strokeStyle:"#ffffff",fillStyle:"#000000",lineWidth:2,moveTo:{x:0,y:-15},lines:[{x:10,y:10},{x:5,y:7},{x:-5,y:7},{x:-10,y:10}]},this.rotationInertia=0,this.particle=new u({lifeSpan:5,size:5,interval:.1}),this.boost=!1,this.bullets=[]}return Object(r.a)(t,[{key:"rotate",value:function(t){this.rotationInertia="LEFT"===t?-2:2}},{key:"getAngle",value:function(){return this.parms.angle}},{key:"getPosition",value:function(){return this.parms.position}},{key:"getBullets",value:function(){return this.bullets}},{key:"setBoost",value:function(t){this.boost=t}},{key:"shoot",value:function(){var t=new d({x:this.parms.position.x,y:this.parms.position.y},this.parms.angle);this.bullets.push(t)}},{key:"render",value:function(t,i){this.parms.angle+=this.rotationInertia,this.rotationInertia>0&&(this.rotationInertia-=2),this.rotationInertia<0&&(this.rotationInertia+=2),this.boost&&this.particle.render(t,this.parms.position,this.parms.angle,5,10),this.bullets.forEach((function(e){e.render(t,i)})),t.save(),t.translate(this.parms.position.x,this.parms.position.y),t.rotate(this.parms.angle*Math.PI/180),t.strokeStyle=this.parms.strokeStyle,t.fillStyle=this.parms.fillStyle,t.lineWidth=this.parms.lineWidth,t.beginPath(),t.moveTo(this.parms.moveTo.x,this.parms.moveTo.y),this.parms.lines.forEach((function(i){t.lineTo(i.x,i.y)})),t.closePath(),t.fill(),t.stroke(),t.restore()}}]),t}(),p=function(){function t(i){Object(a.a)(this,t),this.parms=[];for(var e=0;e<250;e++)this.parms.push({position:{x:this.getRandomNumber(0,i.width),y:this.getRandomNumber(0,i.height)},strokeStyle:"#ffffff",fillStyle:"#ffffff",lineWidth:this.getRandomNumber(.01,.1)});this.speed=2,this.boost=!1}return Object(r.a)(t,[{key:"getRandomNumber",value:function(t,i){return Math.random()*(i-t+1)+t}},{key:"setBoost",value:function(t){this.boost=t}},{key:"render",value:function(t,i,e){var s=this;this.speed=this.boost?4:2,this.parms.forEach((function(n){n.position.x=n.position.x-Math.sin(i*Math.PI/180)*s.speed,n.position.y=n.position.y+Math.cos(i*Math.PI/180)*s.speed,n.position.x>e.width&&(n.position.x=0),n.position.x<0&&(n.position.x=e.width),n.position.y>e.height&&(n.position.y=0),n.position.y<0&&(n.position.y=e.height),t.beginPath(),t.arc(n.position.x,n.position.y,1,0,2*Math.PI),t.strokeStyle=n.strokeStyle,t.fillStyle=n.fillStyle,t.lineWidth=n.lineWidth,t.closePath(),t.fill(),t.stroke(),t.restore()}))}}]),t}(),f=e(35),b=e.p+"static/media/selfie.d41a3af4.jpeg",m=function(){function t(i){Object(a.a)(this,t),this.position=i.position,this.radius=i.size,this.rotation=2,this.rotationSpeed=2,this.strokeStyle="#FFF",this.vertices=this.asteroidVertices(8,i.size),this.id=i.id,this.particle=new u({lifeSpan:0,size:3,interval:.01}),this.isDestroyed=!1}return Object(r.a)(t,[{key:"asteroidVertices",value:function(t,i){for(var e=[],s=0;s<t;s++)e[s]={x:(-Math.sin(360/t*s*Math.PI/180)+Math.round(2*Math.random()-1)*Math.random()/3)*i,y:(-Math.cos(360/t*s*Math.PI/180)+Math.round(2*Math.random()-1)*Math.random()/3)*i};return e}},{key:"destroy",value:function(){this.isDestroyed=!0}},{key:"isDestroy",value:function(){return this.isDestroyed}},{key:"getRadius",value:function(){return this.radius}},{key:"getPosition",value:function(){return this.position}},{key:"setPosition",value:function(t){this.position=t}},{key:"getId",value:function(){return this.id}},{key:"render",value:function(t){if(this.isDestroyed)this.particle.render(t,this.position,0,10,50);else{this.rotation-=this.rotationSpeed,t.save(),t.translate(this.position.x,this.position.y),t.rotate(this.rotation*Math.PI/180),t.strokeStyle=this.strokeStyle,t.lineWidth=2,t.beginPath(),t.moveTo(0,-this.radius);for(var i=1;i<this.vertices.length;i++)t.lineTo(this.vertices[i].x,this.vertices[i].y);t.closePath(),t.stroke(),t.restore()}}}]),t}(),x=e.p+"static/media/linkedin.cec3bedf.svg",g=e.p+"static/media/xing.2ef2daa4.svg",k=e(1),v=37,j=39,w=38,M=32,I="Linkedin",S="Github",O="Xing",A=function(t){Object(c.a)(e,t);var i=Object(l.a)(e);function e(t){var s;return Object(a.a)(this,e),(s=i.call(this)).state={screen:{width:window.innerWidth,height:window.innerHeight,ratio:window.devicePixelRatio||1},context:null,destroyAsteroid:!1},s.ship=new y({position:{x:s.state.screen.width/2,y:s.state.screen.height/2}}),s.stars=new p(s.state.screen),s.isShooting=!1,s.asteroids=[new m({size:80,position:{x:100,y:s.state.screen.height-100},id:I}),new m({size:80,position:{x:s.state.screen.width-100,y:s.state.screen.height-100},id:S}),new m({size:80,position:{x:s.state.screen.width-100,y:100},id:O})],s.keyLeftPressed=!1,s.keyRightPressed=!1,s}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("keydown",this.handleKeysDown.bind(this,!0)),window.addEventListener("keyup",this.handleKeysUp.bind(this,!0)),window.addEventListener("resize",this.handleResize.bind(this,!1)),this.setState({context:this.refs.canvas.getContext("2d")}),requestAnimationFrame((function(){t.update()}))}},{key:"handleResize",value:function(t,i){var e=this;this.setState({screen:{width:window.innerWidth,height:window.innerHeight,ratio:window.devicePixelRatio||1}}),this.stars=new p(this.state.screen),this.ship=new y({position:{x:this.state.screen.width/2,y:this.state.screen.height/2}}),this.asteroids.forEach((function(t){switch(t.getId()){case I:t.setPosition({x:100,y:e.state.screen.height-100});break;case S:t.setPosition({x:e.state.screen.width-100,y:e.state.screen.height-100});break;case O:t.setPosition({x:e.state.screen.width-100,y:100})}}))}},{key:"handleKeysDown",value:function(t,i){i.keyCode===v&&(this.keyLeftPressed=!0),i.keyCode===j&&(this.keyRightPressed=!0),i.keyCode===w&&(this.stars.setBoost(!0),this.ship.setBoost(!0)),this.isShooting||i.keyCode===M&&(this.ship.shoot(),this.isShooting=!0)}},{key:"handleKeysUp",value:function(t,i){i.keyCode===w&&(this.stars.setBoost(!1),this.ship.setBoost(!1)),i.keyCode===M&&(this.isShooting=!1),i.keyCode===v&&(this.keyLeftPressed=!1),i.keyCode===j&&(this.keyRightPressed=!1)}},{key:"update",value:function(){var t=this,i=this.state.context;i.save(),this.keyLeftPressed&&this.ship.rotate("LEFT"),this.keyRightPressed&&this.ship.rotate("RIGHT"),i.fillStyle="#000",i.globalAlpha=.4,i.fillRect(0,0,this.state.screen.width,this.state.screen.height),i.globalAlpha=1,this.ship.render(i,this.state.screen),this.stars.render(i,this.ship.getAngle(),this.state.screen);var e=this.ship.getBullets();this.asteroids.forEach((function(s){s.render(i),e.forEach((function(i){t.checkCollision({position:i.position,radius:i.getRadius()},{position:s.getPosition(),radius:s.getRadius()})&&(i.setShowing(!1),s.destroy(),t.setState({destroyAsteroid:!0}))}))})),i.restore(),requestAnimationFrame((function(){t.update()}))}},{key:"checkCollision",value:function(t,i){var e=t.position.x-i.position.x,s=t.position.y-i.position.y;return Math.sqrt(e*e+s*s)<t.radius+i.radius}},{key:"render",value:function(){var t=[];return this.asteroids.forEach((function(i){if(i.isDestroy())switch(i.getId()){case I:t.push(Object(k.jsx)("a",{href:"https://www.linkedin.com/in/caiovinireis/",target:"_blank",rel:"noreferrer",children:Object(k.jsx)("img",{className:"badges linkedin",src:x,alt:"Linkedin"})},I));break;case S:t.push(Object(k.jsx)("a",{href:"https://github.com/caiovini",target:"_blank",rel:"noreferrer",children:Object(k.jsx)("img",{className:"badges github",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2QlVUZfllYUBe2YCuQFNel9Q9EcVEQSA3xB2pTSVcESjELnZomBW0ya5w0m1GyzKSmtEYDc6hGohRDrUGQZUko0EARCAXK+FEwXFz2yvY+fO/d+fbu/fm++533+7n3PDPPwC6Xc77zPvc7P+95z3t6dHR0kEXpoleJtGMwcwTzE8w6Zi1zELNG2JfZJ+P/tDEPMPcK32JuY25lbmauZ/476YbpkcA3+BjmucxxwlHMAUp1vc18ifmisJnZagU2jyHMKcxJzPOzvI1hAW/9MuYS5pPMN6zAxeNjzOnMq5mjY/qMLcyFzPnMXVZgb7iQOYt5ObMyIT1hO/MPzJ8xn7cCZ5/sTWXeKpOlJAOTs/uYTzBT5S4whJ3BvIM5tMRWKFuYd0v3nSpHgT/NnMs8pcSXoq8xZzOfKheBT2I+wLy0zHwOzzC/LoKHhooQ68KE6XYZo8pNXJI2rxMbVJbaG3wa83HmGWRBIvQ05oakv8E9mF9hrrHidsEZYpOvio0S+QbD//tL5lVWz7z4HXMmOX7xxAhcz1wkXbNFYWxkXsZ8PQld9HjmKiuuL5wqNhsfd4GbyHHVDbCa+cYAsV1TXAXGOPIbZm+rVdHoLTa8Pm4C3yQTqgqrkRFNHhGbxmKSNVPEtTCPLwa1bVCBm6RLsW+uDg4zryFnzzl0gcfLpMCOubo4RM4e+YowBa6Xab2dLYcDxIaNKWadXIzA8FCtlrWbRXiAM+Qc8unx8jt2wm/6KytuJDhVbN9DU2BsHFwZ8EH3keNof1n+XurYJ21Fm/cHLOtK0UCli4brcS0FD1n9DHWNbjhOJhHYL4U/9uiEC3qQnAC8Z2QSusP1b43MxQHLR+huA/OfJgXGBvXfKPiWHyYLOHHQnuPfq8mJ0UJUZdKC7/CWIqoSMVjv5rHjf5n9A9aF/eSz89jRdxd9G5nZz11S4KFgmHlSF4LcWxIg7Gp51hHy7O/m+Wy72CAoYJ9vmBqDT2Z+25AxXvDxWXRxOKLyOXLOC8UNW2VMHCPP6hXLDdV/h2gTuIv+M/NiQw/VIOO4X2DcnyNftFxzgDdkXHqVuZOcg2MgDpa9J2Njm6s8jPVV5BxOGyz8ODlRnsOYJ+QZA+9h3st8v0gbvGTInkuZlwQRGKGtfzL0MO1i0PYAZcDBAkf8cOZK6RGWy/hnOiIC6/3TyfHYnUfOQTd8gW6gYJGRlfKFMxV4lzlp9SxwL2nQSYYe5M08b4XftTh4OOQuOT2cmah3u6weTOB1WeGk/I7BMwyKC7xlqJyOCMRNC2uq3v8YfK560crXJKtSBnHT60MLB6bPGEOr3n4ExkGwoVaHxABaXe1H4DkKD3GU1aETGt66W70KPJF0vEgnWF07MUShzNNFu4IC36jUqIHMflbbIzYYqFT2TYUERtqEzypVjqXNWVbfIzbQOq7SKBrmFHgG6Z58m2j1VbVBZeaSKVPgJuXGNVp91W3QlEtgJBDTzmZzt9VX3Qaj3Utct8CXK1d8Fzkn6codsMF3leu4LJvAkxQrXBVCo5KEu8QmWpjcObOVzQakB0S0hUYGuQ9kjbbR6toF2JbELphGvlBsaSKkuTX9Bo8jvfSAD1lxs+JVsY0G+oimnV30WKWKsCH+PatlTtxDxQUNeMFYt8DjlCr5NcU0h2NMsEtspIFx7jF4L+kcQ8GUfbXVMS9wWkEjuBBzqhoIjDikHQoVbCW75egVW8QPYRrHoYvWij9+2urmGUuUyh0BgeuVCl9hdYvcVvUQuFapcDv2Rm+rWi2BERr7ptXNM2CrlJbAgxQKRljoB1Y3z4C4OxXKHQSBaxQK/p/VzDc0jtLWaAm83+rlGwe0BNaIk+pp9fINjU2HfhBYI0tOX6uXb2iEFffWym9VZfXyjWqNQrUEtrmzYmIz+KI1EkYfki7HXm3q/UXDtmGlRsEppW/jYKubZwwmnXDlVIXikuZEq5tn1CmVu7+C9HJV1VndIn8Z9kHg3UqFj7K6ecbZSuXuhsA7lQofa3WL3FY7NQU+k5xwXIvCPoMRmgJvVioc7soJVr+CmEB6rt3NEHiT4sNPsfoVxBWKZW+CowPpfLYrVYBtQ+w3t1odswJDGLIPaR2MPx5vMCIq9ypVgAefbnXMiemK4iJsdkfaF71GsRG3kL20Ixt6iW20cCRdYtrwKxUrwiGra62e3fB50r39vNkt8IvKjcEZnGqraSeqxSaaWOEWGD+0KVaGidb9VtdO/Ih0gh3TaMsUGFtVy5UbhVu8plltjyRJmalcx3LRtMvk548hNO5hcpJ8lytw4u/nIdTTmQLanU4Ymei2hVA5Ut4jwXhLmYmLk5ZLQ5qL1JKTIL3LG4xfhHHcpFoaenEZiYv8J8+GJO7qtLiUZX26IMRZJE7U3UmlHWKLtiFt0lMUXhrHx90/ZGZ8/yg5u0uVIRoBSzRc9rSuxMRFysJ5pJ97zA2cCYPreVeuNxib/4simHjAk/YT0snCGjYQnfELcjxJo0OuexFlpMzIdmfDBcy/+ii0WWZtKBjZArB5jS2wXkV+AzFM/JSSdfwUyUU/SU6m3qYIh50JmdrlupQDV9+M9FAgbg/5EHU/SYiu/mbmbCo+3hepl56QL8/fKX4huD1lyYekY1Mp+iBDDHFndvvm5RAYi3Gv2V9uZ34/y0IbnpTH5I0cGfDhcR3cC9Jb4Iq9Vyj8iy0xtuE6n1HSS0HcD8foCwff9nyvAqN7RaIur0lUHiDnqrU215pvgMyUEZKykFzp9QwB25xbZD39TTJ/Ewsmmj+WttRJTxVXwA7YuOge4w6Bc/DaDn/YyByZUcYVzGXMY+VP0ziQpU6TbGC+3xF/XJerDfkaV8Fc77OiVuYlrjKGMXczJzFrmNsNN2yWorhpfi3m4r4sWmV9/kJX28ED4zcdEu5HQlbzbHvMkynPNWxFTCrOIv1LsjCZQtLQuN56PpnypGEqFGmxhPzfXYgrY35PXe8OqBJXHcaIRw017D4K5wY0rBDujam4T1OBHFtebh/FRAt3GPrNRovdqfQFH8fIpAj37OG2TORKPjlAwxDMN5DCu02trziB4nT3Eya0w2SCRcW+wekZ2neKeIBG18y5VTxWt8nyppGCBdz/hcK9Ku+A1Bkn3FlIXK8CA/dTcXfe/sBVBxwXy6S7xloSV9duKLJxKyMwaJwy98G1O9fLB70KnBLnh9+35hTqfssI7uPFjseD5By6wpfgkI8yEai/NAKjxiWp+UHRImVSYOA1cT/6xeyMn58jJ7LjoHTdc8TN9y1ydpYyg+T3iGcM9xyMkS/NPyIw7LaYCHyzOKG8oYh14fwi1mrn5invROazzAeZR8nv+jOHMPu5PjeKOZd5fghr32ysjcGad4Hf5y6moVXMdT4frJnZM0d5dcw98rkG+d158rsNIjZ+t1Y+Mz8igT8SsbhwOvX1+9zFnDh4T5Y/fg6Oj5FZXzYgcfjx5ISRrnGNM0jQ+S+Xfxt3AV3KvD6irjEVYbe8R2zuOxuel3VwLmA35XnydxcuIjfmUTKBnaN3IppUTSx25RDkzBC27qb69CY9JNP7ygQKHMUzw7bTgiwLgx4KW8z8gk+RMatGQMFFCRO4KgJxYdtAIVQmTv0tkHHRj8jDZS2Lvdwbyd8xjmOp9JOdwpazyECUa5AxOBM46/pYgC8N3G6vyHpzn6yHEeuEdMfYuKgl54o8BBL0p/AjOmpl0hfWm2skhNlkCls8EJKqLfQ58UpjKHmPIOlTom/uQZnXLDZVoOmD2dha/BTp33Z2dAmKC5tdaFJcDYFJxtVzInInJhXrxWbNpgvWSq2AszHYVHjUalcQiF4dS67zREkQGIDH6zrmDfJ3i+72+ZJMqNTsE0ZylEfICchusZp2GcYQT/awdkVhZb9BNj1EdNxC4UZixHGWPEdssSmMCsNMb4TgtR+SE534ZBmKizafRk6AQ2iXhkWRvwqTiSmyJFhbBsLiXNVF0uZtYVceZYIyBLEhNusa8h8Ok4SUTBulbWjjc1E9RNQZ6OAnxQlC+KZx7HKVx//3dgTP6jXNVIu0Zbi07XCUBjbpizYFBAekz9lm81itoeiyySOytCGH+L8l51zzyjgZM44Cp4EN9qvI2cRAcAE2HnC4+ctaTgEPqCXn9P4F8maix1kg4r4TRyPGWWCLEhiDLZTxfwEGAIg2ItsKhKpcAAAAAElFTkSuQmCC",alt:"Github"})},S));break;case O:t.push(Object(k.jsx)("a",{href:"https://www.xing.com/profile/CaioVinicius_NascimentoReis",target:"_blank",rel:"noreferrer",children:Object(k.jsx)("img",{className:"badges xing",src:g,alt:"Xing"})},O))}})),Object(k.jsxs)("div",{children:[t,Object(k.jsxs)("span",{className:"avatar",children:[Object(k.jsx)(f.a,{alt:"Caio Vinicius",src:b,sx:{width:180,height:180}}),Object(k.jsx)("br",{}),"Salute,",Object(k.jsx)("br",{})," My name is Caio, I am",Object(k.jsx)("br",{})," a software engineer from Brazil.",Object(k.jsx)("br",{}),"Please, hit the meteors to reveal",Object(k.jsx)("br",{})," my social media links and feel free",Object(k.jsx)("br",{}),"to have a look at my personal projects."]}),Object(k.jsxs)("span",{className:"controls",children:["Use [\u2190][\u2191][\u2192] to MOVE",Object(k.jsx)("br",{}),"Use [SPACE] to SHOOT"]}),Object(k.jsx)("canvas",{ref:"canvas",width:this.state.screen.width,height:this.state.screen.height})]})}}]),e}(s.Component);h.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(A,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.72a33237.chunk.js.map
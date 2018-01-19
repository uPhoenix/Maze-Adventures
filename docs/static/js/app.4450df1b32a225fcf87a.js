webpackJsonp([1],{"/Q81":function(t,e){},MmRC:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"heroDelete",function(){return T}),n.d(a,"heroMove",function(){return O}),n.d(a,"heroDraw",function(){return D}),n.d(a,"getBoxInventory",function(){return U}),n.d(a,"pickItem",function(){return V}),n.d(a,"winGame",function(){return j}),n.d(a,"notWinGame",function(){return q});var i={};n.d(i,"draw",function(){return P}),n.d(i,"move",function(){return Q}),n.d(i,"del",function(){return J}),n.d(i,"saveNewState",function(){return K}),n.d(i,"removeSavedState",function(){return X}),n.d(i,"hideOrShowItemWindow",function(){return Z}),n.d(i,"hideOrShowInventory",function(){return tt}),n.d(i,"createNewState",function(){return et}),n.d(i,"drawItemInInventory",function(){return nt}),n.d(i,"CalculateItems",function(){return at}),n.d(i,"checkingWaightBag",function(){return it}),n.d(i,"trueWin",function(){return rt}),n.d(i,"falseWin",function(){return st});var r={};n.d(r,"mapGetter",function(){return ot}),n.d(r,"drowBoxInventory",function(){return ct}),n.d(r,"itemGetter",function(){return ut});var s=n("7+uW"),o=n("NYxO"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},u=n("VU/8")({name:"app"},c,!1,function(t){n("sj/G")},null,null).exports,l=n("/ocq"),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h2",{staticClass:"text-big text-gray"},[t._v("Maze Adventures")]),t._v(" "),n("div",[n("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/game"}},[t._v("New Game")])],1),t._v(" "),n("div",[n("router-link",{staticClass:"button button-huge block-mobile resume button-red",attrs:{to:"/game"}},[t._v("Resume")])],1),t._v(" "),n("div",[n("router-link",{staticClass:"button button-huge block-mobile ",attrs:{to:"/save"}},[t._v("Save Game")])],1),t._v(" "),n("div",[n("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/load"}},[t._v("Load Game")])],1),t._v(" "),n("div",[n("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/developers"}},[t._v("Developers")])],1)])},staticRenderFns:[]},v=n("VU/8")({name:"MainMenu",created:function(){this.$store.dispatch("notWinGame")}},m,!1,function(t){n("uujG")},"data-v-052e7423",null).exports,d=n("mvHQ"),h=n.n(d),f={created:function(){var t=this;window.addEventListener("keydown",function(e){var n=t.$store.state.hero,a=t.$store.state.terran,i=t.$store.state.cantWalk,r=t.$store.state.pickableItems,s=t.$store.state.itemsToWin;switch(e.keyCode){case 40:if(i.includes(a[n.x+1][n.y]))return;t.$store.dispatch("heroMove",{x:n.x+1,y:n.y});break;case 38:if(i.includes(a[n.x-1][n.y]))return;t.$store.dispatch("heroMove",{x:n.x-1,y:n.y});break;case 39:if(i.includes(a[n.x][n.y+1]))return;t.$store.dispatch("heroMove",{x:n.x,y:n.y+1});break;case 37:if(i.includes(a[n.x][n.y-1]))return;t.$store.dispatch("heroMove",{x:n.x,y:n.y-1});break;case 13:s.includes(a[n.x][n.y])&&(t.$store.dispatch("winGame"),t.$router.push({name:"DevelopersScreen"})),r.includes(a[n.x][n.y])&&t.$store.dispatch("pickItem")}})},computed:{drawMap:function(){return this.$store.getters.mapGetter},hero:function(){return this.$store.state.hero}},data:function(){return{img:this.$store.state.hero.img}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.drawMap,function(e,a){return n("div",t._l(e,function(e,i){return n("li",{class:e.class,attrs:{id:e.id}},[t.hero.x===a&&t.hero.y===i?n("img",{attrs:{src:t.img}}):t._e()])}))}))},staticRenderFns:[]},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inventory"},[n("ul",{staticClass:"inventory-maine"},t._l(t.drowBoxInventory,function(e){return n("li",t._l(e,function(e){return n("div",{class:"section  "+e.class,on:{mouseenter:function(n){t.getInformationItem(e.val)},mouseleave:t.cleanItemInfo}})}))})),t._v(" "),n("div",{staticClass:"text-medium text-gray background-dark inventory-box"},[t._v("\n        You have:"+t._s(this.$store.state.totalWeight)+" /"+t._s(this.$store.state.herroWeight)+" kilo\n    ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.fullBag,expression:"this.$store.state.fullBag"}],class:t.classObject},[t._v(t._s(t.messege)+" ")]),t._v(" "),n("p",{class:t.classInfo},[t._v(t._s(t.itemInfo.text)+" "),n("br"),t._v(" "+t._s(t.itemInfo.weigth)+" ")])])},staticRenderFns:[]},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"over"},[e("div",{staticClass:"text-huge text-white text-with-subtitle under"},[this._v("Congratilations you find "+this._s(this.item.name)+"\n    "),e("div",{staticClass:"picture",class:this.item.class}),this._v("\n    Weight: "+this._s(this.item.weight)+"\n  ")])])},staticRenderFns:[]},x={name:"GameScreen",components:{GameTerran:n("VU/8")(f,p,!1,function(t){n("f6Io")},"data-v-14c63653",null).exports,Inventory:n("VU/8")({data:function(){return{inventory:this.$store.state.inventory,messege:"Your bag will be is full! Try to find item with less weight",itemInfo:"",classObject:{"text-medium":!0,"inventory-box":!0,"badge-error":!0},classInfo:{"text-medium":!0,"inventory-box":!0,"text-primary":!0}}},methods:{getInformationItem:function(t){return this.itemInfo={text:this.$store.state.items[t].info,weigth:" Weight  "+this.$store.state.items[t].class+" is: "+this.$store.state.items[t].weight+" kg!"}},cleanItemInfo:function(t){return this.itemInfo=""}},computed:{drowBoxInventory:function(){return this.$store.getters.drowBoxInventory}}},g,!1,function(t){n("dYky")},"data-v-01f6d7f2",null).exports,ItemsWindow:n("VU/8")({computed:{item:function(){return this.$store.getters.itemGetter}}},y,!1,function(t){n("/Q81")},"data-v-2c028342",null).exports},methods:{getBoxInventory:function(t){return this.$store.dispatch("getBoxInventory")},quickSave:function(t){120===t.keyCode&&localStorage.setItem("quickSave",h()(this.$store.state)),118===t.keyCode&&this.$store.commit("createNewState","quickSave")}},created:function(){var t=this;window.addEventListener("keyup",this.quickSave),window.addEventListener("keyup",function(e){switch(e.keyCode){case 27:t.$router.push({name:"MainMenu"})}}),window.removeEventListener("keyup",event)},computed:{itemsWindow:function(){return this.$store.state.itemsWindow}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section demo-main"},[e("div",{staticClass:"section background-dark"},[e("div",{staticClass:"container text-center"},[e("h3",{staticClass:"text-huge text-white text-with-subtitle"},[this._v("We can be heroes")]),this._v(" "),e("h4",{staticClass:"text-big text-gray"},[this._v("just for one day")]),this._v(" "),e("GameTerran"),this._v(" "),e("items-window",{directives:[{name:"show",rawName:"v-show",value:this.itemsWindow,expression:"itemsWindow"}]})],1)]),this._v(" "),e("div",{staticClass:"rightcol align-left"},[e("div",{staticClass:"menu-bord ",attrs:{"v:onkeyup.esc":"backTomainMenu"}},[e("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/"}},[this._v("back to main menu")])],1),this._v(" "),e("button",{staticClass:"button button-huge block-mobile",on:{click:this.getBoxInventory}},[this._v("Inventory")]),this._v(" "),e("Inventory",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.openInventory,expression:"this.$store.state.openInventory"}]})],1)])},staticRenderFns:[]},w=n("VU/8")(x,_,!1,function(t){n("MmRC")},"data-v-2abd453c",null).exports,b={name:"SaveScreen",data:function(){return{name:"",dataSave:""}},methods:{save:function(){""!==this.name&&""!==this.dataSave&&(this.$store.commit("saveNewState",this.name),this.keyNames.push(this.name),this.name="",this.dataSave="")},remove:function(t){this.$store.commit("removeSavedState",t),this.keyNames.splice(this.keyNames.indexOf(t),1)}},beforeCreate:function(){for(var t=[],e=0;e<localStorage.length;e++){"quickSave"!==localStorage.key(e)&&t.push(localStorage.key(e))}this.keyNames=t}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section container"},[n("h2",{staticClass:"text-gray title-save-load-menu"},[t._v("Save Game")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"input-save-group col-xs-6 col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"description-save input full-width",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-save-group col-xs-6 col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSave,expression:"dataSave"}],staticClass:"data-save input full-width",attrs:{type:"text ",placeholder:"Data"},domProps:{value:t.dataSave},on:{input:function(e){e.target.composing||(t.dataSave=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-xs-12 "},[n("table",{staticClass:"table save-table"},[t._m(0),t._v(" "),n("tbody",t._l(t.keyNames,function(e){return n("tr",[n("td",[t._v(" "+t._s(e))]),t._v(" "),n("td",[t._v(" 13.08.2018")]),t._v(" "),n("td",[n("button",{staticClass:"button button-red button-small block-mobile remove-btn",on:{click:function(n){t.remove(e)}}},[t._v("remove")])])])}))])]),t._v(" "),n("div",{staticClass:"col-xs-12"},[n("button",{staticClass:"button button-primary button-big block-mobile save-btn ",on:{click:t.save}},[t._v("Save")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{staticClass:"text-medium align-center"},[e("th",[this._v("description")]),this._v(" "),e("th",[this._v("Date")]),this._v(" "),e("th",[this._v("remove")])])])}]},C=n("VU/8")(b,k,!1,function(t){n("YK+W")},"data-v-18aa6784",null).exports,I={name:"LoadScreen",data:function(){return{key:"",date:"13.01.2018"}},methods:{chooseLoader:function(){var t=event&&event.target||event.srcElement;if(t.parentNode.classList.contains("keyName")){for(var e=t.parentNode.parentNode.children,n=0;n<e.length;n++)e[n].classList.contains("choose")&&e[n].classList.remove("choose");t.parentNode.classList.add("choose")}},getLoad:function(t){var e="";if("button"===t.target.tagName.toLowerCase()){for(var n=document.querySelector("tbody").children,a=0;a<n.length;a++)n[a].classList.contains("choose")&&(e=n[a].firstElementChild.innerText);this.$store.commit("createNewState",e),this.$router.push({name:"GameScreen"})}},getRemove:function(t){var e=document.querySelector("tbody"),n=t.target.parentNode.parentNode,a=n.firstElementChild.innerText;localStorage.removeItem(a),e.removeChild(n)}},beforeCreate:function(){for(var t=[],e=0;e<localStorage.length;e++)t.push(localStorage.key(e));t.shift(),this.keyNames=t},created:function(){}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section container"},[n("h2",{staticClass:"text-gray title-save-load-menu"},[t._v("Load Game")]),t._v(" "),n("table",{staticClass:"table save-table"},[t._m(0),t._v(" "),n("tbody",{on:{click:t.chooseLoader}},t._l(t.keyNames,function(e){return n("tr",{staticClass:"keyName"},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(t.date))]),t._v(" "),n("td",[n("button",{staticClass:"button button-red button-small block-mobile remove-btn",on:{click:t.getRemove}},[t._v("remove")])])])}))]),t._v(" "),n("div",{staticClass:"col-xs-12"},[n("button",{staticClass:"button button-primary button-big block-mobile save-btn",on:{click:t.getLoad}},[t._v("Load")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{staticClass:"text-medium align-center"},[e("th",[this._v("Name Loading")]),this._v(" "),e("th",[this._v("Date")]),this._v(" "),e("th",[this._v("Remove")])])])}]},$=n("VU/8")(I,S,!1,function(t){n("W1o+")},"data-v-031a8182",null).exports,W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section background-dark"},[e("div",{staticClass:"container text-center"},[e("h3",{directives:[{name:"show",rawName:"v-show",value:this.gameWinned,expression:"gameWinned"}],staticClass:"text-huge text-white text-with-subtitle"},[this._v("CONGRATULATIONS YOU WIN THE GAME")]),this._v(" "),e("h3",{staticClass:"text-huge text-white text-with-subtitle"},[this._v("DEVELOPERS")]),this._v(" "),e("h4",{staticClass:"text-big text-gray"},[this._v("Nadia Bilozerova")]),this._v(" "),e("h4",{staticClass:"text-big text-gray"},[this._v("Andrii Marchenko")]),this._v(" "),e("h4",{staticClass:"text-big text-gray"},[this._v("Andrii Panaseiko")]),this._v(" "),e("div",{staticClass:"menu-bord"},[e("router-link",{staticClass:"button button-huge block-mobile",attrs:{to:"/"}},[this._v("back to main menu")])],1)])])},staticRenderFns:[]},N=n("VU/8")({name:"DevelopersScreen",computed:{gameWinned:function(){return this.$store.state.gameWinned}}},W,!1,null,null,null).exports;s.a.use(l.a);var G=new l.a({routes:[{path:"/",name:"MainMenu",component:v},{path:"/game",name:"GameScreen",component:w},{path:"/save",name:"SaveScreen",component:C},{path:"/load",name:"LoadScreen",component:$},{path:"/developers",name:"DevelopersScreen",component:N}]}),E=n("Xxa5"),M=n.n(E),L=n("exGp"),B=n.n(L),R=this,T=function(){var t=B()(M.a.mark(function t(e){var n=e.state,a=e.commit;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("del",{type:"terran",xy:n.hero});case 1:case"end":return t.stop()}},t,R)}));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=B()(M.a.mark(function t(e,n){var a=e.commit;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("move",{type:"hero",xy:{x:n.x,y:n.y}});case 1:case"end":return t.stop()}},t,R)}));return function(e,n){return t.apply(this,arguments)}}(),D=function(){var t=B()(M.a.mark(function t(e){var n=e.state,a=e.commit;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("draw",{type:"terran",xy:n.hero});case 1:case"end":return t.stop()}},t,R)}));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=B()(M.a.mark(function t(e){e.state;var n=e.commit;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n("hideOrShowInventory");case 1:case"end":return t.stop()}},t,R)}));return function(e){return t.apply(this,arguments)}}(),F=function(t){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++)if(" "===t[e][n])return{x:e,y:n}},V=function(){var t=B()(M.a.mark(function t(e){var n=e.state,a=e.commit;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("hideOrShowItemWindow"),n.itemsWindow||(a("checkingWaightBag",n.terran[n.hero.x][n.hero.y]),n.fullBag||(a("drawItemInInventory",{type:"inventory",xy:F(n.inventory),item:n.terran[n.hero.x][n.hero.y]}),a("CalculateItems",n.terran[n.hero.x][n.hero.y]),a("del",{type:"terran",xy:n.hero})));case 2:case"end":return t.stop()}},t,R)}));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=B()(M.a.mark(function t(e){e.state;var n=e.commit;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n("trueWin");case 1:case"end":return t.stop()}},t,R)}));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=B()(M.a.mark(function t(e){e.state;var n=e.commit;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n("falseWin");case 1:case"end":return t.stop()}},t,R)}));return function(e){return t.apply(this,arguments)}}(),A=n("woOf"),Y=n.n(A),z=n("Gu7T"),H=n.n(z),P=function(t,e){var n=e.type,a=e.xy;t[n][a.x][a.y]="3",t[n]=[].concat(H()(t[n]))},Q=function(t,e){var n=e.type,a=e.xy;t[n].x=a.x,t[n].y=a.y,t.itemsWindow=!1},J=function(t,e){var n=e.type,a=e.xy;t[n][a.x][a.y]=" ",t[n]=[].concat(H()(t[n]))},K=function(t,e){localStorage.setItem(e,h()(t))},X=function(t,e){localStorage.removeItem(e)},Z=function(t){t.itemsWindow=!t.itemsWindow},tt=function(t){t.openInventory=!t.openInventory},et=function(t,e){localStorage.getItem(e)&&Y()(t,JSON.parse(localStorage.getItem(e)))},nt=function(t,e){var n=e.type,a=e.xy,i=e.item;t[n][a.x][a.y]=i,t[n]=[].concat(H()(t[n]))},at=function(t,e){t.totalWeight+=t.items[e].weight},it=function(t,e){t.totalWeight+t.items[e].weight>t.herroWeight?t.fullBag=!0:t.fullBag=!1},rt=function(t){t.gameWinned=!0},st=function(t){t.gameWinned=!1},ot=function(t){return t.terran.map(function(e,n){return e.map(function(e,a){return{id:"x="+n+"-y="+a,class:t.items[e].class}})})},ct=function(t){return t.inventory.map(function(e,n){return e.map(function(e,a){return{id:""+n+a,weight:t.items[e].weight,quantity:1,describe:"some items",class:t.items[e].class,val:e}})})},ut=function(t){return t.items[t.terran[t.hero.x][t.hero.y]]},lt={strict:!0,state:function(){return{cells:[{text:"foo"},{text:"bazz"},{text:"bar"}],hero:{x:1,y:1,img:"https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif"},inventory:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]],cantWalk:["1","0","2"],pickableItems:["4","5","6"],itemsToWin:["7"],itemsWindow:!1,openInventory:!1,herroWeight:60,totalWeight:0,fullBag:!1,gameWinned:!1,items:{" ":{name:"",weight:0,class:""},0:{name:"Tree",weight:0,class:"tree"},1:{name:"Wall",weight:0,class:"wall"},2:{name:"Monster",weight:0,class:"monster"},3:{name:"Hero",weight:1,class:"hero"},4:{name:"Diamond",weight:50,class:"diamond",info:"They are known particularly for their use in jewelry, such as rings or necklaces"},5:{name:"Gold",weight:4,class:"gold",info:"Apples are extremely rich in important antioxidants, flavanoids, and dietary fiber"},6:{name:"Food",weight:1,class:"food",info:"You need only to view the movie Super Size Me to understand how foods impact the body"},7:{name:"Main trasure",weight:0,class:"mainTrasure",info:"If you collect this you win the game"}},terran:[["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1"," ","0","0","0","0","0","0","0","0","0","0"," ","1"," "," "," ","0"," ","1"],["1"," "," "," "," "," "," "," "," "," "," "," ","6","1"," ","0"," ","0"," ","1"],["1"," ","1","4"," ","5","5"," "," "," "," "," "," ","1"," ","0"," ","0","5","1"],["1"," ","1"," "," "," "," ","1","1","1","0","0"," ","1"," ","0"," ","0"," ","1"],["1","2","1"," "," "," ","4"," "," "," "," "," "," ","1"," ","0"," ","0"," ","1"],["1"," ","0"," ","2"," "," "," "," "," "," ","0","4"," "," ","0"," "," "," ","1"],["1"," ","0"," "," "," ","0"," "," ","0"," ","0"," ","1","1","1","1","1","1","1"],["1"," ","0"," "," "," ","0"," ","1"," "," ","0","6"," "," "," ","5"," "," ","1"],["1"," ","1"," "," ","4","0"," ","1","2"," ","0"," "," "," "," "," "," "," ","1"],["1","6","0"," "," "," ","0"," ","1"," ","4","0"," ","0"," "," "," "," "," ","1"],["1"," ","1"," "," "," ","0"," ","1"," "," ","0"," ","0"," "," ","2"," "," ","1"],["1"," ","1","1","1","1","1","1","1","1","1","0"," ","0"," "," ","2"," "," ","1"],["1"," "," "," ","0"," ","0"," ","1"," "," ","0"," ","0"," "," "," "," "," ","1"],["1"," "," "," "," "," "," "," ","1"," "," ","0"," ","0"," "," ","4"," "," ","1"],["1","1","1","1","1","1","1"," ","1"," "," ","0"," ","0"," "," "," "," "," ","1"],["1"," "," "," "," "," ","1"," ","1"," "," ","0"," ","0"," "," "," "," ","6","1"],["1","1","1","1","1"," ","1"," ","1","1","1","1","1","1","1","1"," "," "," ","1"],["1"," "," "," "," "," "," "," ","1","7"," "," "," "," "," "," "," "," "," ","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]}},mutations:i,actions:a,getters:r};s.a.config.productionTip=!1,s.a.use(o.a);var mt=new o.a.Store(lt);new s.a({el:"#app",router:G,store:mt,template:"<App/>",components:{App:u}})},"W1o+":function(t,e){},"YK+W":function(t,e){},dYky:function(t,e){},f6Io:function(t,e){},"sj/G":function(t,e){},uujG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4450df1b32a225fcf87a.js.map
(this["webpackJsonpnorthwind-redux"]=this["webpackJsonpnorthwind-redux"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),l=n(122),o=n(66),s=n(104),u=n(105),d=n(106),p=n(107),m=n(108),h=n(109),E=n(110),f=n(111),k=n(12),g=n(13),b=n(17),v=n(16),y=n(15),C=n(124),D=n(123),O=n(125),j=n(103),I=n(6),w=n(21);function N(){return function(e){fetch("https://the-cocktail-db.p.rapidapi.com/list.php?i=list",{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(t){return e({type:"GET_INGREDIENTS_SUCCESS",payload:t.drinks})}))}}function x(e){return function(t){fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i="+e,{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(e){return t({type:"DRINKS_BY_INGREDIENTS",payload:e.drinks})}))}}var S=n(61),T=n.n(S),R=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).selectIngredient=function(t){e.props.actions.getDrinksByIngredient(t.strIngredient1),T.a.success("Displaying "+t.strIngredient1+" Based Cocktails")},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.getIngredients()}},{key:"render",value:function(){var e=this;return this.props.ingredients.length=5,r.a.createElement(C.a,{nav:!0,inNavbar:!0},r.a.createElement(D.a,{nav:!0,caret:!0},"Ingredients"),r.a.createElement(O.a,{right:!0},this.props.ingredients.map((function(t){return r.a.createElement(w.b,{to:"/DrinksByIngredient",style:{textDecoration:"none"}},r.a.createElement(j.a,{onClick:function(){return e.selectIngredient(t)}},t.strIngredient1))}))))}}]),n}(a.Component);var A=Object(y.b)((function(e){return{ingredients:e.ingredientsReducer}}),(function(e){return{actions:{getIngredients:Object(I.b)(N,e),getDrinksByIngredient:Object(I.b)(x,e)}}}))(R),G=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(s.a,{className:"navbar navbar-dark bg-dark mb-1",light:!0,expand:"md"},r.a.createElement(u.a,{href:"/"},r.a.createElement("h3",null,"Cocktails Store")),r.a.createElement(d.a,{onClick:function(){return i(!c)}}),r.a.createElement(p.a,{isOpen:c,navbar:!0},r.a.createElement(m.a,{className:"mr-auto",navbar:!0},r.a.createElement(h.a,null,r.a.createElement(E.a,{href:"/RandomCocktail"},"Random Cocktail")),r.a.createElement(h.a,null,r.a.createElement(E.a,{href:"/MostLatest"},"Most Latest Cocktails")),r.a.createElement(A,null)),r.a.createElement(f.a,null,"\xa9Cocktail DB"))))},_=n(118),L=n(119);function B(e){return{type:"CHANGE_CATEGORY",payload:e}}function M(){return function(e){fetch("https://the-cocktail-db.p.rapidapi.com/list.php?c=list",{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(t){return e({type:"GET_CATEGORIES_SUCCESS",payload:t.drinks})}))}}function K(e){return{type:"GET_DRINKS_SUCCESS",payload:e}}function U(e){return function(t){e?fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c="+e,{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(e){return t(K(e.drinks))})):fetch("https://the-cocktail-db.p.rapidapi.com/popular.php",{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(e){return t(K(e.drinks))}))}}var z=n(112),H=n(113),Y=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).selectCategory=function(t){e.props.actions.changeCategory(t),e.props.actions.getDrinks(t.strCategory)},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.getCategories()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(z.a,null,r.a.createElement(H.a,{className:"p-3 mb-1 bg-danger text-white text-center"},r.a.createElement("h4",null,"Cocktail Categories"))),r.a.createElement(z.a,null,this.props.categories.map((function(t){return r.a.createElement(H.a,{active:t.strCategory===e.props.currentCategory.strCategory,onClick:function(){return e.selectCategory(t)}},t.strCategory)}))))}}]),n}(a.Component);var J=Object(y.b)((function(e){return{currentCategory:e.changeCategoryReducer,categories:e.categoryListReducer}}),(function(e){return{actions:{getCategories:Object(I.b)(M,e),changeCategory:Object(I.b)(B,e),getDrinks:Object(I.b)(U,e)}}}))(Y),W=n(114),$=n(115),q=n(116),F=n(117);function P(e){return function(t){fetch("https://the-cocktail-db.p.rapidapi.com/lookup.php?i="+e,{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(e){return t({type:"GET_DRINK_SUCCESS",payload:e.drinks})}))}}var Q=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).selectDrink=function(t){e.props.actions.getDrink(t.idDrink)},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.getDrinks()}},{key:"render",value:function(){var e=this;this.props.drinks.length=9;var t=this.props.drinks.map((function(t){return r.a.createElement(w.b,{key:t.idDrink,to:"/DrinkDetail",style:{textDecoration:"none",color:"GrayText"}},r.a.createElement(W.a,{onClick:function(){return e.selectDrink(t)},key:t.idDrink,style:{width:"20.79rem",padding:3}},r.a.createElement($.a,{variant:"top",src:t.strDrinkThumb}),r.a.createElement(q.a,null,r.a.createElement(F.a,{className:"text-center"},r.a.createElement("h4",null,t.strDrink)))))}));return r.a.createElement("div",{className:"container"},r.a.createElement("footer",{className:"row "},r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"row"},t)))}}]),n}(a.Component);var V=Object(y.b)((function(e){return{drinks:e.drinksListReducer}}),(function(e){return{actions:{getDrinks:Object(I.b)(U,e),getDrink:Object(I.b)(P,e)}}}))(Q),X=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(L.a,{xs:"3"},r.a.createElement(J,null)),r.a.createElement(L.a,{xs:"9"},r.a.createElement(V,null))))}}]),n}(a.Component),Z=n(9),ee=n(120),te=n(121),ne=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.getDrink()}},{key:"renderIcon",value:function(){return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-caret-right",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.drink.map((function(t){return r.a.createElement(_.a,null,r.a.createElement(L.a,null,r.a.createElement(W.a,{body:!0,outline:!0,color:"secondary"},r.a.createElement(_.a,{className:"no-gutters"},r.a.createElement(L.a,{md:"4"},r.a.createElement($.a,{top:!0,width:"100%",src:t.strDrinkThumb,alt:"Card image cap"})),r.a.createElement(L.a,{md:"8"},r.a.createElement(q.a,{className:"mt-5"},r.a.createElement(F.a,{className:" h2 mb-2 font-weight-bold"},t.strDrink),r.a.createElement(ee.a,null),r.a.createElement(te.a,null,r.a.createElement("b",null,"Description")," ",r.a.createElement("br",null),e.renderIcon(),t.strInstructions),r.a.createElement(te.a,null,r.a.createElement("b",null,"Alcoholic")," ",r.a.createElement("br",null),e.renderIcon(),t.strAlcoholic),r.a.createElement(te.a,null,r.a.createElement("b",null,"Category")," ",r.a.createElement("br",null),e.renderIcon(),t.strCategory),r.a.createElement(te.a,null,r.a.createElement("b",null,"Ingredients")," ",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,t.strIngredient1),r.a.createElement("li",null,t.strIngredient2),r.a.createElement("li",null,t.strIngredient3)))))))))})))}}]),n}(a.Component);var ae=Object(y.b)((function(e){return{drink:e.drinkDetailReducer}}),(function(e){return{actions:{getDrink:Object(I.b)(P,e)}}}))(ne),re=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).selectDrink=function(t){e.props.actions.getDrink(t.idDrink)},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this,t=this.props.drinks.map((function(t){return r.a.createElement(w.b,{to:"/DrinkDetail",style:{textDecoration:"none",color:"GrayText"}},r.a.createElement(W.a,{onClick:function(){return e.selectDrink(t)},style:{width:"24rem",padding:3}},r.a.createElement($.a,{variant:"top",src:t.strDrinkThumb}),r.a.createElement(q.a,null,r.a.createElement(F.a,{className:"text-center"},r.a.createElement("h4",null,t.strDrink)))))}));return r.a.createElement("div",{className:"container"},r.a.createElement("footer",{className:"row "},r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"row"},t)))}}]),n}(a.Component);var ce=Object(y.b)((function(e){return{drinks:e.drinksByIngredientReducer}}),(function(e){return{actions:{getDrink:Object(I.b)(P,e)}}}))(re);function ie(){return function(e){fetch("https://the-cocktail-db.p.rapidapi.com/random.php",{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(t){return e({type:"RANDOM_COCKTAIL",payload:t.drinks})}))}}var le=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.getDrink()}},{key:"renderIcon",value:function(){return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-caret-right",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Today's Random Cocktail"),this.props.drink.map((function(t){return r.a.createElement(_.a,null,r.a.createElement(L.a,null,r.a.createElement(W.a,null,r.a.createElement(_.a,{className:"no-gutters"},r.a.createElement(L.a,{md:"4"},r.a.createElement($.a,{top:!0,width:"100%",src:t.strDrinkThumb,alt:"Card image cap"})),r.a.createElement(L.a,{md:"8"},r.a.createElement(q.a,{className:"mt-5"},r.a.createElement(F.a,{className:" h2 mb-2 font-weight-bold"},t.strDrink),r.a.createElement(ee.a,null),r.a.createElement(te.a,null,r.a.createElement("b",null,"Description")," ",r.a.createElement("br",null),e.renderIcon(),t.strInstructions),r.a.createElement(te.a,null,r.a.createElement("b",null,"Alcoholic")," ",r.a.createElement("br",null),e.renderIcon(),t.strAlcoholic),r.a.createElement(te.a,null,r.a.createElement("b",null,"Category")," ",r.a.createElement("br",null),e.renderIcon(),t.strCategory),r.a.createElement(te.a,null,r.a.createElement("b",null,"Ingredients")," ",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,t.strIngredient1),r.a.createElement("li",null,t.strIngredient2),r.a.createElement("li",null,t.strIngredient3)))))))))})))}}]),n}(a.Component);var oe=Object(y.b)((function(e){return{drink:e.randomCocktailReducer}}),(function(e){return{actions:{getDrink:Object(I.b)(ie,e)}}}))(le);function se(){return function(e){fetch("https://the-cocktail-db.p.rapidapi.com/latest.php",{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394"}}).then((function(e){return e.json()})).then((function(t){return e({type:"NON_ALCOHOLIC_COCKTAILS",payload:t.drinks})})).then((function(e){return console.log(e)}))}}var ue=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).selectDrink=function(t){e.props.actions.getDrink(t.idDrink)},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.getNonAlcoholicDrinks()}},{key:"render",value:function(){var e=this,t=this.props.drinks.map((function(t){return r.a.createElement(w.b,{to:"/DrinkDetail",style:{textDecoration:"none",color:"GrayText"}},r.a.createElement(W.a,{onClick:function(){return e.selectDrink(t)},style:{width:"24rem",padding:3}},r.a.createElement($.a,{variant:"top",src:t.strDrinkThumb}),r.a.createElement(q.a,null,r.a.createElement(F.a,{className:"text-center"},r.a.createElement("h4",null,t.strDrink)))))}));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Most Latest Cocktails"),r.a.createElement("footer",{className:"row "},r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"row"},t)))}}]),n}(a.Component);var de=Object(y.b)((function(e){return{drinks:e.nonAlcoholicReducer}}),(function(e){return{actions:{getDrink:Object(I.b)(P,e),getNonAlcoholicDrinks:Object(I.b)(se,e)}}}))(ue);var pe=function(){return r.a.createElement(l.a,{fluid:!0},r.a.createElement(G,null),r.a.createElement(Z.c,null,r.a.createElement(Z.a,{path:"/",exact:!0,component:X}),r.a.createElement(Z.a,{path:"/DrinkDetail",exact:!0,component:ae}),r.a.createElement(Z.a,{path:"/DrinksByIngredient",exact:!0,component:ce}),r.a.createElement(Z.a,{path:"/RandomCocktail",exact:!0,component:oe}),r.a.createElement(Z.a,{path:"/MostLatest",exact:!0,component:de})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(100);var me={currentCategory:{},categories:[],drinks:[],drink:[],ingredients:[],drinksByIngredient:[],randomCocktail:[],nonAlcoholic:[]};var he=Object(I.c)({changeCategoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.currentCategory,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CATEGORY":return t.payload;default:return e}},categoryListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.categories,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES_SUCCESS":return t.payload;default:return e}},drinksListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.drinks,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DRINKS_SUCCESS":return t.payload;default:return e}},drinkDetailReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.drink,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DRINK_SUCCESS":return t.payload;default:return e}},ingredientsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.ingredients,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INGREDIENTS_SUCCESS":return t.payload;default:return e}},drinksByIngredientReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.drinksByIngredient,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRINKS_BY_INGREDIENTS":return t.payload;default:return e}},randomCocktailReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.randomCocktail,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RANDOM_COCKTAIL":return t.payload;default:return e}},nonAlcoholicReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.nonAlcoholic,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NON_ALCOHOLIC_COCKTAILS":return t.payload;default:return e}}}),Ee=n(65);n(101);var fe=Object(I.d)(he,Object(I.a)(Ee.a));i.a.render(r.a.createElement(w.a,null,r.a.createElement(y.a,{store:fe},r.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,n){e.exports=n(102)}},[[67,1,2]]]);
//# sourceMappingURL=main.cbc916ad.chunk.js.map
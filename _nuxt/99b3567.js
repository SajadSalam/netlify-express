(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{594:function(t,n,e){"use strict";e.r(n);e(4),e(56);var r=e(23),c=(e(74),{data:function(){return{products:[],loading:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.loading=!0,t.products=t.$store.state.products.list,t.loading=!1;case 3:case"end":return n.stop()}}),n)})))()},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.loading=!0,t.products=t.$store.state.products.list,t.loading=!1;case 3:case"end":return n.stop()}}),n)})))()}}),o=e(73),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"section bg-light",attrs:{id:"pricing"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("client-only",[t.loading?t._e():n("a-carousel",{attrs:{autoplay:!0,responsive:{0:{items:1,nav:!1},600:{items:3,nav:!1}},autoplayTimeout:3e3,nav:!1}},t._l(t.products,(function(e){return n("div",{key:e.id,staticClass:"card pricing pricing-primary business-rate shadow bg-white border-0 rounded mx-2"},[n("div",{staticClass:"card-body text-center"},[n("h5",{staticClass:"card-title text-primary"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"card-body"},[t._v("\n              "+t._s(e.description)+"\n            ")]),t._v(" "),n("h5",{staticClass:"text-primary"},[t._v("\n              "+t._s(e.price)+"\n              - "+t._s(e.duration)+"\n            ")]),t._v(" "),n("hr"),t._v(" "),n("NuxtLink",{staticClass:"btn btn-primary",attrs:{to:"/product/".concat(e.id)}},[t._v("\n              أشتري الآن\n            ")])],1)])})),0)],1)],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 text-center"},[n("div",{staticClass:"section-title mb-4 pb-2"},[n("h4",{staticClass:"title mb-4 aos-init aos-animate",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n            العروض الخاصة بنا\n          ")]),t._v(" "),n("p",{staticClass:"text-muted para-desc mb-0 mx-auto aos-init aos-animate",attrs:{"data-aos":"fade-up","data-aos-duration":"1400"}},[t._v("\n            جميع العروض من\n            "),n("span",{staticClass:"text-primary fw-bold"},[t._v("بوخالد")]),t._v(" التي يمكنك شراءها\n            والدفع اونلاين\n          ")])])])])}],!1,null,null,null);n.default=component.exports}}]);
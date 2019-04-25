(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{167:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("DataHub is born to solving the lifecycle needs of mock/testing data of software development, from development, testing, staging to final production. Software engineers and test engineers use DataHub to manage their mock/testing data.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("DataHub is flexible with how and where mock/testing data is stored.")]),t._v(" "),a("p",[t._v("You can use a local instance of Datahub on your local machine to manage your local testing/mock data during development. The mock/testing data is in plain text. It can be versioned and archived with any version control software, together with your project files.")]),t._v(" "),a("p",[t._v("In addition, the local mock/testing data can be pushed and synchronized to a remote Datahub server to meet the needs of data sharing and collaboration.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("DataHub adopts the principle of unidirectional data flow to make sure you will always get the latest data.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Datahub can also automatically generate an API document from your mock/testing data, to help keep your API document up to date and consistent with your mock data.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("DataHub adopts multi-scenario design, can group data according to the scene name, and provide scene data addition, deletion, and change, and can operate through DataHub's panel interface.")]),t._v(" "),a("p",[t._v("DataHub provides a dashboard for you to manage your data. You can group data by scene, or by stage such as development, testing, or staging. Datahub provides standard CRUD funtions.")]),t._v(" "),a("p",[t._v("Datahub use "),a("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-to-regexp"),a("OutboundLink")],1),t._v(" for dynamic path matching.")]),t._v(" "),a("p",[t._v("API name example:")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("DataHub can save the response of each request by taking snapshot. You can use the archieved snapshot to find out what happened.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("Through the seamless integration of the "),a("a",{attrs:{href:"https://macacajs.github.io/macaca-wd/#switchScene",target:"_blank",rel:"noopener noreferrer"}},[t._v("switchScene(scenario) API"),a("OutboundLink")],1),t._v(" in test cases, higher test coverage can be achieved.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"design-concept"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#design-concept","aria-hidden":"true"}},[this._v("#")]),this._v(" Design concept")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"comprehensive-solution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comprehensive-solution","aria-hidden":"true"}},[this._v("#")]),this._v(" Comprehensive Solution")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086490725-acfac2d7-cf35-487a-969c-808c1f8ade72.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"decentralization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decentralization","aria-hidden":"true"}},[this._v("#")]),this._v(" Decentralization")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086532480-37b7b14f-49c7-49dd-9073-6a8fbd6d4798.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"data-flow-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-flow-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Flow Management")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086545198-c616ab3f-c817-4e0c-a178-4774c800f0b3.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"consistency-between-api-document-and-mock-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consistency-between-api-document-and-mock-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Consistency Between API Document and Mock Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086563101-f3e67f48-fc7a-44ba-89af-006e5806d12f.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"datahub-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datahub-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" DataHub Dashboard")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("DataHub API name")]),t._v(" "),a("th",[t._v("matched request path")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("api1/books")]),t._v(" "),a("td",[t._v("api1/books")])]),t._v(" "),a("tr",[a("td",[t._v("api2/:foo/:bar")]),t._v(" "),a("td",[t._v("api2/group/project")])]),t._v(" "),a("tr",[a("td",[t._v("api3/:id")]),t._v(" "),a("td",[t._v("api3/fred")])]),t._v(" "),a("tr",[a("td",[t._v("api3/:id")]),t._v(" "),a("td",[t._v("api3/baz")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086579826-71b38922-b6f4-40e9-be7f-a530a30ad8ce.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"save-snapshot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#save-snapshot","aria-hidden":"true"}},[this._v("#")]),this._v(" Save Snapshot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086592035-2367cbca-2521-4b10-bfd7-c8fc70577ce1.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"automation-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automation-testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Automation Testing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086605998-4e6c3073-21eb-4100-87e2-e1f15dd4115a.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086618676-859c45b0-bd38-40e0-8886-3d06607ac19d.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/95383/1556086630693-5b7d1828-087f-4c15-85a4-1959f3c4fb3a.png",alt:""}})])}],!1,null,null,null);e.default=r.exports}}]);
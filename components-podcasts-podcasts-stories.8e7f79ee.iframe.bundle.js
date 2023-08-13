/*! For license information please see components-podcasts-podcasts-stories.8e7f79ee.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmedical_information_frontend=self.webpackChunkmedical_information_frontend||[]).push([[1981],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/components/podcasts/podcasts.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return podcasts_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),CardPodcast=__webpack_require__("./src/components/cards/card-podcast/CardPodcast.tsx"),MorePodcast=__webpack_require__("./src/components/cards/more-podcast/MorePodcast.tsx"),podcastData=[{title:"Сердечный выпуск с кардиологом",link:"#",color:"blue_bolt"},{title:"Говорим про вредные привычки",link:"#",color:"american_green"},{title:"Как ухаживать за полостью рта",link:"#",color:"cerise_pink"},{title:"Как правильно прокрастинировать",link:"#",color:"lavender"},{title:"Какие прививки нужны взрослым",link:"#",color:"blue_cola"}],styles_module={podcasts__header:"styles_podcasts__header__TZlm6",podcasts:"styles_podcasts__4l3q3",podcasts__row:"styles_podcasts__row__Mx3Uy",podcasts__links:"styles_podcasts__links__DjmoJ",blue_bolt:"styles_blue_bolt__y6CY4",american_green:"styles_american_green__2eSaQ",cerise_pink:"styles_cerise_pink__9taXi",lavender:"styles_lavender__hD6N+",blue_cola:"styles_blue_cola__KNQtx"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var podcasts_stories={title:"Components/Podcasts",component:function Podcasts(){var podcasts=podcastData.slice(0,5).map((function(podcast,idx){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(CardPodcast.Z,{title:podcast.title,link:podcast.link,extraClass:styles_module[podcast.color]})},idx)}));return(0,jsx_runtime.jsxs)("section",{className:styles_module.podcasts,children:[(0,jsx_runtime.jsx)("h2",{className:styles_module.podcasts__header,children:"Подкасты"}),(0,jsx_runtime.jsxs)("div",{className:styles_module.podcasts__row,children:[(0,jsx_runtime.jsx)("ul",{className:styles_module.podcasts__links,children:podcasts}),(0,jsx_runtime.jsx)(MorePodcast.Z,{title:"Больше подкастов",link:"#"})]})]})},tags:["autodocs"],decorators:[function(Story){return(0,jsx_runtime.jsx)(dist.VK,{children:(0,jsx_runtime.jsx)(Story,{})})}]},Default={};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/cards/card-podcast/CardPodcast.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return card_podcast_CardPodcast}});var icons=__webpack_require__("./src/shared/icons/index.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),CardPodcast_module_title="CardPodcast_title__zp-pk",CardPodcast_module_card="CardPodcast_card__8cP43",CardPodcast_module_link="CardPodcast_link__NatEG",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CardPodcast=function CardPodcast(_ref){var title=_ref.title,link=_ref.link,extraClass=_ref.extraClass;return(0,jsx_runtime.jsx)("article",{className:classnames_default()(CardPodcast_module_card,extraClass),children:(0,jsx_runtime.jsxs)("a",{className:CardPodcast_module_link,href:link,children:[(0,jsx_runtime.jsx)(icons.J,{color:"white",icon:"PodcastIcon",size:"80"}),(0,jsx_runtime.jsx)("h2",{className:CardPodcast_module_title,children:title})]})})},card_podcast_CardPodcast=CardPodcast;try{CardPodcast.displayName="CardPodcast",CardPodcast.__docgenInfo={description:"",displayName:"CardPodcast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},extraClass:{defaultValue:null,description:"",name:"extraClass",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cards/card-podcast/CardPodcast.tsx#CardPodcast"]={docgenInfo:CardPodcast.__docgenInfo,name:"CardPodcast",path:"src/components/cards/card-podcast/CardPodcast.tsx#CardPodcast"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/cards/more-podcast/MorePodcast.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return more_podcast_MorePodcast}});var icons=__webpack_require__("./src/shared/icons/index.tsx"),MorePodcast_module_card="MorePodcast_card__hseel",MorePodcast_module_link="MorePodcast_link__gTFxS",MorePodcast_module_title="MorePodcast_title__n1R7U",MorePodcast_module_icon="MorePodcast_icon__ArCTc",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MorePodcast=function MorePodcast(_ref){var title=_ref.title,link=_ref.link;return(0,jsx_runtime.jsx)("article",{className:MorePodcast_module_card,children:(0,jsx_runtime.jsxs)("a",{className:MorePodcast_module_link,href:link,children:[(0,jsx_runtime.jsx)("h2",{className:MorePodcast_module_title,children:title}),(0,jsx_runtime.jsx)(icons.J,{className:MorePodcast_module_icon,color:"white",icon:"PodcastIcon",size:"80"})]})})},more_podcast_MorePodcast=MorePodcast;try{MorePodcast.displayName="MorePodcast",MorePodcast.__docgenInfo={description:"",displayName:"MorePodcast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cards/more-podcast/MorePodcast.tsx#MorePodcast"]={docgenInfo:MorePodcast.__docgenInfo,name:"MorePodcast",path:"src/components/cards/more-podcast/MorePodcast.tsx#MorePodcast"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
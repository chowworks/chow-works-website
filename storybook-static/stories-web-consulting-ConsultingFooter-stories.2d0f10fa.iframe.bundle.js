"use strict";(self.webpackChunkthe_handsomestnerd_internal=self.webpackChunkthe_handsomestnerd_internal||[]).push([[1526],{"./src/stories/web-consulting/ConsultingFooter.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ConsultingFooter_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),getThemeFromSanity=__webpack_require__("./src/components/customized-theme-provider/getThemeFromSanity.ts"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),WebConsultingThemeData=__webpack_require__("./src/stories/data/WebConsultingThemeData.ts"),ConsultingFooterSectionData={_type:"FooterSection",footerMenuRef:{logoAccentText:".",slug:{current:"chow-works-footer",_type:"slug"},logoText:"Chow Works",title:"Chow Works Footer",subMenus:[{title:"Quick Links",_type:"menuGroup",menuGroupTitle:"Quick Links",links:[{url:"#ANIMATED_ABOUT_US",_type:"menuItem",displayText:"About Us"},{_type:"menuItem",displayText:"Services",url:"#ANIMATED_SERVICES"},{_type:"menuItem",displayText:"Portfolio",url:"#ANIMATED_PORTFOLIO"},{displayText:"Contact Us",url:"#MAP_SECTION",_type:"menuItem"}]}]},name:"Chow Works Footer",backgroundImgSrc:{_type:"image",asset:{_ref:"image-cf05be1b9150feb68f92fe6b3f50fda7bde6b7d3-1920x670-jpg",_type:"reference"}},backgroundColor:"LIGHT_GRAY",topPadding:"56px",isSocialMediaBlock:!0},BlockContent=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@sanity/block-content-to-react/lib/BlockContent.js")),BlockContent_default=__webpack_require__.n(BlockContent),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),sanityClient=__webpack_require__("./src/sanityClient.ts"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),useCommonStyles=(0,__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js").Z)((function(theme){return{layoutContainer:{marginBottom:"32px"},primaryTextColor:{color:theme.palette.primary.main},secondaryTextColor:{color:theme.palette.secondary.main},bold:{fontWeight:700},bodyText:{fontSize:"16px",fontWeight:400,lineHeight:"28px",letterSpacing:"0.5px",color:"#333333",padding:theme.spacing(1,0)},callToAction:{borderTop:"1px solid rgba(0,0,0,.12)",borderBottom:"1px solid rgba(0,0,0,.12)",width:"100%",padding:theme.spacing(3,0)},root:{width:"1050px",padding:"40px",overflow:"visible"},homePageH3:{fontWeight:300},lightWeightFont:{fontWeight:300,letterSpacing:"-1.5px"},boldWeightFont:{fontWeight:700},dropCapLetter:{float:"left",padding:theme.spacing(1),fontSize:"59px",fontWeight:400,lineHeight:"30px",letterSpacing:"0.5px",textTransform:"capitalize"},keystroke:(0,objectSpread2.Z)({display:"inline-flex",alignItems:"center",justifyContent:"center",border:"1px solid #6D6D6D",backgroundColor:"#3D3D3D",color:"whitesmoke",borderRadius:"8px",width:"50px !important",height:"50px !important"},theme.typography.h4),hr:{borderTop:"1px solid rgba(0, 0, 0, 0.12)",borderBottom:"none",borderLeft:"none",borderRight:"none",width:"100%",height:"1px"},bulletIcon:{fontSize:"10px"},bulletIconContainer:{marginTop:theme.spacing(1.5),minWidth:"20px"},orderedListIndex:{marginTop:theme.spacing(-1.25),fontWeight:400,fontStyle:"normal",fontSize:"16px",lineHeight:"28px",letterSpacing:"0.5px"},listItemRoot:{paddingLeft:"8px"}}}));try{useCommonStyles.displayName="useCommonStyles",useCommonStyles.__docgenInfo={description:"",displayName:"useCommonStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/CommonStyles.tsx#useCommonStyles"]={docgenInfo:useCommonStyles.__docgenInfo,name:"useCommonStyles",path:"src/common/sanityIo/CommonStyles.tsx#useCommonStyles"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LightRender=function LightRender(props){var classes=useCommonStyles();return(0,jsx_runtime.jsx)("span",{className:classes.lightWeightFont,children:props.children})},BoldRender=function BoldRender(props){var classes=useCommonStyles();return(0,jsx_runtime.jsx)("span",{className:classes.boldWeightFont,children:props.children})},DropCapRender=function DropCapRender(props){var classes=useCommonStyles();return(0,jsx_runtime.jsx)("span",{className:classes.dropCapLetter,children:props.children})},KeystrokeRender=function KeystrokeRender(props){var classes=useCommonStyles();return(0,jsx_runtime.jsx)("span",{className:classes.keystroke,children:props.children})},TextColorRender=function TextColorRender(props,color){var theme=(0,useTheme.Z)();return(0,jsx_runtime.jsxs)(ThemeProvider.Z,{theme:theme,children:[(0,jsx_runtime.jsx)(CssBaseline.ZP,{}),(0,jsx_runtime.jsx)("span",{style:{color:color},children:props.children})]})},UnderlineRender=function UnderlineRender(props,color){return(0,jsx_runtime.jsx)("span",{style:{textDecoration:"".concat(color," underline")},children:props.children})},NormalRender=function NormalRender(props){var classes=useCommonStyles();return(0,jsx_runtime.jsx)("p",{className:classes.bodyText,children:props.children})},TypographyRender=function TypographyRender(props,variant){return function wrapWithHTag(children){switch(variant){case"h1":return(0,jsx_runtime.jsx)("h1",{children:children});case"h6":return(0,jsx_runtime.jsx)("h6",{children:children});case"h2":return(0,jsx_runtime.jsx)("h2",{children:children});case"h3":return(0,jsx_runtime.jsx)("h3",{children:children});case"h4":return(0,jsx_runtime.jsx)("h4",{children:children});case"h5":return(0,jsx_runtime.jsx)("h5",{children:children});default:return(0,jsx_runtime.jsx)(Typography.Z,{display:"inline",component:"p",style:{textDecoration:"none"},variant:variant,children:children})}}(props.children)},LargeBodyTextRender=function LargeBodyTextRender(props){return(0,jsx_runtime.jsx)(Typography.Z,{component:"p",style:{fontSize:"21px"},children:props.children})};try{LightRender.displayName="LightRender",LightRender.__docgenInfo={description:"",displayName:"LightRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#LightRender"]={docgenInfo:LightRender.__docgenInfo,name:"LightRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#LightRender"})}catch(__react_docgen_typescript_loader_error){}try{BoldRender.displayName="BoldRender",BoldRender.__docgenInfo={description:"",displayName:"BoldRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#BoldRender"]={docgenInfo:BoldRender.__docgenInfo,name:"BoldRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#BoldRender"})}catch(__react_docgen_typescript_loader_error){}try{DropCapRender.displayName="DropCapRender",DropCapRender.__docgenInfo={description:"",displayName:"DropCapRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#DropCapRender"]={docgenInfo:DropCapRender.__docgenInfo,name:"DropCapRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#DropCapRender"})}catch(__react_docgen_typescript_loader_error){}try{KeystrokeRender.displayName="KeystrokeRender",KeystrokeRender.__docgenInfo={description:"",displayName:"KeystrokeRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#KeystrokeRender"]={docgenInfo:KeystrokeRender.__docgenInfo,name:"KeystrokeRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#KeystrokeRender"})}catch(__react_docgen_typescript_loader_error){}try{TextColorRender.displayName="TextColorRender",TextColorRender.__docgenInfo={description:"",displayName:"TextColorRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#TextColorRender"]={docgenInfo:TextColorRender.__docgenInfo,name:"TextColorRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#TextColorRender"})}catch(__react_docgen_typescript_loader_error){}try{UnderlineRender.displayName="UnderlineRender",UnderlineRender.__docgenInfo={description:"",displayName:"UnderlineRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#UnderlineRender"]={docgenInfo:UnderlineRender.__docgenInfo,name:"UnderlineRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#UnderlineRender"})}catch(__react_docgen_typescript_loader_error){}try{NormalRender.displayName="NormalRender",NormalRender.__docgenInfo={description:"",displayName:"NormalRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#NormalRender"]={docgenInfo:NormalRender.__docgenInfo,name:"NormalRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#NormalRender"})}catch(__react_docgen_typescript_loader_error){}try{TypographyRender.displayName="TypographyRender",TypographyRender.__docgenInfo={description:"",displayName:"TypographyRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#TypographyRender"]={docgenInfo:TypographyRender.__docgenInfo,name:"TypographyRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#TypographyRender"})}catch(__react_docgen_typescript_loader_error){}try{LargeBodyTextRender.displayName="LargeBodyTextRender",LargeBodyTextRender.__docgenInfo={description:"",displayName:"LargeBodyTextRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentMarkRenderers.tsx#LargeBodyTextRender"]={docgenInfo:LargeBodyTextRender.__docgenInfo,name:"LargeBodyTextRender",path:"src/common/sanityIo/BlockContentMarkRenderers.tsx#LargeBodyTextRender"})}catch(__react_docgen_typescript_loader_error){}var List=__webpack_require__("./node_modules/@mui/material/List/List.js"),ListItem=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),ListItemIcon=__webpack_require__("./node_modules/@mui/material/ListItemIcon/ListItemIcon.js"),ListItemText=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),FiberManualRecord=__webpack_require__("./node_modules/@mui/icons-material/esm/FiberManualRecord.js"),Theme=__webpack_require__("./src/theme/Theme.ts"),UtmLinkRender=function UtmLinkRender(props){var _props$mark;return(0,jsx_runtime.jsx)(Link.Z,{href:null==props||null===(_props$mark=props.mark)||void 0===_props$mark?void 0:_props$mark.href,color:"secondary",underline:"hover",children:props.children})},ButtonMarkRender=function ButtonMarkRender(props){var _props$mark2,_props$mark3,_props$mark4,_props$mark5,_props$mark6,_props$mark7,_props$mark8,_props$mark9,_props$mark10,_props$mark11,textColor="";switch(null==props||null===(_props$mark2=props.mark)||void 0===_props$mark2?void 0:_props$mark2.variant){case"outlined":switch(null===(_props$mark3=props.mark)||void 0===_props$mark3?void 0:_props$mark3.color){case"secondary":textColor=Theme.Z.palette.secondary.main;break;case"primary":textColor=Theme.Z.palette.primary.main;break;case"mint":textColor="";break;default:textColor="whitesmoke"}break;case"contained":switch(null===(_props$mark4=props.mark)||void 0===_props$mark4?void 0:_props$mark4.color){case"secondary":case"primary":textColor="whitesmoke";break;case"mint":textColor=Theme.Z.palette.secondary.main;break;default:textColor=Theme.Z.palette.background.paper}break;default:switch(null===(_props$mark5=props.mark)||void 0===_props$mark5?void 0:_props$mark5.color){case"secondary":textColor=Theme.Z.palette.secondary.main;break;case"primary":textColor=Theme.Z.palette.primary.main;break;case"mint":textColor="";break;default:textColor=Theme.Z.palette.text.primary}}return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:(0,jsx_runtime.jsx)(Button.Z,{style:"mint"===(null==props||null===(_props$mark6=props.mark)||void 0===_props$mark6?void 0:_props$mark6.color)?"contained"===(null==props||null===(_props$mark7=props.mark)||void 0===_props$mark7?void 0:_props$mark7.variant)?{backgroundColor:"",borderRadius:"20px"}:{backgroundColor:"transparent",borderColor:"",borderRadius:"20px"}:{borderRadius:"20px"},variant:null==props||null===(_props$mark8=props.mark)||void 0===_props$mark8?void 0:_props$mark8.variant,color:"mint"!==(null==props||null===(_props$mark9=props.mark)||void 0===_props$mark9?void 0:_props$mark9.color)?null==props||null===(_props$mark10=props.mark)||void 0===_props$mark10?void 0:_props$mark10.color:"inherit",href:null==props||null===(_props$mark11=props.mark)||void 0===_props$mark11?void 0:_props$mark11.buttonLink,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"button",style:{color:textColor},children:null==props?void 0:props.children})})})},ListRender=function ListRender(props){return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,direction:"column",children:(0,jsx_runtime.jsx)(List.Z,{children:props.children})})},ListItemRender=function ListItemRender(props){var _props$node,_props$node2,_props$index,classes=useCommonStyles(props);return(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(ListItem.ZP,{className:classes.listItemRoot,children:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,wrap:"nowrap",alignItems:"flex-start",children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(ListItemIcon.Z,{className:classes.bulletIconContainer,children:null!==(_props$node=props.node)&&void 0!==_props$node&&_props$node.listItem&&"bullet"===(null===(_props$node2=props.node)||void 0===_props$node2?void 0:_props$node2.listItem)?(0,jsx_runtime.jsx)(FiberManualRecord.Z,{className:classes.bulletIcon}):(0,jsx_runtime.jsxs)(Typography.Z,{variant:"subtitle1",className:classes.orderedListIndex,children:[(null!==(_props$index=null==props?void 0:props.index)&&void 0!==_props$index?_props$index:0)+1,"."]})})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,wrap:"nowrap",container:!0,children:(0,jsx_runtime.jsx)(ListItemText.Z,{children:props.children})})]})})})};try{UtmLinkRender.displayName="UtmLinkRender",UtmLinkRender.__docgenInfo={description:"",displayName:"UtmLinkRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentAnnotations.tsx#UtmLinkRender"]={docgenInfo:UtmLinkRender.__docgenInfo,name:"UtmLinkRender",path:"src/common/sanityIo/BlockContentAnnotations.tsx#UtmLinkRender"})}catch(__react_docgen_typescript_loader_error){}try{ButtonMarkRender.displayName="ButtonMarkRender",ButtonMarkRender.__docgenInfo={description:"",displayName:"ButtonMarkRender",props:{mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"ButtonType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentAnnotations.tsx#ButtonMarkRender"]={docgenInfo:ButtonMarkRender.__docgenInfo,name:"ButtonMarkRender",path:"src/common/sanityIo/BlockContentAnnotations.tsx#ButtonMarkRender"})}catch(__react_docgen_typescript_loader_error){}try{ListRender.displayName="ListRender",ListRender.__docgenInfo={description:"",displayName:"ListRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentAnnotations.tsx#ListRender"]={docgenInfo:ListRender.__docgenInfo,name:"ListRender",path:"src/common/sanityIo/BlockContentAnnotations.tsx#ListRender"})}catch(__react_docgen_typescript_loader_error){}try{ListItemRender.displayName="ListItemRender",ListItemRender.__docgenInfo={description:"",displayName:"ListItemRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentAnnotations.tsx#ListItemRender"]={docgenInfo:ListItemRender.__docgenInfo,name:"ListItemRender",path:"src/common/sanityIo/BlockContentAnnotations.tsx#ListItemRender"})}catch(__react_docgen_typescript_loader_error){}var HeaderRender=function HeaderRender(props,variant){var theme=(0,useTheme.Z)();return(0,jsx_runtime.jsxs)(ThemeProvider.Z,{theme:theme,children:[(0,jsx_runtime.jsx)(CssBaseline.ZP,{}),function wrapWithHTag(children){switch(variant){case"h1":return(0,jsx_runtime.jsx)("h1",{style:{fontFamily:"Bitter Pro"},children:children});case"h2":return(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"Bitter Pro"},children:children});case"h3":return(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"Bitter Pro"},children:children});case"h4":return(0,jsx_runtime.jsx)("h4",{style:{fontFamily:"Bitter Pro"},children:children});case"h5":return(0,jsx_runtime.jsx)("h5",{style:{fontFamily:"Bitter Pro"},children:children});case"h6":return(0,jsx_runtime.jsx)("h6",{style:{fontFamily:"Bitter Pro"},children:children});default:return(0,jsx_runtime.jsx)(Typography.Z,{display:"inline",component:"div",style:{color:theme.palette.secondary.main,fontWeight:"h3"===variant?300:700,marginBottom:theme.spacing(3)},variant:variant,children:children})}}(props.children)]})},CtaRender=function CtaRender(props){var theme=(0,useTheme.Z)(),classes=useCommonStyles(theme);return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,xs:12,className:classes.callToAction,children:props.children})},HrRender=function HrRender(props){var theme=(0,useTheme.Z)(),classes=useCommonStyles(theme);return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:(0,jsx_runtime.jsx)("hr",{className:classes.hr})})},ButtonRender=function ButtonRender(props){console.log("Props from button",props);var theme=(0,useTheme.Z)(),textColor="";switch(null==props?void 0:props.variant){case"outlined":switch(props.color){case"secondary":textColor=theme.palette.secondary.main;break;case"primary":textColor=theme.palette.primary.main;break;case"mint":textColor="";break;default:textColor="whitesmoke"}break;case"contained":switch(props.color){case"secondary":case"primary":textColor="whitesmoke";break;case"mint":textColor=theme.palette.secondary.main;break;default:textColor=theme.palette.background.paper}break;default:switch(props.color){case"secondary":textColor=theme.palette.secondary.main;break;case"primary":textColor=theme.palette.primary.main;break;case"mint":textColor="";break;default:textColor=theme.palette.text.primary}}return(0,jsx_runtime.jsxs)(ThemeProvider.Z,{theme:theme,children:[(0,jsx_runtime.jsx)(CssBaseline.ZP,{}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:(0,jsx_runtime.jsx)(Button.Z,{style:"mint"===(null==props?void 0:props.color)?"contained"===(null==props?void 0:props.variant)?{backgroundColor:"",borderRadius:"20px"}:{backgroundColor:"transparent",borderColor:"",borderRadius:"20px"}:{borderRadius:"20px"},variant:props.variant,color:"mint"!=(null==props?void 0:props.color)?null==props?void 0:props.color:"inherit",href:props.buttonLink,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"button",style:{color:textColor},children:props.children})})})]})},BlockContainerRender=function BlockContainerRender(props){return(0,jsx_runtime.jsxs)(Typography.Z,{component:"span",style:{width:"100%",overflow:"scroll",height:"100%"},variant:"body1",children:[(0,jsx_runtime.jsx)(CssBaseline.ZP,{}),props.children]})},blockSerializers={list:ListRender,listItem:ListItemRender,types:{utmLink:UtmLinkRender,button:ButtonRender,block:function block(props){switch(props.node.style){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return HeaderRender(props,props.node.style);case"normal":return NormalRender(props);case"cta":return CtaRender(props);default:return BlockContent_default().defaultSerializers.types.block(props)}},lineBreak:function lineBreak(props){return"horizontalRule"===props.node.style?(0,jsx_runtime.jsx)(HrRender,{}):null}},marks:{light:LightRender,dropCap:DropCapRender,primaryTextColor:function primaryTextColor(props){return TextColorRender(props,"")},secondaryTextColor:function secondaryTextColor(props){return TextColorRender(props,"")},underlinePrimaryColor:function underlinePrimaryColor(props){return UnderlineRender(props,"")},utmLink:UtmLinkRender,bold:BoldRender,button:ButtonMarkRender,keyStroke:KeystrokeRender,subtitle:function subtitle(props){return TypographyRender(props,"subtitle1")},overline:function overline(props){return TypographyRender(props,"overline")},largeBodyText:function largeBodyText(props){return LargeBodyTextRender(props)}},container:BlockContainerRender};try{HeaderRender.displayName="HeaderRender",HeaderRender.__docgenInfo={description:"",displayName:"HeaderRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentRenderer.tsx#HeaderRender"]={docgenInfo:HeaderRender.__docgenInfo,name:"HeaderRender",path:"src/common/sanityIo/BlockContentRenderer.tsx#HeaderRender"})}catch(__react_docgen_typescript_loader_error){}try{CtaRender.displayName="CtaRender",CtaRender.__docgenInfo={description:"",displayName:"CtaRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentRenderer.tsx#CtaRender"]={docgenInfo:CtaRender.__docgenInfo,name:"CtaRender",path:"src/common/sanityIo/BlockContentRenderer.tsx#CtaRender"})}catch(__react_docgen_typescript_loader_error){}try{HrRender.displayName="HrRender",HrRender.__docgenInfo={description:"",displayName:"HrRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentRenderer.tsx#HrRender"]={docgenInfo:HrRender.__docgenInfo,name:"HrRender",path:"src/common/sanityIo/BlockContentRenderer.tsx#HrRender"})}catch(__react_docgen_typescript_loader_error){}try{ButtonRender.displayName="ButtonRender",ButtonRender.__docgenInfo={description:"",displayName:"ButtonRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentRenderer.tsx#ButtonRender"]={docgenInfo:ButtonRender.__docgenInfo,name:"ButtonRender",path:"src/common/sanityIo/BlockContentRenderer.tsx#ButtonRender"})}catch(__react_docgen_typescript_loader_error){}try{BlockContainerRender.displayName="BlockContainerRender",BlockContainerRender.__docgenInfo={description:"",displayName:"BlockContainerRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/BlockContentRenderer.tsx#BlockContainerRender"]={docgenInfo:BlockContainerRender.__docgenInfo,name:"BlockContainerRender",path:"src/common/sanityIo/BlockContentRenderer.tsx#BlockContainerRender"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,ThwCommonStyles=__webpack_require__("./src/common/sanityIo/ThwCommonStyles.tsx"),Footer=__webpack_require__("./src/components/templates/mackenzies-mind/footer/Footer.tsx"),FooterBlockContentLayoutContainer=function FooterBlockContentLayoutContainer(props){var _props$content$map,_props$content,classes=(0,ThwCommonStyles.Z)();return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:null!==(_props$content$map=null==props||null===(_props$content=props.content)||void 0===_props$content?void 0:_props$content.map((function(columnLayoutContainer,index){switch(columnLayoutContainer._type){case"column1BlockContent":return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,justifyContent:"center",alignItems:"stretch",children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Card.Z,{className:classes.root,style:{paddingTop:"80px"},children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,xs:12,className:classes.layoutContainer,children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(BlockContent_default(),{blocks:columnLayoutContainer.content,serializers:blockSerializers,projectId:sanityClient.Z.config().projectId,dataset:sanityClient.Z.config().dataset})})})})})},"column1BlockContent_header");case"column2BlockContent":return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,justifyContent:"center",alignItems:"stretch",children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Card.Z,{className:classes.root,style:{paddingTop:"80px"},children:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,xs:12,className:classes.layoutContainer,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,children:(0,jsx_runtime.jsx)(BlockContent_default(),{blocks:columnLayoutContainer.column1.content,serializers:blockSerializers,projectId:sanityClient.Z.config().projectId,dataset:sanityClient.Z.config().dataset})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,children:(0,jsx_runtime.jsx)(BlockContent_default(),{blocks:columnLayoutContainer.column2.content,serializers:blockSerializers,projectId:sanityClient.Z.config().projectId,dataset:sanityClient.Z.config().dataset})})]})})})},"column2BlockContent_header");case"FooterSection":var footer=columnLayoutContainer;return(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,xs:12,children:[(0,jsx_runtime.jsx)(Link.Z,{id:"BOTTOM_OF_PAGE",underline:"hover",children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})}),(0,jsx_runtime.jsx)(Footer.Z,{topPadding:footer.topPadding,backgroundColor:footer.backgroundColor,backgroundImgSrc:footer.backgroundImgSrc,isSocialMediaBlock:footer.isSocialMediaBlock,pageFooter:footer.footerMenuRef})]},"BOTTOM_OF_PAGE");default:return(0,jsx_runtime.jsxs)("span",{children:["Undefined section ",columnLayoutContainer._type]},index)}})))&&void 0!==_props$content$map?_props$content$map:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})})},components_FooterBlockContentLayoutContainer=FooterBlockContentLayoutContainer;try{FooterBlockContentLayoutContainer.displayName="FooterBlockContentLayoutContainer",FooterBlockContentLayoutContainer.__docgenInfo={description:"",displayName:"FooterBlockContentLayoutContainer",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FooterBlockContentLayoutContainer.tsx#FooterBlockContentLayoutContainer"]={docgenInfo:FooterBlockContentLayoutContainer.__docgenInfo,name:"FooterBlockContentLayoutContainer",path:"src/components/FooterBlockContentLayoutContainer.tsx#FooterBlockContentLayoutContainer"})}catch(__react_docgen_typescript_loader_error){}var ConsultingFooter_stories={title:"Web Consulting/Page Components/Footer Section",component:components_FooterBlockContentLayoutContainer},Primary={args:{content:ConsultingFooterSectionData},render:function render(_ref){var content=_ref.content;return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:(0,getThemeFromSanity.Z)(WebConsultingThemeData.Z),children:(0,jsx_runtime.jsx)(components_FooterBlockContentLayoutContainer,{content:[content]})})}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    content: FooterSectionData\n  },\n  render: ({\n    content\n  }) => <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>\n        <FooterBlockContentLayoutContainer content={[content]}></FooterBlockContentLayoutContainer>\n    </ThemeProvider>\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/common/sanityIo/ThwCommonStyles.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Users_terrelltrapperkeepersingleton_Documents_GitHub_thehandsomestnerd_website_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js"),_theme_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/common/ColorPalette.ts"),_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/TransformHWTheme.ts"),useThwCommonStyles=(0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__.Z)((function(theme){return{layoutContainer:{marginBottom:"32px"},primaryTextColor:{color:_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.palette.primary.main},secondaryTextColor:{color:_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.palette.secondary.main},bold:{fontWeight:700},bodyText:{fontSize:"16px",fontWeight:400,lineHeight:"28px",letterSpacing:"0.5px",color:"#333333",padding:_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.spacing(1,0)},callToAction:{borderTop:"1px solid rgba(0,0,0,.12)",borderBottom:"1px solid rgba(0,0,0,.12)",width:"100%",padding:_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.spacing(3,0)},root:{width:"1050px",padding:"40px",overflow:"visible"},homePageH3:{fontWeight:300},lightWeightFont:{fontWeight:300,letterSpacing:"-1.5px"},boldWeightFont:{fontWeight:700},dropCapLetter:{float:"left",padding:_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.spacing(1),fontSize:"59px",fontWeight:400,lineHeight:"30px",letterSpacing:"0.5px",textTransform:"capitalize"},keystroke:(0,_Users_terrelltrapperkeepersingleton_Documents_GitHub_thehandsomestnerd_website_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({display:"inline-flex",alignItems:"center",justifyContent:"center",border:"1px solid #6D6D6D",backgroundColor:"#3D3D3D",color:"whitesmoke",borderRadius:"8px",width:"50px !important",height:"50px !important"},_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.typography.h4),hr:{borderTop:"1px solid rgba(0, 0, 0, 0.12)",borderBottom:"none",borderLeft:"none",borderRight:"none",width:"100%",height:"1px"},bulletIcon:{fontSize:"10px"},bulletIconContainer:{marginTop:_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.spacing(1.5),minWidth:"20px"},orderedListIndex:{marginTop:_theme_TransformHWTheme__WEBPACK_IMPORTED_MODULE_1__.Z.spacing(-1.25),fontWeight:400,fontStyle:"normal",fontSize:"16px",lineHeight:"28px",letterSpacing:"0.5px"},listItemRoot:{paddingLeft:"8px"},resumeSection:{borderBottom:"1px solid ".concat(_theme_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.LIGHTGRAY)}}}));__webpack_exports__.Z=useThwCommonStyles;try{useThwCommonStyles.displayName="useThwCommonStyles",useThwCommonStyles.__docgenInfo={description:"",displayName:"useThwCommonStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/sanityIo/ThwCommonStyles.tsx#useThwCommonStyles"]={docgenInfo:useThwCommonStyles.__docgenInfo,name:"useThwCommonStyles",path:"src/common/sanityIo/ThwCommonStyles.tsx#useThwCommonStyles"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/data/WebConsultingThemeData.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={_type:"MuiTheme",appBarHeight:76,breakpoints:{sm:640,lg:1160,xs:0,xl:1320,md:980},colorPalette:{primaryTextColor:"DARKERGRAY",_type:"MuiColorPalette",primaryColor:"BLUE",secondaryTextColor:"WHITESMOKE",secondaryColor:"LIGHTGRAY",disabledTextColor:"LIGHTGRAY",defaultBackground:"DARKBLUE",defaultPaperBackgroundColor:"WHITESMOKE"},title:"Chow Works",slug:{current:"chow-works",_type:"slug"},typography:{fontFamily:["Inter"],_type:"MuiTypography",fontFaces:[{lineHeight:"1.3",fontSize:"4.25rem",fontStyle:"normal",_type:"MuiFontFace",name:"h1",letterSpacing:"-.01em",_key:"9dcdc696c5e1",fontWeight:"bold",mediaQueries:[{breakpoint:["sm"],typography:{_type:"MuiFontFace",fontSize:"2.8rem"},_type:"MuiMediaQuery"}]},{fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"h2",letterSpacing:"-.02em",fontSize:"3.78rem",lineHeight:"1.25",_key:"773012a2f629"},{_type:"MuiFontFace",lineHeight:"1.4",fontWeight:"600",fontStyle:"normal",name:"h3",letterSpacing:"-.03em",fontSize:"3rem",_key:"3db2770e777a",mediaQueries:[{breakpoint:["sm"],typography:{_type:"MuiFontFace",fontSize:"1.4rem"},_type:"MuiMediaQuery"}]},{fontSize:"2.5rem",lineHeight:"1",_key:"25e38f5ef2e8",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h4"},{lineHeight:"1",_key:"0c2a3664b3b7",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h5",fontSize:"2rem"},{lineHeight:"1.2",_key:"520b4a68cfd1",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h6",fontSize:"1.7rem"},{letterSpacing:"-.02em",fontSize:"1rem",lineHeight:"1.5",_key:"f0eb2747eaed",fontStyle:"normal",fontWeight:"400",_type:"MuiFontFace",name:"body1"},{fontSize:"1.285rem",lineHeight:"1.5",_key:"0cb6508276ff",fontStyle:"normal",fontWeight:"550",_type:"MuiFontFace",name:"body2",letterSpacing:"0.0em"},{fontSize:"19px",textTransform:"none",_key:"e98d0a284abe",fontStyle:"normal",fontWeight:"700",letterSpacing:"-.03em",lineHeight:"1",_type:"MuiFontFace",name:"button"},{_key:"63b78c7fe4e2",fontStyle:"normal",fontWeight:"750",_type:"MuiFontFace",name:"subtitle1",letterSpacing:"-.03em",fontSize:"14px",lineHeight:"1"},{_type:"MuiFontFace",name:"subtitle2",letterSpacing:"-.03em",fontSize:"11px",lineHeight:"1..45",_key:"c0b6cd3da5001caa4fcf4e4dc404abea",fontStyle:"normal",fontWeight:"600"}]}}},"./src/theme/TransformHWTheme.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/common/ColorPalette.ts"),fonts=["Poppins","Montserrat","sans-serif"].join(","),TransformHWTheme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.Z)({breakpoints:{values:{xs:0,sm:640,md:980,lg:1160,xl:1320}},palette:{background:{default:_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.DARKBLUE,paper:_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.LIGHTER_GRAY},primary:{main:_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.GRAY},secondary:{main:_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.BLUE},error:{main:"#840E0E",light:"#D79393",dark:"#640E0E"},success:{main:"#27AE60",light:"#93D7B0",dark:"#0E8433"},warning:{main:"#E2AB1F",light:"#F1D58F",dark:"#CF800A"},text:{primary:_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.DARKBLUE,secondary:_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.LIGHTER_GRAY,disabled:_common_ColorPalette__WEBPACK_IMPORTED_MODULE_0__.D.LIGHT_GRAY}},typography:{fontFamily:fonts,h1:{fontSize:"66px",fontStyle:"normal",fontWeight:"bold",lineHeight:1.3,letterSpacing:"-0.03em"},h2:{fontSize:"53px",fontStyle:"normal",fontWeight:700,lineHeight:1.25,letterSpacing:"-0.03em"},h3:{fontSize:"44px",fontStyle:"normal",fontWeight:600,lineHeight:1.4,letterSpacing:"-0.03em"},h4:{fontWeight:"bold",fontStyle:"normal",fontSize:"34px",lineHeight:1.5},h6:{fontWeight:"bold",fontStyle:"normal",fontSize:"20px",lineHeight:1.5},body1:{fontSize:"18px",fontStyle:"normal",fontWeight:350,lineHeight:1.5,letterSpacing:"-0.03em"},body2:{fontSize:"20px",fontStyle:"normal",fontWeight:600,lineHeight:1.2,letterSpacing:"-0.03em"},button:{fontSize:"19px",fontStyle:"normal",fontWeight:700,lineHeight:1,letterSpacing:"-0.03em",textTransform:"none"},subtitle1:{fontSize:"16px",fontStyle:"normal",fontWeight:750,lineHeight:1.45,letterSpacing:"-0.03em"},subtitle2:{fontSize:"11px",fontStyle:"normal",fontWeight:600,lineHeight:1.45,letterSpacing:"-0.03em"}},components:{MuiCssBaseline:{styleOverrides:{"@global":{}}},MuiOutlinedInput:{styleOverrides:{root:{border:"1px solid black"}}},MuiInputBase:{styleOverrides:{root:{color:"#FAFAFA","&:focus":{borderBottom:0}},input:{"& :before":{}}}},MuiTooltip:{styleOverrides:{tooltip:{backgroundColor:"rgba(16, 43, 136, .9)"}}},MuiSnackbarContent:{styleOverrides:{root:{marginTop:"100px",border:"3px solid white",backgroundColor:"rgba(16, 43, 136, .95) !important"}}},MuiFilledInput:{styleOverrides:{root:{backgroundColor:"rgba(0,0,0,.3)","& .Mui-focused":{borderBottomWidth:"0px solid black"}}}},MuiInputLabel:{styleOverrides:{root:{}}},MuiButton:{styleOverrides:{root:{borderRadius:"5px",paddingTop:"16px",paddingBottom:"16px"},contained:{boxShadow:"none"},containedPrimary:{border:"1px solid white",backgroundColor:"rgba(207, 207, 207, .8)","&.Mui-disabled":{backgroundColor:"#79582d",color:"#969284"}},containedSecondary:{border:"1px solid whitesmoke",backgroundColor:"rgba(16, 43, 136, .7)","&.Mui-disabled":{color:"rgba(207, 207, 207, .5)",backgroundColor:"rgba(16, 43, 136, .5)"}},outlinedPrimary:{borderWidth:"3px",paddingTop:"16px",paddingBottom:"16px",paddingLeft:"64px",paddingRight:"64px"},outlinedSecondary:{borderWidth:"3px",paddingTop:"16px",paddingBottom:"16px",paddingLeft:"64px",paddingRight:"64px"}}}}});__webpack_exports__.Z=TransformHWTheme}}]);
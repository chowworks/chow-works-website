"use strict";(self.webpackChunkthe_handsomestnerd_internal=self.webpackChunkthe_handsomestnerd_internal||[]).push([[691],{"./src/stories/web-consulting/ConsultingHeader.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ConsultingHeader_stories}});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),getThemeFromSanity=__webpack_require__("./src/components/customized-theme-provider/getThemeFromSanity.ts"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),WebConsultingThemeData=__webpack_require__("./src/stories/data/WebConsultingThemeData.ts"),ConsultingHeaderSectionData={title:"Chow Works",backgroundColor:"DARKERGRAY",logoImgSrc:void 0,highlightedDetails:[{_type:"ServiceAmenityItem",name:"Call for Anything",description:"+088 57 00 24 51",title:"Call for Anything"},{title:"You may send an email",_type:"ServiceAmenityItem",name:"You may send an email",description:"helpus24@gmail.com"},{title:"Sunday - Closed",_type:"ServiceAmenityItem",name:"Sunday - Closed",description:"Mon - Sat(9.00 - 6.00)"}],ctaButtonLink:"/contactUs",isSearch:!0,name:"Chow Works Header",ctaButtonText:"Contact Us",isEnhanced:!0,headerMenuRef:{slug:{current:"chow-works-header-menu",_type:"slug"},subMenus:[{_type:"menuItem",title:"About Us",displayText:"About Us",url:"#ANIMATED_ABOUT_US"},{_type:"menuItem",displayText:"Services",url:"#ANIMATED_SERVICES",title:"Services"},{_type:"menuItem",displayText:"Portfolio",title:"Portfolio",url:"#ANIMATED_PORTFOLIO"},{_type:"menuItem",title:"Contact Us",displayText:"Contact Us",url:"#MAP_SECTION"}],title:"Chow Works",logoText:"Chow Works"}},defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),makeStyles=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js")),AppBar=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),ColorPalette=__webpack_require__("./src/theme/common/ColorPalette.ts"),Header=__webpack_require__("./src/components/templates/mackenzies-mind/header/Header.tsx"),imagePlaceholderClient=__webpack_require__("./src/utils/imagePlaceholderClient.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useStyles=(0,makeStyles.Z)((function(theme){return{root:{backgroundColor:ColorPalette.D.TRANSPARENTWHITE,transition:"background-color .5s ease 0s",paddingLeft:"32px",paddingRight:"56px",paddingTop:"32px",height:"148px",position:"relative"},opaque:{backgroundColor:"".concat(ColorPalette.D.LIGHTGRAY," !important")}}})),EnhancedHeader=function EnhancedHeader(props){var _props$pageHeader,_props$pageHeader$hea,_props$pageHeader2,_props$pageHeader3,_props$pageHeader$hig,_props$pageHeader4,_props$pageHeader5,classes=useStyles();return(0,jsx_runtime.jsx)(AppBar.Z,{className:(0,clsx_m.Z)((0,defineProperty.Z)({},classes.opaque,!0),classes.root),children:null!==(_props$pageHeader=props.pageHeader)&&void 0!==_props$pageHeader&&null!==(_props$pageHeader$hea=_props$pageHeader.headerMenuRef)&&void 0!==_props$pageHeader$hea&&_props$pageHeader$hea.title?(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,children:[(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,spacing:4,justifyContent:"space-between",wrap:"nowrap",children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,children:(0,jsx_runtime.jsx)(Button.Z,{fullWidth:!0,variant:"contained",href:null===(_props$pageHeader2=props.pageHeader)||void 0===_props$pageHeader2?void 0:_props$pageHeader2.ctaButtonLink,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"button",noWrap:!0,children:null===(_props$pageHeader3=props.pageHeader)||void 0===_props$pageHeader3?void 0:_props$pageHeader3.ctaButtonText})})}),null===(_props$pageHeader$hig=props.pageHeader.highlightedDetails)||void 0===_props$pageHeader$hig?void 0:_props$pageHeader$hig.map((function(detail,index){return(0,jsx_runtime.jsx)(Grid.ZP,{xs:3,container:!0,justifyContent:"flex-end",alignItems:"flex-end",alignContent:"flex-end",children:(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,container:!0,xs:12,sm:3,maxWidth:350,minWidth:270,spacing:1,wrap:"nowrap",justifyContent:"flex-end",alignItems:"center",children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,maxWidth:64,style:{position:"relative"},children:(0,jsx_runtime.jsx)(Card.Z,{elevation:0,style:{width:"48px",height:"48px",backgroundColor:"#e3e3e3",borderRadius:"50%"},children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",style:{height:"100%",width:"100%"},children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)("img",{width:24,src:imagePlaceholderClient.Z.placeholderOrImage(detail.imageSrc,24,24),style:{paddingTop:"6px"}})})})})}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,maxWidth:260,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",color:"textPrimary",noWrap:!0,children:detail.name})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{fontWeight:"bold",fontSize:"16px",variant:"body2",color:"textPrimary",children:detail.description})})]})]})},index)}))]}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:(0,jsx_runtime.jsx)(Grid.ZP,{xs:12,container:!0,item:!0,style:{padding:"8px",position:"relative",top:"16px",borderRadius:4,backgroundColor:"black"},children:(0,jsx_runtime.jsx)(Header.Z,{isSearch:null===(_props$pageHeader4=props.pageHeader)||void 0===_props$pageHeader4?void 0:_props$pageHeader4.isSearch,pageHeader:null===(_props$pageHeader5=props.pageHeader)||void 0===_props$pageHeader5?void 0:_props$pageHeader5.headerMenuRef,isEnhanced:!0})})})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})})},header_EnhancedHeader=EnhancedHeader;try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/mackenzies-mind/header/EnhancedHeader.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/templates/mackenzies-mind/header/EnhancedHeader.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{EnhancedHeader.displayName="EnhancedHeader",EnhancedHeader.__docgenInfo={description:"",displayName:"EnhancedHeader",props:{pageHeader:{defaultValue:null,description:"",name:"pageHeader",required:!1,type:{name:"HeaderSectionType"}},updateIsLoading:{defaultValue:null,description:"",name:"updateIsLoading",required:!1,type:{name:"((value: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/mackenzies-mind/header/EnhancedHeader.tsx#EnhancedHeader"]={docgenInfo:EnhancedHeader.__docgenInfo,name:"EnhancedHeader",path:"src/components/templates/mackenzies-mind/header/EnhancedHeader.tsx#EnhancedHeader"})}catch(__react_docgen_typescript_loader_error){}var ConsultingHeader_stories={title:"Web Consulting/Page Components/Enhanced Header",component:header_EnhancedHeader},Primary={args:{pageHeader:ConsultingHeaderSectionData},render:function render(_ref){var pageHeader=_ref.pageHeader;return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:(0,getThemeFromSanity.Z)(WebConsultingThemeData.Z),children:(0,jsx_runtime.jsx)(header_EnhancedHeader,{pageHeader:pageHeader})})}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    pageHeader: consultingHeaderSectionData\n  },\n  render: ({\n    pageHeader\n  }) => <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>\n        <EnhancedHeader pageHeader={pageHeader}></EnhancedHeader>\n    </ThemeProvider>\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/stories/data/WebConsultingThemeData.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={_type:"MuiTheme",appBarHeight:76,breakpoints:{sm:640,lg:1160,xs:0,xl:1320,md:980},colorPalette:{primaryTextColor:"DARKERGRAY",_type:"MuiColorPalette",primaryColor:"BLUE",secondaryTextColor:"WHITESMOKE",secondaryColor:"LIGHTGRAY",disabledTextColor:"LIGHTGRAY",defaultBackground:"DARKBLUE",defaultPaperBackgroundColor:"WHITESMOKE"},title:"Chow Works",slug:{current:"chow-works",_type:"slug"},typography:{fontFamily:["Inter"],_type:"MuiTypography",fontFaces:[{lineHeight:"1.3",fontSize:"4.25rem",fontStyle:"normal",_type:"MuiFontFace",name:"h1",letterSpacing:"-.01em",_key:"9dcdc696c5e1",fontWeight:"bold",mediaQueries:[{breakpoint:["sm"],typography:{_type:"MuiFontFace",fontSize:"2.8rem"},_type:"MuiMediaQuery"}]},{fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"h2",letterSpacing:"-.02em",fontSize:"3.78rem",lineHeight:"1.25",_key:"773012a2f629"},{_type:"MuiFontFace",lineHeight:"1.4",fontWeight:"600",fontStyle:"normal",name:"h3",letterSpacing:"-.03em",fontSize:"3rem",_key:"3db2770e777a",mediaQueries:[{breakpoint:["sm"],typography:{_type:"MuiFontFace",fontSize:"1.4rem"},_type:"MuiMediaQuery"}]},{fontSize:"2.5rem",lineHeight:"1",_key:"25e38f5ef2e8",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h4"},{lineHeight:"1",_key:"0c2a3664b3b7",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h5",fontSize:"2rem"},{lineHeight:"1.2",_key:"520b4a68cfd1",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h6",fontSize:"1.7rem"},{letterSpacing:"-.02em",fontSize:"1rem",lineHeight:"1.5",_key:"f0eb2747eaed",fontStyle:"normal",fontWeight:"400",_type:"MuiFontFace",name:"body1"},{fontSize:"1.285rem",lineHeight:"1.5",_key:"0cb6508276ff",fontStyle:"normal",fontWeight:"550",_type:"MuiFontFace",name:"body2",letterSpacing:"0.0em"},{fontSize:"19px",textTransform:"none",_key:"e98d0a284abe",fontStyle:"normal",fontWeight:"700",letterSpacing:"-.03em",lineHeight:"1",_type:"MuiFontFace",name:"button"},{_key:"63b78c7fe4e2",fontStyle:"normal",fontWeight:"750",_type:"MuiFontFace",name:"subtitle1",letterSpacing:"-.03em",fontSize:"14px",lineHeight:"1"},{_type:"MuiFontFace",name:"subtitle2",letterSpacing:"-.03em",fontSize:"11px",lineHeight:"1..45",_key:"c0b6cd3da5001caa4fcf4e4dc404abea",fontStyle:"normal",fontWeight:"600"}]}}},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.Z=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);
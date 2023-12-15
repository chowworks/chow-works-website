"use strict";(self.webpackChunkthe_handsomestnerd_internal=self.webpackChunkthe_handsomestnerd_internal||[]).push([[5650],{"./src/stories/web-dev-company/WebDevHowItWorksSection.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return WebDevHowItWorksSection_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),getThemeFromSanity=__webpack_require__("./src/components/customized-theme-provider/getThemeFromSanity.ts"),WebDevThemeData=__webpack_require__("./src/stories/data/WebDevThemeData.ts"),makeStyles=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),ColorPalette=__webpack_require__("./src/theme/common/ColorPalette.ts"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),WebDevSiteTheme=__webpack_require__("./src/theme/WebDevSiteTheme.ts"),PageContext=__webpack_require__("./src/components/page-context/PageContext.tsx"),FirebaseAnalyticsClient=__webpack_require__("./src/common/firebase/FirebaseAnalyticsClient.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useStyles=(0,makeStyles.Z)((function(theme){return{root:{padding:theme.spacing(4)}}})),COLOR_ROTATION=["#cd3647","#343656","#333784"],WebDevHowItWorksStep=function WebDevHowItWorksStep(props){var _props$index,_props$index2,pageContext=(0,react.useContext)(PageContext.Z),classes=useStyles(WebDevSiteTheme.Z),LearnMoreButton=function LearnMoreButton(){var _props$step;return(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,sm:8,children:props.step.learnMoreText&&(null===(_props$step=props.step)||void 0===_props$step?void 0:_props$step.learnMoreText.length)>0&&(0,jsx_runtime.jsx)(Button.Z,{fullWidth:!0,onClick:function onClick(){var _props$step$slug$curr,_props$step$slug,_props$step$learnMore;return FirebaseAnalyticsClient.Z.ctaClick(null!==(_props$step$slug$curr=null===(_props$step$slug=props.step.slug)||void 0===_props$step$slug?void 0:_props$step$slug.current)&&void 0!==_props$step$slug$curr?_props$step$slug$curr:"",null!==(_props$step$learnMore=props.step.learnMoreText)&&void 0!==_props$step$learnMore?_props$step$learnMore:"",pageContext.analyticsId)},color:"primary",href:props.step.learnMoreLink,variant:"outlined",children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"button",noWrap:!0,children:props.step.learnMoreText})})})};return(0,jsx_runtime.jsx)(Grid.ZP,{className:classes.root,container:!0,item:!0,xs:12,sm:12,md:6,style:{backgroundColor:COLOR_ROTATION[(null!==(_props$index=props.index)&&void 0!==_props$index?_props$index:0)%3]},children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,direction:"column",children:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,spacing:2,children:[(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,alignContent:"center",justifyContent:"space-between",alignItems:"center",children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"h4",style:{fontFamily:"Elaine Sans"},color:"primary",children:props.step.title})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"h1",style:{fontFamily:"Elaine Sans",color:"rgba(255,255,255,.3)"},color:"primary",children:(null!==(_props$index2=props.index)&&void 0!==_props$index2?_props$index2:0)+1})})})]}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",color:"primary",style:{fontFamily:"Raleway"},children:props.step.contentText})}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,children:!props.hideLearnMoreButton&&(0,jsx_runtime.jsx)(LearnMoreButton,{})})]})})},(0,v4.Z)())},web_dev_site_WebDevHowItWorksStep=WebDevHowItWorksStep;try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevHowItWorksStep.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/templates/web-dev-site/WebDevHowItWorksStep.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{WebDevHowItWorksStep.displayName="WebDevHowItWorksStep",WebDevHowItWorksStep.__docgenInfo={description:"",displayName:"WebDevHowItWorksStep",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"HowItWorksStepNoRefType"}},hideLearnMoreButton:{defaultValue:null,description:"",name:"hideLearnMoreButton",required:!1,type:{name:"boolean"}},hideCtaButton:{defaultValue:null,description:"",name:"hideCtaButton",required:!1,type:{name:"boolean"}},source:{defaultValue:null,description:"",name:"source",required:!1,type:{name:"string"}},showAmenities:{defaultValue:null,description:"",name:"showAmenities",required:!1,type:{name:"boolean"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevHowItWorksStep.tsx#WebDevHowItWorksStep"]={docgenInfo:WebDevHowItWorksStep.__docgenInfo,name:"WebDevHowItWorksStep",path:"src/components/templates/web-dev-site/WebDevHowItWorksStep.tsx#WebDevHowItWorksStep"})}catch(__react_docgen_typescript_loader_error){}var WebDevHowItWorksSection_useStyles=(0,makeStyles.Z)((function(theme){return{root:{padding:theme.spacing(4,0,8,0),minHeight:"max-content",backgroundColor:"#131313"},contentBottom:{border:"1px solid ".concat(theme.palette.secondary.main),padding:"20px"}}})),WebDevHowItWorksSection=function WebDevHowItWorksSection(props){var _props$sectionData,_props$sectionData2,_props$sectionData3,_props$sectionData3$c,_props$sectionData4,_props$sectionData4$s,classes=WebDevHowItWorksSection_useStyles();return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,className:classes.root,xs:12,justifyContent:"center",children:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,spacing:2,xs:11,children:[(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"subtitle2",color:"secondary",style:{color:ColorPalette.D.AQUA},children:null===(_props$sectionData=props.sectionData)||void 0===_props$sectionData?void 0:_props$sectionData.contentPreTitle})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,wrap:"nowrap",children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{color:"primary",variant:"h2",align:"center",style:{fontFamily:"Elaine Sans"},display:"inline",children:null===(_props$sectionData2=props.sectionData)||void 0===_props$sectionData2?void 0:_props$sectionData2.contentTitle})})})]}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:null===(_props$sectionData3=props.sectionData)||void 0===_props$sectionData3||null===(_props$sectionData3$c=_props$sectionData3.contentTexts)||void 0===_props$sectionData3$c?void 0:_props$sectionData3$c.map((function(segment,index){return(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",color:"primary",gutterBottom:!0,fontFamily:"Raleway",children:segment})},index)}))}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,children:null===(_props$sectionData4=props.sectionData)||void 0===_props$sectionData4||null===(_props$sectionData4$s=_props$sectionData4.steps)||void 0===_props$sectionData4$s?void 0:_props$sectionData4$s.map((function(step,index){return(0,jsx_runtime.jsx)(web_dev_site_WebDevHowItWorksStep,{showAmenities:!0,index:index,step:step},index)}))})]})})},web_dev_site_WebDevHowItWorksSection=WebDevHowItWorksSection;try{WebDevHowItWorksSection_useStyles.displayName="useStyles",WebDevHowItWorksSection_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevHowItWorksSection.tsx#useStyles"]={docgenInfo:WebDevHowItWorksSection_useStyles.__docgenInfo,name:"useStyles",path:"src/components/templates/web-dev-site/WebDevHowItWorksSection.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{WebDevHowItWorksSection.displayName="WebDevHowItWorksSection",WebDevHowItWorksSection.__docgenInfo={description:"",displayName:"WebDevHowItWorksSection",props:{sectionData:{defaultValue:null,description:"",name:"sectionData",required:!0,type:{name:"HowItWorksSectionType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/web-dev-site/WebDevHowItWorksSection.tsx#WebDevHowItWorksSection"]={docgenInfo:WebDevHowItWorksSection.__docgenInfo,name:"WebDevHowItWorksSection",path:"src/components/templates/web-dev-site/WebDevHowItWorksSection.tsx#WebDevHowItWorksSection"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,WebDevHowItWorksSection_stories={title:"Web Development/Section/Web Dev How it Works Section",component:web_dev_site_WebDevHowItWorksSection},Primary={args:{sectionData:{_type:"WebDevHowItWorksSection",name:"How it works",contentTexts:["The development process is an exercise in organization of content. You are very active in the development of your project from providing content to providing prompt feedback on design. Following the steps below will take us through a roughly 2 month process to get your project finished and looking great."],contentPreTitle:"The Process",steps:[{_type:"WebDevHowItWorksStep",contentText:"15 min meeting where we talk about some basics of your project and a formal layout of the process we normally take to get projects like yours completed.",learnMoreText:"Book a Meet & Greet",name:"Meet & Greet",title:"Virtual Meet & Greet",slug:{current:"meet-n-greet-step",_type:"slug"},isEnabled:!0},{_type:"WebDevHowItWorksStep",contentText:"I need a more details to come up with an estimate in cost and time of your project. Fill in this form to give me some insight into your project and I will review this form for the consultation.",learnMoreText:"Quote Form",name:"Fill out Quote Form",title:"Fill out Quote Form",slug:{current:"fill-in-quote-step",_type:"slug"}},{_type:"WebDevHowItWorksStep",contentText:"This conversation that will mainly be about the responses you gave in your quote form will allow me to obtain the details I need to come up with a quote in terms of time and funds for your specific project. ",learnMoreText:"Get a Quote",name:"Consultation",title:"30 min Consultation",slug:{current:"get-a-quote",_type:"slug"}},{contentText:"After you receive your quote and you decide that you want to go with us we will will sign a contract outlining what is expected and cost in time and money. This marks the official start of your project!",learnMoreText:"Start a new Project",name:"Contract Us",title:"Contract Us",slug:{_type:"slug",current:"start-a-new-project"},_type:"WebDevHowItWorksStep"},{learnMoreText:"Consultation form",name:"Design",title:"Design",slug:{current:"step-4-design",_type:"slug"},_type:"WebDevHowItWorksStep",contentText:"Using the knowledge from the consultation I will have come up with a few ideas for what the project will look and feel like. These ideas are in the form of stock templates and mockups that we will discuss in detail and allow you to make edits. It is important to be thorough with this step so that development can be as fast as possible."},{contentText:"Development means I am working hard to make everything from our mockups into something that a client of yours can view and interact with on the internet. There will be weekly review meetings where you get to approve the final completed section as your clients will see it. After we have all the major sections completed there will be an overall project review. ",learnMoreText:"The Developer...",name:"Development",title:"Development",slug:{current:"development-step",_type:"slug"},_type:"WebDevHowItWorksStep"},{_type:"WebDevHowItWorksStep",contentText:"Your application will be tested as we go along by me. It will also be a version that you will have access to where you can test and give feedback at anytime along the way. But this step is devoted to testing the entire project and it's functionality.",name:"Testing",title:"Testing"},{learnMoreText:"Sample Projects",name:"Deployment",title:"Deployment",slug:{_type:"slug",current:"deployment"},_type:"WebDevHowItWorksStep",contentText:"Time to deploy your project to the world!"},{_type:"WebDevHowItWorksStep",contentText:"Allow me to update your project monthly and keep it running smoothly. I'll fix any minor bugs we find and give further estimates on more complex bug fixes. This also covers content management for those that are less tech savvy.",learnMoreText:"Our Plans",name:"Maintenance",title:"Maintenance"}],contentTitle:"How it works"}},render:function render(_ref){var sectionData=_ref.sectionData;return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:(0,getThemeFromSanity.Z)(WebDevThemeData.Z),children:(0,jsx_runtime.jsx)(web_dev_site_WebDevHowItWorksSection,{sectionData:sectionData})})}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    sectionData: WebDevHowItWorksSectionData\n  },\n  render: ({\n    sectionData\n  }) => <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>\n    <WebDevHowItWorksSection sectionData={sectionData}></WebDevHowItWorksSection>\n    </ThemeProvider>\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/stories/data/WebDevThemeData.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={typography:{fontFamily:["Elaine Sans","Raleway"],fontFaces:[{_type:"MuiFontFace",name:"h1",letterSpacing:"-.01em",fontSize:"70px",lineHeight:"1",_key:"9961159018eb",fontStyle:"normal",fontWeight:"bold"},{_key:"fd80eff73602",fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"h2",letterSpacing:".02em",fontSize:"53px",lineHeight:"1"},{letterSpacing:".01em",fontSize:"32px",lineHeight:"1.4",_key:"b3c7024c6833",fontStyle:"normal",fontWeight:"600",_type:"MuiFontFace",name:"h3"},{fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h5",fontSize:"28px",lineHeight:"1"},{name:"h6",fontSize:"24px",lineHeight:"1",_key:"8dbcd01d5655",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace"},{name:"body1",letterSpacing:"-.02em",fontSize:"14.5px",lineHeight:"1.2",_key:"38e418fa8308",fontStyle:"normal",fontWeight:"400",_type:"MuiFontFace"},{_key:"bbdf7c3e1d9e57c73a09b816ca2bc268",fontStyle:"normal",fontWeight:"550",_type:"MuiFontFace",name:"body2",letterSpacing:"0em",fontSize:"18px",lineHeight:"1.5"},{lineHeight:"1",_key:"0c952d423ebf97d7141c9de4718955e7",fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"button",letterSpacing:"-.03em",fontSize:"19px"},{fontStyle:"normal",fontWeight:"750",_type:"MuiFontFace",name:"subtitle1",letterSpacing:"-.03em",fontSize:"14px",lineHeight:"1",_key:"cf52af782364f0f82d1a43143f1c9fc5"},{letterSpacing:".20em",lineHeight:"1",textTransform:"uppercase",_type:"MuiFontFace",fontSize:"14px",fontWeight:"750",name:"subtitle2",_key:"e74f48549e61e7307b111a1118423263",fontStyle:"normal"}]},breakpoints:{xl:1320,md:980,sm:640,lg:1160,xs:0},title:"Web Development site",appBarHeight:105,colorPalette:{primaryColor:"WHITESMOKE",secondaryTextColor:"LIGHT_WHITE",secondaryColor:"PURPLE",disabledTextColor:"DISABLED_GRAY",defaultBackground:"ALMOST_BLACK",defaultPaperBackgroundColor:"ALMOST_BLACK",primaryTextColor:"WHITESMOKE"},slug:{current:"web-development-site",_type:"slug"}}},"./src/theme/WebDevSiteTheme.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _mui_material__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),fonts=["Elaine Sans","Raleway"].join(","),WebDevSiteTheme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.Z)({breakpoints:{values:{xs:0,sm:640,md:980,lg:1160,xl:1320}},shape:{borderRadius:32},mixins:{toolbar:{height:"105px"}},palette:{background:{default:"#131313",paper:"#131313"},primary:{main:"#FAFAFA"},secondary:{main:"#333784"},error:{main:"#840E0E",light:"#D79393",dark:"#640E0E"},success:{main:"#27AE60",light:"#93D7B0",dark:"#0E8433"},warning:{main:"#E2AB1F",light:"#F1D58F",dark:"#CF800A"},text:{primary:"#FFFFFF",secondary:"#404040",disabled:"#949495"}},typography:{fontFamily:fonts,h1:{fontSize:"70px",fontStyle:"normal",fontWeight:"bold",lineHeight:1,letterSpacing:"-0.01em"},h2:{fontSize:"53px",fontStyle:"normal",fontWeight:700,lineHeight:1,letterSpacing:"0.02em"},h3:{fontSize:"32px",fontStyle:"normal",fontWeight:600,lineHeight:1.4,letterSpacing:"0.01em"},h4:{fontWeight:"bold",fontStyle:"normal",fontSize:"30px",lineHeight:1},h5:{fontWeight:"bold",fontStyle:"normal",fontSize:"28px",lineHeight:1},h6:{fontWeight:"bold",fontStyle:"normal",fontSize:"24px",lineHeight:1},body1:{fontSize:"14.5px",fontStyle:"normal",fontWeight:400,lineHeight:1.2,letterSpacing:"-0.02em"},body2:{fontSize:"18px",fontStyle:"normal",fontWeight:550,lineHeight:1.5,letterSpacing:"0.0em"},button:{fontSize:"19px",fontStyle:"normal",fontWeight:700,lineHeight:1,letterSpacing:"-0.03em",textTransform:"none"},subtitle1:{fontSize:"14px",fontStyle:"normal",fontWeight:750,lineHeight:1,letterSpacing:"-0.03em"},subtitle2:{fontSize:"14px",textTransform:"uppercase",fontStyle:"normal",fontWeight:750,lineHeight:1,letterSpacing:"0.20em"}},components:{MuiListItemText:{styleOverrides:{secondary:{color:"inherit","& :hover":{background:"white",color:"#383838"}}}},MuiListItem:{styleOverrides:{root:{textAlign:"center",color:"#FAFAFA","& :hover":{background:"white",color:"#383838"}}}},MuiInputBase:{styleOverrides:{root:{borderRadius:0,"&:focus":{borderBottom:0}},input:{"& :before":{}}}},MuiSnackbarContent:{styleOverrides:{root:{marginTop:"100px",border:"3px solid white",backgroundColor:"rgba(210,0,39,0.9) !important"}}},MuiFilledInput:{styleOverrides:{root:{"& .Mui-focused":{borderBottomWidth:"0px solid black"}}}},MuiButton:{styleOverrides:{root:{paddingTop:"16px",paddingBottom:"16px"},contained:{boxShadow:"none"},containedPrimary:{border:"1px solid white","&.Mui-disabled":{color:"#969284"}},containedSecondary:{border:"1px solid whitesmoke","&.Mui-disabled":{color:"rgba(207, 207, 207, .5)"}},outlined:{borderWidth:"3px",paddingTop:"16px",paddingBottom:"16px",paddingLeft:"64px",paddingRight:"64px"}}}}});__webpack_exports__.Z=WebDevSiteTheme}}]);
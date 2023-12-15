"use strict";(self.webpackChunkthe_handsomestnerd_internal=self.webpackChunkthe_handsomestnerd_internal||[]).push([[4393],{"./src/stories/web-consulting/AnimatedMapSection.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MapSectionComplete:function(){return MapSectionComplete},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return AnimatedMapSection_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),getThemeFromSanity=__webpack_require__("./src/components/customized-theme-provider/getThemeFromSanity.ts"),WebConsultingThemeData=__webpack_require__("./src/stories/data/WebConsultingThemeData.ts"),makeStyles=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js")),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Email=__webpack_require__("./node_modules/@mui/icons-material/esm/Email.js"),Phone=__webpack_require__("./node_modules/@mui/icons-material/esm/Phone.js"),LocationOn=__webpack_require__("./node_modules/@mui/icons-material/esm/LocationOn.js"),cmsStaticPagesClient=__webpack_require__("./src/components/block-content-ui/static-pages/cmsStaticPagesClient.ts"),ColorPalette=__webpack_require__("./src/theme/common/ColorPalette.ts"),esm=__webpack_require__("./node_modules/@react-google-maps/api/dist/esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js"),useStyles=(0,makeStyles.Z)((function(theme){return{root:{},markerClass:{paddingTop:"70px"},grayscale:{filter:"grayscale(100%)"}}})),containerStyle={width:"100vw",height:"750px"},center={lat:39.332029,lng:-76.760486},MapSection=function MapSection(props){var _process$env$REACT_AP,_props$sectionData,_props$sectionData$ma,_props$sectionData2,_props$sectionData3,classes=useStyles(),theme=(0,useTheme.Z)(),mdDown=(0,useMediaQuery.Z)(theme.breakpoints.down("md")),isLoaded=(0,esm.Ji)({id:"google-map-script",googleMapsApiKey:null!==(_process$env$REACT_AP=process.env.REACT_APP_GOOGLE_MAPS_APIKEY)&&void 0!==_process$env$REACT_AP?_process$env$REACT_AP:""}).isLoaded,getIcon=function getIcon(iconName){switch(iconName){case"email":return(0,jsx_runtime.jsx)(Email.Z,{color:"secondary",fontSize:"medium"});case"phone":return(0,jsx_runtime.jsx)(Phone.Z,{color:"secondary",fontSize:"medium"});default:return(0,jsx_runtime.jsx)(LocationOn.Z,{color:"secondary",fontSize:"medium"})}};return(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,item:!0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,className:classes.grayscale,children:isLoaded?(0,jsx_runtime.jsx)(esm.b6,{mapContainerStyle:containerStyle,center:center,zoom:11,children:(0,jsx_runtime.jsx)(esm.Jx,{title:null===(_props$sectionData=props.sectionData)||void 0===_props$sectionData?void 0:_props$sectionData.mapMarkerTitle,position:{lat:center.lat,lng:center.lng},label:{text:null!==(_props$sectionData$ma=null===(_props$sectionData2=props.sectionData)||void 0===_props$sectionData2?void 0:_props$sectionData2.mapMarkerTitle)&&void 0!==_props$sectionData$ma?_props$sectionData$ma:" ",className:classes.markerClass,fontSize:"18px"}})}):(0,jsx_runtime.jsx)(CircularProgress.Z,{})}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,style:{position:"relative"},children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,sx:{position:mdDown?"relative":"absolute",top:mdDown?0:-66,paddingLeft:mdDown?0:"32px",paddingRight:mdDown?0:"32px"},children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,sx:{zIndex:2,backgroundColor:ColorPalette.D.TRANSPARENT_DARKBLUE,border:"1px solid white",padding:theme.spacing(4,4,2,4)},justifyContent:"space-between",children:null===(_props$sectionData3=props.sectionData)||void 0===_props$sectionData3?void 0:_props$sectionData3.contactInfo.map((function(detail,index){var _urlFor$url,_detail$imageSrc;return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,xs:12,md:3,style:{marginBottom:"16px"},justifyContent:"center",children:(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,container:!0,alignItems:"center",maxWidth:380,minWidth:290,justifyContent:"center",children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,md:3,style:{marginRight:mdDown?0:"8px",marginBottom:mdDown?0:"4px"},container:!0,justifyContent:"center",children:(0,jsx_runtime.jsx)(Card.Z,{elevation:0,style:{width:"60px",height:"60px",backgroundColor:theme.palette.primary.main,borderRadius:"50%",border:"3px solid ".concat(theme.palette.secondary.main)},children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",style:{height:"100%"},children:(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,style:{paddingTop:"6px"},children:detail.imageSrc?(0,jsx_runtime.jsx)("img",{width:24,src:null!==(_urlFor$url=(0,cmsStaticPagesClient.u)(null!==(_detail$imageSrc=detail.imageSrc)&&void 0!==_detail$imageSrc?_detail$imageSrc:"").url())&&void 0!==_urlFor$url?_urlFor$url:""}):getIcon(detail.muiIcon)})})})}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,maxWidth:260,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",color:"textSecondary",noWrap:!0,align:mdDown?"center":"left",children:detail.name})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Typography.Z,{fontWeight:"bold",fontSize:"16px",variant:"body2",color:"textSecondary",align:mdDown?"center":"left",children:detail.description})})]})]})},index)}))})})})]})},animated_MapSection=MapSection;try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/animated/MapSection.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/animated/MapSection.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{MapSection.displayName="MapSection",MapSection.__docgenInfo={description:"",displayName:"MapSection",props:{sectionData:{defaultValue:null,description:"",name:"sectionData",required:!1,type:{name:"MapSectionType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/animated/MapSection.tsx#MapSection"]={docgenInfo:MapSection.__docgenInfo,name:"MapSection",path:"src/components/animated/MapSection.tsx#MapSection"})}catch(__react_docgen_typescript_loader_error){}var _MapSectionComplete$p,_MapSectionComplete$p2,_MapSectionComplete$p3,AnimatedMapSection_stories={title:"Web Consulting/Map Section",component:animated_MapSection},MapSectionComplete={args:{sectionData:{latitude:"39.332029",mapMarkerLabel:"Chow Works",name:"Chow Works Map",mapMarkerTitle:"Chow Works",longitude:"-76.760486",contactInfo:[{description:"14851 New York, USA",title:"101 Merritt 5, north tower",muiIcon:"location",_type:"ServiceAmenityItem",name:"Address"},{muiIcon:"phone",_type:"ServiceAmenityItem",name:"Get In Touch",description:"+088 11 22 00 44",title:"Get In Touch"},{_type:"ServiceAmenityItem",name:"Email",description:"email@email.com",title:"Email",muiIcon:"email"}],address:"7412 Chadwell Cir unit 202 Windsor Mill, MD 21244"}},render:function render(_ref){var sectionData=_ref.sectionData;return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:(0,getThemeFromSanity.Z)(WebConsultingThemeData.Z),children:(0,jsx_runtime.jsx)(animated_MapSection,{sectionData:sectionData})})}};MapSectionComplete.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MapSectionComplete.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_MapSectionComplete$p=MapSectionComplete.parameters)||void 0===_MapSectionComplete$p?void 0:_MapSectionComplete$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    sectionData: MapSectionData\n  },\n  render: ({\n    sectionData\n  }) => <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>\n            <MapSection sectionData={sectionData}></MapSection>\n        </ThemeProvider>\n}"},null===(_MapSectionComplete$p2=MapSectionComplete.parameters)||void 0===_MapSectionComplete$p2||null===(_MapSectionComplete$p3=_MapSectionComplete$p2.docs)||void 0===_MapSectionComplete$p3?void 0:_MapSectionComplete$p3.source)})});var __namedExportsOrder=["MapSectionComplete"]},"./src/stories/data/WebConsultingThemeData.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={_type:"MuiTheme",appBarHeight:76,breakpoints:{sm:640,lg:1160,xs:0,xl:1320,md:980},colorPalette:{primaryTextColor:"DARKERGRAY",_type:"MuiColorPalette",primaryColor:"BLUE",secondaryTextColor:"WHITESMOKE",secondaryColor:"LIGHTGRAY",disabledTextColor:"LIGHTGRAY",defaultBackground:"DARKBLUE",defaultPaperBackgroundColor:"WHITESMOKE"},title:"Chow Works",slug:{current:"chow-works",_type:"slug"},typography:{fontFamily:["Inter"],_type:"MuiTypography",fontFaces:[{lineHeight:"1.3",fontSize:"4.25rem",fontStyle:"normal",_type:"MuiFontFace",name:"h1",letterSpacing:"-.01em",_key:"9dcdc696c5e1",fontWeight:"bold",mediaQueries:[{breakpoint:["sm"],typography:{_type:"MuiFontFace",fontSize:"2.8rem"},_type:"MuiMediaQuery"}]},{fontStyle:"normal",fontWeight:"700",_type:"MuiFontFace",name:"h2",letterSpacing:"-.02em",fontSize:"3.78rem",lineHeight:"1.25",_key:"773012a2f629"},{_type:"MuiFontFace",lineHeight:"1.4",fontWeight:"600",fontStyle:"normal",name:"h3",letterSpacing:"-.03em",fontSize:"3rem",_key:"3db2770e777a",mediaQueries:[{breakpoint:["sm"],typography:{_type:"MuiFontFace",fontSize:"1.4rem"},_type:"MuiMediaQuery"}]},{fontSize:"2.5rem",lineHeight:"1",_key:"25e38f5ef2e8",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h4"},{lineHeight:"1",_key:"0c2a3664b3b7",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h5",fontSize:"2rem"},{lineHeight:"1.2",_key:"520b4a68cfd1",fontStyle:"normal",fontWeight:"bold",_type:"MuiFontFace",name:"h6",fontSize:"1.7rem"},{letterSpacing:"-.02em",fontSize:"1rem",lineHeight:"1.5",_key:"f0eb2747eaed",fontStyle:"normal",fontWeight:"400",_type:"MuiFontFace",name:"body1"},{fontSize:"1.285rem",lineHeight:"1.5",_key:"0cb6508276ff",fontStyle:"normal",fontWeight:"550",_type:"MuiFontFace",name:"body2",letterSpacing:"0.0em"},{fontSize:"19px",textTransform:"none",_key:"e98d0a284abe",fontStyle:"normal",fontWeight:"700",letterSpacing:"-.03em",lineHeight:"1",_type:"MuiFontFace",name:"button"},{_key:"63b78c7fe4e2",fontStyle:"normal",fontWeight:"750",_type:"MuiFontFace",name:"subtitle1",letterSpacing:"-.03em",fontSize:"14px",lineHeight:"1"},{_type:"MuiFontFace",name:"subtitle2",letterSpacing:"-.03em",fontSize:"11px",lineHeight:"1..45",_key:"c0b6cd3da5001caa4fcf4e4dc404abea",fontStyle:"normal",fontWeight:"600"}]}}}}]);
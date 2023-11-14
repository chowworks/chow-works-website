import React, {FunctionComponent, useContext} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {AppBar, Button, Card, Grid, Typography} from '@mui/material'
import clsx from "clsx";
import {COLORS} from "../../../../theme/common/ColorPalette";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";
import Header from "./Header";
import {HeaderSectionType} from "../../../BlockContentTypes";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props: any) => ({
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: "32px",
        paddingRight: "56px",
        paddingTop: "32px",
        height: props.appBarHeight,
        position: "relative"
    }),
    opaque: {
        backgroundColor: `${COLORS.LIGHTGRAY} !important`,
    }
}))

export type EnhancedHeaderProps = {
    pageHeader?: HeaderSectionType
    updateIsLoading?: (value: boolean) => void
}

const EnhancedHeader: FunctionComponent<EnhancedHeaderProps> = (props) => {
    const customizedTheme = useContext(CustomizedThemeContext)

    const classes = useStyles({
        paddingLeft: customizedTheme.customizedTheme.spacing(4),
        appBarHeight: customizedTheme.customizedTheme.mixins.toolbar.height
    })

    // const mdDown = widthUtils.useIsWidthDown('md')

    // const theme = useTheme()
    // React.useEffect(() => {
    //     console.log("Page header in the header", props.pageHeader)
    // }, [props.pageHeader])

    // const lgUp = widthUtils.useIsWidthUp('md')

    return (
        <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>{props.pageHeader?.headerMenuRef.title ?

            <Grid container item>
                <Grid container item spacing={4} justifyContent='space-between' wrap='nowrap'>
                    <Grid item xs={3}>
                        <Button variant='contained'
                                href={props.pageHeader?.ctaButtonLink}><Typography variant='button' noWrap>{props.pageHeader?.ctaButtonText}</Typography></Button>
                    </Grid>
                    {
                        props.pageHeader.highlightedDetails.map((detail, index)=><Grid key={index} item xs={3}>
                            <Grid  item container xs={12} sm={6} maxWidth={350} spacing={1} wrap='nowrap'>
                                <Grid item maxWidth={64} style={{position: "relative"}}>

                                    <Card elevation={0} style={{
                                        width: "48px",
                                        height: "48px",
                                        backgroundColor: "#e3e3e3",
                                        borderRadius: "50%"
                                    }}>
                                        <Grid container justifyContent='center' alignContent='center' alignItems='center' style={{height:"100%", width:"100%"}}><Grid item>
                                            <img width={24} src={urlFor(detail.imageSrc ?? "").url() ?? ""} style={{paddingTop:"6px"}}/>
                                        </Grid></Grid>
                                    </Card>
                                    {/*<motion.div whileHover={{rotateY: 180}}*/}
                                    {/*            transition={{*/}
                                    {/*                duration: .5,*/}
                                    {/*            }}*/}
                                    {/*>*/}
                                    {/*</motion.div>*/}
                                </Grid>
                                <Grid item maxWidth={250}>
                                    <Grid item>
                                        <Typography variant='body1' color='textPrimary' noWrap>{detail.name}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2' color='textPrimary' noWrap>{detail.description}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
                <Grid container item justifyContent='center'>
                    {/*enhanced*/}
                    <Grid item style={{
                        padding: "16px",
                        // padding:"16px",
                        // maxWidth: "calc(100%-100px)",
                        // marginRight: "8px",
                        width: "100%",
                        position: "relative",
                        top: "16px",
                        borderRadius: 4,
                        backgroundColor: "black"
                    }}>
                        <Header isSearch={props.pageHeader.isSearch} pageHeader={props.pageHeader.headerMenuRef}/>
                    </Grid>
                </Grid></Grid>
            : <></>
        }</AppBar>
    );
}

export default EnhancedHeader
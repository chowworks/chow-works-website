import React, {FunctionComponent, useContext} from 'react'
import {Button, ButtonGroup, Grid, IconButton, Link, Typography, useTheme} from '@material-ui/core'
import {ResumeBioSectionType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {CloudDownload, Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";

interface IProps {
    sectionData: ResumeBioSectionType
    homePage: SanityTransformHwHomePage
}

const ResumeBio: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()
    const theme = useTheme()

    const mediaQueriesContext = useContext(MediaQueriesContext)

    const xsDown = mediaQueriesContext.xsDown

    return (<Grid container item style={{padding: theme.spacing(4)}} justifyContent='center'
                  className={classes.resumeSection} spacing={3}>
        <Grid container item md={6} justifyContent='center'>
            <Grid item container>
                <Typography component='div' display='inline' variant='h5'>{props.sectionData.title}
                    <Typography variant='h5'
                                color='primary'
                                display='inline'>.</Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant='body1'>{props.sectionData.introduction}</Typography>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <Grid item xs={3}>
                    <Typography gutterBottom variant='body1' style={{textTransform: "uppercase"}}>Phone</Typography>
                </Grid>
                <Grid item><Typography gutterBottom variant='body1'>{props.homePage.phone}</Typography></Grid>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <Grid item xs={3}><Typography gutterBottom variant='body1'
                                              style={{textTransform: "uppercase"}}>Email</Typography></Grid>
                <Grid item><Typography gutterBottom variant='body1'>{props.homePage.email}</Typography></Grid>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <Grid item xs={3}><Typography gutterBottom variant='body1'
                                              style={{textTransform: "uppercase"}}>Address</Typography></Grid>
                <Grid item><Typography gutterBottom variant='body1'>{props.homePage.address}</Typography></Grid>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <Grid item xs={12} container spacing={2} alignItems='center' justifyContent='center'>
                    <Grid item>
                        <IconButton color='primary' href={`https://facebook.com/${props.homePage.facebook}`}><Facebook/></IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color='primary'
                                    href={`https://twitter.com/${props.homePage.twitter}`}><Twitter/></IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color='primary'
                                    href={`https://instagram.com/${props.homePage.instagram}`}><Instagram/></IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color='primary'
                                    href={`https://linkedIn.com/in/${props.homePage.linkedIn}`}><LinkedIn/></IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container item md={6} style={{
            backgroundImage: `url(${urlFor(props.sectionData.mainImage ?? "").url()})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            minHeight: "350px"
        }}>
        </Grid>
        <Grid container item xs={12} sm={10} spacing={1} style={{marginTop: theme.spacing(2)}}>
            <Grid item container>
                <ButtonGroup fullWidth orientation={xsDown ? 'vertical' : "horizontal"}>
                    <Button
                        href={props.sectionData.resumeFile?.url + "?dl=James Terrell Singleton - Software Engineer - Resume.pdf"}
                        variant='contained' fullWidth color='primary'><CloudDownload
                        className={classes.iconOnButton}/><Typography variant="button" align='center' noWrap>
                        Resume</Typography></Button>
                    <Button variant='contained' fullWidth color='primary'><Typography variant="button" align='center'>Contact
                        Me</Typography></Button>
                    {props.sectionData.cvFile && props.sectionData.cvFile.url.length > 0 && <Button
                        href={props.sectionData.cvFile?.url + "?dl=James Terrell Singleton - Software Engineer - CV.pdf"}
                        variant='contained' fullWidth color='primary'><CloudDownload
                        className={classes.iconOnButton}/><Typography variant="button" align='center'>
                        CV</Typography></Button>}
                </ButtonGroup>
            </Grid>
        </Grid>
    </Grid>)
}

export default ResumeBio
import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'
import {ThwServiceItemType, ThwWhyChooseUsSectionType} from "../BlockContentTypes";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import transformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import cmsClient from "../abReplica/cmsClient";
import MediaQueries from "../layout/MediaQueries";
import {urlFor} from "../abReplica/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 'max-content',
        backgroundColor: theme.palette.primary.main
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: ThwWhyChooseUsSectionType
}

const ThwServicesSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(TransformHWTheme)
    console.log(props.sectionData)

    const [prosList, setProsList] = useState<ThwServiceItemType[]>()

    React.useEffect(() => {
        const realizedPros = props.sectionData?.prosList?.map((pro) => {
            return cmsClient.fetchRef(pro).then((serviceResp) => {
                return serviceResp
            })
        })

        Promise.all(realizedPros).then((response) => {
            setProsList(response)
        }).catch(console.log)
    }, [props.sectionData])
    return (

        <Grid container item className={classes.root} xs={12}>
            <Grid container item>
                <Grid item container xs={12} md={5} style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight:"600px",
                    backgroundImage: `url(${urlFor(props.sectionData.imageSrc).url()})`
                }}>
                </Grid>
                <Grid item container alignItems='center' alignContent='center' justifyContent='center' xs={12} md={7}
                      style={{padding: TransformHWTheme.spacing(5,3, 10)}}>
                    <Grid item container style={{marginBottom: "24px"}}>
                        <Typography display='inline'  gutterBottom color='secondary' variant='h4'
                                    align='center'>{props.sectionData.sectionTitle}</Typography>
                        <Typography variant='h4'
                                    color='textPrimary' display='inline' style={{letterSpacing:"-.25em"}}>____</Typography>
                    </Grid>
                    <Grid item container spacing={2} xs={11}>
                        {prosList?.map((service: ThwServiceItemType, index: number) => {
                            return <Grid key={index} container item >
                                <Grid container item style={{minHeight: "118px"}}>
                                    <Grid item container xs={3} style={{
                                        backgroundSize: "contain",
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: `url(${urlFor(service.imageSrc).url()})`
                                    }}>

                                    </Grid>
                                    <Grid container item xs={9} justifyContent='center'>
                                        <Grid container item xs={11} direction='column'>
                                            <Grid item container>
                                                <Typography gutterBottom variant='h6'
                                                            color='textPrimary'>{service.contentTitle}</Typography>
                                            </Grid>
                                            <Grid item container>
                                                <Typography variant='body1'
                                                            style={{color: transformHWTheme.palette.text.secondary}}>{service.contentText}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThwServicesSection
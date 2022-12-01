import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Chip, Grid, Typography, useTheme} from '@material-ui/core'
import {
    ResumeEducation,
    ResumeEducationSectionType,
    ResumeExperience,
    ResumeExperienceSectionType,
    ResumeSkillSectionType,
    ResumeSkillSet
} from "../BlockContentTypes";
import {COLORS} from "../../theme/DigitalResumeTheme";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    sectionData: ResumeEducationSectionType
}

const ResumeEducationSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()
    const globalClasses = useThwCommonStyles()
    const theme = useTheme()

    React.useEffect(() => {
    }, [])

    return (<Grid container item style={{padding: theme.spacing(4)}}  className={globalClasses.resumeSection}> <Grid container item spacing={3}>
        <Grid item container sm={4} alignContent='flex-start' spacing={1}>
            <Grid item><Typography variant='h6'>{props.sectionData.title}<Typography variant='h6'
                                                                                     color='primary'
                                                                                     display='inline'>.</Typography></Typography></Grid>
            <Grid item><Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
        </Grid>
        <Grid item container sm={8} spacing={2} justifyContent='center'>
            {
                props.sectionData.educationExperiences?.map((experience: ResumeEducation, index2:number) => {
                    return <Grid item container alignContent='flex-start'
                                 style={{
                                     borderBottom: `1px solid ${index2 >= (props.sectionData.educationExperiences?.length ?? 0) - 2?"transparent":COLORS.LIGHTGRAY}`,
                                     padding: theme.spacing(1.75,0)
                                 }} xs={11}>
                        <Grid container item spacing={2}>
                            <Grid item>
                            <Typography display='inline'
                                        variant='body2'>{experience.institutionName}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={2}>
                            <Grid item>

                                <Typography display='inline'
                                            variant='body1'>{experience.qualification}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>



                            <Grid item md={4}>
                                <Typography display='inline'
                                            variant='body1'>{experience.dateStart?.toString().replaceAll('-','.')}</Typography>

                                {/*</Grid>*/}
                                {/*<Grid item xs={1} container justifyContent='center'>*/}
                                <Typography display='inline'
                                            variant='body1'style={{margin: theme.spacing(0,1)}}>—</Typography>

                                {/*</Grid>*/}
                                {/*<Grid item xs={2} container>*/}
                                <Typography display='inline'
                                            variant='body1'>{experience.dateEnd?.toString().replaceAll('-','.')}</Typography>

                            </Grid>

                        </Grid>
                        <Grid container item>
                            <Typography
                                variant='body1' gutterBottom>{experience.description}</Typography>
                        </Grid>
                    </Grid>
                })
            }
        </Grid>
    </Grid></Grid>)
}

export default ResumeEducationSection
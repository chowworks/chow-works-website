import React, {FunctionComponent} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid} from '@mui/material'
import WebDevFooterMenuContainer from './WebDevFooterMenuContainer'
import {SanityMenuContainer} from "../../../common/sanityIo/Types";
import WebDevSiteTheme from "../../../theme/WebDevSiteTheme";
import TheWebsiteTheme from "../../../theme/Theme";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: WebDevSiteTheme.palette.secondary.main,
    // color: '#FDF3EB',
    // marginLeft: -1 * theme.spacing(1),
    // zIndex: 1000,
    padding: WebDevSiteTheme.spacing(4),
    '& .MuiFormLabel-root': {
      color: 'white',
    },
  },
  emailContainer: {
    height: '72px',
  },
  columnHeader: {
    fontWeight: 500,
    color: '#FDF3EB',
    marginBottom: '16px',
  },
  footerLink: {
    marginBottom: '8px',
  },
  newsletterForm: {
    maxWidth: '370px',
  },
  emailInputProps: {
    borderColor: '#FDF3EB',
    color: '#FDF3EB !important',
  },
}))

interface IProps {
  pageFooter?: SanityMenuContainer
  footerMenuSlug?:string
  updateIsLoading?: (value:boolean) => void
}

const WebDevFooter: FunctionComponent<IProps> = (props:IProps) => {
  const classes = useStyles(TheWebsiteTheme)

  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="flex-start">
        <Grid item xs={12}>
          {props.pageFooter && <WebDevFooterMenuContainer pageFooterMenu={props.pageFooter} updateIsLoading={props.updateIsLoading}
                                />}
        </Grid>
      </Grid>
    </Grid>

  )
}

export default WebDevFooter
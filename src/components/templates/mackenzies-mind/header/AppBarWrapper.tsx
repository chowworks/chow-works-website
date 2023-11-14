import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {AppBar} from "@mui/material";
import clsx from "clsx";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {COLORS} from "../../../../theme/common/ColorPalette";

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props: any) => ({
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: props.paddingLeft,
        height: props.appBarHeight
    }),
    opaque: {
        backgroundColor: `black !important`,
    },
}))

interface IProps { isAppBar?: boolean, children:any }

const AppBarWrapper: FunctionComponent<PropsWithChildren<IProps>> = (props:IProps) => {

    const customizedTheme = useContext(CustomizedThemeContext)
    const classes = useStyles({
        paddingLeft: customizedTheme.customizedTheme.spacing(4),
        appBarHeight: customizedTheme.customizedTheme.mixins.toolbar.height
    })

    return (
        props.isAppBar ? <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>
            {props.children}
        </AppBar>: <>{props.children}</>
    )
}

export default AppBarWrapper
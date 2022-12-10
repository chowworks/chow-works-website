import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useReducer,} from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";
import {Grid, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {v4 as uuidv4} from "uuid";
import ToolTipWrap from "../transform-hw/ToolTipWrap";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import PageContext from "../page-context/PageContext";
import ColoredPng from "../colored-png/ColoredPng";
import SnackbarContext from "../modal-context/SnackbarContext";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import QrCodeContext from "./QrCodeContext";
import QRCode from "react-qr-code";

type IProps = {};

type QrCodeStateType = {
    qr_code_value?: string
    // elementsObj?: { [key: string]: JSX.Element }
};
const initialState: QrCodeStateType = {};

const reducer = (state: any, action: any): QrCodeStateType => {
    switch (action.type) {
        case 'INITIAL':
            return initialState;
        case 'LOAD_QR_CODE':
            return {
                ...state,
                qr_code_value: action.payload.qr_code_value,
            };
        default:
            throw new Error();
    }
}

const QrCodeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const pageContext = useContext(PageContext)

    const init = async (url: string) => {
        await dispatch({type: "LOAD_QR_CODE", payload: {qr_code_value: url}})
    }

    const snackbarContext = useContext(SnackbarContext)

    const openSnackbar = async (selectedContacts: any[]) => {
        pageContext.analyticsId && firebaseAnalyticsClient.qrCodeShown && firebaseAnalyticsClient.qrCodeShown(state.qr_code_value ?? "", pageContext.analyticsId)
        // await dispatch({type: "LOAD_QR_CODE", payload: {qr_code_value: qr_code_value}})
        const snack = <Grid
            container
            style={{minWidth: "200px"}}
        >
            <div style={{ height: "256px",width: "256px" }}>
                {state.qr_code_value && <QRCode
                    size={256}
                    style={{height: "auto", maxWidth: "100%", width: "100%"}}
                    value={state.qr_code_value}
                    viewBox={`0 0 256 256`}
                />}
        </div>
        </Grid>

        snackbarContext.openSnackbar && await snackbarContext.openSnackbar(snack, null)
    }

    const newValue = useMemo(
        () => ({
            qr_code_value: state.qr_code_value,
            init,
            openSnackbar
        }),
        [
            state.qr_code_value,
            init,
            openSnackbar
        ]
    );

    return (
        <QrCodeContext.Provider value={newValue}>
            {props.children}
        </QrCodeContext.Provider>
    );
};

export default QrCodeProvider;
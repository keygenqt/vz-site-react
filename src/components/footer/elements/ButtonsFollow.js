import * as React from "react";
import {useContext} from "react";
import {LanguageContext, ConstantLinks, ConstantOther} from "../../../base";
import {Button} from "@mui/material";
import {Email, GitHub, LinkedIn, Telegram} from "@mui/icons-material";

export default function ButtonsFollow() {

    const {route} = useContext(LanguageContext)

    return (
        <React.Fragment>
            <Button onClick={() => route.openUrlNewTab(ConstantLinks.github)}>
                <GitHub style={{width: 20}}/>
            </Button>
            <Button onClick={() => route.openUrlNewTab(ConstantLinks.linkedIn)}>
                <LinkedIn/>
            </Button>
            <Button onClick={() => route.openUrlNewTab(ConstantLinks.telegram)}>
                <Telegram/>
            </Button>
            <Button onClick={() => route.openUrl(`mailto:${ConstantOther.email}`)}>
                <Email/>
            </Button>
        </React.Fragment>
    );
}
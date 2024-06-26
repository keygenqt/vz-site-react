import * as React from "react";
import {useContext} from "react";
import {ConstantLinks, ConstantOther, NavigateContext} from "../../../base";
import {Button, ButtonGroup} from "@mui/material";
import {Email, GitHub, LinkedIn, Telegram} from "@mui/icons-material";

export default function ButtonsFollow() {

    const {route} = useContext(NavigateContext)

    return (
        <React.Fragment>
            <ButtonGroup variant="outlined">
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
            </ButtonGroup>
        </React.Fragment>
    );
}

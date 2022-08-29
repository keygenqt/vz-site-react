import * as React from 'react';
import {useContext} from 'react';
import {AppFooter, AppTopBar, RootAnimationBg, TitleSquareAnimation} from "../components";
import PropTypes from "prop-types";
import {NavigateContext} from "../base";

export function BaseLayout(props) {

    const {route, conf} = useContext(NavigateContext)

    return (
        <React.Fragment>

            {route.isPage(
                conf.routes.ps.home
            ) ? <RootAnimationBg/> : null}

            {route.isPage(
                conf.routes.ps.articles,
                conf.routes.ps.utils,
                conf.routes.ps.projects,
            ) ? <TitleSquareAnimation/> : null}

            <AppTopBar/>

            <div className={"App AppTable"}>
                <div className={"AppTableRow"}>
                    <main style={{
                        verticalAlign: props.isCenter ? 'middle' : 'top'
                    }}>
                        {props.children}
                    </main>
                </div>
                <div className={"AppTableRow"}>
                    <footer>
                        <AppFooter/>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    )
}

BaseLayout.propTypes = {
    isCenter: PropTypes.bool,
    children: PropTypes.element.isRequired
};
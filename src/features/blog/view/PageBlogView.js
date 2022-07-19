import * as React from 'react';
import {Container} from "@mui/material";
import {useParams} from "react-router-dom";

function PageBlogView() {

    let {id} = useParams();

    return (
        <Container maxWidth="lg" className={"Page BlogView"}>
            PageBlogView {id}
        </Container>
    );
}

export default PageBlogView;

import React from "react";
import Img from "gatsby-image";
import styled from "react-emotion";

const BgImage = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1
    height: 100vh

    & > img {
        object-fit: cover !important
        object-position: 0% 0% !important
        font-family: "object-fit: cover !important; object-position: 0% 0% !important"
    }
`;

export default BgImage;

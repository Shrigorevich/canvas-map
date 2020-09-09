import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

export const VideoApi = (props) => {
    return (
        <iframe
            title={props.title}
            style={{ width: props.width, height: props.height }}
            src={`https://www.youtube.com/embed/${props.link}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(VideoApi);

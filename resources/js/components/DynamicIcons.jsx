import React from "react";
import {AiOutlineUser} from "react-icons/ai";
import {MdOutlinePlayLesson, MdOutlineReviews} from "react-icons/md";
import {IoShareSocialOutline} from "react-icons/io5";
import {TfiLayoutSliderAlt} from "react-icons/tfi";
import {BsChatLeftText} from "react-icons/bs";
import {GrContactInfo} from "react-icons/gr";

const DynamicIcon = (props) => {
    const icons = {
        AiOutlineUser,
        MdOutlinePlayLesson,
        MdOutlineReviews,
        IoShareSocialOutline,
        TfiLayoutSliderAlt,
        BsChatLeftText,
        GrContactInfo
    };

    const TagComponent = icons[props.name];
    return <TagComponent  {...props} />
};

export default DynamicIcon;

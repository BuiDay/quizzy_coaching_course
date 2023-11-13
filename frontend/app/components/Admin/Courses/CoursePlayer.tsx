import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';

type Props = {
    videoUrl?: string,
    title?: string
}

const CoursePlayer: React.FC<Props> = ({ videoUrl = "3e1941cb607a405a8aa02fe94a884ec7", title }) => {
    const [videoData, setVideoData] = useState({ otp: "", playbackInfo: "" });

    useEffect(() => {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/course/generateVideoUrl`, {
            videoId: videoUrl
        }).then(res => setVideoData(res.data))
    }, [])

    return (
        <>
            {
                videoData.otp && videoData.playbackInfo !== "" ? (
                    <div style={{ paddingTop: "41%", position: "relative" }}>
                        <iframe
                            src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}`}
                            style={{ border: "0", width: "90%", height: "100%", position: "absolute", top: "0", left: "0" }}
                            allow="encrypted-media"
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                ) : <Loader />
            }
        </>
    );
};

export default CoursePlayer;
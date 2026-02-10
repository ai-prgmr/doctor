import React from 'react';

interface VideoCardProps {
    videoSrc: string;
    name: string;
    procedure: string;
    quote: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
    videoSrc,
    name,
    procedure,
    quote,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-video bg-gray-100">
                <iframe width="560" height="315" src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <blockquote className="text-gray-600 italic mb-4 flex-grow">"{quote}"</blockquote>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                    <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{procedure}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;

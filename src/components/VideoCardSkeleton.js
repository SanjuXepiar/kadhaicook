import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const VideoCardSkeleton = () => {
  return (
    <SkeletonTheme>
      <div className="videocard_VideoCardSkeleton">
        <Skeleton height={100} />
        <div className="videocardInfo">
          <Skeleton circle={true} />
          <div className="videocardText">
            <h4>
              <Skeleton count={2} />
            </h4>
            <p>
              <Skeleton width={100} />
              <Skeleton width={100} />
            </p>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default VideoCardSkeleton;

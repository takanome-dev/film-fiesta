import Skeleton from 'react-loading-skeleton';

interface SkeletonWrapperProps {
  className?: string;
  count?: number;
  height?: number;
  width?: number;
  radius?: number;
}

const SkeletonWrapper = ({
  className,
  count,
  width,
  height,
  radius,
}: SkeletonWrapperProps) => {
  const skeletonArray = Array(count || 1).fill(true);
  return (
    <>
      {skeletonArray.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={className || ''} key={index}>
          <Skeleton
            height={height}
            width={width}
            borderRadius={radius}
            count={1}
          />
        </div>
      ))}
    </>
  );
};

export default SkeletonWrapper;

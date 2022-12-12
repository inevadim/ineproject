import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styles from './Skeleton.module.scss';
export const SkeletonMaket = () => {
  return (
    <Stack className={styles.skeletonMaket} spacing={1}>
      <Skeleton variant="circular" width={190} height={190} />
      <Skeleton variant="rectangular" width={190} height={80} />
      <Skeleton variant="rounded" width={190} height={80} />
    </Stack>
  );
};

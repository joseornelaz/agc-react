import * as React from 'react';
import AvatarMui from '@mui/material/Avatar';

type AvatarProps = {
    alt?: string;
    src?: string;
    width?: number;
    height?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, width, height }) => {
  return (
      <AvatarMui
        src={src}
        sx={{ width, height }}
      />
  );
}

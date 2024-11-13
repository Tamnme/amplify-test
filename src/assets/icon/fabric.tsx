import React from 'react';

import { IconProps } from 'types/icon';

export const FabricIcon: React.FC<IconProps> = ({
  size = '22',
  color = 'currentColor',
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M16.8398 2.15039L15.3398 0.650391L13.8398 2.15039L12.3398 0.650391L10.8398 2.15039L9.33984 0.650391L7.83984 2.15039L6.33984 0.650391L4.83984 2.15039L3.33984 0.650391L1.83984 2.15039L0.339844 0.650391V20.6504L1.83984 19.1504L3.33984 20.6504L4.83984 19.1504L6.33984 20.6504L7.83984 19.1504L9.33984 20.6504L10.8398 19.1504L12.3398 20.6504L13.8398 19.1504L15.3398 20.6504L16.8398 19.1504L18.3398 20.6504V0.650391L16.8398 2.15039ZM16.3398 17.6504H2.33984V3.65039H16.3398V17.6504Z"
        fill={color}
      />
    </svg>
  );
};

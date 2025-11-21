import * as React from 'react';

export type IconComponentProps = React.SVGAttributes<SVGElement> & {
  color?: string;
  size?: string | number;
  title?: string;
};

export function withValidIcon(
  Icon: (props: IconComponentProps) => React.ReactNode
) {
  return Icon as unknown as React.ComponentType<IconComponentProps>;
}

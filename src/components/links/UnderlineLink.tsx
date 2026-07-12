import * as React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

type UnderlineLinkProps = {
  /** Weight emphasis for links inside running prose; leave off for list/metadata links. */
  bold?: boolean;
} & UnstyledLinkProps;

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnderlineLinkProps>(
  ({ children, className, bold = false, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          'animated-underline custom-link inline-flex items-center',
          bold && 'font-medium',
          'focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2',
          'border-current border-b border-dotted hover:border-transparent',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;

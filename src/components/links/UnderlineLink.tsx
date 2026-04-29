import * as React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          'animated-underline custom-link inline-flex items-center font-medium',
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

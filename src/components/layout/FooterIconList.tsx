import type { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap">
    {props.children}

    <style jsx>
      {`
        .footer-icon-list :global(a:not(:last-child)) {
          margin-right: 0.75rem;
        }

        .footer-icon-list :global(a) {
          color: #a0aec0;
        }

        .footer-icon-list :global(a:hover) {
          color: #4a5568;
        }

        .footer-icon-list :global(svg) {
          fill: currentColor;
          width: 1.25rem;
          height: 1.25rem;
        }
      `}
    </style>
  </div>
);

export { FooterIconList };

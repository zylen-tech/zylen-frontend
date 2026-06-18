import { AppConfig } from '../../config/site.config';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}.
    <style jsx>
      {`
        .footer-copyright :global(a) {
          color: #053959;
        }

        .footer-copyright :global(a:hover) {
          text-decoration: underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };

import Image from 'next/image';

import { ASSETS } from '../../constants/content';

type ILogoProps = {
  white?: boolean;
};

const Logo = (props: ILogoProps) => (
  <Image
    src={props.white ? ASSETS.logo.whiteIcon : ASSETS.logo.icon}
    alt="Zylen"
    width={40}
    height={40}
    className="h-10 w-auto object-contain"
  />
);

export { Logo };

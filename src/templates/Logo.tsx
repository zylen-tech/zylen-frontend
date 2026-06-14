import Image from 'next/image';

type ILogoProps = {
  white?: boolean;
};

const Logo = (props: ILogoProps) => (
  <Image
    src={
      props.white
        ? '/assets/brand/logo/white icon.png'
        : '/assets/brand/logo/icon.png'
    }
    alt="Zylen"
    width={40}
    height={40}
    className="h-10 w-auto object-contain"
  />
);

export { Logo };

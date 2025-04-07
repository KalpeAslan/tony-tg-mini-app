import Image from 'next/image';

interface AvatarProps {
  photoUrl: string;
  name: string;
}

export const Avatar = ({ photoUrl, name }: AvatarProps) => {
  return (
    <div className="flex justify-center gap-2 items-center">
      <Image src={photoUrl} alt="photo" width={44} height={44} className="rounded-full" />
      <p className="text-white text-base font-roboto">{name}</p>
    </div>
  );
};

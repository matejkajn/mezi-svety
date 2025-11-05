type Props = {
  image: string;
  name: string;
  description: string;
  phone: string;
  content: string;
};

const ProfileCard = ({ image, name, description, phone, content }: Props) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="no-flex">
        <div className="items-center flex">
          <img
            className="w-[108px] h-[108px] rounded-full"
            src={`/assets/profiles/${image}`}
            alt=""
          />
          <div className="no-flex px-4">
            <div className="font-bold font-times">{name}</div>
            {description && <div className="text-sm">{description}</div>}
            <a className="text-sm" href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        </div>
        <div>{content && <div className="py-3 text-sm">{content}</div>}</div>
      </div>
    </div>
  );
};

export default ProfileCard;

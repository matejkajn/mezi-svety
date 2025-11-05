type Props = {
  image: string;
  name: string;
  description: string;
  author: string;
};

const ProjectCard = ({ image, name, description, author }: Props) => {
  return (
    <div className="py-5">
      <img className="w-full h-auto" src={`/assets/projects/${image}`} alt="" />
      <div className="pt-4">
        <div className="font-bold p-0 m-0">{name}</div>
        <div className="p-0 m-0">{description}</div>
        <div className="font-bold p-0 m-0">{author}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

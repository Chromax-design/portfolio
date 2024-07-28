import { socialIcons } from "@/data";

const Socials = ({ isWhite }: { isWhite?: boolean }) => {
  return (
    <div className="flex gap-2">
      {socialIcons.map((item) => {
        if (item.id === 3 && isWhite) {
          item.style = "text-white";
        }
        return (
          <a
            href={item.link}
            className={`${item.style} text-2xl hover:scale-125 transition-all duration-200`}
            key={item.id}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;

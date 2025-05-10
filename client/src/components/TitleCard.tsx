import { Button, ImageWrapper } from "@/styledComponents";
import type { TitleCardProps } from "@/types/common";
import { useNavigate } from "react-router-dom";

export function TitleCard({
  title,
  text,
  image_url,
  list,
  btnLink,
  btnTitle,
}: TitleCardProps) {
  const navigate = useNavigate();
  return (
    <div>
      {image_url && <ImageWrapper src={image_url} alt="" />}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {list &&
        Array.isArray(list) &&
        list.map((item, i) => <p key={i}>{item}</p>)}
      {btnLink && btnTitle && (
        <Button onClick={() => navigate(btnLink)}>{btnTitle}</Button>
      )}
    </div>
  );
}

import { HeartButton } from "@/styles";

export default function FavoriteButton({ isLiked, onToggle }) {
  return <HeartButton onClick={onToggle}>{isLiked ? "💜" : "🤍"}</HeartButton>;
}

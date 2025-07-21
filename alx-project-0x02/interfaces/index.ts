export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  onSubmit: (post: CardProps) => void;
  onClose: () => void;
}

export interface ButtonProps {
  size: string;
  shape: string;
}

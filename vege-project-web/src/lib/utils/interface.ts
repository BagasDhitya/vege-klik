import React from "react";

export interface LayoutProps {
  children?: React.ReactNode;
}

export interface CardProps {
  id: string;
  title?: string;
  description?: string;
  image_url?: string;
  alt?: string;
  price?: number;
}

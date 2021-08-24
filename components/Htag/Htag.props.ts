import { ReactNode } from "react";

export type Tag = 'h1'| 'h2'| 'h3';

export interface HtagProps {
  tag: Tag;
  children: ReactNode;
}
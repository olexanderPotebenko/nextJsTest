import { PProps } from "./P.props";
import cn from "classnames";
import styles from "./P.module.css";

export const P = ({
  children,
  size = "medium",
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.large]: size === "large",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

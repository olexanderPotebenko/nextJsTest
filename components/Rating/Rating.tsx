import { useState, useCallback, KeyboardEvent, useMemo } from "react";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import StartIcon from "./star.svg";
import styles from "./Rating.module.css";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [preRating, setPreRating] = useState<number>(rating);

  const onClick = useCallback(
    (i: number) => {
      if (!isEditable || !setRating) return;
      setRating(i);
    },
    [isEditable, setRating]
  );

  const handleSpace = useCallback(
    (i: number, e: KeyboardEvent<SVGAElement>) => {
      if (e.code !== "Space" || !setRating) return;
      setRating(i);
    },
    [setRating]
  );

  const changeDisplay = useCallback(
    (i: number) => {
      if (!isEditable) return;
      setPreRating(i);
    },
    [isEditable]
  );

  const constructRating = useMemo(
    () =>
      new Array(5).fill(undefined).map((r, i: number) => (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < (preRating || rating),
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(0)}
          onClick={() => onClick(i + 1)}
        >
          <StartIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      )),
    [changeDisplay, handleSpace, isEditable, onClick, preRating, rating]
  );

  return (
    <div {...props}>
      {constructRating.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

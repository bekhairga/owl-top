import React, { KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';
const Rating = ({
	isEditable = false,
	rating,
	setRating,
	className,
	...props
}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	const changeRatingDisplay = (index: number) => {
		if (!isEditable) return;
		constructRating(index);
	};

	const clickRating = (index: number) => {
		if (!isEditable || !setRating) return;
		setRating(index);
	};

	const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code !== 'Space' || !setRating) return;
		setRating(index);
	};

	React.useEffect(() => {
		constructRating(rating);
	}, [rating]);
	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map(
			(ratingElement: JSX.Element, index: number) => {
				return (
					<span
						key={index}
						className={cn(styles.star, {
							[styles.filled]: index < currentRating,
							[styles.editable]: isEditable,
						})}
						onMouseEnter={() => changeRatingDisplay(index + 1)}
						onMouseLeave={() => changeRatingDisplay(rating)}
						onClick={() => setRating && setRating(index + 1)}
					>
						<StarIcon
							tabIndex={isEditable ? 0 : -1}
							onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
								isEditable && handleSpace(index + 1, e)
							}
						/>
					</span>
				);
			}
		);
		setRatingArray(updatedArray);
	};
	return (
		<div {...props}>
			{ratingArray.map((rating: JSX.Element, index: number) => (
				<span key={index}>{rating}</span>
			))}
		</div>
	);
};

export default Rating;

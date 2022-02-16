import React from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';
const Tag = ({
	size = 's',
	color = 'ghost',
	className,
	href,
	children,
	...props
}: TagProps) => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles[size]]: size,
				[styles[color]]: color,
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export default Tag;

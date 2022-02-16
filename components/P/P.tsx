import React from 'react';
import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';
const P = ({ size = 'm', className, children, ...props }: PProps) => {
	return (
		<p className={cn(styles.p, className, { [styles[size]]: size })} {...props}>
			{children}
		</p>
	);
};

export default P;

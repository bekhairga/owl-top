import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface TagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}

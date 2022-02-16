import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/Button/Button';
import { Htag } from '../components/index';
import P from '../components/P/P';
import Tag from '../components/Tag/Tag';
import Rating from '../components/Rating/Rating';
import React from 'react';
const Home: NextPage = () => {
	const [rating, setRating] = React.useState<number>(4);
	return (
		<div className=''>
			<Htag tag='h1'>Htag</Htag>
			<Button arrow='right' appearance='primary'>
				Button
			</Button>
			<Button appearance='ghost' arrow='down'>
				Button
			</Button>
			<P>Something</P>
			<P size='l'>Something</P>
			<P size='s'>Something</P>
			<Tag size='s' color='ghost'>
				Something
			</Tag>
			<Tag size='m' color='grey'>
				Something
			</Tag>
			<Tag size='s' color='green'>
				Something
			</Tag>
			<Tag size='m' color='red'>
				Something
			</Tag>
			<Tag size='s' color='primary'>
				Something
			</Tag>
			<Tag size='m'>Something</Tag>
			<Rating isEditable rating={rating} setRating={setRating} />
			<Rating rating={3} />
		</div>
	);
};

export default Home;

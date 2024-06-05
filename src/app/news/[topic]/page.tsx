"use client";

import React, { useMemo } from "react";
import { useState } from "react";
import TopicItem from "./TopicItem";
import Nav, { topics } from "./Nav";
import { useRouter } from "next/navigation";

import styles from "./styles.module.css";

const tempNews = [
	{
		id: 1,
		heading: "First one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: true,
		topic: "react",
	},
	{
		id: 2,
		heading: "Second one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: true,
		topic: "react",
	},
	{
		id: 3,
		heading: "Third one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: false,
		topic: "css",
	},
	{
		id: 4,
		heading: "Fourth one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: true,
		topic: "css",
	},
	{
		id: 5,
		heading: "Fivth one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: true,
		topic: "react",
	},
	{
		id: 6,
		heading: "Sixth one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: false,
		topic: "react",
	},
	{
		id: 7,
		heading: "Seventh one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: true,
		topic: "javasctipt",
	},
	{
		id: 8,
		heading: "Eighth one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: false,
		topic: "javascript",
	},
	{
		id: 9,
		heading: "Ninth one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: false,
		topic: "css",
	},
	{
		id: 10,
		heading: "Tenth one!",
		link: "https://google.com",
		date: Date.now(),
		author: "Roberto Fuentes",
		atx: true,
		topic: "react",
	},
];

function Page({ params }: { params: { topic: string } }) {
	const [news, setNews] = useState(tempNews);
	const router = useRouter();

	if (
		![...topics.map((topic) => topic.toLocaleLowerCase())].includes(
			params.topic,
		)
	) {
		router.push("/news/react");
	}

	const filteredNews = useMemo(() => {
		return news.filter((item) => item.topic === params.topic);
	}, [news, params.topic]);

	return (
		<main className={`${styles.topic} main-layout`}>
			<h2>News</h2>
			<Nav topic={params.topic} />
			<ul className={styles.list}>
				{filteredNews.map((item) => (
					<TopicItem item={item} key={item.id} />
				))}
			</ul>
		</main>
	);
}

export default Page;

"use client";

import { useEffect, useState } from "react";
import Menu, { getTags } from "../components/sidebar.tsx";
import Emoticons from "../components/emoticons.tsx";

const emoticons = require("emoticon-data")["emoticons"];

export default function Page() {
	const [actualTag, setActualTag] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	function setTag(tag) {
		if (tag === actualTag) {
			tag = "all";
		}
		setActualTag(tag);
		window.history.pushState({ tag }, "", `/${tag === "all" ? '' : tag}`);
	}

	useEffect(() => {
		const path = window.location.pathname;
		const tag = path.split("/")[1]; // Assuming the format is /<tag>
		if (tag) {
			if (getTags(emoticons).includes(tag)) {
				setActualTag(tag);
				setLoading(false);
			} else {
				setError(`Tag "${tag}" not found`);
				setLoading(false);
			}
		}
	}, []);

	return (
		<div className="flex">
			<Menu setTag={setTag} emoticons={emoticons}/>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : (
				<Emoticons actualTag={actualTag} emoticons={emoticons}/>
			)}
		</div>
	)
}

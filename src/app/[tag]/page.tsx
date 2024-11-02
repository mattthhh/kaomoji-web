"use client";

import { useEffect, useState } from "react";
import Menu, { getTags } from "../components/sidebar.tsx";
import Emoticons from "../components/emoticons.tsx";
import Nofitication from "../components/notification.tsx";

const emoticons = require("emoticon-data")["emoticons"];

export default function Page() {
	const [actualTag, setActualTag] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [showNotification, setShowNotification] = useState(false);

	function setTag(tag) {
		if (tag === actualTag) {
			tag = "all";
		}
		setActualTag(tag);
		window.history.pushState({ tag }, "", `/${tag === "all" ? '' : tag}`);
		setError('');
	}

	useEffect(() => {
		const path = window.location.pathname;
		let tag = path.split("/")[1];
		// convert %20 to space
		tag = tag.replace(/%20/g, ' ');
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
			<Menu setTag={setTag} emoticons={emoticons} actualTag={actualTag}/>
			<Nofitication show={showNotification}/>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : (
				<Emoticons actualTag={actualTag} emoticons={emoticons} setShowNotification={setShowNotification}/>
			)}
		</div>
	)
}

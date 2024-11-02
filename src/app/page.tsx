"use client";

import { useState } from "react";
import Menu from "./components/sidebar.tsx";
import Emoticons from "./components/emoticons.tsx";

const emoticons = require("emoticon-data")["emoticons"];

export default function Page() {
	const [actualTag, setActualTag] = useState("all");

	function setTag(tag) {
		if (tag === actualTag) {
			tag = "all";
		}
		setActualTag(tag);
		window.history.pushState({ tag }, "", `/${tag === "all" ? '' : tag}`);
	}

	return (
		<div className="flex">
			<Menu setTag={setTag} emoticons={emoticons}/>
			<Emoticons actualTag={actualTag} emoticons={emoticons}/>
		</div>
	)
}

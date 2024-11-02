"use client";

import { useState } from "react";
import Menu from "./components/sidebar.tsx";
import Emoticons from "./components/emoticons.tsx";

const emoticons = require("emoticon-data")["emoticons"];

export default function Page() {
	const [actualTag, setActualTag] = useState("all");

	return (
		<div className="flex">
			<Menu setActualTag={setActualTag} emoticons={emoticons}/>
			<Emoticons actualTag={actualTag} emoticons={emoticons}/>
		</div>
	)
}

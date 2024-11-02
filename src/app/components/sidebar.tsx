export function getTags(emoticons) {
	const tags = new Set();
	for (const emoticon of emoticons) {
		for (const tag of emoticon.tags) {
			tags.add(tag);
		}
	}
	return Array.from(tags).sort();
}

function setTag(tag, setActualTag) {
	setActualTag(tag);
	window.history.pushState({ tag }, "", `/${tag}`);
}

function Menu({ setActualTag, emoticons}) {
	return (
		<div className="left-0 bg-blue-500 w-1/4">
			{getTags(emoticons).map((tag, index) => (
				<Tag key={index} tag={tag} setActualTag={setActualTag} />
			))}
		</div>
	)
}

function Tag({ tag, setActualTag }) {
	return (
		<div className="p-3 text-center text-slate-200">
			<button onClick={() => setTag(tag, setActualTag)}>{tag}</button>
		</div>
	)
}

export default Menu;

export function getTags(emoticons) {
	const tags = new Set();
	for (const emoticon of emoticons) {
		for (const tag of emoticon.tags) {
			tags.add(tag);
		}
	}
	return Array.from(tags).sort();
}


function Menu({ setTag, emoticons, actualTag}) {
	return (
		<div className="left-0 bg-blue-500 w-1/4">
			{getTags(emoticons).map((tag, index) => (
				<Tag key={index} tag={tag} setTag={setTag} actualTag={actualTag}/>
			))}
		</div>
	)
}

function Tag({ tag, setTag, actualTag }) {
	return (
		<div className={`transition-all duration-300 ease-in-out p-3 text-center ${(actualTag === tag) ? 'text-slate-50 font-bold text-lg' : 'text-slate-300'}`}>
			<button onClick={() => setTag(tag)}>{tag}</button>
		</div>
	)
}

export default Menu;

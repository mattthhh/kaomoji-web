function Emoticons({ actualTag, emoticons }) {
	return (
		<div className="w-3/4 emoticons-grid">
			{actualTag === "all" ? emoticons.map((emoticon) => (
				<Emoticon key={emoticon.id} emoticon={emoticon} />
			)) :
				emoticons.filter((emoticon) => emoticon.tags.includes(actualTag)).map((emoticon) => (
				<Emoticon key={emoticon.id} emoticon={emoticon} />
			))}
		</div>
	)
}

function Emoticon({ emoticon }) {
	return (
		<div className="emoticon">{emoticon.string}</div>
	)
}

export default Emoticons;

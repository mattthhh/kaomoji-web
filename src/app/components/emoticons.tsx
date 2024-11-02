function Emoticons({ actualTag, emoticons }) {
	return (
		<div className="w-3/4">
			<ul>
				{emoticons.filter((emoticon) => emoticon.tags.includes(actualTag)).map((emoticon) => (
					<Emoticon key={emoticon.id} emoticon={emoticon} />
				))}
			</ul>
		</div>
	)
}

function Emoticon({ emoticon }) {
	return (
		<li>{emoticon.string}</li>
	)
}

export default Emoticons;

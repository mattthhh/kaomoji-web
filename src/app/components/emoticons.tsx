function CopyToClipboard(e, setShowNotification) {
	const text = e.target.innerText;
	const textarea = document.createElement("textarea");
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	setShowNotification(true);
	setTimeout(() => {
		setShowNotification(false);
	}, 2000);
}

function Emoticons({ actualTag, emoticons, setShowNotification }) {
	return (
		<div className="w-3/4 emoticons-grid">
			{actualTag === "all" ? emoticons.map((emoticon) => (
				<Emoticon key={emoticon.id} emoticon={emoticon} setShowNotification={setShowNotification} />
			)) :
				emoticons.filter((emoticon) => emoticon.tags.includes(actualTag)).map((emoticon) => (
				<Emoticon key={emoticon.id} emoticon={emoticon} setShowNotification={setShowNotification} />
			))}
		</div>
	)
}

function Emoticon({ emoticon, setShowNotification }) {
	return (
		<div onClick={(e) => CopyToClipboard(e, setShowNotification)} className="cursor-pointer emoticon">{emoticon.string}</div>
	)
}

export default Emoticons;

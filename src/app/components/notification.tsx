function Notification({ show }) {
	return (
		<div className={`fixed bottom-4 transform -translate-x-1/2 p-2 bg-green-500 text-white rounded transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'} myleft`}>
			Copied to clipboard!
		</div>
	)
}

export default Notification;

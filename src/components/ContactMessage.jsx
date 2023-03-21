function ContactMessage({ setShowMessage }) {
	return (
		<div className="flex flex-col justify-center text-center text-[#607B96] gap-4">
			<div className="text-white text-xl font-bold">Thank You! 🤘</div>
			<div className="w-4/6 mx-auto">
				Your Message has been accepted. You will recieve answer really
				soon!
			</div>
			<div>
				<button
					className="border border-[#1E2D3D] px-4 py-2 rounded-md bg-[#1C2B3A] text-white"
					onClick={() => setShowMessage(false)}
				>
					send-new-message
				</button>
			</div>
		</div>
	);
}
export default ContactMessage;

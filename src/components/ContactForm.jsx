import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

function ContactForm({ getData, dateString, setShowMessage }) {
	const firebaseConfig = {
		apiKey: import.meta.env.VITE_API_KEY,
		authDomain: import.meta.env.VITE_AUTH_DOMAIN,
		projectId: import.meta.env.VITE_PROJECT_ID,
		storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
		appId: import.meta.env.VITE_APP_ID,
	};

	initializeApp(firebaseConfig);

	const db = getFirestore();
	const colRef = collection(db, "messages");

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const data = {
		name: name,
		email: email,
		message: message,
		date: dateString,
	};

	useEffect(() => {
		getData(data);
	}, [name, email, message]);

	const onSubmit = (data) => {
		getData({ ...data, date: dateString });
		addDoc(colRef, { ...data, date: dateString });
		// console.log({ ...data, date: dateString });
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="py-20 px-4 text-[#607B96] flex flex-col gap-4 text-sm w-11/12  mx-auto md:w-8/12"
		>
			<div className="flex flex-col gap-1">
				<label htmlFor="name">_name:</label>
				<input
					{...register("name", { required: true })}
					id="name"
					value={name}
					className="rounded-md bg-[#011221] border border-[#1E2D3D] h-8 px-4 py-1"
					onChange={(e) => setName(e.target.value)}
				/>
				{errors.name && <span>This field is required</span>}
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="email">_email:</label>
				<input
					{...register("email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					id="email"
					className="rounded-md bg-[#011221] border border-[#1E2D3D] px-4 py-1 h-8"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{errors.email && (
					<span>Please enter a valid email address</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="message">_message:</label>
				<textarea
					{...register("message", { required: true })}
					id="message"
					className="rounded-md bg-[#011221] border border-[#1E2D3D] px-4 py-2 h-32"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{errors.message && <span>This field is required</span>}
			</div>
			<div>
				<button
					type="submit"
					className="border border-[#1E2D3D] px-4 py-2 rounded-md bg-[#1C2B3A] text-white hover:bg-slate-700"
					onClick={()=>setShowMessage(true)}
				>
					submit-message
				</button>
			</div>
		</form>
	);
}
export default ContactForm;

import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactMessage from "../components/ContactMessage";

function ContactMe() {
	const [data, setData] = useState({});
	const [showMessage, setShowMessage] = useState(false);
	const codeBind = (data) => {
		setData(data);
	};
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const milliseconds = Date.now();
	const date = new Date(milliseconds);

	const dayOfWeek = days[date.getDay()];
	const dayOfMonth = date.getDate();
	const month = months[date.getMonth()];

	const dateString = `${dayOfWeek} ${dayOfMonth} ${month}`;
	return (
		<div className="grow flex text-sm ">
			<div className=" 2xl:text-md text-sm text-[#607B96]  basis-2/12  border-r border-[#1E2D3D] h-full flex">
				<div className="grow flex flex-col">
					<div className="text-white basis-6 border-b border-b-[#1E2D3D] p-2">
						<i className="ri-arrow-down-s-fill px-2"></i>
						<span>contacts</span>
					</div>

					<div className="flex flex-col px-4 py-4">
						<div className="flex items-center transition duration-200 ease-in-out hover:text-slate-400">
							<i className="ri-mail-fill pr-2 text-lg "></i>

							<span className="text-xs transition duration-200 ease-in-out hover:text-slate-400 cursor-pointer">
								ejazahmadyousuf2@gmail
							</span>
						</div>
						<div className="flex items-center transition duration-200 ease-in-out hover:text-slate-400">
							<i className="ri-phone-fill pr-2 text-lg "></i>
							<span className="text-xs transition duration-200 ease-in-out hover:text-slate-400 cursor-pointer">
								+91xxxxxxxxxx
							</span>{" "}
						</div>
					</div>
					<div className="text-white basis-6 border-y border-y-[#1E2D3D] p-2">
						<i className="ri-arrow-down-s-fill px-2"></i>
						<span>find-me-also-in</span>
					</div>
					<div className="flex flex-col px-4 py-4">
						<div className="flex items-center transition duration-200 ease-in-out hover:text-slate-400">
							<i className="ri-external-link-line pr-2 text-lg "></i>
							<a
								className="text-xs"
								href="https://dev.to/yousufejazahmad"
							>
								Dev.to
							</a>
						</div>
						<div className="flex items-center transition duration-200 ease-in-out hover:text-slate-400">
							<i className="ri-external-link-line pr-2 text-lg "></i>
							<a
								className="text-xs"
								href="https://www.linkedin.com/in/yousufejazahmad/"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col grow">
				<div className="basis-6 border-b border-b-[#1E2D3D] flex">
					<div className="border-r border-r-[#1E2D3D] p-2  text-[#607B96] flex w-60 justify-between items-center">
						<span>
							{" "}
							<i className="ri-arrow-down-s-fill text-[#011627]"></i>{" "}
							contacts
						</span>
						<i className="ri-close-fill"></i>
					</div>
				</div>
				<div className="grow flex ">
					<div className="basis-5/12 border-r border-r-[#1E2D3D] flex justify-center ">
						{showMessage ? (
							<ContactMessage setShowMessage={setShowMessage} />
						) : (
							<ContactForm
								getData={codeBind}
								dateString={dateString}
								setShowMessage={setShowMessage}
							/>
						)}
					</div>
					<div className="basis-7/12 text-[#4D5BCE] flex justify-center py-20 font-semibold">
						<div>
							<div>
								<span className="text-[#C98BDF]"> const </span>
								button
								<span className="text-[#C98BDF]"> =</span>{" "}
								document
								<span className="text-[#607B96]">.</span>
								querySelector
								<span className="text-[#607B96]">(</span>
								<span className="text-[#FEA55F]">
									'#sendBtn'
								</span>
								<span className="text-[#607B96]">);</span>
							</div>
							<br />
							<div>
								<span className="text-[#C98BDF]">const </span>
								<span>message </span>
								<span className="text-[#C98BDF]"> = </span>
								<span className="text-[#607B96]">&#123;</span>
							</div>
							<div>
								<span>&nbsp;name</span>
								<span className="text-[#607B96]">: </span>
								<span className="text-[#FEA55F]">
									"{data.name}"
								</span>
							</div>
							<div>
								<span>&nbsp;email</span>
								<span className="text-[#607B96]">: </span>
								<span className="text-[#FEA55F]">
									"{data.email}"
								</span>
							</div>
							<div>
								<span>&nbsp;message</span>
								<span className="text-[#607B96]">: </span>
								<span className="text-[#FEA55F]">
									"{data.message}"
								</span>
							</div>
							<div>
								<span className="text-[#607B96]">
									&nbsp;date:
								</span>
								<span className="text-[#FEA55F]">
									{" "}
									"{dateString}"
								</span>
							</div>
							<div className="text-[#607B96]">&#125;</div>
							<br />
							<div>
								<span>
									button
									<span className="text-[#607B96]">.</span>
									addEventListener
								</span>
								<span className="text-[#607B96]">(</span>
								<span className="text-[#FEA55F]">'click'</span>
								<span className="text-[#607B96]">, </span>
								<span className="text-[#607B96]">()</span>
								<span className="text-[#C98BDF]"> =&gt; </span>
								<span className="text-[#607B96]">&#123;</span>
							</div>
							<div>
								<span>&nbsp;form</span>
								<span className="text-[#607B96]">.</span>
								<span>send</span>
								<span className="text-[#607B96]">(</span>
								<span>message</span>
								<span className="text-[#607B96]">);</span>
							</div>
							<div className="text-[#607B96]">&#125;)</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ContactMe;

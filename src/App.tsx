type DataType = {
	imageCard: string;

	heading: {
		avatar: string;
		name: string;
		age: string;
	};
	location: string;

	socials: {
		id: number;
		value: string;
		label: string;
	}[];
};

const data: DataType = {
	imageCard: "images/bg-pattern-card.svg",

	heading: {
		avatar: "images/image-victor.jpg",
		name: "Victor Crest",
		age: "26",
	},

	location: "London",

	socials: [
		{
			id: 1,
			value: "80k",
			label: "Followers",
		},
		{ id: 2, value: "803k", label: "Likes" },
		{ id: 3, value: "1.4k", label: "Photos" },
	],
};

const App = () => {
	return (
		<div className="relative w-full max-w-87.5 min-h-93.5 flex flex-col items-center rounded-[15px] bg-white overflow-hidden">
			<img src={data.imageCard} alt="" />

			<div className="flex flex-col items-center pb-6">
				<img
					src={data.heading.avatar}
					alt={data.heading.name}
					className="relative -mt-12.5 border-[5px] border-white rounded-full"
				/>

				<h3 className="flex gap-2.5 mt-6 leading-4.5">
					<strong className="font-bold">{data.heading.name}</strong>
					<span className="text-tertiary">{data.heading.age}</span>
				</h3>

				<p className="text-sm leading-3.5 mt-2 text-tertiary">
					{data.location}
				</p>
			</div>
			<ul className="w-full flex items-center justify-center gap-13.5 pt-6 px-13.75 text-[10px] tracking-[1.5px] text-center border-t border-t-quaternary">
				{data.socials.map((social) => (
					<li key={social.id} className="flex flex-col gap-2.25">
						<strong className="text-lg leading-4.5">
							{social.value}
						</strong>
						<span className="text-tertiary leading-2.5">
							{social.label}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;

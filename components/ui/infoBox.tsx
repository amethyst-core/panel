"use client";
import React from "react";
interface InfoBoxProps {
	icon: React.ElementType; // The icon component type
	title: string; // The title text
	percentage?: number; // The percentage value as string
	decimal?: number;
	data: { [key: string]: number }[]; // Array of data objects
	quota?: number;
	provider?: number;
	capacity?: number;
}

const InfoBox: React.FC<InfoBoxProps> = ({
	icon: Icon,
	title,
	percentage,
	decimal,
	data,
	quota,
	provider,
	capacity,
}) => {
	return (
		<div className="border-2 border-[#1A2123] rounded-lg flex flex-col flex-1">
			<div className="border-t-2 border-[#1A2123] flex justify-between p-4">
				<div className="flex items-center gap-2">
					<Icon />
					<p>{title}</p>
				</div>
				<div>
					<p>
						{percentage}
						<small>.{decimal}%</small>
					</p>
				</div>
			</div>
			<div className="p-4">
				<div className="w-full flex gap-[2px]">
					<div
						className="border-2 border-red-300 h-[15px] shadow-[inset_0px_0px_17px_2px_#dcd8d882]"
						style={{ width: `${quota}%` }}
					></div>
					<div
						className="border-2 border-blue-300 h-[15px] shadow-[inset_0px_0px_17px_2px_#dcd8d882]"
						style={{ width: `${provider}%` }}
					></div>
					<div
						className="border-2 border-slate-300 h-[15px] shadow-[inset_0px_0px_17px_2px_#dcd8d882]"
						style={{ width: `${capacity}%` }}
					></div>
				</div>
			</div>
			<div className="border-t-2 border-[#1A2123] flex justify-between p-4">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex flex-col"
					>
						{Object.entries(item).map(([key, value]) => (
							<>
								<p>{key}</p>
								<p>{value}</p>
							</>
						))}
					</div>
				))}
			</div>
		</div>
	);
};
// shadow-[inset_0px_0px_17px_2px_#fff]
export default InfoBox;

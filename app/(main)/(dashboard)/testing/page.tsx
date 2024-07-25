"use client";
import { FiCpu } from "react-icons/fi";
import { FaFloppyDisk } from "react-icons/fa6";
import { PiMemoryBold } from "react-icons/pi";
import InfoBox from "@/components/ui/infoBox";
// import "./styles.css";

interface InfoBoxData {
	decimalPart?: number;
	icon: React.ElementType; // The icon component type
	title: string; // The title text
	percentage?: number; // The percentage value as string
	data: { [key: string]: number }[]; // Array of data objects
	quota?: number;
	provider?: number;
	capacity?: number;
}
export default function Testing() {
	var infoBoxData: InfoBoxData[] = [
		{
			icon: FiCpu,
			title: "CPU (NCPUS)",

			data: [{ PROVISIONED: 300 }, { QOUTA: 200 }, { CAPACITY: 3000 }],
		},
		{
			icon: FaFloppyDisk,
			title: "Disk (GIB)",

			data: [{ PROVISIONED: 150 }, { QOUTA: 30 }, { CAPACITY: 4000 }],
		},
		{
			icon: PiMemoryBold,
			title: "Memory (GIB)",

			data: [{ PROVISIONED: 120 }, { QOUTA: 300 }, { CAPACITY: 6000 }],
		},
	];
	infoBoxData = infoBoxData.map((item) => {
		const capacityObject = item.data.find((obj) =>
			obj.hasOwnProperty("CAPACITY"),
		);
		const total = capacityObject ? capacityObject["CAPACITY"] : 0;
		const qoutaObject = item.data.find((obj) => obj.hasOwnProperty("QOUTA"));
		const qouta = qoutaObject ? qoutaObject["QOUTA"] : 0;
		const providerObject = item.data.find((obj) =>
			obj.hasOwnProperty("PROVISIONED"),
		);
		const provider = providerObject ? providerObject["PROVISIONED"] : 0;
		const quotaPercentage = (qouta / total) * 100;
		const providerPercentage = (provider / total) * 100;
		const [integerPart, decimalPart] = (quotaPercentage + providerPercentage)
			.toFixed(2)
			.split(".");

		const capacity = 100 - (quotaPercentage + providerPercentage);

		return {
			...item,

			quota: quotaPercentage,
			provider: providerPercentage,
			capacity,
			percentage: parseInt(integerPart), // optionally store the integer part separately
			decimalPart:isNaN(parseInt(decimalPart)) ? 0 : parseInt(decimalPart), // add a new property to store the decimal part
		};
	});
	console.log(infoBoxData);
	return (
		<>
			<div className="flex gap-4 p-4">
				{infoBoxData.map((box, index) => (
					<InfoBox
						key={index}
						icon={box.icon}
						title={box.title}
						percentage={box.percentage}
						decimal={box.decimalPart}
						data={box.data}
						quota={box.quota}
						provider={box.provider}
						capacity={box.capacity}
					/>
				))}
			</div>
		</>
	);
}

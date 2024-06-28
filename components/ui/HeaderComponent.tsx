import React, { useState, useEffect, useRef } from "react";
import "./tabs.scss";

interface HeaderProps {
	onClick: (section: string) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ onClick }) => {
	const [activeSection, setActiveSection] = useState("section1");
	const [activeBarStyle, setActiveBarStyle] = useState({});
	const navRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const updateActiveBar = () => {
			const activeItem = navRef.current?.querySelector(".tab-list-active");
			if (activeItem) {
				const rect = activeItem.getBoundingClientRect();
				setActiveBarStyle({
					transform: `translateX(${
						rect.left + rect.width / 2
					}px) translateX(-50%) scaleX(1)`,
					width: `${rect.width}px`,
				});
			}
		};

		updateActiveBar();
		window.addEventListener("resize", updateActiveBar);
		return () => {
			window.removeEventListener("resize", updateActiveBar);
		};
	}, [activeSection]);

	const handleClick = (
		event: React.MouseEvent<HTMLLIElement>,
		section: string,
	) => {
		onClick(section);
		setActiveSection(section);
	};

	return (
		<header className="h-[2rem] ">
			<nav className="absolute h-[2rem]">
				<ul
					className="px-4"
					ref={navRef}
				>
					<li
						className={`tab-list-item ${
							activeSection === "section1" ? "tab-list-active" : ""
						}`}
						onClick={(event) => handleClick(event, "section1")}
					>
						Section 1
					</li>
					<li
						className={`tab-list-item ${
							activeSection === "section2" ? "tab-list-active" : ""
						}`}
						onClick={(event) => handleClick(event, "section2")}
					>
						Section 2
					</li>
					<li
						className={`tab-list-item ${
							activeSection === "section3" ? "tab-list-active" : ""
						}`}
						onClick={(event) => handleClick(event, "section3")}
					>
						Section 3
					</li>
					<div
						className="sub-menu_activeBar"
						style={activeBarStyle}
					/>
				</ul>
			</nav>
		</header>
	);
};

export default HeaderComponent;

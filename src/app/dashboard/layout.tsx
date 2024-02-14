"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const pathArr = pathname.split("/");
	return (
		<section>
			<nav style={{ marginBottom: 4 }}>
				<div>
					<span>Navigate to: </span>
					<span>
						<Link href={`/${pathArr[pathArr.length - 2]}`}>
							{pathArr[pathArr.length - 2] || "Home"}
						</Link>
					</span>
				</div>
			</nav>
			{children}
		</section>
	);
}

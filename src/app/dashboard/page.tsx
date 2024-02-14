import Link from "next/link";

export default function Dashboard() {
	return (
		<>
			<Link href="/dashboard/settings">Settings</Link>
			<br />
			<br />
			<div>Dashboard</div>
		</>
	);
}

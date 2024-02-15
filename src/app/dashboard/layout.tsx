'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
  analytics,
  team,
  auth,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  auth: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathArr = pathname.split('/').filter((indvPath) => !parseInt(indvPath));
  const prevPath = pathArr.join('/').replace(pathArr[pathArr.length - 1], '');

  return (
    <section>
      <nav style={{ marginBottom: 4 }}>
        <div>
          <span>Go back to: </span>
          <span>
            <Link href={prevPath}>{pathArr[pathArr.length - 2] || 'Home'}</Link>
          </span>
        </div>
      </nav>
      <nav>
        <Link href="/dashboard/login">Open modal</Link>
      </nav>
      {children}
      {analytics}
      {team}
      {auth}
    </section>
  );
}

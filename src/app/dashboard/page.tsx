import Link from 'next/link';
import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <>
      <Link href="/dashboard/settings">Settings</Link>
      <br />
      <br />
      <section>
        <Suspense fallback={<p>Dashboard fallback..</p>}>
          <div>Dashboard</div>
		  <Link href={'/dashboard/blog/1'}>Blogs</Link>
        </Suspense>
      </section>
    </>
  );
}

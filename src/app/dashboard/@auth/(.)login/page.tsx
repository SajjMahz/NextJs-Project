import Link from 'next/link';

export default function Page() {
  return (
    <dialog open>
      <Link href="/">Close Modal</Link>
      <div>Login form</div>
    </dialog>
  );
}

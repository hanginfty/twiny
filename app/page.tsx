import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-200 rounded-lg">
        <div className="my-4 text-center">
          <h1>twiny</h1>
        </div>
        <div>
          <Link
            href={"/auth/signin"}
            className="bg-slate-500 my-5 p-3 rounded-lg block text-center"
          >
            Sign In
          </Link>
        </div>
        <div>
          <Link
            href={"/auth/signup"}
            className="bg-slate-500 my-5 p-3 rounded-lg block text-center"
          >
            Sign On
          </Link>
        </div>
      </div>
    </main>
  );
}

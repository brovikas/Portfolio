import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-mist">
          {profile.alias} &middot; {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[11px] text-mist/60">
          built with Next.js &middot; no trace left behind
        </p>
      </div>
    </footer>
  );
}

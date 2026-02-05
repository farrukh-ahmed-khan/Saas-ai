import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const heading = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const body = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const LandingPage = () => {
  return (
    <div className={`min-h-screen bg-[#0b1020] text-white ${body.className}`}>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff] opacity-30 blur-3xl" />
          <div className="absolute top-40 right-[-80px] h-80 w-80 rounded-full bg-[#38bdf8] opacity-25 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-96 w-96 rounded-full bg-[#f97316] opacity-20 blur-3xl" />
        </div>

        <main className="relative z-10 w-full max-w-xl">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <span className="text-xl font-semibold">S</span>
            </div>
            <h1 className={`mt-6 text-3xl font-semibold md:text-4xl ${heading.className}`}>
              Welcome to Saas AI
            </h1>
            <p className="mt-3 text-sm text-white/70">
              Sign in to your account or create a new one to get started.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/sign-in" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-[#0b1020] hover:bg-white/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;

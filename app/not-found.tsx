import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#00000c]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(70,83,183,0.26) 1px, transparent 0)",
          backgroundSize: "12px 12px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[384px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(67,81,255,0.26) 0%, rgba(26,35,113,0.2) 38%, rgba(0,0,12,0) 76%)",
        }}
      />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-center px-6 py-[72px]">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-[200px] w-[200px]">
              <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(110,129,255,0.16)]" />
              <div className="absolute left-1/2 top-1/2 h-[266px] w-[266px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(110,129,255,0.12)]" />
              <div className="absolute left-1/2 top-1/2 h-[184px] w-[184px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(110,129,255,0.22)]" />
              <div className="absolute left-1/2 top-1/2 h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#4c58ff]" />
              <div className="absolute left-1/2 top-1/2 h-[12px] w-[12px] translate-x-[22px] -translate-y-[30px] rounded-full bg-white shadow-[0_0_16px_6px_rgba(110,129,255,0.72)]" />
            </div>

            <div className="flex flex-col items-center gap-[10px]">
              <h1 className="bg-gradient-to-b from-[#ededed] to-[rgba(18,36,41,0.45)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[34px] leading-[1.05] text-transparent sm:text-[42px]">
                404: Not Found
              </h1>
              <p className="max-w-[555px] text-[18px] leading-7 text-[#c1c7cf]">
                This page does not exist.
                <br />
                Please check the URL and try again
              </p>
            </div>
          </div>

          <Link
            href="/home"
            className="inline-flex h-[47px] items-center justify-center rounded-[140px] border border-[#2424a6] bg-[#2424a6] px-6 text-base capitalize text-white transition-colors hover:bg-[#3030cc]"
          >
            Go Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
}

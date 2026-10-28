// The night band at the top of every inner page (same look as the home hero).
export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-night-950 px-6 pt-18 pb-20 text-mist">
      <div
        aria-hidden="true"
        className="absolute top-12 right-[7%] h-[88px] w-[88px] rounded-full opacity-80 shadow-[inset_-18px_8px_0_0_var(--color-moon)]"
      ></div>
      <div className="relative mx-auto max-w-[1160px]">
        <p className="mb-5 font-mono text-sm uppercase tracking-[0.08em] text-lamp">{eyebrow}</p>
        <h1 className="max-w-[820px] text-[clamp(38px,5.2vw,68px)] leading-[1.0] font-extrabold tracking-[-0.035em] text-mist-bright">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-[620px] text-lg leading-relaxed text-mist-dim">{children}</div>
        )}
      </div>
    </section>
  );
}

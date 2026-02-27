export default function SectionHeader({
  tag,
  title,
}: {
  tag: string;
  title: React.ReactNode;
}) {
  return (
    <div className="reveal">
      <p
        className="text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center gap-3"
        style={{ color: "var(--gold)" }}
      >
        <span
          className="inline-block"
          style={{ width: 30, height: 2, background: "var(--gold)" }}
        />
        {tag}
      </p>
      <h2
        className="font-barlow-condensed font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
      >
        {title}
      </h2>
      <div
        className="mt-5"
        style={{ width: 60, height: 3, background: "var(--gold)" }}
      />
    </div>
  );
}

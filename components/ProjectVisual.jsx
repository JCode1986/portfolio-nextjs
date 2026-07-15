import Image from 'next/image';

const qrCells = [
  0, 1, 2, 3, 4, 5, 6, 9, 11, 12, 14, 16, 18, 20, 21, 24, 27, 28, 30, 31, 33, 35, 36, 37, 38, 39, 40, 42, 44, 46, 48,
  50, 51, 53, 56, 58, 60, 62, 63, 65, 67, 68, 70, 72, 75, 76, 78, 80, 82, 84, 85, 87, 88, 90, 93, 95, 96, 98, 100, 102,
  104, 105, 108, 110, 112, 114, 116, 117, 118, 119, 120,
];
const qrCellSet = new Set(qrCells);

function QuickQrPreview({ compact = false }) {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-[42rem] gap-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 p-3 shadow-2xl shadow-violet-950/40 sm:p-4 lg:grid-cols-[0.84fr_1fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-950">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-700">QuickQR</p>
            <p className="mt-1 text-sm font-semibold text-slate-700">Editor</p>
          </div>
          <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700">In Development</span>
        </div>

        <div className="space-y-3">
          {['Destination', 'Foreground color', 'Background color', 'Logo upload'].map((label, index) => (
            <div key={label}>
              <div className="mb-1 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{label}</span>
                {index === 3 ? <span className="text-violet-600">Premium</span> : null}
              </div>
              <div className="h-9 rounded-lg border border-slate-200 bg-slate-50">
                <div className={`h-full rounded-lg ${index === 0 ? 'w-4/5 bg-slate-100' : index === 1 ? 'w-1/3 bg-slate-950' : index === 2 ? 'w-1/4 bg-white' : 'w-2/5 bg-violet-100'}`} />
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-2">
            {['Corner style', 'Pattern style', 'Size', 'SVG'].map((label) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-violet-50 p-4 text-slate-950">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">Live Preview</p>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">Static QR</span>
        </div>

        <div className="my-5 flex flex-1 items-center justify-center">
          <div className="grid h-40 w-40 grid-cols-11 grid-rows-11 gap-1 rounded-2xl bg-white p-3 shadow-xl shadow-violet-200/70 sm:h-48 sm:w-48">
            {Array.from({ length: 121 }).map((_, index) => (
              <span key={index} className={`rounded-[0.18rem] ${qrCellSet.has(index) ? 'bg-slate-950' : 'bg-transparent'}`} />
            ))}
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-950 px-3 py-2 text-center text-sm font-bold text-white">Download PNG</div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-bold text-slate-950">Download SVG</div>
        </div>
      </div>

      {!compact ? (
        <div className="absolute -bottom-3 left-8 hidden rounded-xl border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-100 backdrop-blur sm:block">
          Design preview
        </div>
      ) : null}
    </div>
  );
}

function CompositeImagePreview({ project, priority = false, compact = false }) {
  return (
    <div className={`project-media relative z-10 mx-auto aspect-[16/10] w-full max-w-[44rem] overflow-hidden rounded-[1.75rem] ${compact ? 'lg:max-w-[38rem]' : ''}`}>
      <Image
        src={project.heroImage}
        alt={project.imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="rounded-[1.75rem] object-contain"
      />
    </div>
  );
}

export default function ProjectVisual({ project, priority = false, compact = false }) {
  if (project.slug === 'quickqr') {
    return <QuickQrPreview compact={compact} />;
  }

  return <CompositeImagePreview project={project} priority={priority} compact={compact} />;
}

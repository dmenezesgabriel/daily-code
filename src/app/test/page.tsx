export default function TestHalftone() {
  return (
    <div className="relative h-screen">
      <div className="halftone-bg absolute inset-0" />
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold">Testing Halftone BG</h1>
      </div>
    </div>
  );
}

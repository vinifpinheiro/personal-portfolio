export default function MainText() {
  return (
    <div className="mx-auto w-full max-w-[950px] ">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-4xl font-medium tracking-widest">
          Maximize Your Busines{" "}
        </h1>
        <h1 className="flex items-center gap-x-4">
          <span className="flex w-auto flex-col bg-gradient-to-r from-rose-500 to-blue-400 bg-clip-text text-5xl font-bold tracking-wide text-transparent">
            Potential
            <p className="relative h-1 w-full rounded-xl bg-white  bg-gradient-to-r from-rose-500 to-blue-400"></p>
          </span>
          <span className="ont-medium text-4xl tracking-widest">
            with Custom Web
          </span>
        </h1>
        <h1 className="flex items-center gap-x-4">
          <span className="ont-medium text-4xl tracking-widest">
            Development
          </span>
          <span className="flex w-auto flex-col bg-gradient-to-l from-rose-500 to-blue-400 bg-clip-text text-5xl font-bold tracking-wide text-transparent">
            Solutions!
            <p className="relative h-1 w-full rounded-xl bg-white  bg-gradient-to-l from-rose-500 to-blue-400"></p>
          </span>
        </h1>
        <h1 className="text-base text-white/60 tracking-wide">
          Take your business to the next level with custom web <br /> development
          solutions.
        </h1>
      </div>
    </div>
  );
}
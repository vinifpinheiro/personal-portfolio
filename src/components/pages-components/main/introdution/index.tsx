import HeroButtons from "./buttons";
import MainText from "./main-text";
import Position from "./position";

export default function Introdution() {
  return (
    <div className="w-full h-full flex flex-col gap-y-5">
      <Position />
      <MainText />
      <HeroButtons />
    </div>
  );
}

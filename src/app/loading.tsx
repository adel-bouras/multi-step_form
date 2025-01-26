export default function Loading() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <h1 className="motion-safe:animate-bounce select-none before:absolute ds:before:w-[50px] ds:before:h-[50px] before:bg-red-500 ds:before:rounded-xl ds:before:-top-[50px] ds:before:-left-[50px]  rounded-xl relative font-poppins ds:text-9xl font-bold drop-shadow-lg text-red-700 xs:text-7xl xs:before:w-[30px] xs:before:h-[30px] xs:before:-top-[30px] xs:before:-left-[30px] xs:before:rounded-md">
        Adel
      </h1>
    </div>
  );
}

import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <Card />
      <div className="ds:hidden xs:block">
        <Sidebar />
      </div>
    </div>
  );
}

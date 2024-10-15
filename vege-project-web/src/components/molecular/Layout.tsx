import { LayoutProps } from "@/lib/utils/interface";

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-full bg-slate-100 flex flex-col justify-center items-center p-7">
      {children}
    </div>
  );
}

export default Layout;

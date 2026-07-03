import SideNavigation from "../_components/SideNavigation";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[4rem_1fr]  md:grid-cols-[16rem_1fr] h-full gap-3 sm:gap-12">
      <SideNavigation />
      <div className="py-1"> {children}</div>
    </div>
  );
}

export default layout;

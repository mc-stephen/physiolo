import Search from "../search/search";

export default function Header() {
  return (
    <header>
      <TopHeader />
      <BottomHeader />
      <ResponsiveHeader />
    </header>
  );
}

//====================================
//
//====================================
function TopHeader() {
  return <></>;
}

//====================================
//
//====================================
function BottomHeader() {
  return (
    <>
      <Search />
    </>
  );
}

//====================================
//
//====================================
function ResponsiveHeader() {
  return (
    <>
      <Search />
    </>
  );
}

import Style from "./search.module.css";

export default function Search() {
  return (
    <div className={Style.searchCont}>
      <i className="fa fa-search" aria-hidden="true"></i>
      <SearchInputCont />
    </div>
  );
}

//======================================
//
//======================================
function SearchInputCont() {
  return (
    <section className={Style.searchInputCont}>
      <div className={Style.row}>
        <input type="text" className={Style.input} />
        <button className={Style.btn}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <button className={Style.btn}>
        <i className="fa fa-times-circle-o" aria-hidden="true"></i>
      </button>
    </section>
  );
}

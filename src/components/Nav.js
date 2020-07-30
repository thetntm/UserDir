import React from "react";

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-collapse row" id="navbarNav">
            <div className="searchbox">
                <form className="form-inline">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={e => handleSearchChange(e)}
                    />
                </form>
            </div>
        </div>
    </nav>
  );
}
export default Nav;

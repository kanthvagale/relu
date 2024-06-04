import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <ion-icon name="logo-octocat"></ion-icon>
      </div>
      <div className="search">
        <form action="/" method="get" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search here..." />
          <button>
            <ion-icon name="filter-outline"></ion-icon>
            Filter
          </button>
        </form>
      </div>
      <button href="/" className="seller-button">
        Become a Seller
      </button>
    </nav>
  );
};

export default Navbar;

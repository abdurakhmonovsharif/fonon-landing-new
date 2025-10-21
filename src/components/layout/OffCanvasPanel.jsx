const OffCanvasPanel = () => (
  <>
    <div className="offcanvas-wrapper">
      <div className="offcanvas-overly" />
      <div className="offcanvas-widget">
        <a href="#" className="offcanvas-close"><i className="fal fa-times" /></a>
        <div className="widget search-widget">
          <h5 className="widget-title">Search room</h5>
          <form action="#">
            <input type="text" placeholder="Search your keyword..." />
            <button type="submit"><i className="far fa-search" />
            </button>
          </form>
        </div>
        <div className="widget about-widget">
          <h5 className="widget-title">About us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis illo ipsa asperiores, perspiciatis corrupti veritatis assumenda architecto commodi provident quas necessitatibus consequatur praesentium magnam optio deserunt fugiat repellat culpa.</p>
        </div>
        <div className="widget nav-widget">
          <h5 className="widget-title">Our pages</h5>
          <ul>
            <li><a href="#">About Us</a>
            </li>
            <li><a href="#">Classification</a>
            </li>
            <li>
              <a href="#">Shop</a>
              <ul className="submenu">
                <li><a href="#">Shop Left Sidebar</a>
                </li>
                <li><a href="#">Shop Left Sidebar v2</a>
                </li>
                <li><a href="#">Shop Right Sidebar</a>
                </li>
                <li><a href="#">Shop Right Sidebar v2</a>
                </li>
                <li><a href="#">Shop Detail</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Blog</a>
              <ul className="submenu">
                <li><a href="#">Blog Grid Sidebar</a>
                </li>
                <li><a href="#">Blog Details</a>
                </li>
                <li><a href="#">Blog Grid</a>
                </li>
                <li><a href="#">Blog List</a>
                </li>
              </ul>
            </li>
            <li><a href="#">Our Gallery</a>
            </li>
            <li><a href="#">Team</a>
            </li>
            <li><a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="widget social-link">
          <h5 className="widget-title">Contact with us</h5>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f" /></a>
            </li>
            <li><a href="#"><i className="fab fa-twitter" /></a>
            </li>
            <li><a href="#"><i className="fab fa-behance" /></a>
            </li>
            <li><a href="#"><i className="fab fa-linkedin" /></a>
            </li>
            <li><a href="#"><i className="fab fa-google" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default OffCanvasPanel;

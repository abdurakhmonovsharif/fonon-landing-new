const NewsletterModal = () => (
  <>
    <div className="modal fade on-load-modal" id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{backgroundImage: 'url(/assets/img/popup.jpg)'}}>
          <div className="modal-header">
            <button type="button" className="close popup-trigger" data-dismiss="modal">×</button>
          </div>
          <div className="modal-body">
            <div className="modal-inner">
              <h3 className="title">Newsletter</h3>
              <p>Subscribe to our newsletter to recieve exclusive offers</p>
              <form>
                <input type="email" placeholder="Email Address" name="email" defaultValue />
                <button type="submit" className="main-btn btn-filled" name="button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NewsletterModal;

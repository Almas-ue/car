import React from "react";
import "./../index.scss";

function Car() {
  return (
    /*Car*/
    <>
      <header className="header">
        <div className="container">
          <div className="head">
            <div className="icon">
              <a href="#" className="logo_link">
                <img src="./images/icon/logo.svg" alt="icon" />
              </a>
            </div>
            <nav className="nav">
              <ul className="ul">
                <li className="list">
                  <a href="#" className="link-page">
                    Main
                  </a>
                </li>
                <li className="list">
                  <a href="#" className="link-page">
                    Our services
                  </a>
                </li>
                <li className="list">
                  <a href="#" className="link-page">
                    About
                  </a>
                </li>
                <li className="list">
                  <a href="#" className="link-page">
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
            <div className="lang_block">
              <a href="#" className="RU">
                RU
              </a>
              <a href="#" className="EN">
                EN
              </a>
            </div>
          </div>
          <h1 className="header_text">
            KEEPING YOU ON THE ROAD WITH <br />
            SERVICE YOU CAN TRUST
          </h1>
          <button className="header_btn btn">Show more</button>
          <section className="adress_block">
            <div className="item_block">
              <div className="item_inner">
                <img src="./images/adress/call.svg" alt="call" />
                <h3 className="title_item block_title">
                  CALL US NOW 222-222-222
                </h3>
                <p className="info_item block_desc">Feel free to call us</p>
              </div>
            </div>
            <div className="item_block">
              <div className="item_inner">
                <img src="./images/adress/calendar.svg" alt="calendar" />
                <h3 className="title_item block_title">GET FREE APPOITMET</h3>
                <p className="info_item block_desc">
                  Free Diagnosis & Brake Checks
                </p>
              </div>
            </div>
            <div className="item_block">
              <div className="item_inner">
                <img src="./images/adress/maps.svg" alt="maps" />
                <h3 className="title_item block_title">FIND US ON MAP</h3>
                <p className="info_item block_desc">
                  New York, 1286 Ruumu Nanor
                </p>
              </div>
            </div>
          </section>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <section className="service">
            <h2 className="title_block title">OUR SERVICES</h2>
            <a href="#" className="link_service link_title">
              VIEW ALL SERVICES
            </a>
            <div className="service_block">
              <a href="#" className="click_service">
                <div className="item_service">
                  <figure className="img_service">
                    <img
                      src="./images/service/diagnostic.svg"
                      alt="diagnostic"
                    />
                    <button className="btn_service"></button>
                    <figcaption className="name_service">DIAGNOSTIC</figcaption>
                  </figure>
                </div>
              </a>
              <a href="#" className="click_service">
                <div className="item_service">
                  <figure className="img_service">
                    <img src="./images/service/tires.svg" alt="tires" />
                    <button className="btn_service"></button>
                    <figcaption className="name_service">
                      TIRES & WHEELS
                    </figcaption>
                  </figure>
                </div>
              </a>
              <a href="#" className="click_service">
                <div className="item_service">
                  <figure className="img_service">
                    <img
                      src="./images/service/engines.svg"
                      alt="engines"
                    />
                    <button className="btn_service"></button>
                    <figcaption className="name_service">ENGINES</figcaption>
                  </figure>
                </div>
              </a>
            </div>
          </section>
        </div>
        <section className="understand">
          <div className="container">
            <div className="flex_block">
              <div className="about_info">
                <h2 className="about_title">
                  WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO
                  SERVICE
                </h2>
                <p className="about_desc">
                  Car repairs and maintenance can be expensive and no one wants
                  to have pay to repair damage caused by shoddy repair service.
                  When you bring your car into our auto shop, you won’t have to
                  worry because our staff is comprised of ASE certified
                  technicians who are committed to making sure you have a safe
                  dependable car.
                </p>
                <a href="" className="about_link">
                  MORE ABOUT US
                </a>
              </div>
              <div className="about_image">
                <img
                  src="./images/understand/mechanic.svg"
                  alt="mechanic"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="fast_section">
          <div className="container">
            <div className="text_block">
              <h2 className="fast_title">FAST & EASY</h2>
              <p className="fast_text">our work process</p>
              <div className="fast_block">
                <div className="item_block">
                  <div className="inner_content">
                    <h3 className="title_content block_title">
                      1.Request your quote
                    </h3>
                    <p className="desc_content block_desc">
                      We will be there when you most need us
                    </p>
                  </div>
                  <div className="inner_content">
                    <h3 className="title_content block_title">
                      02. BRING YOUR VEHICLE
                    </h3>
                    <p className="desc_content block_desc">
                      We are car guys at heart
                    </p>
                  </div>
                  <div className="inner_content">
                    <h3 className="title_content block_title">
                      03. GET IT REPAIRED
                    </h3>
                    <p className="desc_content block_desc">
                      High quality, low cost car servicing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <h2 className="form_title">Contact us</h2>
            <form action="" className="form_block">
              <input
                className="form_input"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                className="form_input"
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
              />
              <input
                className="form_input"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                className="form_input"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
              <input
                className="form_input message"
                type="text"
                name="message"
                id="message"
                placeholder="Message"
              />
            </form>
            <input className="btn_input btn" type="button" value="SEND" />
          </div>
        </div>
        <div className="footer_bottom container">
          <p className="footer_end">© 2021 Auto theme by Frontend Tricks</p>
          <div className="social_media">
            <div className="in">
              <a href="#" className="link_social_media">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_778)">
                    <path
                      d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM8.86765 18.8965H5.82333V9.73759H8.86765V18.8965ZM7.34558 8.48694H7.32574C6.30417 8.48694 5.64346 7.7837 5.64346 6.90479C5.64346 6.00605 6.32439 5.32227 7.3658 5.32227C8.40721 5.32227 9.04808 6.00605 9.06792 6.90479C9.06792 7.7837 8.40721 8.48694 7.34558 8.48694ZM19.8448 18.8965H16.8009V13.9967C16.8009 12.7653 16.3601 11.9255 15.2586 11.9255C14.4176 11.9255 13.9168 12.492 13.6967 13.0388C13.6162 13.2345 13.5965 13.508 13.5965 13.7817V18.8965H10.5524C10.5524 18.8965 10.5923 10.5968 10.5524 9.73759H13.5965V11.0344C14.0011 10.4103 14.7249 9.52263 16.3401 9.52263C18.343 9.52263 19.8448 10.8316 19.8448 13.6448V18.8965Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_778">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="facebook">
              <a href="#" className="link_social_media">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_772)">
                    <path
                      d="M25 12.5C25 5.5957 19.4043 0 12.5 0C5.5957 0 0 5.5957 0 12.5C0 19.4043 5.5957 25 12.5 25C12.5732 25 12.6465 25 12.7197 24.9951V15.2686H10.0342V12.1387H12.7197V9.83398C12.7197 7.16309 14.3506 5.70801 16.7334 5.70801C17.876 5.70801 18.8574 5.79102 19.1406 5.83008V8.62305H17.5C16.2061 8.62305 15.9521 9.23828 15.9521 10.1416V12.1338H19.0527L18.6475 15.2637H15.9521V24.5166C21.1768 23.0176 25 18.208 25 12.5Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_772">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="instagram">
              <a href="#" className="link_social_media">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_780)">
                    <path
                      d="M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z"
                      fill="black"
                    />
                    <path
                      d="M18.0954 8.26691C17.9804 7.95525 17.7969 7.67316 17.5585 7.4416C17.327 7.20319 17.0451 7.0197 16.7332 6.90469C16.4803 6.80646 16.1003 6.68954 15.4005 6.65768C14.6435 6.62316 14.4165 6.61572 12.5 6.61572C10.5833 6.61572 10.3564 6.62297 9.59953 6.65749C8.89972 6.68954 8.51958 6.80646 8.26686 6.90469C7.95501 7.0197 7.67291 7.20319 7.44155 7.4416C7.20313 7.67316 7.01965 7.95506 6.90444 8.26691C6.80621 8.51983 6.68929 8.89996 6.65744 9.59977C6.62292 10.3566 6.61548 10.5836 6.61548 12.5003C6.61548 14.4168 6.62292 14.6438 6.65744 15.4008C6.68929 16.1006 6.80621 16.4805 6.90444 16.7334C7.01965 17.0453 7.20294 17.3272 7.44136 17.5588C7.67291 17.7972 7.95482 17.9807 8.26667 18.0957C8.51958 18.1941 8.89972 18.311 9.59953 18.3429C10.3564 18.3774 10.5831 18.3846 12.4998 18.3846C14.4167 18.3846 14.6437 18.3774 15.4003 18.3429C16.1002 18.311 16.4803 18.1941 16.7332 18.0957C17.3592 17.8542 17.854 17.3594 18.0954 16.7334C18.1937 16.4805 18.3106 16.1006 18.3426 15.4008C18.3771 14.6438 18.3844 14.4168 18.3844 12.5003C18.3844 10.5836 18.3771 10.3566 18.3426 9.59977C18.3108 8.89996 18.1938 8.51983 18.0954 8.26691ZM12.5 16.1858C10.4643 16.1858 8.81408 14.5358 8.81408 12.5001C8.81408 10.4644 10.4643 8.81432 12.5 8.81432C14.5356 8.81432 16.1858 10.4644 16.1858 12.5001C16.1858 14.5358 14.5356 16.1858 12.5 16.1858ZM16.3315 9.52996C15.8558 9.52996 15.4702 9.14429 15.4702 8.6686C15.4702 8.19291 15.8558 7.80724 16.3315 7.80724C16.8072 7.80724 17.1929 8.19291 17.1929 8.6686C17.1927 9.14429 16.8072 9.52996 16.3315 9.52996Z"
                      fill="black"
                    />
                    <path
                      d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_780">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Car;

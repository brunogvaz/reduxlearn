import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
              <div className="row align-items-center justify-content-xl-between">
                <div className="col-xl-6">
                  <div className="copyright text-center text-xl-left text-muted">
                    &copy; 2019{" "}
                    <a
                      href="#"
                      className="font-weight-bold ml-1"
                      target="_blank"
                    >
                      Assessoria de Orçamento e Finanças - Democratas
                    </a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                    <li className="nav-item">
                      <a
                        href="http://www.facebook.com/democratas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://instagram.com/democratas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-instagram fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://plus.google.com/+democratas25/posts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-google-plus fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/democratas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/user/lidDem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-youtube-play fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.flickr.com/photos/democratas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flickr"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-flickr fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:democratas25@democratas.org.br"
                        className="email"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
  );
};

export default Footer;

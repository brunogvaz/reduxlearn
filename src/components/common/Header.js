import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      <div className="container-fluid">
        <div className="header-body">
         
          <div className="row">
            <div className="col-xl-3 col-lg-6">
              <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Valor Emendas</h5>
                      <span className="h2 font-weight-bold mb-0">15.420.774</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                    <span className="text-nowrap">Pago</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Em Impedimento</h5>
                      <span className="h2 font-weight-bold mb-0">3.315.200</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <i className="fas fa-chart-pie"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fas fa-arrow-down"></i> 3.48%</span>
                    <span className="text-nowrap">Em relação semana passada</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Empenhado</h5>
                      <span className="h2 font-weight-bold mb-0">10.420.774</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fas fa-arrow-up"></i> 1.10%</span>
                    <span className="text-nowrap">Em relação semana passada</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Pago</h5>
                      <span className="h2 font-weight-bold mb-0">9.420.774</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fas fa-money-coins"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
                    <span className="text-nowrap">Em relação semana passada</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

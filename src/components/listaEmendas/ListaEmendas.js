import React from "react";

const ListaEmendas = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="card shadow">
          <div className="card-header border-0">
            <h3 className="mb-0">Emendas</h3>
          </div>
          <div className="table-responsive">
            <table className="table align-items-center table-flush">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Projeto</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Situação</th>
                  <th scope="col">% Pago</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <span className="mb-0 text-sm">
                          7K66 - Apoio a Projetos de Desenvolvimento Sustentável
                          Local Integrado
                        </span>
                      </div>
                    </div>
                  </th>
                  <td>7.710.387</td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-warning" /> Impedimento Técnico
                    </span>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <span className="mr-2">60%</span>
                      <div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown">
                      <a
                        className="btn btn-sm btn-icon-only text-light"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <span className="mb-0 text-sm">
                          2E89 - Incremento Temporário ao Custeio dos Serviços
                          de Atenção Básica em Saúde para Cumprimento de Metas
                        </span>
                      </div>
                    </div>
                  </th>
                  <td>5.000.000</td>
                  <td>
                    <span className="badge badge-dot">
                      <i className="bg-success" /> OK
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="mr-2">60%</span>
                      <div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown">
                      <a
                        className="btn btn-sm btn-icon-only text-light"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <span className="mb-0 text-sm">
                          8581 - Estruturação da Rede de Serviços de Atenção
                          Básica de Saúde
                        </span>
                      </div>
                    </div>
                  </th>
                  <td>2.710.387</td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-danger" /> Impedimento Técnico
                    </span>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <span className="mr-2">72%</span>
                      <div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "72%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown">
                      <a
                        className="btn btn-sm btn-icon-only text-light"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer py-4">
            <nav aria-label="...">
              <ul className="pagination justify-content-end mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    <i className="fas fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaEmendas;

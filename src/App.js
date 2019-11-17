import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Button, Col, Row } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.buscaCEP = this.buscaCEP.bind(this);
  }

  buscaCEP() {
    axios({
      method: "GET",
      url: `https://viacep.com.br/ws/${this.state.cep}/json/`
    })
      .then(res => {
        console.log(res);
        const resposta = res.data;
        console.log(resposta);
        this.setState({
          logradouro: resposta.logradouro
            ? resposta.logradouro
            : "Logradouro não encontrado",
          complemento: resposta.complemento
            ? resposta.complemento
            : "Complemento não encontrado",
          bairro: resposta.bairro ? resposta.bairro : "Bairro não encontrado",
          localidade: resposta.localidade
            ? resposta.localidade
            : "Localidade não encontrada",
          uf: resposta.uf ? resposta.uf : "Uf não encontrado"
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <>
        <div className="background">
          <h1 className="text-center p-5 buscaCep">BUSCA CEP</h1>
          <div className="d-flex justify-content-center">
            <Col className="col-4">
              <input
                id="cep"
                placeholder="CEP:"
                className="form-control"
                value={this.state.cep}
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </div>
          <Row className="d-flex justify-content-center my-3">
            <Col className="col-4">
              <Button className="form-control" onClick={() => this.buscaCEP()}>
                BUSCAR CEP
              </Button>
            </Col>
          </Row>
          <hr />
          <div className=" d-flex justify-content-center my-3">
            <Col className="col-4">
              <input
                id="logradouro"
                placeholder="Logreadouro:"
                className="form-control"
                value={this.state.logradouro}
                onChange={e => this.handleChange(e)}
                style={{ color: "#000000", backgroundColor: "#e9e9e9" }}
                disabled
              />
            </Col>
          </div>
          <div className="d-flex justify-content-center my-3">
            <Col className="col-4">
              <input
                id="complemento"
                placeholder="Complemento:"
                className="form-control"
                value={this.state.complemento}
                onChange={e => this.handleChange(e)}
                style={{ color: "#000000", backgroundColor: "#e9e9e9" }}
                disabled
              />
            </Col>
          </div>
          <div className="d-flex justify-content-center my-3">
            <Col className="col-4">
              <input
                id="bairro"
                placeholder="Bairro:"
                className="form-control"
                value={this.state.bairro}
                onChange={e => this.handleChange(e)}
                style={{ color: "#000000", backgroundColor: "#e9e9e9" }}
                disabled
              />
            </Col>
          </div>
          <div className="d-flex justify-content-center">
            <Col className="col-4">
              <input
                id="localidade"
                placeholder="Localidade:"
                className="form-control"
                value={this.state.localidade}
                onChange={e => this.handleChange(e)}
                style={{ color: "#000000", backgroundColor: "#e9e9e9" }}
                disabled
              />
            </Col>
          </div>
          <div className="d-flex justify-content-center my-3">
            <Col className="col-4">
              <input
                id="uf"
                value={this.state.uf}
                placeholder="Uf:"
                className="form-control"
                onChange={e => this.handleChange(e)}
                style={{ color: "#000000", backgroundColor: "#e9e9e9" }}
                disabled
              />
            </Col>
          </div>
        </div>
      </>
    );
  }
}

export default App;

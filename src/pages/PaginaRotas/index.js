import React, { useState } from "react";
import RouteCard from "../../componentes/RouteCard";
import {
  BackButton,
  Modal,
  ModalContent,
  RouteForm,
  SaveButton,
  Wrapper,
  InputRoutes,
  RouteTitle,
} from "./styles";
import { InputField } from "../CadastroRotas/styles";
import { MdOutlineSpeed } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiRoadMapLine } from "react-icons/ri";
import { LiaCitySolid } from "react-icons/lia";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiRoadHorizon } from "react-icons/pi";

export default function PaginaRotas() {
  const [modalValue, setModalValue] = useState(null);
  const [routeDetails, setRouteDetails] = useState([
    {
      address: "UNIPAM - Caiçaras, Patos de Minas",
      uf: "MG",
      city: "Patos de Minas",
      km: 1234,
      status: "Em Trânsito",
      quality: "Excelente",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.050393808762!2d-46.51566417851109!3d-18.573470744122034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8b2ba03fed07%3A0x5f9bb5906d4717f3!2sBloco%20N%20UNIPAM!5e0!3m2!1spt-BR!2sbr!4v1718863729407!5m2!1spt-BR!2sbr",
    },
    {
      address: "Mart Minas - Atacado & Varejo",
      uf: "MG",
      city: "Uberlândia",
      km: 4321,
      status: "Aguardando",
      quality: "Ruim",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60387.81563143424!2d-48.28540871495745!3d-18.92083559993396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44f96ac1bcdcf%3A0xba1e34fb9cb3ca34!2sMart%20Minas%20-%20Atacado%20%26%20Varejo!5e0!3m2!1spt-BR!2sbr!4v1718863835726!5m2!1spt-BR!2sbr",
    },
    {
      address: "Zoológico Municipal de Guarulhos",
      uf: "SP",
      city: "Guarulhos",
      km: 1234,
      status: "Em Trânsito",
      quality: "Péssima",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58562.75124571115!2d-46.518556861785235!3d-23.454261185030493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef4ffea13bf09%3A0xb8d85899781b01d4!2sZool%C3%B3gico%20Municipal%20de%20Guarulhos!5e0!3m2!1spt-BR!2sbr!4v1718863949207!5m2!1spt-BR!2sbr",
    },
  ]);

  return (
    <Wrapper>
      {modalValue && (
        <Modal>
          <ModalContent>
            <div className="modal-content">
              <h1
                style={{
                  margin: "20px 0 20px 0",
                }}
              >
                EDITANDO A ROTA
              </h1>
            </div>
            <RouteForm>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RouteTitle>Endereço:</RouteTitle>
                <InputRoutes>
                  <IoLocationOutline size={25} />
                  <InputField
                    type="text"
                    maxlength="40"
                    value={modalValue.address}
                    onChange={(e) =>
                      setModalValue({ ...modalValue, address: e.target.value })
                    }
                  />
                </InputRoutes>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RouteTitle>UF:</RouteTitle>
                <InputRoutes>
                  <RiRoadMapLine size={25} />
                  <InputField
                    type="text"
                    maxlength="2"
                    value={modalValue.uf}
                    onChange={(e) =>
                      setModalValue({ ...modalValue, uf: e.target.value })
                    }
                  />
                </InputRoutes>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RouteTitle>Cidade:</RouteTitle>
                <InputRoutes>
                  <LiaCitySolid size={25} />
                  <InputField
                    type="text"
                    maxlength="40"
                    value={modalValue.city}
                    onChange={(e) =>
                      setModalValue({ ...modalValue, city: e.target.value })
                    }
                  />
                </InputRoutes>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RouteTitle>Quilometros:</RouteTitle>
                <InputRoutes>
                  <HiOutlineTruck size={25} />
                  <InputField
                    type="number"
                    maxlength="40"
                    value={modalValue.km}
                    onChange={(e) =>
                      setModalValue({ ...modalValue, km: e.target.value })
                    }
                  />
                </InputRoutes>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RouteTitle>Status:</RouteTitle>
                <InputRoutes>
                  <MdOutlineSpeed size={25} />
                  <InputField
                    type="text"
                    maxlength="40"
                    value={modalValue.status}
                    onChange={(e) =>
                      setModalValue({ ...modalValue, status: e.target.value })
                    }
                  />
                </InputRoutes>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RouteTitle>Qualidade:</RouteTitle>
                <InputRoutes>
                  <PiRoadHorizon size={25} />
                  <InputField
                    type="text"
                    maxlength="40"
                    value={modalValue.quality}
                    onChange={(e) =>
                      setModalValue({ ...modalValue, quality: e.target.value })
                    }
                  />
                </InputRoutes>
              </div>
              <div className="buttons">
                <BackButton onClick={() => setModalValue(null)}>
                  Voltar
                </BackButton>
                <SaveButton
                  onClick={() => {
                    setRouteDetails((state) => {
                      const { index, ...item } = modalValue;
                      state[index] = item;
                      return state;
                    });
                    setModalValue(null);
                  }}
                >
                  Salvar
                </SaveButton>
              </div>
            </RouteForm>
          </ModalContent>
        </Modal>
      )}

      {routeDetails.map((e, index) => (
        <RouteCard
          key={index}
          {...e}
          onOpen={() => setModalValue({ ...e, index })}
        />
      ))}
    </Wrapper>
  );
}

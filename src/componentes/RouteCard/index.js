import React from "react";

import {
  CardInfos,
  DetailTitle,
  EditButton,
  FieldWrapper,
  Wrapper,
} from "./styles";
import { MdOutlineSpeed } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiRoadMapLine } from "react-icons/ri";
import { LiaCitySolid } from "react-icons/lia";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiRoadHorizon } from "react-icons/pi";

export default function RouteCard({
  address,
  uf,
  city,
  km,
  status,
  quality,
  onOpen,
  iframe,
}) {
  return (
    <Wrapper>
      <CardInfos>
        <FieldWrapper>
          <IoLocationOutline size={30} />
          <DetailTitle>Endereço:</DetailTitle>
          {address}
        </FieldWrapper>
        <FieldWrapper>
          <RiRoadMapLine size={30} />
          <DetailTitle>UF:</DetailTitle>
          {uf}
        </FieldWrapper>
        <FieldWrapper>
          <LiaCitySolid size={30} />
          <DetailTitle>Cidade:</DetailTitle>
          {city}
        </FieldWrapper>
        <FieldWrapper>
          <MdOutlineSpeed size={30} />
          <DetailTitle>Quilometragem:</DetailTitle>
          {km}
        </FieldWrapper>
        <FieldWrapper>
          <HiOutlineTruck size={30} />
          <DetailTitle>Status da Rota:</DetailTitle>
          {status}
        </FieldWrapper>
        <FieldWrapper>
          <PiRoadHorizon size={30} />
          <DetailTitle>Qualidade da Rota:</DetailTitle>
          {quality}
        </FieldWrapper>
        <EditButton onClick={onOpen}>Editar Rota</EditButton>
      </CardInfos>
      <iframe
        src={iframe}
        width="400"
        style={{
          border: 0,
          borderLeft: "solid 2px #b27202",
          height: "100%",
          outline: "none",
        }}
        title="MapaDoCard"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Wrapper>
  );
}

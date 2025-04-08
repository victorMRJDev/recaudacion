import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ValidacionFormTab } from "../tabs/ValidacionFormTab";
import { DomicilioContribuyente } from "../tabs/DomicilioContribuyente";
import { CambioDomicilio } from "../tabs/CambioDomicilio";
import { DatosGenerales } from "../tabs/DatosGenerales";
import { TipoMovimiento } from "../tabs/TipoMovimiento";
import { ObligacionesFiscales } from "../tabs/ObligacionesFiscales";
import { RepresentanteLegal } from "../tabs/RepresentanteLegal";

const tabs = [
  "Validación",
  "Domicilio de la Persona Contribuyente",
  "Cambio de Domicilio Fiscal",
  "Datos Generales",
  "Tipo de Movimiento",
  "Obligaciones Fiscales",
  "Representante Legal",
  "Datos del Vehículo",
  "Observaciones",
];
const tabComponents = [
  ValidacionFormTab,
  DomicilioContribuyente,
  CambioDomicilio,
  DatosGenerales,
  TipoMovimiento,
  ObligacionesFiscales,
  RepresentanteLegal,
];

export const AddPadron = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const tabRefs = useRef([]);

  const [sharedData, setSharedData] = useState({
    rfc: "",
    curp: "",
    nombreContribuyente: "",

    //DPMICILIO CONTRIBUYENTE
    calle: "",
    numExterior: "",
    numInterior: "",
    codPostal: "",
    colonia: "",
    entreCalle: "",
    yCalle: "",
    referenciAdicionales: "",
    geoLongitud: "",
    geoLatitud: "",
    localidad: "",
    municipio: "",

    //DATOS GENERALES
    nombreComercial: "",
    numeroEmpleados: "",
    actividadEconomica: "",
    correoElectronico: "",
    telefono: "",

    //SFA-01
    tipoMovimiento: "",
    fechaMovimiento: "",

    //Obligaciones Fiscales
    tipoObligacion: "",
    fechaObligacion: "",

    //Representante Legal
    nombreRepresentanteLegal: "",
    apellidoPaternoRepresentante: "",
    apellidoMaternoRepresentante: "",
    rfcRepresentante: "",
    correoElectronicoRepresentante: "",
    firmaRepresentante: "",
  });

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0];
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, []);

  return (
    <>
      <div className="m-4 flex flex-col gap-4">
        <h2 className="font-cascadiaMono-Regular text-sefi-letter text-5xl">
          SFA-01/ANEXO 1
        </h2>
        <h2 className="font-cascadiaMono text-sefi-letter  text-4xl">
          Solicitud de Inscripción y/o aviso de movimientos al Padrón de
          Contribuyentes de Impuestos Estatales
        </h2>
      </div>
      <div className={"flex justify-center w-full min-h-screen"}>
        <Card className="mx-auto  border-none shadow-none relative flex flex-col items-center">
          <CardContent className="p-0 ">
            <div className="relative">
              <div
                className="absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px] flex items-center"
                style={{
                  ...hoverStyle,
                  opacity: hoveredIndex !== null ? 1 : 0,
                }}
              />

              <div
                className="absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out"
                style={activeStyle}
              />

              <div className="relative flex space-x-[6px] items-center">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    ref={(el) => (tabRefs.current[index] = el)}
                    className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
                      index === activeIndex
                        ? "text-[#0e0e10] dark:text-white"
                        : "text-[#0e0f1199] dark:text-[#ffffff99]"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="text-[18px] font-[var(--www-mattmannucci-me-geist-regular-font-family)] leading-5 whitespace-nowrap flex items-center justify-center h-full">
                      {tab}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <div className="mt-12 w-3/3">
            {tabComponents[activeIndex] ? (
              React.createElement(tabComponents[activeIndex], {
                sharedData,
                setSharedData,
              })
            ) : (
              <div>No hay contenido para este tab.</div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

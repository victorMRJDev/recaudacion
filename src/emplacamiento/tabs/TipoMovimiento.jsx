import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const options = [
  "Alta al Padrón de Impuestos Estatales",
  "Apertura de Establecimientos Locales y/o Sucursales",
  "Reanudación de Actividades",
  "Aumento de Obligaciones Fiscales",
  "Disminución de Obligaciones",
  "Cambio de Domicilio Fiscal",
  "Correcciones de RFC, CURP, y Nombre, Denominacion o Razón Social",
  "Cierre de Establecimientos, Locales y/o Sucursales",
  "Suspensión de Actividades",
  "Baja por Defunción, Persona Física",
  "Baja por Liquidación, Quiebra o Fusión, Persona Moral",
  "Otros Movimientos al Padrón Vehicular (Requisitar SFA01/ANEXO 1)",
];

export const TipoMovimiento = ({ sharedData, setSharedData }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleClick = (index, option) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setSelectedDate(null);
      setSharedData({
        ...sharedData,
        tipoMovimiento: "",
        fechaMovimiento: "",
      });
    } else {
      const now = new Date().toLocaleString();
      setSelectedIndex(index);
      setSelectedDate(now);
      setSharedData({
        ...sharedData,
        tipoMovimiento: option,
        fechaMovimiento: now,
      });
    }
  };

  useEffect(() => {
    console.log("SharedData actual:", sharedData);
  }, [sharedData]);

  return (
    <>
      <div className="mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <React.Fragment key={index}>
              {/* Columna de opción */}
              <div>
                <Button
                  variant={selectedIndex === index ? "default" : "outline"}
                  onClick={() => handleClick(index, option)}
                  className={`w-full justify-start transition-colors duration-300 ${
                    selectedIndex === index ? "bg-sefi-quat text-white" : ""
                  } text-base md:text-xl`}
                >
                  {option}
                </Button>
              </div>
              {/* Columna de fecha */}
              <div className="flex items-center justify-center border rounded p-2">
                {selectedIndex === index && selectedDate ? (
                  <span className="text-sm">{selectedDate}</span>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    No seleccionado
                  </span>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex flex-row w-full justify-evenly">
        <Button className="w-1/3" type="submit">Continuar</Button>
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const options = [
  "Remuneraciones al Trabajo Personal (Impuestos Sobre Nómina)",
  "Prestación de Servicion de Hospedaje",
  "Ejercicio de la Profesión Médica y Otras Actividades no Subordinadas",
  "Diversiones, Espectaculos Publicos y Juegos Permitidos",
  "Loterías, Rifas, Sorteos y Concursos de toda clase de apuestas sobre Juegos Permitidos",
  "Instrumentos Públicos y Operaciones Contractuales",
  "Cedular por arrendamiento y en General por otorgar el uso o goce temporal de inmuebles",
  "Retenedores de Impuestos (ISRTP) (ISR) (ISAN)",
  "Impuesto Cedular a Casas de Empeño",
  "Impuesto Cedular por Servicios Notariales",
  "Impuestos Sobre Tenencia o Uso de Vehiculos (Requisitar SFA-01/ Anexo 1)",
];

export const ObligacionesFiscales = ({ sharedData, setSharedData }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleClick = (index, option) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setSelectedDate(null);
      setSharedData({
        ...sharedData,
        tipoObligacion: "",
        fechaObligacion: "",
      });
    } else {
      const now = new Date().toLocaleString();
      setSelectedIndex(index);
      setSelectedDate(now);
      setSharedData({
        ...sharedData,
        tipoObligacion: option,
        fechaObligacion: now,
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
        <Button className="w-1/3" type="submit">
          Continuar
        </Button>
      </div>
    </>
  );
};

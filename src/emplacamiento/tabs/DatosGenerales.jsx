import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const DatosGenerales = ({ sharedData, setSharedData }) => {
  return (
    <>
      <form className="gap-4 flex flex-col">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="nombreComercial"
              className="block text-sm font-medium"
            >
              Nombre Comercial
            </Label>
            <Input
              id="nombreComercial"
              type="text"
              placeholder="Ingrese el Nombre Comercial del Contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.nombreComercial}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  nombreComercial: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label
              htmlFor="numeroEmpleados"
              className="block text-sm font-medium"
            >
              Número de Empleados
            </Label>
            <Input
              id="numeroEmpleados"
              type="text"
              placeholder="Ingrese Número de Empleados"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.numeroEmpleados}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  numeroEmpleados: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="actividadEconomica"
            className="block text-sm font-medium"
          >
            Actividad Económica{" "}
          </Label>
          <Input
            id="actividadEconomica"
            type="text"
            placeholder="Ingrese Actividad Económica del Contribuyente"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={sharedData.actividadEconomica}
            onChange={(e) =>
              setSharedData({
                ...sharedData,
                actividadEconomica: e.target.value,
              })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="correoElectronico"
              className="block text-sm font-medium"
            >
              Correo Electrónico
            </Label>
            <Input
              id="correoElectronico"
              type="text"
              placeholder="Ingrese el Correo Electrónico del Contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.correoElectronico}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  correoElectronico: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="telefono" className="block text-sm font-medium">
              Teléfono{" "}
            </Label>
            <Input
              id="telefono"
              type="text"
              placeholder="Ingrese el Teléfono del Contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.telefono}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  telefono: e.target.value,
                })
              }
            />
          </div>
        </div>

        <Button type="submit">Continuar</Button>
      </form>
    </>
  );
};

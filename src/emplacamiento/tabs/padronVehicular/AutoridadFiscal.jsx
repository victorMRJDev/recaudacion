import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const AutoridadFiscal = ({
  sharedDataVehiculo,
  setSharedDataVehiculo,
}) => {
  return (
    <>
      <form action="" className="gap-4 flex flex-col">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="claveOficina" className="block text-sm font-medium">
              Clave de Oficina
            </Label>
            <Input
              id="claveOficina"
              type="text"
              placeholder="Ingrese el Nombre Comercial del Contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedDataVehiculo.claveOficina}
              onChange={(e) =>
                setSharedDataVehiculo({
                  ...sharedDataVehiculo,
                  claveOficina: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label
              htmlFor="claveVehicular"
              className="block text-sm font-medium"
            >
              Clave Vehicular
            </Label>
            <Input
              id="claveVehicular"
              type="text"
              placeholder="Ingrese Número de Empleados"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedDataVehiculo.claveVehicular}
              onChange={(e) =>
                setSharedDataVehiculo({
                  ...sharedDataVehiculo,
                  claveVehicular: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="claveServPublico"
              className="block text-sm font-medium"
            >
              Clave de Servicio Público
            </Label>
            <Input
              id="claveServPublico"
              type="text"
              placeholder="Ingrese el Nombre Comercial del Contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedDataVehiculo.claveServPublico}
              onChange={(e) =>
                setSharedDataVehiculo({
                  ...sharedDataVehiculo,
                  claveOficina: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="claveUso" className="block text-sm font-medium">
              Clave de Uso
            </Label>
            <Input
              id="claveUso"
              type="text"
              placeholder="Ingrese Número de Empleados"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedDataVehiculo.claveUso}
              onChange={(e) =>
                setSharedDataVehiculo({
                  ...sharedDataVehiculo,
                  claveUso: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="entidadOrigen"
              className="block text-sm font-medium"
            >
              Entidad de Origen{" "}
            </Label>
            <Input
              id="entidadOrigen"
              type="text"
              placeholder="Ingrese el Nombre Comercial del Contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedDataVehiculo.entidadOrigen}
              onChange={(e) =>
                setSharedDataVehiculo({
                  ...sharedDataVehiculo,
                  entidadOrigen: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="placAnterior" className="block text-sm font-medium">
              Placa Anterior
            </Label>
            <Input
              id="placAnterior"
              type="text"
              placeholder="Ingrese Número de Empleados"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedDataVehiculo.placAnterior}
              onChange={(e) =>
                setSharedDataVehiculo({
                  ...sharedDataVehiculo,
                  placAnterior: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <Label htmlFor="placActual" className="block text-sm font-medium">
            Placa Actual
          </Label>
          <Input
            id="placActual"
            type="text"
            placeholder="Ingrese el Nombre Comercial del Contribuyente"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={sharedDataVehiculo.placActual}
            onChange={(e) =>
              setSharedDataVehiculo({
                ...sharedDataVehiculo,
                placActual: e.target.value,
              })
            }
          />
        </div>

        <Button type="submit">Continuar</Button>
      </form>
    </>
  );
};

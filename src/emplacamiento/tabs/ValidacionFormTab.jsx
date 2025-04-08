import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ValidacionFormTab = ({ sharedData, setSharedData }) => {
  return (
    <>
      <form className="gap-4 flex flex-col items-center">
        <div className="w-2/3">
          <Label htmlFor="rfc" className="block text-sm font-medium">
            RFC
          </Label>
          <Input
            id="RFC"
            type="text"
            placeholder="Ingrese el RFC"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={sharedData.rfc}
            onChange={(e) =>
              setSharedData({ ...sharedData, rfc: e.target.value })
            }
          />
        </div>
        <div className="w-2/3">
          <Label htmlFor="curp" className="block text-sm font-medium">
            CURP
          </Label>
          <Input
            id="curp"
            type="text"
            placeholder="Ingrese la CURP del contribuyente"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={sharedData.curp}
            onChange={(e) =>
              setSharedData({ ...sharedData, curp: e.target.value })
            }
          />
        </div>
        <div className="w-2/3">
          <Label
            htmlFor="nombreContribuyente"
            className="block text-sm font-medium"
          >
            Nombre de la persona contribuyente, Denominación o Razón Social
          </Label>
          <Input
            id="nombreContribuyente"
            type="text"
            placeholder="Ingrese el nombre del contribuyente"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={sharedData.nombreContribuyente}
            onChange={(e) =>
              setSharedData({
                ...sharedData,
                nombreContribuyente: e.target.value,
              })
            }
          />
        </div>
        <Button className="w-1/3" type="submit">Enviar Validación</Button>
      </form>
    </>
  );
};

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"

export const CambioDomicilio = ({ sharedData, setSharedData }) => {
  return (
    <>
      <>
        <form className="gap-4 flex flex-col">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="calle" className="block text-sm font-medium">
                Calle
              </Label>
              <Input
                id="calle"
                type="text"
                placeholder="Ingrese la calle del contribuyente"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.calle}
                onChange={(e) =>
                  setSharedData({ ...sharedData, calle: e.target.value })
                }
              />
            </div>
            <div>
              <Label
                htmlFor="numExterior"
                className="block text-sm font-medium"
              >
                Número Exterior
              </Label>
              <Input
                id="numExterior"
                type="text"
                placeholder="Ingrese Número Exterior"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.numExterior}
                onChange={(e) =>
                  setSharedData({ ...sharedData, numExterior: e.target.value })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="numInterior"
                className="block text-sm font-medium"
              >
                Número Interior
              </Label>
              <Input
                id="numInterior"
                type="text"
                placeholder="Ingrese el Número Interior"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.numInterior}
                onChange={(e) =>
                  setSharedData({ ...sharedData, numInterior: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="codPostal" className="block text-sm font-medium">
                Código Postal
              </Label>
              <Input
                id="codPostal"
                type="text"
                placeholder="Ingrese el Código Postal"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.codPostal}
                onChange={(e) =>
                  setSharedData({ ...sharedData, codPostal: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <Label htmlFor="colonia" className="block text-sm font-medium">
              Colonia{" "}
            </Label>
            <Input
              id="colonia"
              type="text"
              placeholder="Ingrese el nombre del contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.colonia}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  colonia: e.target.value,
                })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="entreCalle" className="block text-sm font-medium">
                Entre Calle
              </Label>
              <Input
                id="entreCalle"
                type="text"
                placeholder="Ingrese la primer calle de referencia"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.entreCalle}
                onChange={(e) =>
                  setSharedData({ ...sharedData, entreCalle: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="yCalle" className="block text-sm font-medium">
                Y Calle
              </Label>
              <Input
                id="yCalle"
                type="text"
                placeholder="Ingrese la segunda calle de referencia"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.yCalle}
                onChange={(e) =>
                  setSharedData({ ...sharedData, yCalle: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="referenciAdicionales"
              className="block text-sm font-medium"
            >
              Referencias Adicionales
            </Label>
            <Textarea
              id="referenciAdicionales"
              type="text"
              placeholder="Ingrese el nombre del contribuyente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.referenciAdicionales}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  referenciAdicionales: e.target.value,
                })
              }
            />
          </div>

          <h3 className="font-cascadiaMono-Regular text-2xl">
            Georeferenciación
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="geoLongitud"
                className="block text-sm font-medium"
              >
                Longitud
              </Label>
              <Input
                id="geoLongitud"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.geoLongitud}
                onChange={(e) =>
                  setSharedData({ ...sharedData, geoLongitud: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="geoLatitud" className="block text-sm font-medium">
                Latitud
              </Label>
              <Input
                id="geoLatitud"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.geoLatitud}
                onChange={(e) =>
                  setSharedData({ ...sharedData, geoLatitud: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="localidad" className="block text-sm font-medium">
                Localidad
              </Label>
              <Input
                id="localidad"
                type="text"
                placeholder="Localidad del Contribuyente"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.localidad}
                onChange={(e) =>
                  setSharedData({ ...sharedData, localidad: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="municipio" className="block text-sm font-medium">
                Municipio
              </Label>
              <Input
                id="municipio"
                type="text"
                placeholder="Municipio de procedencia del contribuyente"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={sharedData.municipio}
                onChange={(e) =>
                  setSharedData({ ...sharedData, municipio: e.target.value })
                }
              />
            </div>
          </div>

          <Button type="submit">Continuar</Button>
        </form>
      </>
    </>
  );
};

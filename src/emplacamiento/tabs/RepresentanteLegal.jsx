import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const RepresentanteLegal = ({ sharedData, setSharedData }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureData, setSignatureData] = useState("");

  const startDrawing = (e) => {
    setIsDrawing(true);
    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const context = canvasRef.current.getContext("2d");
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const dataURL = canvasRef.current.toDataURL();
    setSignatureData(dataURL);
    setSharedData({ ...sharedData, firma: dataURL });
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureData("");
    setSharedData({ ...sharedData, firma: "" });
  };

  return (
    <>
      <form className="gap-4 flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label
              htmlFor="nombreRepresentanteLegal"
              className="block text-sm font-medium"
            >
              Nombre(s)
            </Label>
            <Input
              id="nombreRepresentanteLegal"
              type="text"
              placeholder="Nombre del representante legal"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.nombreRepresentanteLegal}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  nombreRepresentanteLegal: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label
              htmlFor="apellidoPaternoRepresentante"
              className="block text-sm font-medium"
            >
              Apellido Paterno
            </Label>
            <Input
              id="apellidoPaternoRepresentante"
              type="text"
              placeholder="Apellido Paterno del representante legal"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.apellidoPaternoRepresentante}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  apellidoPaternoRepresentante: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label
              htmlFor="apellidoMaternoRepresentante"
              className="block text-sm font-medium"
            >
              Apellido Materno
            </Label>
            <Input
              id="apellidoMaternoRepresentante"
              type="text"
              placeholder="Apellido Materno del representante legal"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.apellidoMaternoRepresentante}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  apellidoMaternoRepresentante: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="rfcRepresentante"
              className="block text-sm font-medium"
            >
              RFC del Representante Legal
            </Label>
            <Input
              id="rfcRepresentante"
              type="text"
              placeholder="Ingrese el RFC del Representante Legal"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.rfcRepresentante}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  rfcRepresentante: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label
              htmlFor="correoElectronicoRepresentante"
              className="block text-sm font-medium"
            >
              Correo Eléctronico del Representante Legal
            </Label>
            <Input
              id="correoElectronicoRepresentante"
              type="text"
              placeholder="Ingrese Correo Eléctronico del Representante Legal"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={sharedData.correoElectronicoRepresentante}
              onChange={(e) =>
                setSharedData({
                  ...sharedData,
                  correoElectronicoRepresentante: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col w-full items-center">
          <Label htmlFor="firma" className="block text-sm font-medium">
            Firma del Representante Legal
          </Label>
          <div className="mt-1 border border-gray-300 rounded-md w-[400px]">
            <canvas
              id="firma"
              ref={canvasRef}
              width={400}
              height={200}
              style={{ width: "400px", height: "200px" }}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseLeave={endDrawing}
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={clearSignature}
            className="mt-2 w-[200px]"
          >
            Limpiar Firma
          </Button>
        </div>
      </form>
    </>
  );
};

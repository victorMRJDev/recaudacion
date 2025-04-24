import PropTypes from "prop-types";
import { useEffect } from "react";

const HotelesForm = ({ form, setForm, editando, municipios, localidades }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (editando && localidades.length > 0 && municipios.length > 0) {
      // Encuentra el municipio correspondiente
      const localidadMatch = localidades.find(
        (l) => String(l.cve_loc) === String(editando.cve_loc)
      );
      const municipioEncontrado = localidadMatch
        ? String(localidadMatch.cve_mun)
        : "";

      setForm({
        ...editando,
        cve_loc: String(editando.cve_loc),
        cve_mun: municipioEncontrado,
        estacionamiento: String(editando.estacionamiento ?? ""),
      });
    } else if (!editando) {
      setForm({
        id: "",
        noOficio: "",
        adminAgenFiscal: "",
        nombre: "",
        email: "",
        fechaRegistro: "",
        edad: "",
      });
    }
  }, [editando, localidades, municipios]);

  const descargarPlantillaCSV = () => {
    const encabezados = [
      "id",
      "noOficio",
      "adminAgenFiscal",
      "nombre",
      "email",
      "fechaRegistro",
      "edad",
    ];

    const contenido = [encabezados]
      .map((fila) => fila.map((celda) => `"${celda}"`).join(","))
      .join("\n");

    const blob = new Blob(["\uFEFF" + contenido], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "plantilla_hoteles.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col space-y-6 w-full">
      {/* Tabs */}
      {editando ? (
        // Modo edición - sin tabs, solo formulario de edición
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {/* ID Hotel */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID Hotel
            </label>
            <input
              name="id"
              placeholder="ID "
              value={form.id}
              onChange={handleChange}
              disabled={!!editando} // 🔒 Bloqueado si estás editando
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          {/* Nombre del establecimiento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Establecimiento
            </label>
            <input
              name="noOficio"
              placeholder="Número de oficio"
              value={form.noOficio}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
        </div>
      ) : (
        // Modo normal - con tabs
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {/* ID Hotel */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Hotel
              </label>
              <input
                name="id"
                placeholder="ID "
                value={form.id}
                onChange={handleChange}
                disabled={!!editando} // 🔒 Bloqueado si estás editando
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>

            {/* Nombre del establecimiento */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Establecimiento
              </label>
              <input
                name="noOficio"
                placeholder="Número de oficio"
                value={form.noOficio}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>

            {/* Estacionamiento */}
          </div>
        </>
      )}
    </div>
  );
};

HotelesForm.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default HotelesForm;

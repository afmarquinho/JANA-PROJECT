import { XMarkIcon } from "@heroicons/react/16/solid";
import { VisitReport } from "../types/types";
import { useDispatch } from "react-redux";
import {
  deactiveViewReport,
  removeItem,
} from "../redux/tenders/visitReportSlice";

type Props = {
  report: VisitReport;
};

const ViewVisitReport: React.FC<Props> = ({ report }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(deactiveViewReport());
  };
  const handleDelete = (report: VisitReport) => {
    dispatch(removeItem(report));
    dispatch(deactiveViewReport());
  };

  return (
    <div className="w-11/12 max-w-3xl mx-auto p-2 md:py-4 px-8 relative">
      <button
        id="closeButton"
        className="absolute top-0 right-0"
        onClick={handleClose}
      >
        <XMarkIcon className="h-10 text-red-500" />
      </button>
      <h2 className="text-lg font-bold mb-2">Resúmen del Informe</h2>

      <h3>
        <span className="font-bold">Nombre del proyecto: </span>
        {report.name}
      </h3>
      <p>
        {" "}
        <span className="font-bold">Fecha de la visita: </span>
        {report.visitDate}
      </p>
      <p>
        <span className="font-bold">Fecha de entrega: </span>
        {report.dueDate}
      </p>
      <h4>
        <span className="font-bold">Cliente: </span> {report.customerName}
      </h4>
      <p>
        <span className="font-bold"> NIT: </span>
        {report.nit}
      </p>
      <p>
        <span className="font-bold">Ciudad: </span> {report.city}
      </p>
      <p>
        <span className="font-bold">Dirección: </span>
        {report.address}
      </p>

      <p>
        <span className="font-bold">Prioridad: </span>
        {report.priority}
      </p>
      <p>
        <span className="font-bold">Descripción: </span>
        <br />
        {report.description}
      </p>
      <p>
        <span className="font-bold">Mano de Obra</span>
      </p>
      <ul className="list-disc">
        {report.workforce.map((item, index) => (
          <li key={index}>
            {item.workForce} -- {item.workShift} Turnos
          </li>
        ))}
      </ul>
      <p>
        <span className="font-bold">Materiales</span>
      </p>
      <ul className="list-disc">
        {report.materials.map((item, index) => (
          <li key={index}>
            {" "}
            {item.material} -- {item.amount} {item.unit}
          </li>
        ))}
      </ul>

      <div className="flex justify-between py-2">
        <button className="font-bold">Editar</button>
        <button
          className="p-2 bg-gradient-to-b from-green-500 to-green-600
            rounded-md shadow-gray-400 shadow-md text-xs text-white"
        >
          Procesar
        </button>
        <button
          className="p-2 bg-gradient-to-b from-red-600 to-red-700
            rounded-md shadow-gray-400 shadow-md text-xs text-white"
          onClick={() => handleDelete(report)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ViewVisitReport;

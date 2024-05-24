import { SubmitHandler, useForm } from "react-hook-form";
import { VisitReport } from "../../types/types";
import ReportFliedForm from "./ReportFliedForm";
import { useEffect, useState } from "react";
import { workForce } from "../../types/types";
import { material } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../../redux/tenders/visitReportSlice";
import { RootState } from "../../redux/store";

const ReportForm: React.FC = () => {
  const [workForceArray, setWorkForceArray] = useState<workForce[]>([]);
  const [materialArray, setMaterialArray] = useState<material[]>([]);

  const dispatch = useDispatch();

  const { register, handleSubmit, setValue } = useForm<VisitReport>();
  const updatedReport = useSelector(
    (state: RootState) => state.visitReport.updatedReport
  );

  useEffect(() => {
     // ? Fill the form with updatedReport data
    if (updatedReport) {
      
      setValue("name", updatedReport.name);
      setValue("visitDate", updatedReport.visitDate);
      setValue("dueDate", updatedReport.dueDate);
      setValue("customerName", updatedReport.customerName);
      setValue("nit", updatedReport.nit);
      setValue("city", updatedReport.city);
      setValue("address", updatedReport.address);
      setValue("phoneNumber", updatedReport.phoneNumber);
      setValue("email", updatedReport.email);
      setValue("priority", updatedReport.priority);
      setValue("description", updatedReport.description);
      setWorkForceArray(updatedReport.workforce);
      setMaterialArray(updatedReport.materials);
    }

    return () => {
      
    };
  }, [updatedReport, setValue]);

  

  const onSubmit: SubmitHandler<VisitReport> = (data) => {
    data.workforce = workForceArray;
    data.materials = materialArray;
    data.id = uuidv4();
    dispatch(addItem(data));
  };

  return (
    <form
      action=""
      className="bg-white w-full max-w-2xl mx-auto mb-5 px-8 md:px-16 py-12 space-y-5 flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-center font-black text-customRed uppercase">
        Ingresar informe de visita
      </h2>
      <ReportFliedForm
        register={register}
        setWorkForceArray={setWorkForceArray}
        setMaterialArray={setMaterialArray}
        workForceArray={workForceArray}
        materialArray={materialArray}
        setValue={setValue}
      />
      <input
        type="submit"
        className="w-full max-w-40 p-2 bg-gradient-to-b from-red-500 to-red-600 hover:bg-gradient-to-b
        hover:from-gray-500 hover:to-gray-700
            rounded shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
            uppercase text-xs self-end"
        value={updatedReport ? "Editar":"Guardar"}
      />
    </form>
  );
};

export default ReportForm;

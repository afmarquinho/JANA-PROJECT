import { SubmitHandler, useForm } from "react-hook-form";
import { VisitReport } from "../../types/types";
import ReportFliedForm from "./ReportFliedForm";

const ReportForm: React.FC = () => {
  const { register, handleSubmit } = useForm<VisitReport>();
  const onSubmit: SubmitHandler<VisitReport> = (data) => {

    console.log(data)
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
      <ReportFliedForm register={register} />
      <input
        type="submit"
        className="w-full max-w-40 p-2 bg-gradient-to-b from-red-500 to-red-600 hover:bg-gradient-to-b
        hover:from-gray-500 hover:to-gray-700
            rounded-md shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
            uppercase text-xs md:text-base self-end"
        value="Guardar"
      />
    </form>
  );
};

export default ReportForm;
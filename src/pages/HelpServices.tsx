import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import { serviceList } from "../data/HelpServicesData";

const HelpServices = () => {
  return (
    <>
      <PageHeader name="ศูนย์ช่วยเหลือ" />
      <div className="bg-white w-3/4 mx-auto mt-10 mb-[10rem]">
        <p className="text-primary font-semibold text-3xl pt-10 text-center">
          ศูนย์แจ้งข้่อมูลคนหาย และหน่วยงานภาครัฐ
        </p>
        <hr className="w-1/2 mx-auto mt-4 bg-primary h-[0.2rem] opacity-70" />
        <div className="flex flex-wrap gap-8 justify-center items-center mx-auto py-8">
          {serviceList.map((person) => (
            <div className="overflow-hidden">
              <ServiceCard key={person.name} {...person} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HelpServices;

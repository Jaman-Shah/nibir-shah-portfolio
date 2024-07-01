import { Button, Dialog, DialogPanel } from "@headlessui/react";

export default function AdminModal({
  isModalOpen,
  setIsModalOpen,
  skills,
  setSkills,
  educations,
  setEducations,
  experiences,
  setExperiences,
  clickedOn,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    if (clickedOn === "Skills") {
      setSkills([...skills, title]);
    } else if (clickedOn === "Educations") {
      setEducations([...educations, title]);
    } else if (clickedOn === "Experiences") {
      setExperiences([...experiences, title]);
    }
    e.target.reset();
  };

  const handleRemove = (item) => {
    if (clickedOn === "Skills") {
      setSkills(skills.filter((skill) => skill !== item));
    } else if (clickedOn === "Educations") {
      setEducations(educations.filter((education) => education !== item));
    } else if (clickedOn === "Experiences") {
      setExperiences(experiences.filter((experience) => experience !== item));
    }
  };

  const mapBasedOnClicked = (items) => {
    return [...items].reverse().map((singleItem, index) => {
      return (
        <div
          className="relative border p-1 rounded-full flex justify-center items-center"
          key={index}
        >
          {singleItem.slice(0, 15) + "..."}
          <button
            onClick={() => handleRemove(singleItem)}
            className="absolute top-1 right-1 bg-red-600 px-1 rounded-full text-white"
          >
            x
          </button>
        </div>
      );
    });
  };

  const getItems = () => {
    if (clickedOn === "Skills") {
      return skills;
    } else if (clickedOn === "Educations") {
      return educations;
    } else if (clickedOn === "Experiences") {
      return experiences;
    }
    return [];
  };

  return (
    <>
      <Dialog
        open={isModalOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsModalOpen(false)}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-pink-400 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div>
                <div>
                  <h1 className="border-b border-black mb-4 text-center text-2xl font-bold pb-2">
                    Add {clickedOn}
                  </h1>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <input
                    type="text"
                    name="title"
                    className="p-2 mb-2"
                    required
                  />
                  <button type="submit" className="border p-2 mb-4">
                    Add {clickedOn}
                  </button>
                </form>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {mapBasedOnClicked(getItems())}
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-green-400 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Ok
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

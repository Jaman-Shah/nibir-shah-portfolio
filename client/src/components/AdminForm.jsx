import React, { useState } from "react";
import AdminModal from "./AdminModal";

const AdminForm = () => {
  // modal opening state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // skills state
  const [skills, setSkills] = useState([]);
  // educations state
  const [educations, setEducations] = useState([]);
  // experiences state
  const [experiences, setExperiences] = useState([]);
  // clicked on
  const [clickedOn, setClickedOn] = useState("");

  const handleModalOpen = (clickedOn) => {
    setIsModalOpen(true);
    setClickedOn(clickedOn);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image_url = form.image_url.value;
    const current_profession = form.current_profession.value;

    const profile = {
      name,
      image_url,
      current_profession,
      skills,
      educations,
      experiences,
    };

    console.log(profile);
  };
  return (
    <div>
      <form
        onSubmit={handleProfileSubmit}
        className="grid grid-cols-1 md:grid-cols-3"
      >
        <div className="p-2 mb-4">
          <label htmlFor="">
            <h1 className="font-bold text-xl text-center">Name</h1>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="h-12 w-full p-2 border border-blue-300 rounded-2xl"
            required
          />
        </div>
        <div className="p-2 mb-4">
          <label htmlFor="">
            <h1 className="font-bold text-xl text-center">Image Url</h1>
          </label>
          <input
            type="text"
            name="image_url"
            placeholder="Enter Your Name"
            className="h-12 w-full p-2 border border-blue-300 rounded-2xl"
            required
          />
        </div>

        <div className="p-2 mb-4">
          <label htmlFor="">
            <h1 className="font-bold text-xl text-center">
              Current Profession
            </h1>
          </label>
          <input
            type="text"
            name="current_profession"
            placeholder="Enter Current Profession Name"
            className="h-12 w-full p-2 border border-blue-300 rounded-2xl"
            required
          />
        </div>

        {/* array divs */}

        <div className="p-2 mb-4">
          <label htmlFor="">
            <h1 className="font-bold text-xl text-center">Add Skills</h1>
          </label>
          <div
            onClick={() => handleModalOpen("Skills")}
            className="h-12 w-full p-2 border cursor-pointer border-blue-300 rounded-2xl"
          >
            <h1 className="text-center">Add Skills({skills.length})</h1>
          </div>
        </div>
        <div className="p-2 mb-4">
          <label htmlFor="">
            <h1 className="font-bold text-xl text-center">Add Educations</h1>
          </label>
          <div
            onClick={() => handleModalOpen("Educations")}
            className="h-12 w-full p-2 border cursor-pointer border-blue-300 rounded-2xl"
          >
            <h1 className="text-center">Add Educations({educations.length})</h1>
          </div>
        </div>
        <div className="p-2 mb-4">
          <label htmlFor="">
            <h1 className="font-bold text-xl text-center">Add Experiences</h1>
          </label>
          <div
            onClick={() => handleModalOpen("Experiences")}
            className="h-12 w-full p-2 border cursor-pointer border-blue-300 rounded-2xl"
          >
            <h1 className="text-center">
              Add Experiences({experiences.length})
            </h1>
          </div>
        </div>
        <button className="p-2 bg-blue-300 rounded-xl">Update Profile</button>
      </form>
      <AdminModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        skills={skills}
        setSkills={setSkills}
        educations={educations}
        setEducations={setEducations}
        experiences={experiences}
        setExperiences={setExperiences}
        clickedOn={clickedOn}
      />
    </div>
  );
};

export default AdminForm;

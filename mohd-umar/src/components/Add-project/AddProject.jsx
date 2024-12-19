import { useState, useEffect } from "react";
import axios from "axios";
import ButtonComponent from "../UI/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const AddProject = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    image: null,
  });

  // Handle all Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Upload file change
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/projects/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(response.data.message);
      setFormData({ title: "", description: "", url: "", image: null });
      fetchProjects(); // Fetch updated project list
    } catch (error) {
      console.error("Error adding project", error);
      alert("Failed to add project.");
    }
  };


  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      alert("Project deleted successfully!");
      fetchProjects(); // Re-fetch projects to update the list
    } catch (error) {
      console.error("Error deleting project", error);
      alert("Failed to delete the project!");
    }
  };

  return (
    <div className=" grid grid-cols-12 grid-flow-col  bg-transparent min-h-screen w-11/12 md:9/12 lg:w-9/12 mx-auto pt-20">
      <div className="grid col-span-5 place-items-center backdrop-blur-sm p-8 rounded-lg shadow-md ">
        <div>
          <h1 className="text-3xl font-bold text-sky-500 text-center mb-6">
            Add <span className="text-sky-500">Project</span>
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-sky-500 mb-2"
                >
                  Title:
                </label>
                <input
                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-sky-500 mb-2"
                >
                  URL:
                </label>
                <input
                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-sky-500 mb-2"
              >
                Description:
              </label>
              <textarea
                className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
              <div>
                <label className="form-control w-full max-w-xs">
                  <input
                    onChange={handleFileChange}
                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500 
      file-input file-input-bordered file:bg-sky-500 file:text-white file:border-none file:rounded-lg max-w-xs"
                    type="file"
                    name="image"
                  />
                </label>
              </div>
              <ButtonComponent
                type="submit"
                width="100%"
                bg="white"
                color="#0284c7"
              >
                Add project
              </ButtonComponent>
            </div>
          </form>
        </div>
      </div>

      <div className="grid  col-span-7">
        <h1 className="  text-3xl font-bold text-sky-500 text-center mb-6">
          Project <span className="text-sky-500">List</span>
        </h1>
        <div className="overflow-x-auto ">
          <table className="table-auto border-collapse border border-sky-500 w-full">
            <thead>
              <tr className="bg-sky-500 text-white">
                <th className="border border-sky-600 px-4 py-2">Title</th>
                <th className="border border-sky-600 px-4 py-2">Description</th>
                <th className="border border-sky-600 px-4 py-2">URL</th>
                <th className="border border-sky-600 px-4 py-2">IMAGE</th>
                <th className="border border-sky-600 px-4 py-2">DELETE</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {/* Check if the projects array is empty */}
              {projects.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="border border-sky-600 px-4 py-2 text-center text-red-500 font-bold"
                  >
                    Projects are empty!
                  </td>
                </tr>
              ) : (
                // If projects exist, map through them and display the list
                projects.map((project) => (
                  <tr
                    key={project._id}
                    className="hover:bg-sky-100 even:bg-gray-50 odd:bg-white transition-all"
                  >
                    <td className="border border-sky-600 px-4 py-2 text-center">
                      {project.title}
                    </td>
                    <td className="border border-sky-600 px-4 py-2 text-center">
                      {project.description}
                    </td>
                    <td className="border border-sky-600 px-4 py-2 text-center">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:underline"
                      >
                        {project.url}
                      </a>
                    </td>
                    <td className=" w-full h-32 border border-sky-600 px-4 py-2  text-center">
                      {project.image && (
                        <img
                          src={`http://localhost:5000${project.image}`}
                          alt={project.title}
                          className="w-20 h-20  rounded-full"
                        />
                      )}
                    </td>
                    <td className="border border-sky-600 px-4 py-2 text-center">
                      <IconButton
                        onClick={() => deleteProject(project._id)}
                        color="error"
                        aria-label="delete"
                        className="mt-4"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

import React, { useEffect, useState, type KeyboardEvent } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  Bs1Square,
  Bs2Square,
  Bs3Square,
  Bs4Square,
  Bs5Square,
  Bs6Square,
  Bs7Square,
  BsLink,
  BsCardText,
  BsCurrencyDollar,
  BsFillTrash3Fill,
} from "react-icons/bs";
import { toast } from "react-toastify";

type EditProductFormProps = {
  recordId: string;
};

// type Record = {
//   _id: string;
//   userId: string;
//   title: string;
//   category: string;
//   company: string;
//   url: string;
//   type: string;
//   status: string;
//   city: string;
//   state: string;
//   country: string;
//   description: string;
//   createdAt: string;
//   skills: string[];
//   salary: number;
//   hourly: number;
// };

const EditProductForm = (props: EditProductFormProps) => {
  const navigate = useNavigate();

  const { user } = useUser();

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const [form, setForm] = useState({
    _id: props.recordId,
    userId: user?.id,
    title: "Sample Job Title",
    category: "Sample",
    company: "Sample Company",
    type: "remote",
    url: "www.samplejob.com/careers",
    city: "New York",
    state: "New York",
    country: "United States",
    description:
      "This is a sample job description for a non-existent job application. This is for testing purposes only.",
    hourly: 25.0,
    salary: 75000.0,
    skills: ["sample 1", "sample 2", "sample 3", "sample 4"],
  });

  const fetchRecord = async () => {
    const res = await fetch(
      `http://localhost:3000/api/record/${props.recordId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    const recordData = data.record;
    console.log("recordData:", recordData);
    setForm({
      _id: recordData.id,
      userId: recordData.userId,
      title: recordData.title,
      category: recordData.category,
      company: recordData.company,
      type: recordData.type,
      url: recordData.url,
      hourly: recordData.hourly,
      salary: recordData.salary,
      skills: recordData.skills,
    });
    // setRecord({ ...recordData });
    // console.log("record:", record);
    // setForm({ ...recordData });
    // console.log("form:", form);

    return recordData;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "ShiftRight" && skill.trim()) {
      setSkills([...skills, skill.trim()]);
      setSkill("");
    }
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setSkills(skills.filter((s) => s !== skillToDelete));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedForm = {
      ...form,
      skills: skills,
    };

    try {
      const res = await fetch(
        `http://localhost:3000/api/record/${props.recordId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify(form),
          body: JSON.stringify(updatedForm),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error("Record update failed.", {
          autoClose: 3000,
          theme: "dark",
        });
        throw new Error(data.message || "Record update failed.");
      }

      toast.success("Record update successful.", {
        autoClose: 3000,
        theme: "dark",
      });

      //   login(data.token, data.user);

      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <section className="w-full bg-zinc-800 p-8 h-[80vh] flex justify-center items-center">
      <div className="w-full bg-zinc-900 h-full p-16">
        <h1 className="text-5xl text-zinc-300">
          Edit Your Job Application Record
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border-2 border-zinc-700 rounded-md bg-zinc-900 h-[60vh] mt-8 shadow-2xl"
        >
          <div className="flex items-center justify-center p-4 gap-16">
            <div className="flex items-center gap-4 text-amber-500 text-xl border-b-2 border-amber-500 py-4">
              <Bs1Square size={36} />
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={form.title}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-4 text-amber-500 text-xl border-b-2 border-amber-500 py-4">
              <Bs2Square size={36} />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-4 text-amber-500 text-xl border-b-2 border-amber-500 py-4">
              <Bs3Square size={36} />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={form.company}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-4 text-amber-500 text-xl border-b-2 border-amber-500 py-4">
              <Bs4Square size={36} />
              <input
                type="text"
                name="type"
                placeholder="Type"
                value={form.type}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <div className="flex items-center gap-4 text-amber-500 text-xl mt-4 border-b-2 border-amber-500 py-4">
              <BsLink size={36} />
              <input
                type="text"
                name="url"
                placeholder="URL"
                value={form.url}
                onChange={handleChange}
                className="w-[1350px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-4 gap-16">
            <div className="flex items-center gap-4 text-amber-500 text-xl border-b-2 border-amber-500 py-4">
              <Bs5Square size={36} />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-4 text-amber-500 text-xl border-b-2 border-amber-500 py-4">
              <Bs6Square size={36} />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-4 text-amber-500 text-xl border-b-2 border-amber-500 py-4">
              <Bs7Square size={36} />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <div className="flex items-center gap-4 text-amber-500 text-xl mt-4 border-b-2 border-amber-500 py-4">
              <BsCardText size={36} />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-[1350px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-4 gap-16">
            <div className="flex items-center gap-4 text-amber-500 text-xl mt-4 border-b-2 border-amber-500 py-4">
              <BsCurrencyDollar size={36} />
              <input
                type="number"
                name="hourly"
                placeholder="$/hr"
                value={form.hourly}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-4 text-amber-500 text-xl mt-4 border-b-2 border-amber-500 py-4">
              <BsCurrencyDollar size={36} />
              <input
                type="number"
                name="salary"
                placeholder="$/yr"
                value={form.salary}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
          </div>
          <div className="p-4 w-[1350px] mx-auto mt-4">
            <div className="flex items-center justify-between">
              <div className="border-b-2 border-amber-500 py-4">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter skill [ENTER]"
                  className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md text-amber-500"
                />
              </div>
              <div className="border-2 border-amber-500 w-[1000px] h-[50px] flex items-center justify-between px-4">
                <h1 className="text-zinc-300 uppercase">Skills:</h1>
                <div className="flex items-center gap-4">
                  {skills.map((skill, index) => (
                    <div className="rounded-md border-1 border-amber-500 px-2 py-1 overflow-x-scroll flex items-center gap-2 hover:bg-amber-500 text-zinc-900 transition-all">
                      <p key={index} className="text-sm text-amber-500">
                        {skill}
                      </p>
                      <BsFillTrash3Fill
                        onClick={() => handleDeleteSkill(skill)}
                        className="text-rose-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-16">
            <button
              type="submit"
              className="outline-nont px-2 py-1 w-[1000px] text-lg font-semibold text-amber-500 uppercase border-2 border-amber-500 rounded-md hover:bg-amber-500 hover:text-zinc-900 transition-all"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProductForm;

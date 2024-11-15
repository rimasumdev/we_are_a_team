import {
  FaUser,
  FaRunning,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaRulerVertical,
} from "react-icons/fa";
import { MdBloodtype, MdScale } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const AddProfiles = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const playerName = form.playerName.value;
    const position = form.position.value;
    const dateOfBirth = form.dateOfBirth.value;
    const registrationDate = form.registrationDate.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const bloodGroup = form.bloodGroup.value;
    const heightFeet = form.heightFeet.value;
    const heightInch = form.heightInch.value;
    const weight = form.weight.value;
    const address = form.address.value;
    const profileData = {
      playerName,
      position,
      dateOfBirth,
      registrationDate,
      email,
      phoneNumber,
      bloodGroup,
      height: `${heightFeet}'${heightInch}"`,
      weight,
      address,
    };

    console.log(profileData);
  };
  return (
    <div className="flex items-center justify-center px-4 lg:px-0 py-4 lg:pt-10 lg:pb-20">
      <div className="card w-full max-w-3xl shadow-2xl bg-base-100 shadow-gray-500/10 border border-primary/20">
        <div className="card-body">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-1">
              Create Your Winning Profile
            </h2>
            <p className="text-gray-500 mt-2">
              Create a new player profile by filling out the form below
            </p>
            <div className="divider max-w-xs mx-auto">
              <FaUser className="text-primary" />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Basic Information</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaUser /> Name
                  </span>
                </label>
                <input
                  type="text"
                  name="playerName"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaRunning /> Position
                  </span>
                </label>
                <select
                  name="position"
                  className="select select-bordered"
                  required
                >
                  <option value="">Select your playing position</option>
                  <option>Striker</option>
                  <option>Center Forward</option>
                  <option>Winger</option>
                  <option>Attacking Midfielder</option>
                  <option>Central Midfielder</option>
                  <option>Defensive Midfielder</option>
                  <option>Center Back</option>
                  <option>Full Back</option>
                  <option>Goalkeeper</option>
                </select>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <FaCalendarAlt /> Date of Birth
                    </span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="input input-bordered w-full"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <FaCalendarAlt /> Registration Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="registrationDate"
                    className="input input-bordered w-full"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Contact Information</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaEnvelope /> Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaPhone /> Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+880 1XXX-XXXXXX"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Physical Information */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Physical Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <MdBloodtype /> Blood Group
                    </span>
                  </label>
                  <select
                    name="bloodGroup"
                    className="select select-bordered"
                    required
                  >
                    <option value="">Select Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <FaRulerVertical /> Height
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="heightFeet"
                      className="select select-bordered flex-1"
                      required
                    >
                      <option value="">Feet</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                    <select
                      name="heightInch"
                      className="select select-bordered flex-1"
                      required
                    >
                      <option value="">Inch</option>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                    </select>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <MdScale /> Weight (kg)
                    </span>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    placeholder="70"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Address</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <IoLocation /> Current Address
                  </span>
                </label>
                <textarea
                  name="address"
                  className="textarea textarea-bordered"
                  placeholder="Enter your complete address"
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfiles;

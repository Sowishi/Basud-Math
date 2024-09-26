import { Button, Spinner } from "flowbite-react";
import AdminLayout from "../layout/adminLayout";
import { useEffect, useState } from "react";
import TmsModal from "../components/tmsModal";
import TmsInput from "../components/tmsInput";
import TmsSelect from "../components/tmsSelect";
import useCrudTournament from "../hooks/useCrudTournament";
import { toast } from "react-toastify";
import TournamentCard from "../components/tournamentCard";
import useGetEventName from "../hooks/useGetEventName";

const AdminTournament = ({ client }) => {
  const [createModal, setCreateModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState();
  const { addTournament, data, deleteTournament, loading } =
    useCrudTournament();
  const { data: eventNames } = useGetEventName();
  const [selectedEvent, setSelectedEvent] = useState("all");

  const [forms, setForms] = useState({
    tournamentName: "",
    tournamentEvent: "RSCUAA",
    tournamentType: "single elimination",
    startAt: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    const output = { ...forms, [name]: value };
    setForms(output);
  };

  const handleAddTournament = async () => {
    const res = await addTournament(forms);
    if (res.error) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message);
    setCreateModal(false);
    window.location.reload();
  };

  const filterEvent = eventNames.map((item) => {
    return item.eventName;
  });

  const filterTournament = data.filter((item) => {
    if (selectedEvent == "all") {
      return item;
    }

    if (item.tournament.description == selectedEvent) {
      return item;
    }
  });

  return (
    <AdminLayout client={client}>
      <TmsModal
        onSubmit={handleAddTournament}
        title={"Create Tournament"}
        openModal={createModal}
        handleClose={() => {
          setCreateModal(false);
        }}
      >
        <form>
          <TmsInput
            placeHolder={"Enter Tournament Name"}
            name={"tournamentName"}
            onChange={handleChange}
            label={"Tournament Name"}
            dark={true}
          />
          <TmsInput
            name={"startAt"}
            type={"datetime-local"}
            onChange={handleChange}
            label={"Tournament Start"}
            dark={true}
          />
          <TmsSelect
            name={"tournamentType"}
            onChange={handleChange}
            data={["single elimination", "double elimination", "swiss"]}
            label={"Tournament Type"}
            dark={true}
          />
          <TmsSelect
            dark
            label={"Tournament Event"}
            name={"tournamentEvent"}
            data={filterEvent}
            onChange={handleChange}
          />
        </form>
      </TmsModal>

      <div className="container  mx-auto my-10">
        {!client && (
          <div className="wrapper flex justify-between items-center">
            <h1 className="text-white text-4xl font-bold mb-5">Tournament</h1>
            <Button onClick={() => setCreateModal(true)}>
              Create Tournament
            </Button>
          </div>
        )}

        <div className="container mx-auto mt-5">
          <div className="wrapper flex mb-3 py-3">
            <Button
              color={selectedEvent == "all" ? "info" : "gray"}
              onClick={() => setSelectedEvent("all")}
              className="mx-3"
            >
              All
            </Button>
            {eventNames.map((event) => {
              return (
                <Button
                  key={event.id}
                  color={selectedEvent == event.eventName ? "info" : "gray"}
                  className="mx-3"
                  onClick={() => setSelectedEvent(event.eventName)}
                >
                  {event.eventName}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap">
          {loading && (
            <>
              <div className="flex justify-center items-center w-full p-20">
                <Spinner size={"lg"} />
              </div>
            </>
          )}
          {!loading &&
            filterTournament.map((item) => {
              return (
                <div key={item} className="basis-3/12 my-5 p-5">
                  <TournamentCard
                    client={client}
                    deleteTournament={deleteTournament}
                    setShowModal={setShowModal}
                    setSelectedTournament={setSelectedTournament}
                    tournament={item}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTournament;

import Link from "next/link";
import { IMeetups } from "../api/meetups/route";

async function getMeetups() {
  const response = await fetch("http://localhost:3000/api/meetups");
  if (!response) {
    throw new Error("Failed to load meetups");
  }
  return response.json();
}

const Meetups = async () => {
  const meetups = await getMeetups();
  return (
    <div className="meetups">
      {meetups.map((meetup: IMeetups) => (
        <div key={meetup.id} className="card">
          <Link className="link-title" target="_blank" href={meetup.link}>
            <h2>{meetup.name}</h2>
          </Link>
          <h3>Category: {meetup.category}</h3>
        </div>
      ))}
    </div>
  );
};

export default Meetups;

import Link from "next/link";
import { ICommunity } from "../api/community/route";

async function getCommunity() {
  const response = await fetch("http://localhost:3000/api/community");
  if (!response) {
    throw new Error("Failed to load Suzana&apos;s tech community groups");
  }
  return response.json();
}

const Community = async () => {
  const groups = await getCommunity();
  return (
    <div className="meetups">
      {groups.map((group: ICommunity) => (
        <div key={group.id} className="card">
          <h2>{group.name}</h2>
          <h3>Category: {group.category}</h3>
          <Link href={group.link} target="_blank" className="btn">
            Go to this Meetup page
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Community;

import Meetups from "../components/Meetups";
import Community from "../components/Community";

export const metadata = {
  title: "Tech Community",
};

const CommunityPage = () => {
  return (
    <div>
      <h1>My tech community </h1>
      <Community />
      <h1>Other great meetups groups in Auckland</h1>
      <Meetups />
    </div>
  );
};

export default CommunityPage;

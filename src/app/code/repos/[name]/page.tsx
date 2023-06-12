import Repo from "@/app/components/Repo";
import Link from "next/link";

export interface IParams {
  params: {
    name: string;
  };
}

const RepoPage = ({ params: { name } }: IParams) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to the repositories
      </Link>
      <Repo name={name} />
    </div>
  );
};

export default RepoPage;
